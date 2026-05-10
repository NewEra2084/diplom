package com.srt.CRMBackend.services.task.impl;

import com.srt.CRMBackend.DTO.task.*;
import com.srt.CRMBackend.auth.UserDetailsImpl;
import com.srt.CRMBackend.exceptions.CrmBadRequestException;
import com.srt.CRMBackend.mappers.ProjectMapper;
import com.srt.CRMBackend.models.Company;
import com.srt.CRMBackend.models.employees.Role;
import com.srt.CRMBackend.models.tasks.Project;
import com.srt.CRMBackend.models.tasks.Task;
import com.srt.CRMBackend.models.tasks.TaskCategory;
import com.srt.CRMBackend.models.tasks.TaskStatus;
import com.srt.CRMBackend.repositories.tasks.ProjectRepository;
import com.srt.CRMBackend.repositories.tasks.TaskRepository;
import com.srt.CRMBackend.repositories.tasks.TaskCategoryRepository;
import com.srt.CRMBackend.services.company.domain.CompanyDomainService;
import com.srt.CRMBackend.services.task.TaskService;
import com.srt.CRMBackend.services.task.domain.TaskDomainService;
import com.srt.CRMBackend.util.FileStorageUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.file.Path;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.UUID;
import java.time.LocalDateTime;

@Service
@RequiredArgsConstructor
public class TaskServiceImpl implements TaskService {
    private final TaskRepository taskRepository;
    private final TaskCategoryRepository taskCategoryRepository;

    private final ProjectRepository projectRepository;
    private final ProjectMapper projectMapper;
    private final CompanyDomainService companyDomainService;
    private final FileStorageUtil fileStorageUtil;
    private final TaskDomainService taskDomainService;

    @Value("${storage.task-directory}")
    private String taskDirectory;

    @Override
    @Transactional
    public void addTask(TaskRequest request) {
        Company company = companyDomainService.getCompanyReference();
        TaskCategory taskCategory = null;

        if (request.getTaskCategoryId() != null) {
            taskCategory = taskCategoryRepository
                    .findByIdAndCompany(request.getTaskCategoryId(), company)
                    .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор категории задачи"));
        }

        Project project = null;

        if (request.getProjectId() != null) {
            project = projectRepository
                    .findByIdAndCompany(request.getProjectId(), company)
                    .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор проекта"));
        }

        Task task = Task.builder()
                .name(request.getName())
                .description(request.getDescription())
                .numberOfPoints(request.getNumberOfPoints())
                .deadline(request.getDeadline())
                .publicationTime(LocalDateTime.now())
                .status(TaskStatus.FREE)
                .taskCategory(taskCategory)
                .project(project)
                .company(companyDomainService.getCompanyReference())
                .build();
        taskRepository.save(task);

        if (request.getImage() != null) {
            String filepath = fileStorageUtil.save(
                    request.getImage(),
                    Path.of(taskDirectory, task.getId().toString()).toString());
            task.setImagePath(filepath);

            taskRepository.save(task);
        }
    }

    @Override
    public void deleteTask(UUID taskId) {
        taskRepository.deleteById(taskId);
    }

    @Override
    public void updateTask(UpdateTaskRequest request) {
        Task task = taskRepository.findById(request.getId())
                .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор задачи"));

        Company company = companyDomainService.getCompanyReference();
        TaskCategory taskCategory = null;

        if (request.getTaskCategoryId() != null) {
            taskCategory = taskCategoryRepository
                    .findByIdAndCompany(request.getTaskCategoryId(), company)
                    .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор категории задачи"));
        }

        Project project = null;

        if (request.getProjectId() != null) {
            project = projectRepository
                    .findByIdAndCompany(request.getProjectId(), company)
                    .orElseThrow(() -> new CrmBadRequestException("некорректный идентификатор проекта"));
        }

        task.setName(request.getName());
        task.setDescription(request.getDescription());
        task.setNumberOfPoints(request.getNumberOfPoints());
        task.setDeadline(request.getDeadline());
        task.setPublicationTime(LocalDateTime.now());
        task.setTaskCategory(taskCategory);
        task.setProject(project);

        if (task.getImagePath() != null) {
            fileStorageUtil.delete(task.getImagePath());
        }

        if (request.getImage() != null) {
            String filepath = fileStorageUtil.save(
                    request.getImage(),
                    Path.of(taskDirectory, task.getId().toString()).toString());
            task.setImagePath(filepath);
        }

        taskRepository.save(task);
    }

    @Override
    public void addTaskCategory(TaskCategoryRequest request) {
        Company company = companyDomainService.getCompanyReference();
        if (taskCategoryRepository.existsByNameAndCompany(request.getName(), company)) {
            throw new CrmBadRequestException("некорректное имя категории");
        }

        TaskCategory taskCategory = TaskCategory.builder()
                .name(request.getName())
                .description(request.getDescription())
                .company(company)
                .build();

        taskCategoryRepository.save(taskCategory);
    }

    @Override
    public List<TaskCategoryDTO> getAllTaskCategories() {
        return taskCategoryRepository.findAllByCompany(companyDomainService.getCompanyReference()).stream()
                .map(c -> TaskCategoryDTO.builder()
                        .id(c.getId())
                        .name(c.getName())
                        .description(c.getDescription()).build()
                ).toList();
    }

    @Override
    public List<TaskResponse> getAllTasksWithoutProject() {
        return taskRepository.findWithCategoryAllByCompanyAndProjectNull(companyDomainService.getCompanyReference())
                .stream()
                .filter(this::isPrivateTask)
                .map(t -> TaskResponse.builder()
                        .id(t.getId())
                        .numberOfPoints(t.getNumberOfPoints())
                        .name(t.getName())
                        .deadline(t.getDeadline())
                        .description(t.getDescription())
                        .category(
                                t.getTaskCategory() != null
                                        ? TaskCategoryDTO.builder()
                                          .id(t.getTaskCategory().getId())
                                          .name(t.getTaskCategory().getName())
                                          .description(t.getTaskCategory().getDescription()).build()
                                        : null
                        )
                        .status(t.getStatus()).build()
                ).toList();
    }

    @Override
    public Optional<Path> getImagePath(UUID taskId) {
        Task task = taskDomainService.getByIdAndCurrentCompany(taskId);

        if (task.getImagePath() == null) {
            return Optional.empty();
        }

        return Optional.of(Path.of(task.getImagePath()));
    }

    private boolean isPrivateTask(Task t) {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();

        if (t.getStatus() != TaskStatus.FREE) {
            Set<Role> roles = userDetails.getEmployee().getRoles();
            for (Role role : roles) {
                if (role.getAuthority().equals("ROLE_ADMIN") ||
                        role.getAuthority().equals("ROLE_MANAGER")) {
                    return true;
                }
            }
            return false;
        }
        return true;
    }
}
