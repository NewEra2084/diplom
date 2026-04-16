package com.srt.CRMBackend.repositories.employee;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.JobTitle;
import com.srt.CRMBackend.models.employees.Qualification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface QualificationRepository extends JpaRepository<Qualification, UUID> {
    @Query("""
        SELECT q FROM Qualification q
        JOIN FETCH JobTitle jt ON q.jobTitle.id = jt.id
        WHERE jt.company = :company
    """)
    List<Qualification> findAllByCompanyWithJobTitle(Company company);

    @Query("""
        SELECT count(q) > 0 FROM Qualification q
        WHERE q.jobTitle.id = :jobTitleId
    """)
    boolean existsByJobTitleId(UUID jobTitleId);

    boolean existsByJobTitleAndName(JobTitle jobTitle, String name);
}
