var createError = require('http-errors');
var express = require('express');
var path = require('path');
var moment = require('moment');  
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

var indexRouter = require('./routes/index');


//dotenv.config({ path: '.env.example' });
dotenv.config({ path: '.env' });

var app = express();

//connecting with sql server
var Connection = require('tedious').Connection;  
var config = {  
    server: 'DESKTOP-E27E30V\SQLEXPRESS.database.windows.net',  //update me
    authentication: {
        type: 'default',
        options: {
            userName: 'jared', //update me
            password: 'lee'  //update me
        }
    },
    options: {
        // If you are on Microsoft Azure, you need encryption:
        encrypt: true,
        database: 'your_database'  //update me
    }
};  
var connection = new Connection(config);  
connection.on('connect', function(err) {  
    // If no error, then good to proceed.
    console.log("Connected");  
});

connection.connect();

//Connect to MongoDB.
 
//mongoose.Promise = global.Promise;
/*
const mongo_url = process.env.MongoDB_URI || 'mongodb://localhost:27017/mongodb://jrl222:FUJIman23456@cse264project-shard-00-00.hb5zo.mongodb.net:27017,cse264project-shard-00-01.hb5zo.mongodb.net:27017,cse264project-shard-00-02.hb5zo.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-otsngu-shard-0&authSource=admin&retryWrites=true&w=majority';
try{
  mongoose.connect(mongo_url, { useNewUrlParser: true });
  console.log("Connected to MongoDB. Goodjob!");

}
catch(error){
  console.log("MongoDB Error, not connecting");
}
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
/*
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.');
  process.exit();
});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

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
