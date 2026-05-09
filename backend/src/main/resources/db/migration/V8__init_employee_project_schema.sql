CREATE TABLE employee_projects (
    employee_id UUID REFERENCES employees(id) NOT NULL,
    project_id UUID REFERENCES projects(id) NOT NULL
);