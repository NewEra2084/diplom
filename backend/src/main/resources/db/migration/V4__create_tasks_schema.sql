CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    manager_id UUID REFERENCES employees(id),
    company_id UUID REFERENCES companies(id)
);

CREATE TABLE task_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    company_id UUID NOT NULL REFERENCES companies(id)
);

CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    number_of_points INT NOT NULL,
    deadline DATE NOT NULL,
    publication_time TIMESTAMP NOT NULL,
    status VARCHAR(50) NOT NULL,
    task_category_id UUID NOT NULL,
    project_id UUID REFERENCES projects(id) NOT NULL,

    CONSTRAINT fk_task_category FOREIGN KEY (task_category_id) REFERENCES task_categories(id)
);

CREATE TABLE employee_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    task_id UUID NOT NULL,
    execution_status VARCHAR(50) DEFAULT 'IN_PROGRESS' NOT NULL,
    CONSTRAINT fk_employee_tasks_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_employee_task_task FOREIGN KEY (task_id) REFERENCES tasks(id)
);

CREATE TABLE requests (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    is_accepted BOOLEAN,
    task_id UUID,
    employee_id UUID,
    appointor_id UUID,
    CONSTRAINT fk_request_task FOREIGN KEY (task_id) REFERENCES tasks(id),
    CONSTRAINT fk_request_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_request_appointor FOREIGN KEY (appointor_id) REFERENCES employees(id)
);

CREATE TABLE task_comments (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    comment TEXT,
    date_of_writing TIMESTAMP,
    employee_id UUID,
    task_id UUID,
    CONSTRAINT fk_task_comment_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_task_comment_task FOREIGN KEY (task_id) REFERENCES tasks(id)
);
