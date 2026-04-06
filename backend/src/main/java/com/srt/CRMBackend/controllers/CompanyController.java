package com.srt.CRMBackend.controllers;

import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.UpdateCompanyRequest;
import com.srt.CRMBackend.services.company.CompanyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/company")
@Tag(name = "компания", description = "все методы доступны админам (кроме create)")
public class CompanyController {
    private final CompanyService companyService;

    @PostMapping("/create")
    @Operation(description = "создание компании, доступна всем")
    public void create(@Valid @RequestBody CreateCompanyRequest request) {
        companyService.create(request);
    }

    @PutMapping("/update")
    @Operation(description = "обновление информации о компании (пока доступно только создателю)")
    public void update(@Valid @RequestBody UpdateCompanyRequest request) {
        companyService.update(request);
    }
}
