package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.task.report.GetReportResponse;
import com.srt.CRMBackend.models.tasks.TaskReport;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ReportMapper {
    @Mapping(target = "project.id", source = "employeeTask.task.project.id")
    @Mapping(target = "project.name", source = "employeeTask.task.project.name")
    @Mapping(target = "project.description", source = "employeeTask.task.project.description")
    @Mapping(target = "files", ignore = true)
    GetReportResponse toResponse(TaskReport entity);
}
