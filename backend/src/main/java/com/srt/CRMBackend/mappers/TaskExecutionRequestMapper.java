package com.srt.CRMBackend.mappers;

import com.srt.CRMBackend.DTO.task.GetTaskEmployeeRequests;
import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface TaskExecutionRequestMapper {
    GetTaskEmployeeRequests toGetTaskEmployeeRequests(TaskExecutionRequest taskExecutionRequest);

    @Mapping(target = "executor.id", source = "employee.id")
    @Mapping(target = "executor.firstName", source = "employee.fullName.firstName")
    @Mapping(target = "executor.lastName", source = "employee.fullName.lastName")
    @Mapping(target = "executor.patronymic", source = "employee.fullName.patronymic")
    GetTaskExecutionRequestResponse toResponse(TaskExecutionRequest request);
}
