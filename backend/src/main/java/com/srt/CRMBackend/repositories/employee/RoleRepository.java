package com.srt.CRMBackend.repositories.employee;

import com.srt.CRMBackend.models.employees.Role;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface RoleRepository extends JpaRepository<Role, UUID> {
    Role getByName(String name);
    Optional<Role> findByName(String name);
}
