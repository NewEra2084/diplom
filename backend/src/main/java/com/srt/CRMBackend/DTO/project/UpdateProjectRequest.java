package com.srt.CRMBackend.DTO.project;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.UUID;

@Data
@Builder
@AllArgsConstructor
public class UpdateProjectRequest {
    @NotNull
    private UUID id;

    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotNull
    private UUID managerId;
}
