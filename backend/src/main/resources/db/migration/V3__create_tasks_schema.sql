CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    creator_id UUID REFERENCES employees(id) NOT NULL,
    field_of_employment TEXT NOT NULL,
    subscribe_fire_date TIMESTAMP DEFAULT NOW() NOT NULL
);

CREATE TABLE projects (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    manager_id UUID REFERENCES employees(id),
    company_id UUID REFERENCES companies(id)
);

CREATE TABLE task_categories (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE,
    description VARCHAR(255)
);

CREATE TABLE tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    description TEXT,
    number_of_points INT,
    deadline DATE,
    publication_time TIMESTAMP,
    status VARCHAR(50),
    task_category_id UUID,
    project_id UUID REFERENCES projects(id),
    CONSTRAINT fk_task_category FOREIGN KEY (task_category_id) REFERENCES task_categories(id)
);

CREATE TABLE employee_tasks (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID,
    task_id UUID,
    execution_status VARCHAR(50) DEFAULT 'IN_PROGRESS',
    CONSTRAINT fk_employee_tasks_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_employee_task_task FOREIGN KEY (task_id) REFERENCES tasks(id)
);

CREATE TABLE qualification_level_for_task (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    qualification_id UUID,
    task_id UUID,
    CONSTRAINT fk_qual_for_task_qualification FOREIGN KEY (qualification_id) REFERENCES qualifications(id),
    CONSTRAINT fk_qual_for_task_task FOREIGN KEY (task_id) REFERENCES tasks(id)
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
