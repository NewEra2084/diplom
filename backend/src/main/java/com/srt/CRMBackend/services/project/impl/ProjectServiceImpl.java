package com.srt.CRMBackend.services.project.impl;

import com.srt.CRMBackend.DTO.RoleEnum;
import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.DTO.project.UpdateProjectRequest;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ProjectMapper;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.repositories.tasks.ProjectRepository;
import com.srt.CRMBackend.services.employee.domain.EmployeeDomainService;
import com.srt.CRMBackend.services.project.ProjectService;
import jakarta.transaction.Transactional;
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

    @Override
    public void create(AddProjectRequest request) {
        if (repository.existsByName(request.getName())) {
            throw new CrmBadRequestException("such name already taken");
        }
        Employee manager = employeeDomainService.getReferenceIfExistsByIdAndRole(
                request.getManagerId(),
                RoleEnum.ROLE_MANAGER
        );
        Project project = projectMapper.toEntity(request);
        project.setManager(manager);
        repository.save(project);
    }

    @Override
    public void update(UpdateProjectRequest request) {
        Project project = repository.findById(request.getId())
                .orElseThrow(() -> new CrmBadRequestException("such project not found"));
        if (repository.existsByName(request.getName())) {
            throw new CrmBadRequestException("such name already taken");
        }
        Employee manager = employeeDomainService.getReferenceIfExistsById(request.getManagerId());
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
        return repository.findAll().stream()
                .map(projectMapper::toResponse)
                .toList();
    }
}
