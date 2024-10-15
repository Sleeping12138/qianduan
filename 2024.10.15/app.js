var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const MySQLStore = require('express-mysql-session')(session);

var indexRouter = require('./routes/Web/index');
var accountRouter = require('./routes/api/account')
var authRouter = require('./routes/Web/auth')
var authApi = require('./routes/api/auth');


var app = express();

const options = {
  host: '127.0.0.1',
  user: 'root',
  password: 'woshizjy12138',
  database: 'test01'
};
const sessionStore = new MySQLStore(options);
// 使用完了之后在req中就会有session了
app.use(session({
  name: 'zzz',
  secret: '123456',
  store: sessionStore,
  resave: true,
  saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);
app.use('/', authRouter);
app.use('/api', accountRouter);
app.use('/api', authApi);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  res.render('404');
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
