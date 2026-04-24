package com.srt.CRMBackend.models.tasks;

import com.srt.CRMBackend.models.employees.Employee;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

/**
 * задачи сотрудников и статус задачи
 */
@Entity
@Table(name = "employee_tasks")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeTask {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @ManyToOne(optional = false)
    @JoinColumn(name = "task_id")
    private Task task;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private ExecutionStatus executionStatus = ExecutionStatus.IN_PROGRESS;
}
