package com.srt.CRMBackend.DTO.request;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RejectTaskExecutionRequest {
    private String comment;
}
