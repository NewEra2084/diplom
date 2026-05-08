package com.srt.CRMBackend.services.impl;

import com.srt.CRMBackend.DTO.admin.AddEmployeeRequest;
import com.srt.CRMBackend.DTO.admin.AddQualificationRequest;
import com.srt.CRMBackend.DTO.admin.JobTitleRequest;
import com.srt.CRMBackend.DTO.employee.UpdateEmployeeRequest;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.exceptions.admin.ValidationException;
import com.srt.CRMBackend.exceptions.admin.ValidationOneFieldException;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.*;
import com.srt.CRMBackend.repositories.employee.*;
import com.srt.CRMBackend.repositories.tasks.RequestRepository;
import com.srt.CRMBackend.services.AdminService;
import com.srt.CRMBackend.services.PointDomainService;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
@RequiredArgsConstructor
public class AdminServiceImpl implements AdminService {
    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final QualificationRepository qualificationRepository;
    private final JobTitleRepository jobTitleRepository;
    private final PointRepository pointRepository;
    private final RequestRepository requestRepository;
    private final CompanyDomainService companyDomainService;
    private final AuthHelperUtil authHelperUtil;
    private final PointDomainService pointDomainService;

    @Override
    public void addEmployee(AddEmployeeRequest request) {
        validateAddEmployee(request);

        Qualification qualification = null;

        if (request.getQualificationId() != null) {
            qualification = qualificationRepository
                    .findById(request.getQualificationId())
                    .orElseThrow(() -> new ValidationException(
                            Map.of("qualification", "неверный идентификатор квалификации"))
                    );
        }

        Company company = companyDomainService.getReferenceById(
                authHelperUtil.getEmployee().getCompany().getId()
        );

        FullName fullName = FullName.builder()
                .firstName(request.getFirstName())
                .lastName(request.getLastName())
                .patronymic(request.getPatronymic()).build();

        Employee employee = Employee.builder()
                .login(request.getLogin())
                .email(request.getEmail())
                .fullName(fullName)
                .password(passwordEncoder.encode(request.getPassword()))
                .qualification(qualification)
                .company(company)
                .roles(Set.of(roleRepository.getByName(request.getRole()))).build();
        employeeRepository.save(employee);

        pointDomainService.createDefault(employee);
    }

    @Override
    public void addJobTitle(JobTitleRequest request) {
        Company company = companyDomainService.getReferenceById(
                authHelperUtil.getEmployee().getCompany().getId());

        if (jobTitleRepository.existsByNameAndCompany(request.getName(), company)) {
            throw new ValidationException(
                    Map.of("name", "такая должность уже существует")
            );
        }

        JobTitle jobTitle = JobTitle.builder()
                .name(request.getName())
                .description(request.getDescription())
                .company(company)
                .build();
        jobTitleRepository.save(jobTitle);
    }

    @Override
    public void addQualification(AddQualificationRequest request) {
        JobTitle jobTitle = jobTitleRepository.findById(request.getJobTitleId())
                .orElseThrow(() -> new ValidationOneFieldException("передан неверный идентификатор"));

        if (qualificationRepository.existsByJobTitleAndName(jobTitle, request.getQualificationName())) {
            throw new ValidationOneFieldException("название должно быть уникально");
        }

        Qualification qualification = Qualification.builder()
                .name(request.getQualificationName())
                .jobTitle(jobTitle).build();

        qualificationRepository.save(qualification);
    }

    @Override
    public void deleteJobTitle(UUID id) {
        if (qualificationRepository.existsByJobTitleId(id)) {
            throw new ValidationOneFieldException("для удаления должности необходимо удалить зависящие квалификации");
        }
        jobTitleRepository.deleteById(id);
    }

    @Override
    public void deleteQualification(UUID id) {
        if (employeeRepository.existsByQualificationId(id)) {
            throw new ValidationOneFieldException("для удаления квалификации необходимо изменить должности сотрудникам с такой квалификацией");
        }
        qualificationRepository.deleteById(id);
    }

    @Transactional
    @Override
    public void deleteEmployee(UUID id) {
        pointRepository.deleteByEmployeeId(id);
        requestRepository.deleteByAppointorId(id);
        employeeRepository.deleteById(id);
    }

    @Override
    @Transactional
    public void updateEmployee(UpdateEmployeeRequest request) {
        Company company = companyDomainService.getCompanyReference();

        Employee employee = employeeRepository
                .findByIdAndCompany(request.getId(), company)
                .orElseThrow(() -> new CrmBadRequestException("работник с таким id не найден"));

        Qualification qualification = null;
        if (request.getQualificationId() != null) {
            qualification = qualificationRepository
                    .findByIdAndJobTitle_company(request.getQualificationId(), company)
                    .orElseThrow(() -> new CrmBadRequestException("квалификация с таким id не найдена"));
        }

        Role role = roleRepository.findByName(request.getRoleName())
                .orElseThrow(() -> new CrmBadRequestException("роль с таким id не найдена"));

        employee.setLogin(request.getLogin());
        employee.setEmail(request.getEmail());
        employee.setFullName(new FullName(request.getFirstName(), request.getLastName(), request.getPatronymic()));
        employee.setQualification(qualification);
        employee.setRoles(Set.of(role));
    }

    private void validateAddEmployee(AddEmployeeRequest request) {
        Map<String, String> errors = new HashMap<>();
        if (!List.of("ROLE_ADMIN", "ROLE_MANAGER", "ROLE_EMPLOYEE").contains(request.getRole())) {
            errors.put("role", "некорректная роль");
        }
        if (employeeRepository.existsByLogin(request.getLogin())) {
            errors.put("login", "этот логин уже занят");
        }
        if (employeeRepository.existsByEmail(request.getEmail())) {
            errors.put("email", "эта почта уже используется");
        }

        if (!errors.isEmpty()) {
            throw new ValidationException(errors);
        }
    }
}
