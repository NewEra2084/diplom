package com.srt.CRMBackend.DTO.project;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class ProjectResponse {
    private String name;
    private String description;
    private UUID managerId;
}
