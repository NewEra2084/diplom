package com.srt.CRMBackend.util.impl;

import com.srt.CRMBackend.util.FileStorageUtil;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;

@Component
public class FileStorageUtilImpl implements FileStorageUtil {
    private final String storageLocation;

    public FileStorageUtilImpl(
            @Value("${storage.location}") String storageLocation
    ) {
        this.storageLocation = storageLocation;

        if (!Files.exists(Path.of(storageLocation)) &&
                !new File(storageLocation).mkdirs()) {
            throw new IllegalStateException("storage location make dir error");
        }
    }

    @Override
    public void uploadFile(MultipartFile multipartFile, String fileName) throws IOException {
        Path path = Path.of(storageLocation + fileName);
        multipartFile.transferTo(path);
    }

    @Override
    public Path getFile(String path) {
        return Path.of(storageLocation + path);
    }

    @Override
    public String getRandomName(MultipartFile file) {
        String originalFilename = file.getOriginalFilename();
        assert originalFilename != null;
        String extension = originalFilename.substring(originalFilename.indexOf('.'));
        return UUID.randomUUID() + extension;
    }

    @Override
    public MediaType getContentType(Path path) {
        String contentType = determineContentType(path);
        return MediaType.parseMediaType(contentType);
    }

    @Override
    public boolean isImage(MultipartFile file) {
        return file != null && file.getContentType() != null && file.getContentType().startsWith("image/");
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
