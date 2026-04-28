CREATE TABLE task_reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    status VARCHAR(50) NOT NULL,
    employee_task_id UUID NOT NULL REFERENCES employee_tasks(id),
    created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE task_report_files (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    task_report_id UUID NOT NULL REFERENCES task_reports(id),
    file_name VARCHAR(255) NOT NULL
);
