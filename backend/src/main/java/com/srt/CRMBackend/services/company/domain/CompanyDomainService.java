package com.srt.CRMBackend.services.company.domain;

import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.repositories.CompanyRepository;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CompanyDomainService {
    private final CompanyRepository repository;

    private final AuthHelperUtil authHelperUtil;

    public Company getById(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new CrmBadRequestException("данная комнапия не найдена"));
    }

    public Company getReferenceById(UUID id) {
        return repository.getReferenceById(id);
    }

    public Company getCompanyReference() {
        return getReferenceById(authHelperUtil.getEmployee().getCompany().getId());
    }

    public boolean compareByCurrent(Company company) {
        return company.getId().equals(getCompanyReference().getId());
    }
}
