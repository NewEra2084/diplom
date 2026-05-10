package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.tasks.Task;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TaskRepository extends JpaRepository<Task, UUID> {
    @EntityGraph(attributePaths = {"taskCategory"})
    List<Task> findWithCategoryAllByCompanyAndProjectNull(Company company);

    @EntityGraph(attributePaths = {"project"})
    Optional<Task> findWithProjectByCompanyAndId(Company company, UUID id);
}
