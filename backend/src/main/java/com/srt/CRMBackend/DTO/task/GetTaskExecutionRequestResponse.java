package com.srt.CRMBackend.DTO.task;

import com.srt.CRMBackend.DTO.employee.EmployeeDataResponse;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequestStatus;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class GetTaskExecutionRequestResponse {
    private UUID id;
    private TaskExecutionRequestStatus status;
    private EmployeeDataResponse executor;
    private TaskDataResponse task;
}
