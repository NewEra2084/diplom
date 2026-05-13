package com.srt.CRMBackend.controllers.task;

import com.srt.CRMBackend.DTO.request.RejectTaskExecutionRequest;
import com.srt.CRMBackend.DTO.task.GetTaskExecutionRequestResponse;
import com.srt.CRMBackend.models.tasks.TaskExecutionRequest;
import com.srt.CRMBackend.services.task.RequestService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("/task/requests")
@RequiredArgsConstructor
@Slf4j
@Tag(name = "работа с заявками", description = "все методы доступны менеджерам и админам")
public class RequestController {
    private final RequestService requestService;

    @GetMapping("/get_execution_requests")
    public List<GetTaskExecutionRequestResponse> getExecutionRequests() {
        return requestService.getExecutionRequests();
    }

    @PatchMapping("/accept_execution_request/{requestId}")
    public Map<String, String> acceptExecutionRequest(@PathVariable UUID requestId) {
        requestService.acceptExecutionRequest(requestId);
        return Map.of("message", "запрос на выполнение задачи принят");
    }

    @PatchMapping("/reject_execution_request/{requestId}")
    public Map<String, String> rejectExecutionRequest(
            @PathVariable UUID requestId,
            @RequestBody @Valid RejectTaskExecutionRequest request) {
        requestService.rejectExecutionRequest(requestId, request);
        return Map.of("message", "запрос на выполнение задачи отклонен");
    }
}
