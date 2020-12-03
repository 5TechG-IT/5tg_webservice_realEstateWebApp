var express = require('express');
var mysql = require('mysql');
var hbs = require('hbs');
const User = require('../core/user');
var router = express.Router();
var i;
var g;
const user = new User();



/* GET home page. */
router.get('/', function(req, res, next) {
	
	  let user = req.session.user;
	  
	  if(user)
	  {
		  g='<a href="/logout"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Logout</button>  </a>';
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
  
  con.query('SELECT * FROM users', function(err, results) {
        if (err) throw err
		
		res.render('index', { title: 'Home Page' , mobile: '9307883373' ,logo: 'assets/img/logo.png' ,data: results ,u:g });
			
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
		  res.render('register', { title: 'Register' , u:g});
	  }
	
  
});

router.get('/faq', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		  g='<a href="/logout"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Logout</button>  </a>';
	  }
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
	
  res.render('faq', { title: 'FAQ', u:g });
});

router.get('/properties', function(req, res, next) {
	
	let user = req.session.user;
	  
	  if(user)
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Logout</button>  </a>';
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
  
  con.query('SELECT * FROM users', function(err, results) {
        if (err) throw err
		
		res.render('properties', { title: 'Properties' ,u:g , data: results });
			
      });
  
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
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
		  res.render('register', { title: 'Register' , u:g , incorrectlogin: '<style> #pass { background-color: red; font-weight: bold; font-family: Courier, Helvetica, sans-serif; font-size: 18px; text-align:center; color:white; } </style> <div id="pass" style:"background-color: red">Username or Password is incorrect</div>'});
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
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
		  res.render('register', { title: 'Register' , u:g , incorrect: '<style> #pass { background-color: red; font-weight: bold; font-family: Courier, Helvetica, sans-serif; font-size: 20px; text-align:center; color:white; } </style> <div id="pass" style:"background-color: red">User Already Exist</div>'});
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
		  g='<a href="/logout"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Logout</button>  </a>';
	  }
	  else
	  {
		  g='<a href="/register"> <button class="navbar-btn nav-button wow bounceInRight login" data-wow-delay="0.45s">Login</button>  </a>';
	  }
  res.render('contact', { title: 'Contact' , u :g});
});


module.exports = router;
