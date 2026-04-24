package com.srt.CRMBackend.util;

import com.srt.CRMBackend.DTO.RoleEnum;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.models.employees.Employee;
import com.srt.CRMBackend.models.employees.Role;
import com.srt.CRMBackend.repositories.employee.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class AuthHelperUtil {
    private final RoleRepository roleRepository;

    public Employee getEmployee() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder
                .getContext().getAuthentication().getPrincipal();
        return userDetails.getEmployee();
    }

    public boolean isAuthenticated() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        return auth != null && auth.isAuthenticated()
                && !(auth instanceof AnonymousAuthenticationToken);
    }

    public boolean hasRole(RoleEnum role) {
        Role entity = roleRepository.getByName(role.name());
        return getEmployee().getRoles().contains(entity);
    }
}
