package com.srt.CRMBackend.models.employees;

import com.srt.CRMBackend.models.Company;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Entity
@Table(name = "job_titles")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class JobTitle {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    private String name;

    @Column(columnDefinition = "TEXT")
    private String description;

    @ManyToOne(optional = false)
    @JoinColumn(name = "company_id")
    private Company company;

    @OneToMany(mappedBy = "jobTitle", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Qualification> qualifications;
}
