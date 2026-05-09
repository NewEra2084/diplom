package com.srt.CRMBackend.services.task.domain;

import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.repositories.tasks.TaskReportFileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.nio.file.Path;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class TaskReportFileDomainService {
    private final TaskReportFileRepository repository;

    public Path getById(UUID id) {
        return Path.of(
                repository.findById(id)
                        .orElseThrow(() -> new CrmBadRequestException("file report not found"))
                        .getFileName()
        );
    }
}
