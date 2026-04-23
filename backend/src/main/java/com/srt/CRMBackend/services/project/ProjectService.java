package com.srt.CRMBackend.services.project;

import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.DTO.project.UpdateProjectRequest;

import java.util.List;
import java.util.UUID;

public interface ProjectService {
    void create(AddProjectRequest request);
    void update(UpdateProjectRequest request);
    void delete(UUID id);
    List<ProjectResponse> getAll();
    List<ProjectResponse> getAllWithTasks();
}
