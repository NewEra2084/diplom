package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.task.report.GetReportResponse;
import com.srt.CRMBackend.models.tasks.TaskReport;
import com.srt.CRMBackend.models.tasks.TaskReportFile;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

import java.util.List;
import java.util.UUID;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ReportMapper {
    @Mapping(target = "project.id", source = "employeeTask.task.project.id")
    @Mapping(target = "project.name", source = "employeeTask.task.project.name")
    @Mapping(target = "project.description", source = "employeeTask.task.project.description")
    @Mapping(target = "files", expression = "java(toFileList(entity.getFiles()))")
    GetReportResponse toResponse(TaskReport entity);

    default List<UUID> toFileList(List<TaskReportFile> files) {
        return files.stream()
                .map(TaskReportFile::getId)
                .toList();
    }
}
