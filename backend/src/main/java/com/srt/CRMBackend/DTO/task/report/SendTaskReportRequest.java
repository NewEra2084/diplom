package com.srt.CRMBackend.DTO.task.report;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class SendTaskReportRequest {
    @NotNull
    private UUID taskId;
    @NotBlank
    private String title;
    @NotBlank
    private String description;

    private List<MultipartFile> files;
}
