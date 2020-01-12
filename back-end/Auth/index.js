const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const db = require('../db/connection')

router.get('/', (req, res) => {
    res.json({
        message: '🔐'
    })
});

const validUser = (user) => {
    console.log('user', user)
    //Check users password
    const validEmail = typeof user.email == 'string' &&
        user.email.trim() != '';
    const validPassword = typeof user.password == 'string' &&
        user.password.trim() != '' &&
        user.password.trim().length >= 6;

    return validEmail && validPassword
}

// GET USER EMAIL AND SIGN UP
router.post('/signup', async (req, res, next) => {
    const userEmail = req.body.email;

    if (validUser(req.body)) {

        try {
            const query = `SELECT * FROM users WHERE email = $1`;
            const data = await db.any(query, [userEmail]);
            console.log(data)
            const user = data[0];
            if (!user) {
                //  this is a unique email
                //  hash password
                let hash = await bcrypt.hash(req.body.password, 10)

                //  insert user into db
                const user = {
                    email: req.body.email,
                    password: hash,
                    created_at: new Date()
                };
                const insertQuery = `INSERT INTO users (email, password, created_at)
                                    VALUES ($/email/, $/password/, $/created_at/) returning *`

                const data = await db.one(insertQuery, user)
                
                delete data.password;
                //  redirect
                res.json({
                    user: data,
                    message: '✅'
                });


            } else {
                //email in use
                next(new Error('Email in use'))
            }
        } catch (err) {
            console.log(err);
            res.send(`Something went wrong, try again later.`);
        };
    } else {
        //send error
        next(new Error('Invalid User'));
    }
});

// GET USER EMAIL AND SIGN UP
router.post('/login', async (req, res, next) => {
    const userEmail = req.body.email;

    if (validUser(req.body)) {

        try {
            const query = `SELECT * FROM users WHERE email = $1`;
            const data = await db.any(query, [userEmail]);
            console.log(data)
            const user = data[0];
            if (user) {
                //  this is a unique email
                // compare
                let match = await bcrypt.compare(req.body.password, user.password)

                if (match) {
                    //setting the 'set-cookie' header
                    const isSecure = req.app.get('env') != 'development';
                    res.cookie('user_id', user.id, {
                        httpOnly: true,
                        secure: isSecure,
                        signed: true
                    })
                    delete user.password;
                    res.json({
                        user: user,
                        message: "Logged in ... 🔓"
                    });
                } else {
                    next(new Error('Invalid Password'));
                }
            } else {
                //Invalid Email
                next(new Error('Invalid Email'))
            }
        } catch (err) {
            console.log(err);
            res.send(`Something went wrong, try again later.`);
        };
    } else {
        //send error
        next(new Error('Invalid User'));
    }
});

module.exports = router;

