package com.srt.CRMBackend.DTO.company;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

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
    private LocalDate subscribeFireDate;
    @NotNull
    private CreateAdminRequest admin;
}
