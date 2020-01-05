const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const albumsRouter = require("./routes/albumsRoute");
const feedRouter = require("./routes/feedRoute");
const logInRouter = require("./routes/logInRouter");
const signOutRouter = require("./routes/signUpRoute");
const signUpRouter = require("./routes.signUpRoute");
app.use("/albums", albumsRouter);
app.use("/feed", feedRouter);
app.use("/log_in", logInRouter);
app.use("/sign_out", signOutRouter);
app.use("/sign_up", signUpRouter);

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Catch any 404 error
app.use(function(err, req, res, next) {
    res.status(404).json({
        payload: "Nothing found",
        err: true
    });
});

// error handler
app.use(function (err, req, res, next) {
    console.log(err)
    res.status(err.status || 500);
    res.json({
        payload: {
        err: err,
        errStack: err.stack
        },
        err: true
    });
});

module.exports = app;
