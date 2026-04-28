package com.srt.CRMBackend.services.task.domain;

import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.tasks.Task;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskDomainService {
    private final TaskRepository repository;

    private final CompanyDomainService companyDomainService;

    public Task getByIdAndCurrentCompany(UUID id) {
        return repository.findByCompanyAndId(companyDomainService.getCompanyReference(), id)
                .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор задачи"));
    }
}
