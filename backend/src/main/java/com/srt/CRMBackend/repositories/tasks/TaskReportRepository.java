package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.tasks.TaskReport;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface TaskReportRepository extends JpaRepository<TaskReport, UUID> {
    @EntityGraph(attributePaths = {"employeeTask.task.project"})
    Optional<TaskReport> findWithTaskByIdAndEmployeeTask_task_company(UUID id, Company company);

    @Query("""
            select tr from TaskReport tr
            join fetch tr.employeeTask et
            join fetch tr.files
            join fetch et.task t
            join fetch t.project p
            join p.manager m
            where m.id = :managerId
            order by tr.createdAt desc
            """)
    List<TaskReport> findAllByManagerId(UUID managerId);

    @Query("""
            select tr from TaskReport tr
            join fetch tr.employeeTask et
            join fetch tr.files
            join fetch et.task t
            join fetch t.project p
            join p.manager m
            where t.project is null
            order by tr.createdAt desc
            """)
    List<TaskReport> findAllWithoutProject();

    @EntityGraph(attributePaths = {"employeeTask.task"})
    Optional<TaskReport> findWithTaskById(UUID id);
}
