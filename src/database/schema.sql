CREATE DATABASE mycandidates;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS candidate (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  partido VARCHAR NOT NULL UNIQUE,
  votos NUMBER
);