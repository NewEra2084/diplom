package com.srt.CRMBackend.models.employees;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Entity
@Table(name = "tokens")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Setter
@Getter
public class Token {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "employee_id")
    private Employee employee;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String token;
}
