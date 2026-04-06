package com.srt.CRMBackend.services.company.impl;

import com.srt.CRMBackend.DTO.company.CreateAdminRequest;
import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
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
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.HashMap;
import java.util.Map;
import java.util.Set;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CompanyServiceImpl implements CompanyService {
    private final CompanyRepository repository;
    private final CompanyMapper mapper;

    private final EmployeeMapper employeeMapper;
    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final RoleRepository roleRepository;

    @Override
    public void create(CreateCompanyRequest request) {
        validateCreateCompany(request);

        Employee admin = employeeMapper.toEntity(request.getAdmin());
        admin.setPassword(passwordEncoder.encode(admin.getPassword()));
        admin.setFullName(employeeMapper.toFullName(request.getAdmin()));
        admin.setFullName(employeeMapper.toFullName(request.getAdmin()));
        admin.setRoles(Set.of(roleRepository.getByName("ROLE_ADMIN")));
        employeeRepository.save(admin);

        Company company = mapper.toEntity(request);
        company.setCreator(admin);
        repository.save(company);
    }

    @Override
    public void update(UpdateCompanyRequest request) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        Company company = getById(request.getId());
        if (!userDetails.getEmployee().getId()
                .equals(company.getCreator().getId())) {
            throw new CrmBadRequestException("пользователь не является создателем");
        }
        if (repository.existsByName(request.getName())) {
            throw new CrmBadRequestException("данное название уже занято");
        }

        company.setName(request.getName());
        company.setAddress(request.getAddress());
        company.setFieldOfEmployment(request.getFieldOfEmployment());

        repository.save(company);
    }

    private Company getById(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new CrmBadRequestException("данная комнапия не найдена"));
    }

    private void validateCreateCompany(CreateCompanyRequest request) {
        Map<String, String> errors = new HashMap<>();
        if (ChronoUnit.DAYS.between(request.getSubscribeFireDate(), Instant.now()) > 1) {
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
