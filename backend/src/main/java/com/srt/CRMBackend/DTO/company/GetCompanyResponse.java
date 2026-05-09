package com.srt.CRMBackend.DTO.company;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;
import java.util.UUID;

@Data
@AllArgsConstructor
public class GetCompanyResponse {
    private UUID id;
    private String name;
    private String address;
    private String fieldOfEmployment;

    private LocalDate subscribeFireDate;
}
