const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const auth = require('./auth')

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.static(path.join(__dirname, 'public')));

const albumsRouter = require("./routes/albumsRoute");
const feedRouter = require("./routes/feedRoute");
const logInRouter = require("./routes/logInRoute");
const signOutRouter = require("./routes/signOutRoute");
const signUpRouter = require("./routes/signUpRoute");
app.use("/albums", albumsRouter);
app.use("/feed", feedRouter);
// app.use("/log_in", logInRouter);
// app.use("/sign_out", signOutRouter);
app.use("/sign_up", signUpRouter);

app.use('/auth', auth)
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });
  
  // error handler
  app.use(function(err, req, res, next) {

    res.status(err.status || 500);

    res.json({
        message: err.message,
        error: req.app.get('env') === 'development' ? err : {}
    })
  });

module.exports = app;
