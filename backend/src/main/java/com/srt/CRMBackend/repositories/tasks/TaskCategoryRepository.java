package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.tasks.TaskCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TaskCategoryRepository extends JpaRepository<TaskCategory, UUID> {
    boolean existsByNameAndCompany(String name, Company company);

    List<TaskCategory> findAllByCompany(Company company);


    Optional<TaskCategory> findByIdAndCompany(UUID id, Company company);
}
