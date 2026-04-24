package com.srt.CRMBackend.DTO.project;

import com.srt.CRMBackend.DTO.task.TaskCategoryDTO;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ProjectTaskResponse {
    private UUID id;
    private String name;
    private String description;
    private int numberOfPoints;
    private LocalDate deadline;
    private TaskCategoryDTO category;
    private TaskStatus status;
}
