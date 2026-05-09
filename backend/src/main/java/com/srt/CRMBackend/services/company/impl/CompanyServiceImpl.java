package com.srt.CRMBackend.services.company.impl;

import com.srt.CRMBackend.DTO.RoleEnum;
import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.GetCompanyResponse;
import com.srt.CRMBackend.DTO.company.RenewCompanySubscriptionRequest;
import com.srt.CRMBackend.DTO.company.UpdateCompanyRequest;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.exceptions.admin.ValidationException;
import com.srt.CRMBackend.mappers.CompanyMapper;
import com.srt.CRMBackend.mappers.EmployeeMapper;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.repositories.CompanyRepository;
import com.srt.CRMBackend.repositories.employee.EmployeeRepository;
import com.srt.CRMBackend.repositories.employee.RoleRepository;
import com.srt.CRMBackend.services.company.CompanyService;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository repository;
    private final CompanyMapper mapper;
    private final CompanyDomainService domainService;

    private final EmployeeMapper employeeMapper;
    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;
    private final AuthHelperUtil authHelperUtil;

    @Override
    public void create(CreateCompanyRequest request) {
        validateCreateCompany(request);

        Company company = mapper.toEntity(request);
        repository.save(company);

        Employee admin = employeeMapper.toEntity(request.getAdmin());
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setFullName(employeeMapper.toFullName(request.getAdmin()));
        admin.setRoles(Set.of(roleRepository.getByName("ROLE_ADMIN")));
        admin.setCompany(company);

        employeeRepository.save(admin);
    }

    @Override
    public void update(UpdateCompanyRequest request) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        Company company = domainService.getById(request.getId());
        if (!userDetails.getEmployee().getCompany().getId()
                .equals(company.getId())) {
            throw new CrmBadRequestException("пользователь не является администратором данной компании");
        }
        if (repository.existsByName(request.getName())) {
            throw new CrmBadRequestException("данное название уже занято");
        }

        company.setName(request.getName());
        company.setAddress(request.getAddress());
        company.setFieldOfEmployment(request.getFieldOfEmployment());

        repository.save(company);
    }

    @Override
    public void renewSubscription(RenewCompanySubscriptionRequest request) {
        Employee employee = authHelperUtil.getEmployee();
        Company company = domainService.getById(employee.getCompany().getId());

        company.setSubscribeFireDate(request.getSubscribeFireDate());

        repository.save(company);
    }

    @Override
    public GetCompanyResponse getCompany() {
        Employee employee = authHelperUtil.getEmployee();
        Company company = domainService.getById(employee.getCompany().getId());

        var response = mapper.toResponse(company);
        if (!authHelperUtil.hasRole(RoleEnum.ROLE_ADMIN)) {
            response.setSubscribeFireDate(null);
        }
        return response;
    }

    private void validateCreateCompany(CreateCompanyRequest request) {
        Map<String, String> errors = new HashMap<>();
        if (ChronoUnit.DAYS.between(request.getSubscribeFireDate(), LocalDate.now()) > 1) {
            errors.put("subscribeFireDate", "дата окончания подписки должна быть минимум до следующего дня");
        }
        if (repository.existsByName(request.getName())) {
            errors.put("name", "это название уже занято");
        }
        if (employeeRepository.existsByLogin(request.getAdmin().getLogin())) {
            errors.put("login", "этот логин уже занят");
        }
        if (employeeRepository.existsByEmail(request.getAdmin().getEmail())) {
            errors.put("email", "эта почта уже используется");
        }

        if (!errors.isEmpty()) {
            throw new ValidationException(errors);
        }
    }
}
