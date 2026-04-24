package com.srt.CRMBackend.DTO.admin;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class QualificationDTO {
    private UUID id;
    private String name;
}
