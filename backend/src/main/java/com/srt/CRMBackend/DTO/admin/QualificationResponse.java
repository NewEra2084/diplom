package com.srt.CRMBackend.DTO.admin;

import lombok.Builder;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@Builder
public class QualificationResponse {
    private UUID id;
    private List<QualificationDTO> qualifications;
    private String name;
}
