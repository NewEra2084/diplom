package com.srt.CRMBackend.DTO.task;

import com.srt.CRMBackend.DTO.project.GetProjectResponse;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class TaskDataResponse {
    private UUID id;
    private String name;
    private String description;
    private GetProjectResponse project;
}
