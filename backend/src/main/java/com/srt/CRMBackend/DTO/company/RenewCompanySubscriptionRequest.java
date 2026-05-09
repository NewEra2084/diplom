package com.srt.CRMBackend.DTO.company;

import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDate;

@Data
@AllArgsConstructor
public class RenewCompanySubscriptionRequest {
    @NotNull
    private LocalDate subscribeFireDate;
}
