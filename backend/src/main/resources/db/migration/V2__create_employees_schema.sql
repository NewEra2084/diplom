CREATE TABLE full_names (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    patronymic VARCHAR(255)
);

CREATE TABLE job_titles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE,
    description TEXT
);

CREATE TABLE qualifications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255),
    job_title_id UUID,
    CONSTRAINT fk_qualification_job_title FOREIGN KEY (job_title_id) REFERENCES job_titles(id)
);

CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE
);

CREATE TABLE employees (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    login VARCHAR(255) UNIQUE,
    email VARCHAR(255) UNIQUE,
    password VARCHAR(255),
    full_name_id UUID,
    qualification_id UUID,
    avatar_path TEXT,

    CONSTRAINT fk_employee_full_name FOREIGN KEY (full_name_id) REFERENCES full_names(id),
    CONSTRAINT fk_employee_qualification FOREIGN KEY (qualification_id) REFERENCES qualifications(id)
);

CREATE TABLE employee_roles (
    employee_id UUID,
    role_id UUID,
    PRIMARY KEY (employee_id, role_id),
    CONSTRAINT fk_emp_role_employee FOREIGN KEY (employee_id) REFERENCES employees(id),
    CONSTRAINT fk_emp_role_role FOREIGN KEY (role_id) REFERENCES roles(id)
);

CREATE TABLE personal_employees_data (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID UNIQUE,
    phone_number VARCHAR(255),
    passport_number INT,
    passport_series INT,
    date_of_employment DATE,
    CONSTRAINT fk_pers_emp_data_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE points (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    total INT,
    last_update DATE,
    employee_id UUID UNIQUE,
    CONSTRAINT fk_points_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);

CREATE TABLE tokens (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    employee_id UUID,
    token TEXT,
    CONSTRAINT fk_token_employee FOREIGN KEY (employee_id) REFERENCES employees(id)
);
