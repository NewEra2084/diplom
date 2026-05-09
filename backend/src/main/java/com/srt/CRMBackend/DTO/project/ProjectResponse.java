package com.srt.CRMBackend.DTO.project;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class ProjectResponse {
    private UUID id;
    private String name;
    private String description;
    private UUID managerId;
    private List<ProjectTaskResponse> tasks;

    @Builder.Default
    private boolean canTake = false;
}
