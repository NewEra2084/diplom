package com.srt.CRMBackend.models.tasks;

import com.srt.CRMBackend.models.Company;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Entity
@Table(name = "task_categories")
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TaskCategory {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToOne(optional = false)
    private Company company;
}
