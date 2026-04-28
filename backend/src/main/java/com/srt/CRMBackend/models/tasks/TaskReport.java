package com.srt.CRMBackend.models.tasks;

import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "task_reports")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskReport {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @ManyToOne(optional = false)
    private EmployeeTask employeeTask;

    @Column(nullable = false)
    @Builder.Default
    private Instant createdAt = Instant.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private ReportStatus status = ReportStatus.NEW;

    @OneToMany(mappedBy = "taskReport", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TaskReportFile> files;
}
