CREATE TABLE task_execution_requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    task_id UUID NOT NULL,
    status VARCHAR(50) NOT NULL,
    comment TEXT,

    CONSTRAINT fk_task_execution_request_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_task_execution_request_task FOREIGN KEY (task_id) REFERENCES tasks(id)
);
