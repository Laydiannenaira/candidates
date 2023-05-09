// eslint-disable-next-line import/no-extraneous-dependencies
const { uuid } = require('uuidv4');

const candidates = [
  {
    id: uuid(),
    name: 'Laydianne',
    partido: 'PL',
    votos: '100',
  },
];

class CandidatesRepository {
  findAll() {
    return candidates;
  }
}

module.exports = new CandidatesRepository();
