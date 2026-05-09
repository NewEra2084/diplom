package com.srt.CRMBackend.repositories.employee;

import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Employee;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, UUID> {
    boolean existsByLogin(String login);
    boolean existsByEmail(String email);

    Optional<Employee> findByLogin(String login);

    @Query("""
        SELECT e FROM Employee e
        JOIN FETCH e.roles
        LEFT JOIN FETCH e.qualification eq
        LEFT JOIN FETCH eq.jobTitle
        WHERE e.login = :login
        """)
    Optional<Employee> findByLoginWithRolesAndQualificationAndJobTitle(String login);

    @Query("SELECT e FROM Employee e JOIN FETCH e.roles WHERE login = :login")
    Optional<Employee> findByLoginWithRoles(String login);

    @Query("""
        SELECT e FROM Employee e
        JOIN FETCH e.roles
        LEFT JOIN FETCH e.qualification eq
        LEFT JOIN FETCH eq.jobTitle
        WHERE e.company = :company
        """)
    List<Employee> findAllByCompanyWithRolesAndQualificationAndJobTitle(Company company);

    @Query("""
        SELECT count(e) > 0 FROM Employee e
        WHERE e.qualification.id = :qualificationId
    """)
    boolean existsByQualificationId(UUID qualificationId);

    boolean existsByIdAndRoles_Name(UUID id, String name);

    Optional<Employee> findByIdAndCompany(UUID id, Company company);

    @EntityGraph(attributePaths = {"projects"})
    Optional<Employee> findWithProjectsByIdAndCompany(UUID id, Company company);

    @EntityGraph(attributePaths = {"projects"})
    Optional<Employee> findWithProjectsById(UUID id);
}
