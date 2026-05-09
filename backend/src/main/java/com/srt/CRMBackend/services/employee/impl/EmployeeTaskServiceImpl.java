package com.srt.CRMBackend.services.employee.impl;

import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.DTO.task.TaskResponse;
import com.srt.CRMBackend.DTO.task.report.SendTaskReportRequest;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ReportMapper;
import com.srt.CRMBackend.mappers.TaskExecutionRequestMapper;
import com.srt.CRMBackend.mappers.TaskMapper;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.*;
import com.srt.CRMBackend.repositories.tasks.EmployeeTaskRepository;
import com.srt.CRMBackend.repositories.tasks.TaskExecutionRequestRepository;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeTaskService;
import com.srt.CRMBackend.services.employee.domain.EmployeeDomainService;
import com.srt.CRMBackend.services.task.domain.TaskDomainService;
import com.srt.CRMBackend.services.task.domain.TaskReportDomainService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import com.srt.CRMBackend.util.FileStorageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.Path;
import java.util.ArrayList;
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
    private final EmployeeDomainService employeeDomainService;
    private final FileStorageUtil fileStorageUtil;
    private final TaskReportDomainService taskReportDomainService;

    @Value("${storage.report-directory}")
    private String reportDirectory;

    @Override
    public void takeTask(UUID taskId) {
        Employee employee = employeeDomainService.getByIdWithProjects(authHelperUtil.getEmployee().getId());

        Task task = taskRepository.findWithProjectByCompanyAndId(companyDomainService.getCompanyReference(), taskId)
                .orElseThrow(() -> new CrmBadRequestException("задача не найдена у данной компании"));

        if (!employee.getProjects().contains(task.getProject())) {
            throw new CrmBadRequestException("вы не можете взять задачу к которой вы не прекреплены");
        }

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
    @Transactional
    public void sendReport(SendTaskReportRequest request) {
        Task task = taskDomainService.getByIdAndCurrentCompany(request.getTaskId());
        EmployeeTask employeeTask = employeeTaskRepository
                .findByTaskAndEmployee(task, authHelperUtil.getEmployee())
                .orElseThrow(() -> new CrmBadRequestException("не найдена запись задачи"));

        employeeTask.setExecutionStatus(ExecutionStatus.SENT_REPORT);

        TaskReport report = TaskReport.builder()
                .title(request.getTitle())
                .description(request.getDescription())
                .employeeTask(employeeTask)
                .build();

        taskReportDomainService.save(report);

        report.setFiles(new ArrayList<>());
        request.getFiles().forEach(file -> {
           String filename = fileStorageUtil
                   .save(file, Path.of(reportDirectory, report.getId().toString()).toString());

           report.getFiles().add(TaskReportFile.builder()
                   .taskReport(report)
                   .fileName(filename)
                   .build()
           );
        });
    }
}
