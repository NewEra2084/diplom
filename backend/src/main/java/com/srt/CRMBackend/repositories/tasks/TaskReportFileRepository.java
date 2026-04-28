package com.srt.CRMBackend.repositories.tasks;

import com.srt.CRMBackend.models.tasks.TaskReportFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface TaskReportFileRepository extends JpaRepository<TaskReportFile, UUID> {
}
