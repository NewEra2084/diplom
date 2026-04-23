package com.srt.CRMBackend.controllers.task;

import com.srt.CRMBackend.DTO.project.ProjectResponse;
import com.srt.CRMBackend.services.project.ProjectService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/project/get")
@RequiredArgsConstructor
@Tag(name = "получение проектов", description = "методы доступны всем авторизованным работникам")
public class GetProjectController {
    private final ProjectService projectService;

    @GetMapping
    public List<ProjectResponse> getProjects() {
        return projectService.getAll();
    }

    @Operation(description = "менеджеры и админы получают все задачи проекта, при этом сотрудники только свободные")
    @GetMapping("/with_tasks")
    public List<ProjectResponse> getProjectsWithTasks() {
        return projectService.getAllWithTasks();
    }
}
