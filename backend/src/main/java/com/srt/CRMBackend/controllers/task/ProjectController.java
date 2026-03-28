package com.srt.CRMBackend.controllers.task;

import com.srt.CRMBackend.DTO.project.AddProjectRequest;
import com.srt.CRMBackend.DTO.project.UpdateProjectRequest;
import com.srt.CRMBackend.services.project.ProjectService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/project")
@RequiredArgsConstructor
@Tag(name = "редактирование и добавление проектов", description = "методы доступны админам и менеджерам")
public class ProjectController {
    private final ProjectService projectService;

    @PostMapping("/add")
    public void addProject(@RequestBody @Valid AddProjectRequest request) {
        projectService.create(request);
    }

    @PutMapping("/update")
    public void updateProject(@RequestBody @Valid UpdateProjectRequest request) {
        projectService.update(request);
    }

    @DeleteMapping("/delete/{projectId}")
    public void deleteProject(@PathVariable UUID projectId) {
        projectService.delete(projectId);
    }
}
