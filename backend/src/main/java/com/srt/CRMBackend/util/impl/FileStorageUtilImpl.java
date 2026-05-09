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
    public String save(MultipartFile multipartFile, String subdirectory) {
        String filename = multipartFile.getOriginalFilename();
        assert filename != null;

        Path directoryPath = Path.of(storageLocation + subdirectory);
        Path file = directoryPath.resolve(filename);
        try {
            Files.createDirectories(directoryPath);
            multipartFile.transferTo(file);
        } catch (IOException e) {
            throw new IllegalStateException("file transfer error", e);
        }

        return file.toAbsolutePath().toString();
    }

    @Override
    public MediaType getContentType(Path path) {
        String contentType = determineContentType(path);
        return MediaType.parseMediaType(contentType);
    }

    @Override
    public boolean isImage(MultipartFile file) {
        String contentType = file.getContentType();
        System.out.println(contentType);
        return contentType != null && contentType.startsWith("image/");
    }

    @Override
    public void delete(String filepath) {
        Path path = Path.of(filepath);
        try {
            Files.delete(path);
        } catch (IOException e) {
            throw new IllegalStateException("file delete error");
        }
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
