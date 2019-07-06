var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var monk = require('monk');
// var db = monk('localhost:27017/contentful');
var db = monk('oneweb-dev:EdMFcE7YBiZLi9aPv83wXgtEZaurPufh2cteVEF9dEQ9Otmvg8oUWImU9KiAbOLcMli2Mu71Yg5gYO4O141Y9g%3D%3D@oneweb-dev.documents.azure.com:10255/contentful?ssl=true');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var helloworldRouter = require('./routes/helloworld');
var cfawardsRouter = require('./routes/cf/awards');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// make db accessible to routers
app.use(function(req,res,next){
  req.db = db;
  next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/helloworld', helloworldRouter);
app.use('/cf/awards', cfawardsRouter);

console.log("Server Started");

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
