package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.GetCompanyResponse;
import com.srt.CRMBackend.models.Company;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface CompanyMapper {
    Company toEntity(CreateCompanyRequest request);

    GetCompanyResponse toResponse(Company company);
}
