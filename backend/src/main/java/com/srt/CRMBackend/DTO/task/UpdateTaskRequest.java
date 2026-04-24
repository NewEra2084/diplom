package com.srt.CRMBackend.DTO.task;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
public class UpdateTaskRequest {
    @NotNull
    private UUID id;
    @NotBlank
    private String name;
    @NotBlank
    private String description;
    @Min(1)
    private int numberOfPoints;
    @NotNull
    private LocalDate deadline;
    @NotNull
    private UUID taskCategoryId;
    @NotNull
    private UUID projectId;
}
