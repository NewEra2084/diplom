package com.srt.CRMBackend.models.tasks;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "task_report_files")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskReportFile {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    private TaskReport taskReport;

    @Column(nullable = false)
    private String fileName;
}
