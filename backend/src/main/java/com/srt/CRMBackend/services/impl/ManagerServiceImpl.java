package com.srt.CRMBackend.services.impl;

import com.srt.CRMBackend.DTO.admin.QualificationDTO;
import com.srt.CRMBackend.DTO.admin.QualificationResponse;
import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import com.srt.CRMBackend.DTO.employee.JobTitleDTO;
import com.srt.CRMBackend.mappers.JobTitleMapper;
import com.srt.CRMBackend.repositories.employee.JobTitleRepository;
import com.srt.CRMBackend.repositories.employee.QualificationRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeService;
import com.srt.CRMBackend.services.ManagerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ManagerServiceImpl implements ManagerService {
    private final JobTitleRepository jobTitleRepository;
    private final EmployeeService employeeService;

    private final CompanyDomainService companyDomainService;

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
}
