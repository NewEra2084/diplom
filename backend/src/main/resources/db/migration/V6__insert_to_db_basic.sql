INSERT INTO roles (name) VALUES
('ROLE_ADMIN'),
('ROLE_MANAGER'),
('ROLE_EMPLOYEE');

-- Вставка компаний
INSERT INTO companies (name, address, field_of_employment, subscribe_fire_date) VALUES
('ТехноПром', 'г. Москва, ул. Ленина, 15', 'Информационные технологии', '2025-12-31'),
('СтройГарант', 'г. Санкт-Петербург, Невский пр-т, 88', 'Строительство', '2025-11-30'),
('АгроХолдинг', 'г. Краснодар, ул. Северная, 45', 'Сельское хозяйство', '2025-10-15'),
('Медицинский Центр "Здоровье"', 'г. Новосибирск, пр. Димитрова, 28', 'Медицина', '2025-09-20'),
('ФинансГрупп', 'г. Екатеринбург, ул. Малышева, 51', 'Финансы и банковское дело', '2025-12-01');

-- Вставка ФИО
INSERT INTO full_names (first_name, last_name, patronymic) VALUES
('Иван', 'Петров', 'Александрович'),
('Мария', 'Сидорова', 'Владимировна'),
('Алексей', 'Иванов', 'Сергеевич'),
('Елена', 'Козлова', 'Дмитриевна'),
('Дмитрий', 'Смирнов', 'Андреевич'),
('Ольга', 'Кузнецова', 'Павловна'),
('Сергей', 'Морозов', 'Николаевич'),
('Анна', 'Волкова', 'Алексеевна'),
('Андрей', 'Зайцев', 'Максимович'),
('Татьяна', 'Соколова', 'Евгеньевна'),
('Владимир', 'Михайлов', 'Петрович'),
('Наталья', 'Фёдорова', 'Игоревна');

