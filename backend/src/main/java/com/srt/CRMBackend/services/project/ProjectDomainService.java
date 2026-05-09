package com.srt.CRMBackend.services.project;

import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.repositories.tasks.ProjectRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProjectDomainService {
    private final ProjectRepository repository;

    public Project getReferenceIfExistsById(UUID id) {
        if (!repository.existsById(id)) {
            throw new CrmBadRequestException("such project not found");
        }
        return repository.getReferenceById(id);
    }

    public Project getReferenceIfExistsByIdAndCompany(UUID id, Company company) {
        if (!repository.existsByIdAndCompany(id, company)) {
            throw new CrmBadRequestException("such project not found");
        }
        return repository.getReferenceById(id);
    }
}
