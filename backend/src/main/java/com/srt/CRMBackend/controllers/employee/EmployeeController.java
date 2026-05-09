package com.srt.CRMBackend.controllers.employee;

import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import com.srt.CRMBackend.DTO.employee.UpdateAccountRequest;
import com.srt.CRMBackend.DTO.employee.UploadAvatarRequest;
import com.srt.CRMBackend.services.employee.EmployeeService;
import com.srt.CRMBackend.util.FileStorageUtil;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Path;
import java.util.*;

@RestController
@RequestMapping("/employee")
@RequiredArgsConstructor
@Tag(name = "сотрудники", description = "методы доступны всем авторизованным работникам")
public class EmployeeController {
    private final EmployeeService employeeService;
    private final FileStorageUtil fileStorageUtil;

    @GetMapping("/get_employee_data")
    public EmployeeDTO employeeData() {
        return employeeService.getEmployeeData();
    }

    @Operation(description = "получение количества очков")
    @GetMapping("/get_points")
    public Map<String, Integer> getPointers() {
        return Map.of("points", employeeService.getCountOfPointers());
    }

    @Operation(description = "добавление/редактирование аватара работника")
    @PatchMapping(value = "/avatar/upload", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public void uploadAvatar(@ModelAttribute @Valid UploadAvatarRequest request) {
        employeeService.uploadAvatar(request.getImage());
    }

    @Operation(description = "получение аватара работника по employeeId")
    @GetMapping("/avatar/{employeeId}")
    public ResponseEntity<Resource> getAvatar(@PathVariable UUID employeeId) {
        Optional<Path> path = employeeService.downloadAvatar(employeeId);
        if (path.isEmpty()) {
            return ResponseEntity.ok().build();
        }
        Resource resource = new FileSystemResource(path.get());
        return ResponseEntity.ok()
                .contentType(fileStorageUtil.getContentType(path.get()))
                .body(resource);
    }

    @Operation(description = "обновление данных сотрудника")
    @PutMapping("/update")
    public void updateEmployee(@RequestBody @Valid UpdateAccountRequest request) {
        employeeService.updateEmployee(request);
    }
}
