package com.srt.CRMBackend.models.tasks;

import com.srt.CRMBackend.models.employees.Employee;
import jakarta.persistence.*;
import lombok.*;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Entity
@Table(name = "task_execution_requests")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TaskExecutionRequest {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @ManyToOne
    @JoinColumn(name = "task_id")
    private Task task;

    @Column(nullable = true)
    private String comment;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    @Builder.Default
    private TaskExecutionRequestStatus status = TaskExecutionRequestStatus.PENDING;
}
