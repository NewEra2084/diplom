package com.srt.CRMBackend.DTO.employee;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.web.multipart.MultipartFile;

@Data
@AllArgsConstructor
public class UploadAvatarRequest {
    @NotNull
    private MultipartFile image;
}
