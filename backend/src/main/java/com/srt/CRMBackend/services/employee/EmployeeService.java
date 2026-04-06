package com.srt.CRMBackend.services.employee;

import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface EmployeeService {
    EmployeeDTO getEmployeeData();
    List<EmployeeDTO> getAllEmployees();
    int getCountOfPointers();
    void uploadAvatar(MultipartFile file);
    Optional<Path> downloadAvatar(UUID employeeId);
}
