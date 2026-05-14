package com.srt.CRMBackend.services.task.impl;

import com.srt.CRMBackend.DTO.request.RejectTaskExecutionRequest;
import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.TaskExecutionRequestMapper;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.tasks.Task;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequest;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequestStatus;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import com.srt.CRMBackend.repositories.tasks.TaskExecutionRequestRepository;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeTaskService;
import com.srt.CRMBackend.services.employee.domain.EmployeeDomainService;
import com.srt.CRMBackend.services.task.RequestService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Stream;

@Service
@RequiredArgsConstructor
public class RequestServiceImpl implements RequestService {
    private final TaskExecutionRequestRepository taskExecutionRequestRepository;
    private final EmployeeTaskService employeeTaskService;

    private final CompanyDomainService companyDomainService;
    private final AuthHelperUtil authHelperUtil;
    private final TaskExecutionRequestMapper taskExecutionRequestMapper;
    private final EmployeeDomainService employeeDomainService;
    private final TaskRepository taskRepository;

    @Override
    public List<GetTaskExecutionRequestResponse> getExecutionRequests() {
        List<TaskExecutionRequest> projectRequests = taskExecutionRequestRepository
                .findAllWithTaskAndEmployeeAndProjectByCompanyAndManager(
                        companyDomainService.getCompanyReference(),
                        authHelperUtil.getEmployee());
        List<TaskExecutionRequest> requests = taskExecutionRequestRepository
                .findAllWithTaskAndEmployeeAndProjectByCompanyWithoutProject(
                        companyDomainService.getCompanyReference());

        return Stream.concat(projectRequests.stream(), requests.stream())
                .map(taskExecutionRequestMapper::toResponse)
                .toList();
    }

    @Override
    @Transactional
    public void acceptExecutionRequest(UUID requestId) {
        TaskExecutionRequest taskExecutionRequest = taskExecutionRequestRepository
                .findWithTaskAndEmployeeByIdAndTask_company(requestId, companyDomainService.getCompanyReference())
                .orElseThrow(() -> new CrmBadRequestException("неправильный идентификатор"));

        if (taskExecutionRequest.getTask().getProject() != null &&
                !taskExecutionRequest.getTask().getProject().getManager().getId()
                        .equals(authHelperUtil.getEmployee().getId())) {
            throw new CrmBadRequestException("нету прав для принятия задачи");
        }

        taskExecutionRequest.setStatus(TaskExecutionRequestStatus.ACCEPTED);

        employeeTaskService.saveEmployeeTask(
                taskExecutionRequest.getEmployee().getId(),
                taskExecutionRequest.getTask().getId()
        );
    }

    @Override
    @Transactional
    public void rejectExecutionRequest(UUID requestId, RejectTaskExecutionRequest request) {
        TaskExecutionRequest taskExecutionRequest = taskExecutionRequestRepository
                .findWithTaskAndEmployeeByIdAndTask_company(requestId, companyDomainService.getCompanyReference())
                .orElseThrow(() -> new CrmBadRequestException("неправильный идентификатор"));

        if (taskExecutionRequest.getTask().getProject() != null &&
                !taskExecutionRequest.getTask().getProject().getManager().getId()
                        .equals(authHelperUtil.getEmployee().getId())) {
            throw new CrmBadRequestException("нету прав для принятия задачи");
        }

        taskExecutionRequest.setStatus(TaskExecutionRequestStatus.REJECTED);
        taskExecutionRequest.setComment(request.getComment());

        Task task = taskExecutionRequest.getTask();
        task.setStatus(TaskStatus.FREE);
        taskRepository.save(task);
    }
}
