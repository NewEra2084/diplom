package com.srt.CRMBackend.repositories.employee;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.JobTitle;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface JobTitleRepository extends JpaRepository<JobTitle, UUID> {
    boolean existsByNameAndCompany(String name, Company company);

    JobTitle getByName(String name);

    List<JobTitle> findAllByCompany(Company company);

    @EntityGraph(attributePaths = {"qualifications"})
    @Query("select jt from JobTitle jt where jt.company = :company")
    List<JobTitle> findAllByCompanyWithQualification(Company company);
}
