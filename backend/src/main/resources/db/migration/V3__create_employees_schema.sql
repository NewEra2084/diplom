CREATE TABLE full_names (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    patronymic VARCHAR(255)
);

CREATE TABLE job_titles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    description TEXT NOT NULL,
    company_id UUID NOT NULL REFERENCES companies(id)
);

CREATE TABLE qualifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    job_title_id UUID NOT NULL,

    CONSTRAINT fk_qualification_job_title FOREIGN KEY (job_title_id) REFERENCES job_titles(id)
);

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL
);

CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    login VARCHAR(255) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name_id UUID NOT NULL,
    company_id UUID NOT NULL,
    date_of_employment DATE DEFAULT NOW() NOT NULL,
    qualification_id UUID,
    avatar_path TEXT,

    CONSTRAINT fk_employee_full_name FOREIGN KEY (full_name_id) REFERENCES full_names(id),
    CONSTRAINT fk_employee_qualification FOREIGN KEY (qualification_id) REFERENCES qualifications(id),
    CONSTRAINT fk_employee_company FOREIGN KEY (company_id) REFERENCES companies(id)
);

CREATE TABLE employee_roles (
    employee_id UUID NOT NULL,
    role_id UUID NOT NULL,

    PRIMARY KEY (employee_id, role_id),
    CONSTRAINT fk_emp_role_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_emp_role_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE points (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    total INT NOT NULl,
    last_update DATE DEFAULT NOW() NOT NULL,
    employee_id UUID UNIQUE NOT NULL,
    CONSTRAINT fk_points_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID NOT NULL,
    token TEXT NOT NULL,
    CONSTRAINT fk_token_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);
