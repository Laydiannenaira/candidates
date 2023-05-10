// eslint-disable-next-line import/no-extraneous-dependencies
const { v4 } = require('uuid');

let candidates = [
  {
    id: v4(),
    name: 'Laydianne',
    partido: 'PL',
    votos: '100',
  },
  {
    id: v4(),
    name: 'José',
    partido: 'PMDB',
    votos: '200',
  },
];

class CandidatesRepository {
  findAll() {
    return new Promise((resolve) => {
      resolve(candidates);
    });
  }

  findById(id) {
    return new Promise((resolve) => {
      resolve(candidates.find((candidate) => candidate.id === id));
    });
  }

  findByName(name) {
    return new Promise((resolve) => {
      resolve(candidates.find((candidate) => candidate.name === name));
    });
  }

  findByPartido(partido) {
    return new Promise((resolve) => {
      resolve(candidates.find((candidate) => candidate.partido === partido));
    });
  }

  delete(id) {
    return new Promise((resolve) => {
      candidates = candidates.filter((candidate) => candidate.id !== id);
      resolve();
    });
  }

  create({ name, partido, votos }) {
    return new Promise((resolve) => {
      const newCandidate = {
        id: v4(),
        name,
        partido,
        votos,
      };
      candidates.push(newCandidate);
      resolve(newCandidate);
    });
  }

  update(id, { name, partido, votos }) {
    return new Promise((resolve) => {
      const updateCandidate = {
        id,
        name,
        partido,
        votos,
      };
      candidates = candidates.map((candidate) => (
        candidate.id === id ? updateCandidate : candidate
      ));

      resolve(updateCandidate);
    });
  }
}

module.exports = new CandidatesRepository();
