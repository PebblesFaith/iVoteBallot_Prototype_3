/*
	The require('express') statement imports the express library, which provides a set of
	functions and tools for building iVoteBallot web applications in Node.js. The router
	objects defined in this module can handle various HTTP methods, such as GET, POST, PUT,
	and DELETE, and specify the corresponding actions to take for each requests.
*/
const express = require('express');

const iVoteBallotApp = express();

/*
	The alabama_SignUp_01_Router.js file is a router module that handles requests related to the
	contact us form web page within an iVoteBallot web applications in Node.js. The
	require('passport') statement is importing the Passport.js authentication middleware
	library, which is used in conjunction with the contact form; in order to authenticate
	user submissions and/or perform other authentication-related tasks.
*/
const passport = require('passport');

/*
	The body-parser middleware is used to parse the body of incoming requests, which
	is necessary for accessing any user data information submitted through a form on 
	the "Contact Us" web page. This data can then be used to send emails, store text messages,
	and/or perform other actions based on the iVoteBallot application's requirements.
*/
const bodyParser = require('body-parser');

/*
	The statement imports the alabama_SignUp_01_Controller module from the ../controllers directory
	using the require function. This module contains codes that handles the algorithm
	logic for the "alabama_SignUp_01.ejs" form feature of the iVoteBallot web application.
*/
const alabama_SignUp_01_Controller = require('../controllers/alabama_SignUp_01_Controller');

/*
	The statement const router = express.Router(); creates a new router object
	using the express framework in Node.js API.

	This router object can be used to define routes for different HTTP methods
	(GET, POST, PUT, DELETE, etc.) and those associated handlers for each route.

	Once the routes are defined, the router object can be mounted on a specific 
	path in the main application using app.use() method.	
*/
const router = express.Router();

/*
	The statement const session = require('express-session'); is used in JavaScript when
	 working with the Node.js framework Express to create a session middleware. The
	 express-session package provides the necessary tools for managing user sessions, 
	 including creating and destroying sessions, storing session data, and setting session
	 timeouts. Once the middleware is initialized, it can be used to maintain session data
	 throughout the user's interaction with the iVoteBallot web application. The session
	 variable is typically used, as a reference the middleware within the
	 iVoteBallot application code.
*/
const session = require('express-session');

/*
	The statement const sqliteDB = require('better-sqlite3'); is a piece of code that is
	used to import the better-sqlite3 library in a Node.js application. The better-sqlite3
	library provides a faster and safer way to interact with SQLite3 databases in Node.js
	compared to the built-in sqlite3 library.

	Once the better-sqlite3 library is imported, the sqliteDB variable can be used to create
	a new instance of the better-sqlite3 database class and perform various database operations
	like querying and modifying data.
*/
const sqlite3SignUpDB = require('better-sqlite3');

/*
	This statement is importing and configuring a session store module called
	"better-sqlite3-session-store" for the use with a Node.js application that
	is utilizing the "session" middleware. The "const" keyword declares a constant
	variable named "Sqlite3SignUpSessionStore" that is assigned the result of
	calling the "require" function with the "better-sqlite3-session-store" library
	as its argument. The resulting module is then initialized with the "session" 
	middleware and the resulting store object is assigned to the constant variable.
*/
const Sqlite3SignUpSessionStore = require('better-sqlite3-session-store')(session);

const flash = require('express-flash');

/*
	This statement creates a new instance of an SQLites database object called "db" with
	the name "alabama_SignUp_01_Session.db". The optional second argument specifies a 
	configuration object for the SQlite3 database, which includes the "verbose" property
	set to the value of the function call "console.log('The contactUs_01_Session have
	been successfully created')". This function call logs a message to the console
	indicating that the database has been successfully created.
*/
const dbSignUp_01 = new sqlite3SignUpDB('alabama_SignUp_01_Session.db', { verbose: console.log('The alabama_SignUp_01_Session have been successfully created. ')  });

/*
	This statement sets up a middleware function within iVoteBallot web application 
	in the Node.js router that uses the session package to manage user sessions. 
	And, the router.use creates a new SQLite3-based session store that will persist
	session data to be file, and configures the session to use a secure, HTTP-only 
	cookie within a maximum age of 30 minutes. The secret option sets the key used
	to sign the session ID cookie.
*/
router.use('/alabama_SignUp_01',
	session({
		store: new Sqlite3SignUpSessionStore ({
			client: dbSignUp_01,
			dir:'alabama_SignUp_01_Database_Session.db',
			name:'SIGNUPSESSION',
			cookie: {
				secure: true,
				httpOnly: true,
				sameSite: true,
				resave: false,
				saveUninitialized: false,
				maxAge: 'SESSION_MAX_AGE' // 30 minutes in milliseconds
			}
		}),
		secret: 'EXPRESS_SESSION_KEY'
	})
);

/*
	The statement router.use([passport.initialize()]); is used to initialize Passport.js
	middleware on a router within the iVoteBallot web application from the Node.js API. 
	This middleware adds an user's authentication functionality to the iVoteBallot web 
	application by managing user's sessions, logging user in and out, and serializing 
	and deserializing user submitted data information.

	The passport.initialize() method initializes Passport.js and prepares the
	passport.initialize() method to authenticate requests by ways of adding this 
	middleware to the router, and any requests that are handled by the router 
	will have access to Passport.js authentication functionality.
*/
router.use([passport.initialize()]);

