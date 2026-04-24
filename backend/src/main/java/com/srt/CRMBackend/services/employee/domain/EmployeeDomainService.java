package com.srt.CRMBackend.services.employee.domain;

import com.srt.CRMBackend.DTO.RoleEnum;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.repositories.employee.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeDomainService {
    private final EmployeeRepository repository;

    public Employee getReferenceIfExistsById(UUID id) {
        if (!repository.existsById(id)) {
            throw new CrmBadRequestException("such employee not found");
        }
        return repository.getReferenceById(id);
    }

    public Employee getReferenceIfExistsByIdAndRoleAndCompany(UUID id, RoleEnum role, Company company) {
        if (!repository.existsByIdAndRoles_Name(id, role.name())) {
            throw new CrmBadRequestException("such manager not found");
        }
        return repository.getReferenceById(id);
    }
}
