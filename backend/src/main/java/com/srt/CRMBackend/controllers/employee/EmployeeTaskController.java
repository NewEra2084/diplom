package com.srt.CRMBackend.controllers.employee;

import com.srt.CRMBackend.DTO.task.GetTaskEmployeeRequests;
import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.DTO.task.TaskResponse;
import com.srt.CRMBackend.DTO.task.report.SendTaskReportRequest;
import com.srt.CRMBackend.services.employee.EmployeeTaskService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/task/employee")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "работа с задачами (для сотрудников)", description = "методы доступны всем авторизованным работникам")
public class EmployeeTaskController {
    private final EmployeeTaskService employeeTaskService;

    @Operation(description = "после взятии задачи отправляется заявка на подтверждение")
    @PostMapping("/take/{taskId}")
    public Map<String, String> takeTask(@PathVariable UUID taskId) {
        log.info("call take task endpoint");
        employeeTaskService.takeTask(taskId);
        return Map.of("message", "заявка на получение задачи отправлена");
    }

    @Operation(description = "получение всех заявок на выполнение задачи у работника")
    @GetMapping("/get_all_requests")
    public List<GetTaskExecutionRequestResponse> getAllRequests() {
        log.info("call get all requests");
        return employeeTaskService.getAllRequests();
    }

    @Operation(description = "получение всех задач у сотрудника (даже выполненных)")
    @GetMapping("/get_all_tasks")
    public List<TaskResponse> getAllTasks() {
        log.info("call get all tasks");
        return employeeTaskService.getAllTasks();
    }

    @Operation(description = "отправка отчёта")
    @PostMapping(value = "/send/report", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public Map<String, String> sendReport(@ModelAttribute @Valid SendTaskReportRequest request) {
        employeeTaskService.sendReport(request);
        return Map.of("message", "заявка отправлена");
    }
}