-- Вставка должностей (job_titles)
INSERT INTO job_titles (name, description, company_id) VALUES
('Разработчик Java', 'Разработка и поддержка программного обеспечения на Java', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Системный администратор', 'Администрирование IT-инфраструктуры', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Менеджер проектов', 'Управление проектами и командой', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Инженер-строитель', 'Проектирование и строительство объектов', (SELECT id FROM companies WHERE name = 'СтройГарант')),
('Прораб', 'Контроль строительных работ на объекте', (SELECT id FROM companies WHERE name = 'СтройГарант')),
('Агроном', 'Организация сельскохозяйственных работ', (SELECT id FROM companies WHERE name = 'АгроХолдинг')),
('Врач-терапевт', 'Прием пациентов, диагностика и лечение', (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"')),
('Медсестра', 'Помощь врачу, уход за пациентами', (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"')),
('Финансовый аналитик', 'Анализ финансовых показателей', (SELECT id FROM companies WHERE name = 'ФинансГрупп'));

-- Вставка квалификаций
INSERT INTO qualifications (name, job_title_id) VALUES
('Senior Developer', (SELECT id FROM job_titles WHERE name = 'Разработчик Java')),
('MCSA Certified', (SELECT id FROM job_titles WHERE name = 'Системный администратор')),
('PMP Certified', (SELECT id FROM job_titles WHERE name = 'Менеджер проектов')),
('Высшее строительное', (SELECT id FROM job_titles WHERE name = 'Инженер-строитель')),
('Мастер строительства', (SELECT id FROM job_titles WHERE name = 'Прораб')),
('Агроном высшей категории', (SELECT id FROM job_titles WHERE name = 'Агроном')),
('Высшая категория', (SELECT id FROM job_titles WHERE name = 'Врач-терапевт')),
('Первая категория', (SELECT id FROM job_titles WHERE name = 'Медсестра')),
('CFA Level 1', (SELECT id FROM job_titles WHERE name = 'Финансовый аналитик')),
('Middle Developer', (SELECT id FROM job_titles WHERE name = 'Разработчик Java'));

-- Вставка сотрудников
INSERT INTO employees (login, email, password, full_name_id, company_id, date_of_employment, qualification_id) VALUES
('ivan.petrov', 'ivan.petrov@techprom.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Иван' AND last_name = 'Петров'), (SELECT id FROM companies WHERE name = 'ТехноПром'), '2023-01-15', (SELECT id FROM qualifications WHERE name = 'Senior Developer')),
('maria.sidorova', 'maria.sidorova@techprom.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Мария' AND last_name = 'Сидорова'), (SELECT id FROM companies WHERE name = 'ТехноПром'), '2023-03-20', (SELECT id FROM qualifications WHERE name = 'PMP Certified')),
('alexey.ivanov', 'alexey.ivanov@techprom.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Алексей' AND last_name = 'Иванов'), (SELECT id FROM companies WHERE name = 'ТехноПром'), '2023-06-10', (SELECT id FROM qualifications WHERE name = 'Middle Developer')),
('elena.kozlova', 'elena.kozlova@stroygarant.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Елена' AND last_name = 'Козлова'), (SELECT id FROM companies WHERE name = 'СтройГарант'), '2023-02-01', (SELECT id FROM qualifications WHERE name = 'Высшее строительное')),
('dmitry.smirnov', 'dmitry.smirnov@stroygarant.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Дмитрий' AND last_name = 'Смирнов'), (SELECT id FROM companies WHERE name = 'СтройГарант'), '2023-04-15', (SELECT id FROM qualifications WHERE name = 'Мастер строительства')),
('olga.kuznetsova', 'olga.kuznetsova@agroholding.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Ольга' AND last_name = 'Кузнецова'), (SELECT id FROM companies WHERE name = 'АгроХолдинг'), '2023-07-01', (SELECT id FROM qualifications WHERE name = 'Агроном высшей категории')),
('sergey.morozov', 'sergey.morozov@medzdorovie.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Сергей' AND last_name = 'Морозов'), (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"'), '2023-01-10', (SELECT id FROM qualifications WHERE name = 'Высшая категория')),
('anna.volkova', 'anna.volkova@medzdorovie.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Анна' AND last_name = 'Волкова'), (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"'), '2023-05-20', (SELECT id FROM qualifications WHERE name = 'Первая категория')),
('andrey.zaytsev', 'andrey.zaytsev@finansgroup.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Андрей' AND last_name = 'Зайцев'), (SELECT id FROM companies WHERE name = 'ФинансГрупп'), '2023-08-15', (SELECT id FROM qualifications WHERE name = 'CFA Level 1')),
('tatyana.sokolova', 'tatyana.sokolova@techprom.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Татьяна' AND last_name = 'Соколова'), (SELECT id FROM companies WHERE name = 'ТехноПром'), '2023-09-01', (SELECT id FROM qualifications WHERE name = 'MCSA Certified')),
('vladimir.mikhaylov', 'vladimir.mikhaylov@stroygarant.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Владимир' AND last_name = 'Михайлов'), (SELECT id FROM companies WHERE name = 'СтройГарант'), '2023-10-10', (SELECT id FROM qualifications WHERE name = 'Высшее строительное')),
('natalya.fedorova', 'natalya.fedorova@finansgroup.ru', '$2a$12$MU.vTIV6avXTcNLa2gO66.PNS9rd4TPXDQyDlYcEER53d3CXW/ufW', (SELECT id FROM full_names WHERE first_name = 'Наталья' AND last_name = 'Фёдорова'), (SELECT id FROM companies WHERE name = 'ФинансГрупп'), '2023-11-20', (SELECT id FROM qualifications WHERE name = 'Middle Developer'));

-- Назначение ролей сотрудникам (employee_roles)
INSERT INTO employee_roles (employee_id, role_id) VALUES
((SELECT id FROM employees WHERE login = 'ivan.petrov'), (SELECT id FROM roles WHERE name = 'ROLE_ADMIN')),
((SELECT id FROM employees WHERE login = 'maria.sidorova'), (SELECT id FROM roles WHERE name = 'ROLE_MANAGER')),
((SELECT id FROM employees WHERE login = 'elena.kozlova'), (SELECT id FROM roles WHERE name = 'ROLE_MANAGER')),
((SELECT id FROM employees WHERE login = 'sergey.morozov'), (SELECT id FROM roles WHERE name = 'ROLE_MANAGER')),
((SELECT id FROM employees WHERE login = 'andrey.zaytsev'), (SELECT id FROM roles WHERE name = 'ROLE_MANAGER')),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'olga.kuznetsova'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'anna.volkova'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'vladimir.mikhaylov'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE')),
((SELECT id FROM employees WHERE login = 'natalya.fedorova'), (SELECT id FROM roles WHERE name = 'ROLE_EMPLOYEE'));

