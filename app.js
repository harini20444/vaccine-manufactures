var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./app_api/models/db');

var indexRouter = require('./app_server/routes/index');
// var usersRouter = require('./app_server/routes/users');
const apiRouter = require('./app_api/routes/index');


// view engine setup
// app.set('views', path.join(__dirname,'app_server', 'views'));
// app.set('view engine', 'jade');

const mongoose = require("mongoose");
const dbURI = "mongodb+srv://22eg107b44:abc@cluster0.lkgsi.mongodb.net/app?retryWrites=true&w=majority&appName=Cluster0";

var app = express();

// For nodemon restarts
process.once("SIGUSR2", () => {
  gracefulShutdown("nodemon restart", () => {
    process.kill(process.pid, "SIGUSR2");
  });
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api',apiRouter);
app.set('views', path.join(__dirname,'app_server', 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);

// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

mongoose.connect(dbURI, { useNewUrlParser: true });
mongoose.connection.on("connected", () => {
  console.log(`Mongoose connected to ${dbURI}`);
  app.listen(1000, () => {
    console.log(`app listening on port ${1000}`)
  })
});
mongoose.connection.on("error", (err) => {
  console.log(`Mongoose connection error: ${err}`);
});
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose disconnected");
});
const gracefulShutdown = (msg, callback) => {
  mongoose.connection.close();
};

module.exports = app;