const express = require('express');
const router = express.Router();

const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/seed"; //url where psql is running
const db = pgp(connectionString); //connected db instance

console.log(db)

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// GET USER BY ID
router.get('/:id', async (req, res) => {
  const userId = req.body.user_id;

  try {
      const query = `SELECT * FROM users WHERE id = ${userId}`;
      const data = await db.any(query, [userId]);
      console.log(data)
      res.json({
          message: 'Returned all users',
          payload: data
      });
  } catch (err) {
      console.log(err);
      res.send(`Something went wrong, try again later.`);
  };
});

module.exports = router;