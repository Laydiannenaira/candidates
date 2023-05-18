// eslint-disable-next-line import/no-extraneous-dependencies

const db = require('../../database');

class CandidatesRepository {
  async findAll() {
    const rows = await db.query('SELECT * FROM candidate;');

    return rows;
  }

  async findById(id) {
    const row = await db.query('SELECT * FROM candidate WHERE id = $1', [id]);

    return row;
  }

  // async findById(id) {
  //   const query = 'SELECT * FROM candidate WHERE id = $1';
  //   const values = [id];
  //   const [row] = await db.query(query, values);
  //   return row;
  // }

  async findByName(name) {
    const row = await db.query('SELECT * FROM candidate WHERE nome = $1', [name]);

    return row;
  }

  async findByPartido(partido) {
    const row = await db.query('SELECT * FROM candidate WHERE partido = $1', [partido]);

    return row;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM candidate WHERE id =$1', [id]);
    return deleteOp;
  }

  async create({ name, partido, votos }) {
    const [row] = await db.query(`
      INSERT INTO candidate(nome, partido, voto)
      VALUES($1, $2, $3)
      RETURNING *
    `, [name, partido, votos]);

    return row;
  }

  async update(id, { name, partido, votos }) {
    const [row] = await db.query(`
    UPDATE candidate
    SET nome = $1, partido = $2, voto = COALESCE(voto, 0) + $3
    WHERE id = $4
    RETURNING *
  `, [name, partido, votos, id]);

    return row;
  }
}

module.exports = new CandidatesRepository();
