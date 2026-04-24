package com.srt.CRMBackend.DTO.project;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class ProjectResponse {
    private UUID id;
    private String name;
    private String description;
    private UUID managerId;
    private List<ProjectTaskResponse> tasks;
}
