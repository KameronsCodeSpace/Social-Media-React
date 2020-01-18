const express = require('express');
const db = require('../db/connection')

const Router = express.Router();
// ADD NEW ALBUM
Router.post("/", async (req, res) => {
    console.log("POST method for adding a new post started");
    console.log("req.body:", req.body);
    let insertQuery = `
    INSERT INTO posts (post_owner, title, body) VALUES ($1, $2, $3)
    `;
    try {
        await db.none(insertQuery, [req.body.post_owner, req.body.title, req.body.body]);
        res.json({
            "status": "Success",
            "message": "Added one post",
            "payload": [req.body.post_owner, req.body.title, req.body.body]
        });
    } catch (error) {
        console.log("error:", error);
        res.json({
            "status": "error",
            message: "Couldn't add a album",
            payload: null
        });
   }
});


module.exports = Router;