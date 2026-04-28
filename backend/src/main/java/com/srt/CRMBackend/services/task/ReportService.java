package com.srt.CRMBackend.services.task;

import com.srt.CRMBackend.DTO.task.report.GetReportResponse;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ReportMapper;
import com.srt.CRMBackend.models.tasks.ReportStatus;
import com.srt.CRMBackend.models.tasks.Task;
import com.srt.CRMBackend.models.tasks.TaskReport;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import com.srt.CRMBackend.repositories.tasks.TaskReportRepository;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.services.PointDomainService;
import com.srt.CRMBackend.services.task.domain.TaskReportDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class ReportService {
    private final TaskReportRepository repository;
    private final ReportMapper reportMapper;
    private final TaskReportDomainService domainService;

    private final AuthHelperUtil authHelperUtil;
    private final TaskRepository taskRepository;
    private final PointDomainService pointDomainService;

    public List<GetReportResponse> getReports() {
        List<TaskReport> projectReports = repository
                .findAllByManagerId(authHelperUtil.getEmployee().getId());

        List<TaskReport> reports = repository.findAllWithoutProject();

        return Stream.concat(projectReports.stream(), reports.stream())
                .map(reportMapper::toResponse)
                .toList();
    }

    public void acceptReport(UUID reportId) {
        TaskReport report = domainService.getWithTaskByIdAndCurrentCompany(reportId);
        if (report.getStatus() != ReportStatus.NEW) {
            throw new CrmBadRequestException("данный отчет уже обработан");
        }
        report.setStatus(ReportStatus.ACCEPTED);

        Task task = report.getEmployeeTask().getTask();
        task.setStatus(TaskStatus.COMPLETED);

        repository.save(report);
        taskRepository.save(task);

        pointDomainService.add(authHelperUtil.getEmployee(), task.getNumberOfPoints());
    }

    public void rejectReport(UUID reportId) {
        TaskReport report = domainService.getById(reportId);
        if (report.getStatus() != ReportStatus.NEW) {
            throw new CrmBadRequestException("данный отчет уже обработан");
        }
        report.setStatus(ReportStatus.REJECTED);
        repository.save(report);
    }
}
