package com.srt.CRMBackend.services.task;

import com.srt.CRMBackend.DTO.task.*;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TaskService {
    void addTask(TaskRequest request);
    void deleteTask(UUID taskId);
    void updateTask(UpdateTaskRequest request);

    void addTaskCategory(TaskCategoryRequest request);

    List<TaskCategoryDTO> getAllTaskCategories();
    List<TaskResponse> getAllTasksWithoutProject();

    Optional<Path> getImagePath(UUID taskId);
}
