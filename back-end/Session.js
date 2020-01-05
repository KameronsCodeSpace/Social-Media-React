const express = require('express');
const router = express.Router();

//pg-promise
const db = require('./config')

router.get('/', async (req, res) => {
    try {
        let session = await db.any(`SELECT * FROM users`)
        console.log(session)
        // sessions.session = session
        res.json({
            message: "you've reached sessions",
            session
        })
    } catch(error) {
        console.log(error)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

router.post('/', async (req, res) => {
    try {
        let email = req.body.email
        await db.none(`DELETE FROM usersessions`)
        let user = await db.one(`
            SELECT * 
            FROM users 
            WHERE email = '${email}' 
        `)
        if (user.session) {
            res.status(500).json({error});
            return;
        }
        await db.none(`
            INSERT INTO usersessions(useridloggedin)
            VALUES(${user.id})
        `)
        let session = await db.any(`
            SELECT * 
            FROM usersessions
        `)
        console.log("user", user)
        console.log(session)
        res.json({
            email,
            session
        })
    } catch(error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

router.delete('/', async (req, res) => {
    try {
        await db.none(`DELETE FROM usersessions`)
        res.json({
            message: `You've logged out of your session`
        })
    } catch(error) {
        console.log(error)
        res.status(500)
        res.json({
            message: "you've reached an error with sessions",
            error
        })
    }
})

module.exports = router;