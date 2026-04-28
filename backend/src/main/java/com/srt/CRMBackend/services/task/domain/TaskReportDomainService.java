package com.srt.CRMBackend.services.task.domain;

import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.tasks.TaskReport;
import com.srt.CRMBackend.repositories.tasks.TaskReportRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskReportDomainService {
    private final TaskReportRepository repository;
    private final CompanyDomainService companyDomainService;

    public void save(TaskReport report) {
        repository.save(report);
    }

    public TaskReport getWithTaskByIdAndCurrentCompany(UUID id) {
        return repository.findWithTaskByIdAndEmployeeTask_task_company(id, companyDomainService.getCompanyReference())
                .orElseThrow(() -> new CrmBadRequestException("отчёт не найден"));
    }

    public TaskReport getById(UUID id) {
        return repository.findById(id)
                .orElseThrow(() -> new CrmBadRequestException("отчёт не найден"));
    }
}
