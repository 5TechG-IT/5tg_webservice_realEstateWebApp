var express = require('express');
var mysql = require('mysql');
var hbs = require('hbs');
const multer = require('multer');
const User = require('../core/user');
var router = express.Router();
var i;
var g;
let h,h1;
const user = new User();

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images/properties')
  },
  filename: function (req, file, cb) {
	  h=Date.now();
    cb(null, h + '.jpg') //Appending .jpg
  }
})
const upload = multer({storage : storage});




let logoimg,adminPhone,adminEmailid,adminAddress,happycustomer,propertyinstock,cityreg,dealer,adminpis;


let totalPages=0,currPage=0,profileimg="";

let con1 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con1.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con1.query('SELECT * FROM properties', function(err, result) {
        if (err) throw err
		
		let totalProperties = result.length;
		
		totalPages = totalProperties/12;
		
			
      });
	  
	  
	
	  
	  
	  con1.query('SELECT * FROM admindata', function(err, results) {
        if (err) throw err
		
		logoimg=results[0].logo;
		adminPhone=results[0].adminMobileNumber;
		adminEmailid=results[0].adminEmailId;
		adminAddress=results[0].adminAddress;
		happycustomer=results[0].happyCustomers;
		adminpis=results[0].propertiesInStock;
		cityreg=results[0].cityRegistered;
		dealer=results[0].dealerBranches;
		
		
		
		
			
  });
	  

  });  
 



/* GET home page. */
router.get('/', function(req, res, next) {
	
	  let user = req.session.user;
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	
	var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query('SELECT * FROM properties WHERE topStatus= 1 LIMIT 7', function(err, results) {
        if (err) throw err
		
		 con.query('SELECT * FROM feedback ', function(err, result) {
        if (err) throw err
		
		
		res.render('index', { title: 'Home Page' ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress ,data: results ,u:g ,feedback_data:result ,hc: happycustomer ,pis:adminpis ,cr: cityreg, dbr: dealer });
			
      });
	  
	});
  
});
	
  
});

router.get('/register', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		 res.redirect('/');
		  
	  }
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
		  res.render('register', { title: 'Register' , u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid  , add: adminAddress  });
	  }
	
  
});

router.get('/faq', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	
  res.render('faq', { title: 'FAQ', u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress});
});


router.get('/submitProperty', function(req, res, next) {
	
	let user = req.session.user;
	  
	if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	
		  res.render('submitProperty', { title: 'SubmitProperty', u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress});
	  }
	  else
	  {

		  res.redirect('/');
	  }
	
  
});

router.get('/userProfile', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		 	   
	  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	
		
		res.render('userProfile', { title: 'UserProfile', u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress , profileimage: results[0].profileImage ,  fullname:results[0].fullName ,username: results[0].userName, mobile: results[0].mobileNumber , address : results[0].address , city: results[0].city , state: results[0].state ,country: results[0].country , pincode : results[0].pinCode });
	
					
		});	
		
		});	
		  
	  }
	  else
	  {

		  res.redirect('/');
	  }
	  
	 
	
  
});


router.get('/properties', function(req, res, next) {
	
	let user = req.session.user;
	  
	if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	  
	  var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  currPage=0;
  
  if(currPage >= totalPages-1)
  {
	  con.query('SELECT * FROM properties LIMIT 12', function(err, results) {
			if (err) throw err
		
			res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid  , add: adminAddress , page:'' });
			
		});
  
	  
  }
  else
  {
	  con.query('SELECT * FROM properties LIMIT 12', function(err, results) {
			if (err) throw err
		
			res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress , page:'  <li><a href="/next">Next</a></li> ' });
			
		});
  
	  
  }
  

  
 
  
		
});
           
  
});



router.get('/userProperties', function(req, res, next) {
	
	let user = req.session.user;
	  
	if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	  
	  var con6 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con6.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  

  
  if(user){
  
   con6.query('SELECT * FROM properties where userId = '+user.userId+' ', function(err, results) {
			if (err) throw err
		
			res.render('userProperties', { title: 'UserProperties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid  , add: adminAddress , page:'' });
			
		});
  
  
  }
  else{
	  res.redirect('/');
  }

  
 
  
		
});
           
  
});