-- Вставка баллов (points)
INSERT INTO points (total, last_update, employee_id) VALUES
(850, '2024-01-15', (SELECT id FROM employees WHERE login = 'ivan.petrov')),
(920, '2024-01-20', (SELECT id FROM employees WHERE login = 'maria.sidorova')),
(670, '2024-01-10', (SELECT id FROM employees WHERE login = 'alexey.ivanov')),
(780, '2024-01-18', (SELECT id FROM employees WHERE login = 'elena.kozlova')),
(540, '2024-01-12', (SELECT id FROM employees WHERE login = 'dmitry.smirnov')),
(890, '2024-01-22', (SELECT id FROM employees WHERE login = 'olga.kuznetsova')),
(730, '2024-01-14', (SELECT id FROM employees WHERE login = 'sergey.morozov')),
(610, '2024-01-19', (SELECT id FROM employees WHERE login = 'anna.volkova')),
(950, '2024-01-21', (SELECT id FROM employees WHERE login = 'andrey.zaytsev')),
(720, '2024-01-16', (SELECT id FROM employees WHERE login = 'tatyana.sokolova')),
(580, '2024-01-13', (SELECT id FROM employees WHERE login = 'vladimir.mikhaylov')),
(690, '2024-01-17', (SELECT id FROM employees WHERE login = 'natalya.fedorova'));

