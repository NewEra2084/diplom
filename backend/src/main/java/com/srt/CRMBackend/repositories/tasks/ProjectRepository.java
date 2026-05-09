package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ProjectRepository extends JpaRepository<Project, UUID> {
    boolean existsByNameAndCompany(String name, Company company);

    boolean existsByIdAndCompany(UUID id, Company company);

    List<Project> findAllByCompany(Company company);

    @EntityGraph(attributePaths = {"tasks", "tasks.taskCategory"})
    List<Project> findAllWithTasksAndCategoriesByCompany(Company company);

    @EntityGraph(attributePaths = {"tasks", "tasks.taskCategory"})
    List<Project> findAllWithTasksAndCategoriesByCompanyAndTasks_status(Company company, TaskStatus status);
}
