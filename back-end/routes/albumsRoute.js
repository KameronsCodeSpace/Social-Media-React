// GET /albums/:id - Get all albums that belong to a user.
// POST /albums/:id - Create new empty album for user.

const express = require('express');
const db = require('../db/connection')

const Router = express.Router();

// GET ALBUM BY ID
Router.get('/:id', async (req, res) => {
    const userId = req.params.user_id;

    try {
        const query = 'SELECT * FROM albums WHERE image_id = $1';
        const data = await db.any(query, [userId]);
        res.json({
            message: 'Returned all albums',
            payload: data
        });
    } catch (err) {
        console.log(err);
        res.send(`Something went wrong, try again later.`);
    };
});

// ADD NEW ALBUM
Router.post("/", async (req, res) => {
    console.log("POST method for adding a new album started");
    console.log("req.body:", req.body);
    let insertQuery = `
    INSERT INTO albums (album_owner) VALUES ($1)
    `;
    try {
        await db.none(insertQuery, [req.body.album_owner]);
        res.json({
            "status": "Success",
            "message": "Added one album",
            "payload": [req.body.album_owner]
        });
    } catch (error) {
        res.json({
            "status": "error",
            message: "Couldn't add a album",
            payload: null
        });
   }
});

// DELETE SINGLE ALBUM
Router.delete('/:id', async (req, res) => {
    const id = req.params.id
    const inputQuery = (`DELETE FROM albums WHERE id = $1`);

    try{
        await db.none(inputQuery, [id]);
        res.json({
            "status": "Success",
            message: "Deleted a album"
        });
    } catch (error) {
        console.log("Error:", error);
        res.json({
            "status": "error",
            message: "Couldn't delete a album",
            payload: null
        });
    }
});


module.exports = Router;