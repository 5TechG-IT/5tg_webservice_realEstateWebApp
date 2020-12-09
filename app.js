var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const pool = require('./core/pool'); //for db connection
var mysql = require('mysql');

let logoimg,adminPhone,adminEmailid,adminAddress;

const session = require('express-session');


var indexRouter = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');



// for body parser. to collect data that sent from the client.
app.use(express.urlencoded( { extended : false}));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session
app.use(session({
    secret:'youtube_video',
    resave: false,
    saveUninitialized: false,
	cookie: {expires: new Date(253402300000000)} 
}));


app.use('/', indexRouter);


let sql = " SELECT * FROM properties ";
pool.query(sql, function(err, result) {
        if (err) throw err
		
		let totalProperties = result.length;
		
		totalPages = totalProperties/12;
		
			
      });
	  
	  let sql2 = " SELECT * FROM admindata ";
	  pool.query(sql2, function(err, results) {
        if (err) throw err
		
		logoimg=results[0].logo;
		adminPhone=results[0].adminMobileNumber;
		adminEmailid=results[0].adminEmailId;
		adminAddress=results[0].adminAddress;
		
			
  	});
	  


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
  
   let user = req.session.user;
	  
	 if(user)
	  {

		let sql = " SELECT * FROM users WHERE userId = '"+ user.userId+"'";
		pool.query(sql, function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
		});
	
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
  
  res.render('error', { title: '404' , u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress  });
});

module.exports = app;

// express JS listening port
const PORT = 3000;
// listening port
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
