package com.srt.CRMBackend.DTO.company;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class UpdateCompanyRequest {
    private UUID id;
    private String name;
    private String address;
    private String fieldOfEmployment;
}
