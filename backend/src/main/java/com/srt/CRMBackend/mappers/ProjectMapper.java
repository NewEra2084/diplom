package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.DTO.project.ProjectTaskResponse;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.models.tasks.Task;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    Project toEntity(AddProjectRequest request);

    @Mapping(target = "managerId", source = "project.manager.id")
    ProjectResponse toResponse(Project project);

    @Mapping(target = "category", source = "taskCategory")
    ProjectTaskResponse toTaskResponse(Task task);
}
