package com.srt.CRMBackend.util;

import org.springframework.http.MediaType;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;

public interface FileStorageUtil {
    String save(MultipartFile multipartFile, String subdirectory);
    MediaType getContentType(Path path);
    boolean isImage(MultipartFile file);
    void delete(String filepath);
}