-- Вставка проектов
INSERT INTO projects (name, description, manager_id, company_id) VALUES
('Разработка CRM системы', 'Создание корпоративной CRM системы для управления клиентами', (SELECT id FROM employees WHERE login = 'maria.sidorova'), (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Мобильное приложение', 'Разработка мобильного приложения для клиентов компании', (SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Жилой комплекс "Солнечный"', 'Строительство жилого комплекса на 500 квартир', (SELECT id FROM employees WHERE login = 'elena.kozlova'), (SELECT id FROM companies WHERE name = 'СтройГарант')),
('Весенняя посевная', 'Организация весенних посевных работ на полях', (SELECT id FROM employees WHERE login = 'olga.kuznetsova'), (SELECT id FROM companies WHERE name = 'АгроХолдинг')),
('Модернизация оборудования', 'Закупка и установка нового медицинского оборудования', (SELECT id FROM employees WHERE login = 'sergey.morozov'), (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"')),
('Финансовый дашборд', 'Разработка системы финансовой отчетности и аналитики', (SELECT id FROM employees WHERE login = 'andrey.zaytsev'), (SELECT id FROM companies WHERE name = 'ФинансГрупп'));

-- Вставка категорий задач
INSERT INTO task_categories (name, description, company_id) VALUES
('Разработка', 'Задачи по разработке программного обеспечения', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Тестирование', 'Задачи по тестированию и QA', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Документация', 'Написание технической документации', (SELECT id FROM companies WHERE name = 'ТехноПром')),
('Строительные работы', 'Задачи по строительству и ремонту', (SELECT id FROM companies WHERE name = 'СтройГарант')),
('Полевые работы', 'Задачи в поле и сельскохозяйственные работы', (SELECT id FROM companies WHERE name = 'АгроХолдинг')),
('Прием пациентов', 'Медицинские задачи по приему пациентов', (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"')),
('Диагностика', 'Медицинская диагностика и обследования', (SELECT id FROM companies WHERE name = 'Медицинский Центр "Здоровье"')),
('Финансовый анализ', 'Задачи по финансовому анализу и отчетности', (SELECT id FROM companies WHERE name = 'ФинансГрупп')),
('Бюджетирование', 'Планирование и контроль бюджета', (SELECT id FROM companies WHERE name = 'ФинансГрупп'));

-- Вставка задач
INSERT INTO tasks (name, description, number_of_points, deadline, publication_time, status, task_category_id, project_id) VALUES
('Разработать API для пользователей', 'Создать REST API для управления пользователями с JWT аутентификацией', 100, '2024-03-15', '2024-01-10 09:00:00', 'COMPLETED', (SELECT id FROM task_categories WHERE name = 'Разработка' AND company_id = (SELECT id FROM companies WHERE name = 'ТехноПром')), (SELECT id FROM projects WHERE name = 'Разработка CRM системы')),
('Написать unit-тесты', 'Покрыть код сервисов unit-тестами с минимальным покрытием 80%', 50, '2024-02-28', '2024-01-15 10:30:00', 'ACTIVE', (SELECT id FROM task_categories WHERE name = 'Тестирование' AND company_id = (SELECT id FROM companies WHERE name = 'ТехноПром')), (SELECT id FROM projects WHERE name = 'Разработка CRM системы')),
('Создать документацию API', 'Написать Swagger документацию для всех эндпоинтов', 30, '2024-02-20', '2024-01-20 14:00:00', 'ACTIVE', (SELECT id FROM task_categories WHERE name = 'Документация' AND company_id = (SELECT id FROM companies WHERE name = 'ТехноПром')), (SELECT id FROM projects WHERE name = 'Разработка CRM системы')),
('Заливка фундамента', 'Подготовка и заливка фундамента для корпуса 1', 200, '2024-04-10', '2024-01-05 08:00:00', 'ACTIVE', (SELECT id FROM task_categories WHERE name = 'Строительные работы'), (SELECT id FROM projects WHERE name = 'Жилой комплекс "Солнечный"')),
('Подготовка почвы', 'Вспашка и удобрение полей под посев', 75, '2024-03-25', '2024-01-12 07:30:00', 'COMPLETED', (SELECT id FROM task_categories WHERE name = 'Полевые работы'), (SELECT id FROM projects WHERE name = 'Весенняя посевная')),
('Проведение осмотров', 'Профилактические осмотры сотрудников предприятия', 80, '2024-03-20', '2024-01-18 09:15:00', 'OVERDUE', (SELECT id FROM task_categories WHERE name = 'Прием пациентов'), (SELECT id FROM projects WHERE name = 'Модернизация оборудования')),
('Разработка дашборда', 'Создать интерактивный дашборд для финансовой отчетности', 120, '2024-03-30', '2024-01-22 11:00:00', 'ACTIVE', (SELECT id FROM task_categories WHERE name = 'Финансовый анализ'), (SELECT id FROM projects WHERE name = 'Финансовый дашборд')),
('Настройка серверов', 'Настройка production серверов и развертывание приложения', 60, '2024-02-25', '2024-01-08 13:00:00', 'COMPLETED', (SELECT id FROM task_categories WHERE name = 'Разработка' AND company_id = (SELECT id FROM companies WHERE name = 'ТехноПром')), (SELECT id FROM projects WHERE name = 'Разработка CRM системы')),
('Согласование сметы', 'Согласование строительной сметы с заказчиком', 40, '2024-02-15', '2024-01-25 10:00:00', 'ACTIVE', (SELECT id FROM task_categories WHERE name = 'Строительные работы'), (SELECT id FROM projects WHERE name = 'Жилой комплекс "Солнечный"'));

-- Вставка назначений задач сотрудникам (employee_tasks)
INSERT INTO employee_tasks (employee_id, task_id, execution_status) VALUES
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Разработать API для пользователей'), 'COMPLETED'),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Написать unit-тесты'), 'IN_PROGRESS'),
((SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM tasks WHERE name = 'Создать документацию API'), 'IN_PROGRESS'),
((SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM tasks WHERE name = 'Заливка фундамента'), 'IN_PROGRESS'),
((SELECT id FROM employees WHERE login = 'olga.kuznetsova'), (SELECT id FROM tasks WHERE name = 'Подготовка почвы'), 'COMPLETED'),
((SELECT id FROM employees WHERE login = 'anna.volkova'), (SELECT id FROM tasks WHERE name = 'Проведение осмотров'), 'OVERDUE'),
((SELECT id FROM employees WHERE login = 'natalya.fedorova'), (SELECT id FROM tasks WHERE name = 'Разработка дашборда'), 'IN_PROGRESS'),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Настройка серверов'), 'COMPLETED'),
((SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM tasks WHERE name = 'Согласование сметы'), 'IN_PROGRESS'),
((SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM tasks WHERE name = 'Разработать API для пользователей'), 'COMPLETED'),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Разработка дашборда'), 'IN_PROGRESS');

-- Вставка комментариев к задачам
INSERT INTO task_comments (comment, date_of_writing, employee_id, task_id) VALUES
('API готов, отправляю на ревью', '2024-02-01 15:30:00', (SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Разработать API для пользователей')),
('Тесты написаны, покрытие 85%', '2024-02-10 11:20:00', (SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Написать unit-тесты')),
('Работа идет по плану, закончу к дедлайну', '2024-02-05 09:45:00', (SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM tasks WHERE name = 'Создать документацию API')),
('Фундамент залит, ждем застывания', '2024-02-12 16:00:00', (SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM tasks WHERE name = 'Заливка фундамента')),
('Почва подготовлена, можно сеять', '2024-01-30 08:30:00', (SELECT id FROM employees WHERE login = 'olga.kuznetsova'), (SELECT id FROM tasks WHERE name = 'Подготовка почвы')),
('Осмотры задерживаются из-за отсутствия оборудования', '2024-02-08 14:15:00', (SELECT id FROM employees WHERE login = 'anna.volkova'), (SELECT id FROM tasks WHERE name = 'Проведение осмотров')),
('Дашборд в разработке, готов макет', '2024-02-07 12:00:00', (SELECT id FROM employees WHERE login = 'natalya.fedorova'), (SELECT id FROM tasks WHERE name = 'Разработка дашборда')),
('Сервера настроены успешно', '2024-01-28 17:30:00', (SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Настройка серверов'));

-- Вставка запросов (requests)
INSERT INTO requests (is_accepted, task_id, employee_id, appointor_id) VALUES
(TRUE, (SELECT id FROM tasks WHERE name = 'Разработать API для пользователей'), (SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM employees WHERE login = 'maria.sidorova')),
(FALSE, (SELECT id FROM tasks WHERE name = 'Написать unit-тесты'), (SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM employees WHERE login = 'maria.sidorova')),
(TRUE, (SELECT id FROM tasks WHERE name = 'Заливка фундамента'), (SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM employees WHERE login = 'elena.kozlova')),
(TRUE, (SELECT id FROM tasks WHERE name = 'Разработка дашборда'), (SELECT id FROM employees WHERE login = 'natalya.fedorova'), (SELECT id FROM employees WHERE login = 'andrey.zaytsev'));

-- Вставка запросов на выполнение задач (task_execution_requests)
INSERT INTO task_execution_requests (employee_id, task_id, is_accepted) VALUES
((SELECT id FROM employees WHERE login = 'tatyana.sokolova'), (SELECT id FROM tasks WHERE name = 'Написать unit-тесты'), TRUE),
((SELECT id FROM employees WHERE login = 'dmitry.smirnov'), (SELECT id FROM tasks WHERE name = 'Создать документацию API'), FALSE),
((SELECT id FROM employees WHERE login = 'anna.volkova'), (SELECT id FROM tasks WHERE name = 'Подготовка почвы'), TRUE),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), (SELECT id FROM tasks WHERE name = 'Согласование сметы'), TRUE),
((SELECT id FROM employees WHERE login = 'vladimir.mikhaylov'), (SELECT id FROM tasks WHERE name = 'Проведение осмотров'), FALSE);

-- Вставка токенов (для активных сессий)
INSERT INTO tokens (employee_id, token) VALUES
((SELECT id FROM employees WHERE login = 'ivan.petrov'), 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJpdmFuLnBldHJvdiIsIm5hbWUiOiJJdmFuIFBldHJvdiJ9.example1'),
((SELECT id FROM employees WHERE login = 'maria.sidorova'), 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJtYXJpYS5zaWRvcm92YSIsIm5hbWUiOiJNYXJpYSBTaWRvcm92YSJ9.example2'),
((SELECT id FROM employees WHERE login = 'alexey.ivanov'), 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJhbGV4ZXkuaXZhbm92IiwibmFtZSI6IkFsZXhleSBJdmFub3YifQ.example3');