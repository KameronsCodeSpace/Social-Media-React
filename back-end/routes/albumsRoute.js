// GET /albums/:id - Get all albums that belong to a user.
// POST /albums/:id - Create new empty album for user.

const express = require('express');
const db = require('../db/connection')

const Router = express.Router();

// GET ALBUM BY ID
Router.get('/:email', async (req, res) => {
    const email = req.params.email;
    try {
        const query = 'SELECT * FROM albums WHERE album_owner = $1';
        const data = await db.any(query, [email]);
        res.json({
            message: 'Returned all albums',
            payload: data
        });
    } catch (err) {
        console.log("error:", err);
        res.json({
            "status": "error",
            message: `Something went wrong, try again later`,
            payload: null
        });
    };
});

// ADD NEW ALBUM
Router.post("/", async (req, res) => {
    console.log("POST method for adding a new album started");
    console.log("req.body:", req.body);
    let insertQuery = `
    INSERT INTO albums (album_owner, album_name) VALUES ($1, $2)
    `;
    try {
        await db.none(insertQuery, [req.body.album_owner, req.body.album_name]);
        res.json({
            "status": "Success",
            "message": "Added one album",
            "payload": [req.body.album_owner, req.body.album_name]
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

// ADD IMAGE IN SPECIFIC ALBUM
Router.post("/image", async (req, res) => {
    console.log("POST method for adding a image to a specific album started");
    console.log("req.body:", req.body);
    let insertQuery1 = `
        INSERT INTO images (imageUrl, image_owner) VALUES ($1, $2) RETURNING id
    `
    let insertQuery2 = `
    INSERT INTO album_images (photo_id, album_id) VALUES ($1, $2)
    `;
    try {
        let insertedImage = await db.one(insertQuery1, [req.body.imageUrl, req.body.image_owner]);
        console.log("insertedImage: ", insertedImage) // Plug in id into the next query
        await db.none(insertQuery2, [req.body.photo_id, req.body.album_name]);
        res.json({
            "status": "Success",
            "message": "Added one album",
            "payload": [req.body.photo_id, req.body.album_name]
        });
    } catch (error) {
        console.log("error:", error);
        res.json({
            "status": "error",
            message: "Couldn't add a image to a specific album",
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