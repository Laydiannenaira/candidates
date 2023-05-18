// eslint-disable-next-line import/no-extraneous-dependencies
const { Client } = require('pg');

const client = new Client({
  host: 'localhost',
  port: 5432,
  user: 'root',
  password: 'root',
  database: 'mycandidates',
});

client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};

// async function Query(query) {
//   const { rows } = await client.query(query);
//   return rows;
// }

// Query('SELECT * FROM candidate').then(console.log);
