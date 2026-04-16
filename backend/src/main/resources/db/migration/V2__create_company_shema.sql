CREATE TABLE companies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) UNIQUE NOT NULL,
    address VARCHAR(255) NOT NULL,
    field_of_employment TEXT NOT NULL,
    subscribe_fire_date DATE DEFAULT NOW() NOT NULL
);
