package com.srt.CRMBackend.controllers;

import com.srt.CRMBackend.services.task.domain.TaskReportFileDomainService;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;

@RestController
@RequestMapping("/file/get")
@RequiredArgsConstructor
public class GetFileController {
    private final TaskReportFileDomainService taskReportFileDomainService;

    @GetMapping("/report/{fileId}")
    public ResponseEntity<Resource> getReportFileById(@PathVariable UUID fileId) {
        Path path = taskReportFileDomainService.getById(fileId);
        Resource resource = new FileSystemResource(path);
        return ResponseEntity.ok()
                .contentType(getContentType(path))
                .body(resource);
    }

    private MediaType getContentType(Path path) {
        String contentType = determineContentType(path);
        return MediaType.parseMediaType(contentType);
    }

    private String determineContentType(Path path) {
        try {
            String type = Files.probeContentType(path);
            return type != null ? type : "application/octet-stream";
        } catch (IOException e) {
            return "application/octet-stream";
        }
    }

}
