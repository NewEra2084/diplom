package com.srt.CRMBackend.DTO.employee;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class UpdateEmployeeRequest {
    @NotNull
    private UUID id;
    @NotBlank
    private String login;
    @NotBlank
    private String email;
    @NotBlank
    private String firstName;
    @NotBlank
    private String lastName;
    @NotBlank
    private String patronymic;

    private UUID qualificationId;

    @NotBlank
    private String roleName;
}
