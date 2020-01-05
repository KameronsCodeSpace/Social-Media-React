// get all the posts
// who was the poster

const express = require('express');
const pgp = require('pg-promise')();
const connectionString = "postgres://localhost:5432/seed"; //url where psql is running
const db = pgp(connectionString); //connected db instance

const Router = express.Router();

// GET ALL POSTS
Router.get("/", async (req, res) => {
    try {
        let posts = await db.any(`SELECT * FROM posts`);
        res.json({
            "status": "Success",
            "message": "Retrieved all posts",
            "payload": posts
        });
    } catch (error) {
        console.log("Error:", error);
        res.status(500);
        res.json({  
            "status": "error",
            message: "Couldn't retrieve all of the posts",
            payload: null
        });
    }
});

module.exports = Router;