router.get('/next', function(req, res, next) {
	
	
	
	let user = req.session.user;
	  
	 if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	  
	  var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  currPage++;
  
	if(currPage==totalPages)
	{
		currPage--;
	}
  

	if(currPage < totalPages-1)
	{
  
  
		con.query('SELECT * FROM properties WHERE propertyId > '+ currPage*12 +'  LIMIT 12  ', function(err, results) {
        if (err) throw err
		
		res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid , add: adminAddress , page: '  <li> <a href="/prev">Prev</a></li> <li><a href="/next">Next</a></li>' });
			
		});
	
	  

	}
	else
	{
		con.query('SELECT * FROM properties WHERE propertyId > '+ currPage*12 +' LIMIT 12', function(err, results) {
        if (err) throw err
		
		res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid: adminEmail , add: adminAddress , page: ' <li> <a href="/prev">Prev</a></li>' });
			
		});
	
		
		
	}
	
});

           
  
});




router.get('/prev', function(req, res, next) {
	
	
	
	let user = req.session.user;
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	  
	  var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	currPage--;
  
	
	if(currPage<0)
	{
		currPage=0;
	}
  

	if(currPage >0)
	{
  
  
		con.query('SELECT * FROM properties WHERE propertyId > '+ currPage*12 +'  LIMIT 12  ', function(err, results) {
        if (err) throw err
		
		res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid  , add: adminAddress , page: ' <li> <a href="/prev">Prev</a></li> <li><a href="/next">Next</a></li>' });
			
		});
	
	  

	}
	else
	{
		con.query('SELECT * FROM properties WHERE propertyId > '+ currPage*12 +' LIMIT 12', function(err, results) {
        if (err) throw err
		
		res.render('properties', { title: 'Properties' ,u:g , data: results ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid  , add: adminAddress , page: ' <li> <a href="/next">Next</a></li>' });
			
		});
	
		
		
	}
	
});

           
  
});







router.post('/login', (req, res, next) => {
    
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            // redirect the user to the home page.
            res.redirect('/');
        }else {
            
			let user = req.session.user;
	  
	  if(user)
	  {
		 res.redirect('/');
		  
	  }
	  else
	  {
		  g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="assets/img/client-face1.png" class="img-circle">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';

		  res.render('register', { title: 'Register' , u:g ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid  , add: adminAddress ,  incorrectlogin: '<style> #pass { background-color: red; font-weight: bold; font-family: Courier, Helvetica, sans-serif; font-size: 18px; text-align:center; color:white; } </style> <div id="pass" style:"background-color: red">Username or Password is incorrect</div>'});
	  }
			
        }
    })

});

	

router.post('/signup', (req, res, next) => {
	

	
var flag=0;
	
	 var con2 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	

	});
	
	con2.connect(function(err) {
  if (err) throw err;
  console.log("Connected hn!");
 
  con2.query('SELECT * FROM users', function(err, results) {
        if (err) throw err
		
		
		
		
		var unm=req.body.username;
		
		for(var m=0;m<results.length;m++)
		{
			var n = unm.localeCompare(results[m].userName);
			
			
			if(n==0)
			{
				console.log(n);
				flag=1;
			}
			
		}
		
		
if(flag==0)
{
	
	
	
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('/');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });
	
	
}
else
{
	let user = req.session.user;
	  
	  if(user)
	  {
		 res.redirect('/');
		  
	  }
	  else
	  {
		  g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="assets/img/client-face1.png" class="img-circle">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';

		  res.render('register', { title: 'Register' , u:g ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid , add: adminAddress , incorrect: '<style> #pass { background-color: red; font-weight: bold; font-family: Courier, Helvetica, sans-serif; font-size: 20px; text-align:center; color:white; } </style> <div id="pass" style:"background-color: red">User Already Exist</div>'});
	  }
	
	
	
}
		
		});
  
  });
  



});



// Get loggout page
router.get('/logout', (req, res, next) => {
    // Check if the session is exist
    if(req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});




router.get('/contact', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
  res.render('contact', { title: 'Contact' , u :g ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid , add: adminAddress  });
});


router.post('/ViewProperty', function(req, res, next) {
	
	let user = req.session.user;
	
	var propertyid = req.body.pid;
	
	console.log(propertyid);

	
	
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'


	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	
	}
	  else
	  {
		
		 g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	  
	  var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'

	});
	
	con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
  con.query('SELECT * FROM properties WHERE propertyId= '+ propertyid+'  ', function(err, results) {
        if (err) throw err
		
		 con.query('SELECT * FROM users WHERE userId= '+ results[0].userId +' ', function(err, userResults) {
        if (err) throw err
		
		
		if(user){
			res.render('viewProperty', { title: 'viewProperty' , sendenquiry:'<input type="submit" value="Send Enquiry"></input>', u :g , data1:userResults , h:' hi ', page: ' <li> <a href="/next">Next</a></li>' , data:results ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid , add: adminAddress });
			
		}
		else{
			
			res.render('viewProperty', { title: 'viewProperty' , sendenquiry:'', u :g , data1:userResults , h:' hi ', page: ' <li> <a href="/next">Next</a></li>' , data:results ,logo:logoimg ,ph: adminPhone ,emailid:adminEmailid , add: adminAddress });
	
		}
			
			 });
      });
  
});
	
	  
	  
  
});

