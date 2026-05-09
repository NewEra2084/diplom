package com.srt.CRMBackend.services.project.impl;

import com.srt.CRMBackend.DTO.RoleEnum;
import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.DTO.project.UpdateProjectRequest;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ProjectMapper;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import com.srt.CRMBackend.repositories.tasks.ProjectRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.domain.EmployeeDomainService;
import com.srt.CRMBackend.services.project.ProjectService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectServiceImpl implements ProjectService {
    private final ProjectRepository repository;
    private final ProjectMapper projectMapper;

    private final EmployeeDomainService employeeDomainService;
    private final CompanyDomainService companyDomainService;
    private final AuthHelperUtil authHelperUtil;

    @Override
    public void create(AddProjectRequest request) {
        if (repository.existsByNameAndCompany(request.getName(), companyDomainService.getCompanyReference())) {
            throw new CrmBadRequestException("such name already taken");
        }

        Company company = companyDomainService.getCompanyReference();
        Employee manager = employeeDomainService.getReferenceIfExistsByIdAndRoleAndCompany(
                request.getManagerId(),
                RoleEnum.ROLE_MANAGER,
                company
        );

        Project project = projectMapper.toEntity(request);
        project.setManager(manager);
        project.setCompany(company);

        repository.save(project);
    }

    @Override
    public void update(UpdateProjectRequest request) {
        Project project = repository.findById(request.getId())
                .orElseThrow(() -> new CrmBadRequestException("such project not found"));

        if (repository.existsByNameAndCompany(request.getName(), companyDomainService.getCompanyReference())) {
            throw new CrmBadRequestException("such name already taken");
        }

        Employee manager = employeeDomainService.getReferenceIfExistsByIdAndRoleAndCompany(
                request.getManagerId(),
                RoleEnum.ROLE_MANAGER,
                companyDomainService.getCompanyReference()
        );

        project.setName(request.getName());
        project.setDescription(request.getDescription());
        project.setManager(manager);

        repository.save(project);
    }

    @Override
    public void delete(UUID id) {
        Project project = repository.findById(id)
                .orElseThrow(() -> new CrmBadRequestException("such project not found"));
        repository.delete(project);
    }

    @Override
    public List<ProjectResponse> getAll() {
        if (authHelperUtil.hasRole(RoleEnum.ROLE_EMPLOYEE)) {
            Employee employee = employeeDomainService.getByIdWithProjects(authHelperUtil.getEmployee().getId());

            return repository.findAllByCompany(companyDomainService.getCompanyReference()).stream()
                    .map(p -> {
                        var res = projectMapper.toResponse(p);
                        res.setCanTake(employee.getProjects().contains(p));
                        return res;
                    })
                    .toList();
        } else {
            return repository.findAllByCompany(companyDomainService.getCompanyReference()).stream()
                    .map(projectMapper::toResponse)
                    .toList();
        }
    }

    @Override
    public List<ProjectResponse> getAllWithTasks() {
        if (authHelperUtil.hasRole(RoleEnum.ROLE_EMPLOYEE)) {
            return repository.findAllWithTasksAndCategoriesByCompanyAndTasks_status(companyDomainService.getCompanyReference(), TaskStatus.FREE).stream()
                    .map(projectMapper::toResponse)
                    .toList();
        }
        return repository.findAllWithTasksAndCategoriesByCompany(companyDomainService.getCompanyReference()).stream()
                .map(projectMapper::toResponse)
                .toList();
    }
}
