package com.srt.CRMBackend.repositories.employee;

import com.srt.CRMBackend.models.employees.PersonalEmployeeData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface PersonalEmployeeDataRepository extends JpaRepository<PersonalEmployeeData, UUID> {
    @Modifying
    @Query("""
        DELETE FROM PersonalEmployeeData p
        WHERE p.employee.id = :employeeId
    """)
    void deleteByEmployeeId(UUID employeeId);
}
