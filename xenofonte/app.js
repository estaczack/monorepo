var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require("dotenv").config();

var openRouter = require("./routes/pages/open");
var closedRouter = require("./routes/pages/closed");

var usersRouter = require("./routes/api/users");
var languagesRouter = require("./routes/api/languages");
var typesRouter = require("./routes/api/types");
var gendersRouter = require("./routes/api/genders");
var booksRouter = require("./routes/api/books");
var postsRouter = require("./routes/api/posts");
var commentsRouter = require("./routes/api/comments");

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes for pages
app.use("/", openRouter);
app.use("/user", closedRouter);

// Routes for API
app.use("/api/users", usersRouter);
app.use("/api/languages", languagesRouter);
app.use("/api/types", typesRouter);
app.use("/api/genders", gendersRouter);
app.use("/api/books", booksRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
