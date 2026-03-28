package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.models.tasks.Project;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProjectMapper {
    Project toEntity(AddProjectRequest request);

    @Mapping(target = "managerId", source = "project.manager.id")
    ProjectResponse toResponse(Project project);
}
