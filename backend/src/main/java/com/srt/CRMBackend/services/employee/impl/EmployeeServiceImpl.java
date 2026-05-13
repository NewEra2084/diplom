package com.srt.CRMBackend.services.employee.impl;

import com.srt.CRMBackend.DTO.employee.EmployeeDTO;
import com.srt.CRMBackend.DTO.employee.UpdateAccountRequest;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ReportMapper;
import com.srt.CRMBackend.models.employees.*;
import com.srt.CRMBackend.repositories.employee.EmployeeRepository;
import com.srt.CRMBackend.repositories.employee.PointRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.employee.EmployeeService;
import com.srt.CRMBackend.util.AuthHelperUtil;
import com.srt.CRMBackend.util.FileStorageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final PointRepository pointRepository;
    private final FileStorageUtil fileStorageUtil;
    private final CompanyDomainService companyDomainService;

    private final AuthHelperUtil authHelperUtil;
    private final ReportMapper reportMapper;

    @Value("${storage.avatar-directory}")
    private String avatarDirectory;

    @Override
    public EmployeeDTO getEmployeeData() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        Employee employee = employeeRepository.findByLoginWithRolesAndQualificationAndJobTitle(userDetails.getUsername())
                .orElseThrow();

        return toEmployeeDTO(employee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAllByCompanyWithRolesAndQualificationAndJobTitle(
                companyDomainService.getCompanyReference());
        return employees.stream().map(this::toEmployeeDTO)
                .toList();
    }

    public EmployeeDTO toEmployeeDTO(Employee employee) {
        Optional<Qualification> qualification = Optional.ofNullable(employee.getQualification());
        return EmployeeDTO.builder()
                .id(employee.getId())
                .login(employee.getLogin())
                .email(employee.getEmail())
                .firstName(employee.getFullName().getFirstName())
                .lastName(employee.getFullName().getLastName())
                .patronymic(employee.getFullName().getPatronymic())
                .qualificationName(
                        qualification.map(Qualification::getName)
                                .orElse("unknown")
                )
                .jobTitleName(
                        qualification.map(Qualification::getJobTitle)
                                .map(JobTitle::getName)
                                .orElse("unknown")
                )
                .rolesName(
                        employee.getRoles().stream()
                                .map(Role::getAuthority)
                                .collect(Collectors.toSet())
                )
                .build();
    }


    @Override
    public int getCountOfPointers() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        Optional<Point> point = pointRepository.findByEmployeeId(
                userDetails.getEmployee().getId());
        return point.map(Point::getTotal).orElse(0);
    }

    @Override
    public void uploadAvatar(MultipartFile avatar) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        if (!fileStorageUtil.isImage(avatar)) {
            throw new CrmBadRequestException("file format error");
        }

        if (userDetails.getEmployee().getAvatarPath() != null) {
            fileStorageUtil.delete(userDetails.getEmployee().getAvatarPath());
        }

        String fileAbsolutePath = fileStorageUtil.save(
                avatar,
                Path.of(avatarDirectory, userDetails.getEmployee().getId().toString()).toString()
        );

        userDetails.getEmployee().setAvatarPath(fileAbsolutePath);
        employeeRepository.save(userDetails.getEmployee());
    }

    @Override
    public Optional<Path> downloadAvatar(UUID employeeId) {
        Employee employee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new CrmBadRequestException("user not found"));
        if (employee.getAvatarPath() == null) {
            return Optional.empty();
        }
        return Optional.of(Path.of(employee.getAvatarPath()));
    }

    @Override
    @Transactional
    public void updateEmployee(UpdateAccountRequest request) {
        Employee employee = authHelperUtil.getEmployee();

        FullName fullName = employee.getFullName();
        fullName.setFirstName(request.getFirstName());
        fullName.setLastName(request.getLastName());
        fullName.setPatronymic(request.getPatronymic());

        employee.setEmail(request.getEmail());
        employee.setLogin(request.getLogin());

        employeeRepository.save(employee);
    }
}
