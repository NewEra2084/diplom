package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.tasks.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface RequestRepository extends JpaRepository<Request, UUID> {
    void deleteByAppointorId(UUID appointorId);
}
