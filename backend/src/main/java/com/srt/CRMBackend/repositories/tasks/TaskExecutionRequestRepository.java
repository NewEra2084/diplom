package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequest;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TaskExecutionRequestRepository extends JpaRepository<TaskExecutionRequest, UUID> {
    @Query("""
            select ter from TaskExecutionRequest ter
            join fetch ter.task t
            join fetch t.project p
            join fetch ter.employee e
            join fetch e.fullName
            where p.manager = :manager
            and t.company = :company
            """)
    List<TaskExecutionRequest> findAllWithTaskAndEmployeeAndProjectByCompanyAndManager(Company company, Employee manager);

    @Query("""
            select ter from TaskExecutionRequest ter
            join fetch ter.task t
            join fetch ter.employee e
            join fetch e.fullName
            where t.project is null
            and t.company = :company
            """)
    List<TaskExecutionRequest> findAllWithTaskAndEmployeeAndProjectByCompanyWithoutProject(Company company);

    @Query("""
        SELECT ter FROM TaskExecutionRequest ter
        JOIN FETCH ter.task
        JOIN FETCH ter.task.taskCategory
        WHERE ter.employee.id = :employeeId
    """)
    List<TaskExecutionRequest> findAllByEmployeeIdWithTask(UUID employeeId);

    @EntityGraph(attributePaths = {"task.project", "employee"})
    Optional<TaskExecutionRequest> findWithTaskAndEmployeeByIdAndTask_company(UUID id, Company company);

    @EntityGraph(attributePaths = {"task.project", "employee.fullName"})
    List<TaskExecutionRequest> findAllWithProjectAndEmployeeByEmployee(Employee employee);
}