/*
	The statement router.use(passport.session()) is used within the iVoteBallot web
	application from the Node.js API; in order to enable user's authentication using
	the Passport library. Specifically, the router.use(passport.session()) is configuring 
	the router to use the Passport's session-based authentication strategy, which allows
	users to be authenticated across multiple requests by persisting user data in the
	session store.

	The router.use() method is used to register middleware functions for a specific route
	or group of routes. In this case, passport.session() is a middleware function provided
	by Passport library that retrieves user's data information from the session store and
	deserializes it into a user object (email and password). This middleware is typically 
	used after Passport's authentication middleware has been invoked.
*/
router.use(passport.session());


/*
	Overall, this middleware provides a way to work around the limitations of HTML/EJS forms and the use
	all the HTTP methods in an 'alabama_SignUp_01_Controller.js' and 'alabama_SignUp_01_Router.js' files,
	making it easier to build RESTful APIs and perform CRUD operations.
*/
iVoteBallotApp.use(flash());

/*
	Middleware to set req.isUnauthenticated for the user first use of the '/500' URL bar.
*/
iVoteBallotApp.use('/500', (req, res, next) => {
	//Check if user is already authenticated.
		if (!req.session.isAuthenticated) {
			req.isUnauthenticated = true;
		}
		next();
});

/*
	Middleware to set req.isUnauthenticated for the user first use of the '/dashboard_01' URL bar.
*/
iVoteBallotApp.use('/dashboard_01', (req, res, next) => {
	// Check if user is Already Authenticated
		if (!req.session.isAuthenticated) {
			req.isUnauthenticated = true;
		}
		next();
});

/*
	Middleware to set req.isUnauthenticated for the user first use of the '/ivotballot' URL bar.
*/
iVoteBallotApp.use('/iVoteBallot', (req, res, next) => {
	// Check if user is Already Authenticated
		if (!req.session.isAuthenticated) {
			req.isUnauthenticated = true;
		}
		next();
});

/*
	Middleware to set req.isUnauthenticated for the user first use of the '/alabama_SignUp_01' URL bar.
*/
iVoteBallotApp.use('/alabama_SignUp_01', (req, res, next) => {
	//Check if user is already authenticated.
		if (!req.session.isAuthenticated) {
			req.isUnauthenticated = true;
		}
		next();
});


/*
    The constant redirectDashboard is a middleware function that checks if the user is already
    logged in by verifying the existence of a userId property in the user's session. If the user
    is logged in, the function redirects them to the dashboard page; otherwise, it allows the
    request to proceed to the next middleware function. This middleware is commonly used to restrict
    access to certain routes for authenticated users.
*/
const redirectDashboard = (req, res, next) => {
    if(req.session.userId) {
        res.redirect('/dashboard_01');
    } else {
        next();
    }
}

iVoteBallotApp.get('/alabama_SignUp_01', redirectDashboard, (req, res) => {    
    // Check if user is already authenticated.
    if (req.session.isAuthenticated) {
        return alert('You are already logged in!');
    }
    console.log(req.session);
    // Check if this is the user first use of '/alabama_SignUp_01' route URL bar
    if (req.isUnauthenticated) {
        console.log(req.flash());
        res.render('alabama_SignUp_01', { messages: (req.flash()) })        
        
    } else {
        console.log(req.flash());        
       
    }  
});

/*
	The iVoteBallotApp function in order to handles the HTTP GET request to the '/dashboard_01' route, with
	a redirectLogin, as the middleware. The function checks, if the front-end users are authenticated by calling the 
	'req.isAuthenticated()'. If the front-end users are authenticated than  the middleware renders the 'dashboard_01'
	web page or template with the front-end users' data information; otherwise, if the front-end users are not 
	authenticated than the middle will renders the 'alabama_LogIn_01' web page or template and logs an error message
	which will indicates that the front-end users are not authenticated.
*/

iVoteBallotApp.get('/dashboard_01', (req, res) => {
	if (req._construct.isAuthenticated) {
		console.log(req.user);
		console.log(req.session);
		console.log('The front-end users had been successfully authenticated within the SESSION COOKIE through the PASSPORT LOCAL STRATEGY from the frontend users logins.');
		
		res.render('dashboard_01', { firstName: req.userDMV_FirstName, middleName: req.user.userDMV_MiddleName, lastName: req.user.userDMV_LastName });


	} else if (req.isAuthenticated) {
		console.log('The front-end users are not successfully authenticated within the SESSION COOKIE through the PASSPORT LOCAL STRATEGY from the frontend users logins.')

		res.render('/alabama_LogIn_01');
	}
});

iVoteBallotApp.post(
	'/login2',
	passport.authenticate('login2', {
		successRedirect: '/dashboard_01',
		failureRedirect: '/login2',
		failureFlash: true
	})
);

router
    .post('/login2', alabama_SignUp_01_Controller.createSignUp_01_Database);

router
    .get('/login2', alabama_SignUp_01_Controller.alabamaSignUp_01_PassportGet);

router
    .post('/login2', alabama_SignUp_01_Controller.alabamaSignUp_01_PassportPost);
 
/*
	In a Node.js application, the module.exports is used to expose a module, as a single object
	or function to other parts of the iVoteBallot web application. And, the router refers to an
	instance of the Express router, which is used for handling HTTP requests in an Express 
	library by ways of setting module.exports to those routers, the Developer is exporting the router
	instance to other parts of the iVoteBallot web application, allowing them to access and
	use those routers for handling requests.
*/
module.exports = router; 




