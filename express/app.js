var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

// Middelware
const auth = require('./middleware/auth');

// Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var todosRouter = require('./routes/todos');
var moviesRouter = require('./routes/movies');
var reviewsRouter = require('./routes/reviews');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// DB Connection
const { db } = require('./config/database');  // Get db config
mongoose.connect(db)                          // Connect db with mongoose
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.log(err));

// Routes
app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/todos', todosRouter);
app.use('/api/movies', auth.verifyUserToken, moviesRouter);
app.use('/api/reviews', auth.verifyUserToken, reviewsRouter);

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

module.exports = app;
