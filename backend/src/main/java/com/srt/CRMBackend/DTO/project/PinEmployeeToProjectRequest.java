package com.srt.CRMBackend.DTO.project;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class PinEmployeeToProjectRequest {
    private UUID employeeId;
    private UUID projectId;
}
