const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require("body-parser");

require('./models/feedback');
require('./models/account');
require('./models/XiyanDatabase');

const indexRouter = require('./routes/index');
const accountRouter = require('./routes/accountRouter');
const findCarParkRouter = require('./routes/findCarPark');
const contactRouter = require('./routes/contactRouter');
const feedbackRouter = require('./routes/feedbackRouter');
const app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(express.json());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('secretadd'));
app.use(express.static(path.join(__dirname, 'public')));

//these are the page can be browse without logging in
let whitelist = ['/account/log-in','/account/log-in/','/','/account/sign-up','/contact','/account/testing','/account/testing/update','/account/testing_nonexistent/update','/account/testing_nonexistent'];

app.use(function(req, res, next) {
  const url = req.url;
  if (!(whitelist.includes(url)) && !req.signedCookies.account) {
      res.redirect('/account/log-in')  
      return
  }
  next();
});


app.use('/', indexRouter);
app.use('/account', accountRouter);
app.use('/findCarPark', findCarParkRouter);
app.use('/contact',contactRouter);
app.use('/feedback',feedbackRouter);


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


app.listen(process.env.PORT || 3000, () => { 
  console.log("The easiparking app is running!");
});


module.exports = app;
