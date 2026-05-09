package com.srt.CRMBackend.controllers;

import com.srt.CRMBackend.DTO.company.CreateCompanyRequest;
import com.srt.CRMBackend.DTO.company.GetCompanyResponse;
import com.srt.CRMBackend.DTO.company.RenewCompanySubscriptionRequest;
import com.srt.CRMBackend.DTO.company.UpdateCompanyRequest;
import com.srt.CRMBackend.services.company.CompanyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.security.access.prepost.PreAuthorize;
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

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PutMapping("/update")
    @Operation(description = "обновление информации о компании (доступна администраторам в данной компании)")
    public void update(@Valid @RequestBody UpdateCompanyRequest request) {
        companyService.update(request);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PatchMapping("/renew/subscription")
    @Operation(description = "продление подписки")
    public void renewSubscription(@Valid @RequestBody RenewCompanySubscriptionRequest request) {
        companyService.renewSubscription(request);
    }

    // auth users
    @GetMapping("/get")
    @Operation(description = "получение информации о компании")
    public GetCompanyResponse getCompany() {
        return companyService.getCompany();
    }
}
