// make a post request where i send the body to the db to see if it exists, it it does't make an account

const express = require('express');
const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/seed"; //url where psql is running
const db = pgp(connectionString); //connected db instance

const Router = express.Router();

Router.post("/", async (req, res) => {
    console.log(req.body);
    const { email, is_logged_in } = req.body;
    const inputQuery = `INSERT INTO users(email, is_logged_in) VALUES($1, $2)`;

    try {
        await db.none(inputQuery, [email, is_logged_in]);
        res.json({
            payload: likes,
            message: `Success`,
            success: true
        });

    } catch (error) {
        console.log("Error:", error);
        res.status(500);
        res.json({  
            message: "Error. Something went wrong!",
            success: false
        });
    }
});

module.exports = Router;