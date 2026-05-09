package com.srt.CRMBackend.services.company;

import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.GetCompanyResponse;
import com.srt.CRMBackend.DTO.company.RenewCompanySubscriptionRequest;
import com.srt.CRMBackend.DTO.company.UpdateCompanyRequest;

public interface CompanyService {
    void create(CreateCompanyRequest request);
    void update(UpdateCompanyRequest request);
    void renewSubscription(RenewCompanySubscriptionRequest request);
    GetCompanyResponse getCompany();
}
