// const environment = process.env.NODE_ENV || 'development';
// const config = require('../knexfile')[environment];
// module.exports = require('knex')(config);

const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/seed"; //url where psql is running
const db = pgp(connectionString); //connected db instance

module.exports = db