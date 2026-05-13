package com.srt.CRMBackend.controllers.task;

import com.srt.CRMBackend.DTO.task.TaskCategoryDTO;
import com.srt.CRMBackend.DTO.task.TaskResponse;
import com.srt.CRMBackend.services.task.TaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/task/get")
@RequiredArgsConstructor
@Tag(name = "получение задач", description = "методы доступны всем авторизованным работникам")
public class GetTaskController {
    private final TaskService taskService;

    @Operation(description = "получение задач без проекта")
    @GetMapping
    public List<TaskResponse> getAllTasks() {
        return taskService.getAllTasksWithoutProject();
    }

    @GetMapping("/task_categories")
    public List<TaskCategoryDTO> getAllTaskCategories() {
        return taskService.getAllTaskCategories();
    }

    @GetMapping("/image/{taskId}")
    public ResponseEntity<Resource> getImageById(@PathVariable UUID taskId) {
        Optional<Path> path = taskService.getImagePath(taskId);
        if (path.isEmpty()) {
            return ResponseEntity.ok().build();
        }
        Resource resource = new FileSystemResource(path.get());
        return ResponseEntity.ok()
                .contentType(getContentType(path.get()))
                .body(resource);
    }

    private MediaType getContentType(Path path) {
        String contentType = determineContentType(path);
        return MediaType.parseMediaType(contentType);
    }

    private String determineContentType(Path path) {
        try {
            String type = Files.probeContentType(path);
            return type != null ? type : "application/octet-stream";
        } catch (IOException e) {
            return "application/octet-stream";
        }
    }
}
