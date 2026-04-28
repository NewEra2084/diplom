package com.srt.CRMBackend.controllers.task;

import com.srt.CRMBackend.DTO.task.report.GetReportResponse;
import com.srt.CRMBackend.services.task.ReportService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/task/report")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "работа с заявками", description = "все методы доступны менеджерам и админам")
public class ReportController {
    private final ReportService reportService;

    @Operation(description = "получение отправленных отчётов, менеджер проекта получет отчёты на свои проекты и отчёты на беспроектные задачи")
    @GetMapping("/get")
    public List<GetReportResponse> getEmployeeTasksSubmittedForReview() {
        return reportService.getReports();
    }

    @Operation(description = "подтверждение выполнения задачи и добавление очков сотруднику")
    @PatchMapping("/accept/{reportId}")
    public void acceptReport(@PathVariable UUID reportId) {
        reportService.acceptReport(reportId);
    }

    @Operation(description = "отклонение отчёта")
    @PatchMapping("/reject/{reportId}")
    public void rejectReport(@PathVariable UUID reportId) {
        reportService.rejectReport(reportId);
    }
}
