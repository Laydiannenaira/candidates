CREATE DATABASE mycandidates;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS candidate (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  nome VARCHAR(255) NOT NULL,
  partido VARCHAR(255) NOT NULL,
  CONSTRAINT nome_partido_unique UNIQUE (nome, partido),
  voto INT
);

-- CREATE TABLE votos (
--     id INT PRIMARY KEY AUTO_INCREMENT,
--     candidato_id INT NOT NULL,
--     valor INT NOT NULL
-- );

