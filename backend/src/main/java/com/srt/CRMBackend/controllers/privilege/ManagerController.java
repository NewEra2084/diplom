package com.srt.CRMBackend.controllers.privilege;

import com.srt.CRMBackend.DTO.admin.QualificationResponse;
import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import com.srt.CRMBackend.DTO.employee.JobTitleDTO;
import com.srt.CRMBackend.DTO.project.PinEmployeeToProjectRequest;
import com.srt.CRMBackend.services.ManagerService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/manager")
@RequiredArgsConstructor
@Tag(name = "менеджеры", description = "все методы доступны менеджерам и админам")
public class ManagerController {
    private final ManagerService managerService;

    @GetMapping("/get/job_title")
    public List<JobTitleDTO> getAllJobTitles() {
        return managerService.getAllJobTitles();
    }

    @GetMapping("/get/qualification")
    public List<QualificationResponse> getAllQualifications() {
        return managerService.getAllQualifications();
    }

    @GetMapping("/get/employee")
    public List<EmployeeDTO> getAllEmployees() {
        return managerService.getAllEmployees();
    }

    @PostMapping("/pin/employee")
    @Operation(description = "прикрепление работника к проекту")
    public void pinEmployee(@RequestBody @Valid PinEmployeeToProjectRequest request) {
        managerService.pinEmployeeToProject(request);
    }

    @DeleteMapping("/unpin/employee")
    @Operation(description = "открепление работника от проекта")
    public void unpinEmployee(@RequestBody @Valid PinEmployeeToProjectRequest request) {
        managerService.unpinEmployeeToProject(request);
    }
}
