package com.srt.CRMBackend.models.employees;

import com.srt.CRMBackend.models.Company;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "employees")
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(unique = true, nullable = false)
    private String login;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(nullable = false)
    private String password;

    @OneToOne(cascade = CascadeType.ALL, optional = false)
    @JoinColumn(name = "full_name_id")
    private FullName fullName;

    @ManyToOne(optional = true)
    @JoinColumn(name = "qualification_id")
    private Qualification qualification;

    @ManyToOne(optional = false)
    @JoinColumn(name = "company_id")
    private Company company;

    @Builder.Default
    @Column(nullable = false)
    private LocalDate dateOfEmployment = LocalDate.now();

    @OneToMany
    @JoinTable(
            name = "employee_roles",
            joinColumns = @JoinColumn(name = "employee_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<Role> roles = new HashSet<>();

    @Column(columnDefinition = "TEXT")
    private String avatarPath;

    public Employee(UUID id) {
        this.id = id;
    }
}
