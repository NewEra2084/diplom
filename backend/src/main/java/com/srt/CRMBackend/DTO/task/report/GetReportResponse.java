package com.srt.CRMBackend.DTO.task.report;

import com.srt.CRMBackend.DTO.project.GetProjectResponse;
import com.srt.CRMBackend.models.tasks.ReportStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;
import java.util.UUID;

@Data
@AllArgsConstructor
public class GetReportResponse {
    private UUID id;
    private String title;
    private String description;
    private ReportStatus status;
    private GetProjectResponse project;
    private List<UUID> files;
}
