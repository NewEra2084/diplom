package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.tasks.Project;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
    boolean existsByName(String name);
}
