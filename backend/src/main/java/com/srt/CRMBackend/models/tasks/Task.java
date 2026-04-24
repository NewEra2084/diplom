package com.srt.CRMBackend.models.tasks;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.UUID;

@Entity
@Table(name = "tasks")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String description;

    @Column(nullable = false)
    private int numberOfPoints;

    @Column(nullable = false)
    private LocalDate deadline;

    @Column(nullable = false)
    @Builder.Default
    private LocalDateTime publicationTime = LocalDateTime.now();

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private TaskStatus status = TaskStatus.FREE;

    @ManyToOne(optional = false)
    @JoinColumn(name = "task_category_id")
    private TaskCategory taskCategory;

    @ManyToOne(optional = false)
    @JoinColumn(name = "project_id")
    private Project project;

    public Task(UUID id) {
        this.id = id;
    }
}
