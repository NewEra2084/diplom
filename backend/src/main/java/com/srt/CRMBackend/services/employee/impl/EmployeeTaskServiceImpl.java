package com.srt.CRMBackend.services.employee.impl;

import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.DTO.task.TaskResponse;
import com.srt.CRMBackend.DTO.task.report.SendTaskReportRequest;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.TaskExecutionRequestMapper;
import com.srt.CRMBackend.mappers.TaskMapper;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.*;
import com.srt.CRMBackend.repositories.tasks.EmployeeTaskRepository;
import com.srt.CRMBackend.repositories.tasks.TaskExecutionRequestRepository;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeTaskService;
import com.srt.CRMBackend.services.task.domain.TaskDomainService;
import com.srt.CRMBackend.services.task.domain.TaskReportDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class EmployeeTaskServiceImpl implements EmployeeTaskService {
    private final TaskExecutionRequestRepository taskExecutionRequestRepository;
    private final EmployeeTaskRepository employeeTaskRepository;
    private final TaskExecutionRequestMapper taskExecutionRequestMapper;
    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;

    private final AuthHelperUtil authHelperUtil;
    private final CompanyDomainService companyDomainService;
    private final TaskDomainService taskDomainService;
    private final TaskReportDomainService taskReportDomainService;

    @Override
    public void takeTask(UUID taskId) {
        // TODO прикрепление к проекту
        Task task = taskRepository.findByCompanyAndId(companyDomainService.getCompanyReference(), taskId)
                .orElseThrow(() -> new CrmBadRequestException("задача не найдена у данной компании"));

        if (task.getStatus() != TaskStatus.FREE) {
            throw new CrmBadRequestException("задача не свободна");
        }

        TaskExecutionRequest taskExecutionRequest = TaskExecutionRequest.builder()
                .task(task)
                .employee(authHelperUtil.getEmployee())
                .build();
        taskExecutionRequestRepository.save(taskExecutionRequest);

        task.setStatus(TaskStatus.ACTIVE);
        taskRepository.save(task);
    }

    @Override
    public void saveEmployeeTask(UUID employeeId, UUID taskId) {
        employeeTaskRepository.save(EmployeeTask.builder()
                .employee(new Employee(employeeId))
                .task(new Task(taskId)).build());
    }

    @Override
    public List<GetTaskExecutionRequestResponse> getAllRequests() {
        return taskExecutionRequestRepository
                .findAllWithProjectAndEmployeeByEmployee(authHelperUtil.getEmployee()).stream()
                .map(taskExecutionRequestMapper::toResponse)
                .toList();
    }

    @Override
    public List<TaskResponse> getAllTasks() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        return employeeTaskRepository.findAllTasksByEmployeeId(userDetails.getEmployee().getId())
                .stream().map((t) -> taskMapper.toTaskResponse(t.getTask())).toList();
    }

    @Override
    public void sendReport(SendTaskReportRequest request) {
        Task task = taskDomainService.getByIdAndCurrentCompany(request.getTaskId());
        EmployeeTask employeeTask = employeeTaskRepository
                .findByTaskAndEmployee(task, authHelperUtil.getEmployee())
                .orElseThrow(() -> new CrmBadRequestException("не найдена запись задачи"));

        employeeTask.setExecutionStatus(ExecutionStatus.SENT_REPORT);

        // TODO files
        TaskReport report = TaskReport.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .employeeTask(employeeTask)
                .build();

        taskReportDomainService.save(report);
    }
}
