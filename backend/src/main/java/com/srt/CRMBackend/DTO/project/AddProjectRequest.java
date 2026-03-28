package com.srt.CRMBackend.DTO.project;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class AddProjectRequest {
    @NotBlank
    private String name;

    @NotBlank
    private String description;

    @NotNull
    private UUID managerId;
}
