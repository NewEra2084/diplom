package com.srt.CRMBackend.services.impl;

import com.srt.CRMBackend.DTO.admin.QualificationDTO;
import com.srt.CRMBackend.DTO.admin.QualificationResponse;
import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import com.srt.CRMBackend.DTO.employee.JobTitleDTO;
import com.srt.CRMBackend.DTO.project.PinEmployeeToProjectRequest;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.repositories.employee.JobTitleRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeService;
import com.srt.CRMBackend.services.ManagerService;
import com.srt.CRMBackend.services.employee.domain.EmployeeDomainService;
import com.srt.CRMBackend.services.project.ProjectDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ManagerServiceImpl implements ManagerService {
    private final JobTitleRepository jobTitleRepository;
    private final EmployeeService employeeService;

    private final CompanyDomainService companyDomainService;
    private final EmployeeDomainService employeeDomainService;
    private final ProjectDomainService projectDomainService;
    private final AuthHelperUtil authHelperUtil;

    @Override
    public List<QualificationResponse> getAllQualifications() {
        return jobTitleRepository.findAllByCompanyWithQualification(
                companyDomainService.getCompanyReference()).stream()
                .map(jt -> QualificationResponse.builder()
                        .id(jt.getId())
                        .name(jt.getName())
                        .qualifications(jt.getQualifications().stream()
                                .map(q -> new QualificationDTO(q.getId(), q.getName()))
                                .toList()
                        )
                        .build()
                )
                .toList();
    }

    @Override
    public List<JobTitleDTO> getAllJobTitles() {
        return jobTitleRepository.findAllByCompany(companyDomainService.getCompanyReference()).stream()
                .map((jt) -> JobTitleDTO.builder()
                        .id(jt.getId())
                        .name(jt.getName())
                        .description(jt.getDescription()).build())
                .toList();
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @Override
    @Transactional
    public void pinEmployeeToProject(PinEmployeeToProjectRequest request) {
        Company company = companyDomainService.getCompanyReference();
        Employee manager = authHelperUtil.getEmployee();

        Employee employee = employeeDomainService.getByIdAndCompanyWithProjects(
                request.getEmployeeId(), company);
        Project project = projectDomainService.getReferenceIfExistsByIdAndCompany(
                request.getProjectId(), company);

        if (!project.getManager().getId()
                .equals(manager.getId())) {
            throw new CrmBadRequestException("прикреплять к сотрудника к проекту может только проектный менеджер");
        }

        employee.getProjects().add(project);
    }

    @Override
    @Transactional
    public void unpinEmployeeToProject(PinEmployeeToProjectRequest request) {
        Company company = companyDomainService.getCompanyReference();
        Employee manager = authHelperUtil.getEmployee();

        Employee employee = employeeDomainService.getByIdAndCompanyWithProjects(
                request.getEmployeeId(), company);
        Project project = projectDomainService.getReferenceIfExistsByIdAndCompany(
                request.getProjectId(), company);

        if (!project.getManager().getId()
                .equals(manager.getId())) {
            throw new CrmBadRequestException("откреплять сотрудника к проекту может только проектный менеджер");
        }

        employee.getProjects().remove(project);
    }
}
