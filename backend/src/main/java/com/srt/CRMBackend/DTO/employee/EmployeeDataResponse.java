package com.srt.CRMBackend.DTO.employee;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class EmployeeDataResponse {
    private UUID id;
    private String firstName;
    private String lastName;
    private String patronymic;
    private String login;
}