router.post('/submitproperty', upload.single('wizard-picture'), (req, res , next) => {
	
	var pnm=req.body.propertyname;
	var prc=req.body.propertyprice;
	var ph=req.body.phone;
	var pd=req.body.description;
	var pst=req.body.propertyState;
	var pc=req.body.propertyCity;
	var pstatus=req.body.propertyStatus;
	var minbed=req.body.minbed;
	var minbath=req.body.minbath;
	var geo=req.body.geo;
	
	let user = req.session.user;
	
	if(user){
	
	
	console.log(pnm+" "+prc+" "+ph+" "+pd+" "+pst+" "+pc+" "+pstatus+" "+minbed+" "+minbath+" "+h+".jpg"+" "+geo);
	
	 var con4 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'
	
	});
	
	con4.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
		var sql = "INSERT INTO properties (propertyImg,propertyName,propertyArea,propertyPrice,bedNumber,showerNumber,carParkings,topstatus,userId,propertyStatus,propertyDescription,propertyImg2,propertyImg3,propertyImg4) VALUES ('"+"images/properties/"+h+".jpg"+"','"+pnm+"','"+geo+"','"+prc+"','"+minbed+"','"+minbath+"','1','0','"+user.userId+"','"+pstatus+"','"+pd+"','images/properties/1/property2.jpg','images/properties/1/property3.jpg','images/properties/1/property4.jpg')";
  con4.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
	
	});
	
        
	res.redirect('/');
   
  
	}
	
	
});


router.post('/sendenquiry', function(req, res, next){
	
	var pid=req.body.pid;
	
	
	console.log(pid);
	
	let user = req.session.user;
	
	var propertyid = req.body.pid;
	
	console.log(propertyid);

	
	
	  
	  if(user)
	  {
		  var con3 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'


	});
	
	con3.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	con3.query('SELECT * FROM users WHERE userId = '+ user.userId+' ', function(err, results) {
			if (err) throw err
			
			
			var sql = "INSERT INTO enquiry (propertyId,CustomerId) VALUES ('"+pid+"', '"+user.userId+"')";
  con3.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
			
			
			g=' <style> .dropbtn { background-color: #4CAF50; color: white;  padding: 16px;  font-size: 16px; border: none; } .image-circle {  position: relative; display: inline-block; } .dropdown-content {  display: none;  position: absolute;  background-color: #f1f1f1;  min-width: 160px;  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);  z-index: 1; } .dropdown-content a {  color: black;  padding: 12px 16px;  text-decoration: none;  display: block; } .dropdown-content a:hover {background-color: #ddd;}.dropdown:hover .dropdown-content {display: block;}.dropdown:hover .dropbtn {background-color: #3e8e41;} </style> <div class="dropdown"> <img src="'+results[0].profileImage+'" class="img-circle" width="70" height="70">  </a>  <div class="dropdown-content">    <a href="/userProfile">Profile</a>    <a href="/userProperties">Properties</a> <a href="/submitProperty">Submit Property</a>   <a href="/Logout">Logout</a>  </div> </div>  <br>';
	  
	});
	});
	
	 
	
	res.render('enquiry', { title: 'Home Page' ,logo:logoimg ,ph: adminPhone ,emailid: adminEmailid , add: adminAddress ,u:g });
	
	
	
	
	}
	else{
		
		res.redirect('/');
	}
	 
	
	
});


router.post('/updateProfile', upload.single('wizard-picture'), (req, res , next) => {
	
	var unm=req.body.fullName;
	var email=req.body.email;
	var mobile=req.body.mobile;
	var state=req.body.state;
	var city=req.body.city;
	var address=req.body.address;
	var pincode=req.body.pincode;
	var country=req.body.country;
	
	
	let user = req.session.user;
	


	
	
	  
	  if(user)
	  {
		  var con5 = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: 'rfs_db_5techg'


	});
	
	con5.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  
	
			
	var sql = "update users set userName='"+email+"', fullName='"+unm+"' , mobileNumber='"+mobile+"' ,address='"+address+"' ,city='"+city+"' , state='"+state+"' , country='"+country+"' ,pinCode='"+pincode+"', profileImage='"+"images/properties/"+h+".jpg"+"' where userId='"+user.userId+"' ";
	con5.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
	res.redirect('/userProfile');
  });
			
		
	});
	
	
	}
	else{
		
		res.redirect('/');
	}
	 
	
	
});




module.exports = router;


