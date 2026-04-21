package com.srt.CRMBackend.models;

import com.srt.CRMBackend.models.employees.Employee;
import jakarta.persistence.*;
import lombok.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "companies")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Company {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true)
    private String name;

    private String address;

    @ManyToOne
    @JoinColumn(nullable = false, name = "creator_id")
    private Employee creator;

    @Column(columnDefinition = "TEXT")
    private String fieldOfEmployment;

    private Instant subscribeFireDate;
}
