package com.srt.CRMBackend.util;

import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

public interface FileStorageUtil {
    void uploadFile(MultipartFile multipartFile, String fileName) throws IOException;
    Path getFile(String path);
    String getRandomName(MultipartFile file);
    MediaType getContentType(Path path);
    boolean isImage(MultipartFile file);
}
