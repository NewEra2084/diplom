package com.srt.CRMBackend.services.company;

import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.UpdateCompanyRequest;

public interface CompanyService {
    void create(CreateCompanyRequest request);
    void update(UpdateCompanyRequest request);
}
