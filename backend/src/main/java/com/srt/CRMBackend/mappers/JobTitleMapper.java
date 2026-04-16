package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.admin.QualificationResponse;
import com.srt.CRMBackend.models.employees.JobTitle;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface JobTitleMapper {
    QualificationResponse toQualificationResponse(JobTitle jobTitle);
}
