package com.srt.CRMBackend.DTO.company;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@Data
@AllArgsConstructor
public class CreateCompanyRequest {
    @NotBlank
    private String name;
    @NotBlank
    private String address;
    @NotBlank
    private String fieldOfEmployment;
    @NotNull
    private Instant subscribeFireDate;
    @NotNull
    private CreateAdminRequest admin;
}
