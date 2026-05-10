package com.srt.CRMBackend.services.task;

import com.srt.CRMBackend.DTO.request.RejectTaskExecutionRequest;
import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;

import java.util.List;
import java.util.UUID;

public interface RequestService {
    List<GetTaskExecutionRequestResponse> getExecutionRequests();
    void acceptExecutionRequest(UUID requestId);
    void rejectExecutionRequest(UUID requestId, RejectTaskExecutionRequest request);
}
