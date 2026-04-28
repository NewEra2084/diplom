package com.srt.CRMBackend.services;

import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.employees.Point;
import com.srt.CRMBackend.repositories.employee.PointRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PointDomainService {
    private final PointRepository repository;

    public void createDefault(Employee employee) {
        repository.save(new Point(employee));
    }

    public void add(Employee employee, int amount) {
        Point point =repository.findByEmployee(employee)
                .orElseThrow(() -> new IllegalStateException("очки не найдены"));
        point.setTotal(point.getTotal() + amount);
        repository.save(point);
    }
}
