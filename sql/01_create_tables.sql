CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS budgets (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    category TEXT NOT NULL,
    maximum DECIMAL(10,2) NOT NULL,
    theme TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS transactions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    avatar TEXT NOT NULL,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    date TIMESTAMP WITH TIME ZONE NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    recurring BOOLEAN NOT NULL DEFAULT false
);

CREATE TABLE IF NOT EXISTS pots (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    target DECIMAL(10,2) NOT NULL,
    total DECIMAL(10,2) NOT NULL,
    theme TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS balance (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    current DECIMAL(10,2) NOT NULL,
    income DECIMAL(10,2) NOT NULL,
    expenses DECIMAL(10,2) NOT NULL
);



