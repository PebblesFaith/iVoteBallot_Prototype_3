/*
	The require('express') statement imports the express library, which provides a set of
	functions and tools for building iVoteBallot web applications in Node.js. The router
	objects defined in this module can handle various HTTP methods, such as GET, POST, PUT,
	and DELETE, and specify the corresponding actions to take for each requests.
*/
const express = require('express');

/*
	The code const flash = require('express-flash'); imports the express-flash module, which provides a 
	middleware for storing and displaying flash messages in an Express.js application. Flash messages are 
	short-lived messages that are stored in the session cookie id, and displayed to an user on his or her
	next request. With express-flash, Sarai Hannah Ajai (Developer) can easily create and manage flash
	messages within her iVoteBallot web application, which can be used to display success messages, 
	error messages, or any other kind of notification to the front-end user.
*/
const flash = require('express-flash');

const flashPassport = require('connect-flash');

/*
	The contactUs_01_Router.js file is a router module that handles requests related to the
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
	The statement imports the contactUs_01_Controller module and the 
	alabamaDMV_Commission_01_Controller from the ../controllers directory to the 
	alabama_Session_Router using the require functions. Those module contains codes
	that handles the algorithm logic for the "ContactUs_01" and alabamaDMV_Commission_01
	form feature of the iVoteBallot web application.
*/
const contactUs_01_Controller = require('../controllers/contactUs_01_Controller');
const alabamaDMV_Commission_01_Controller = require('../controllers/alabamaDMV_Commission_01_Controller');

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
	constant is typically used, as a reference the middleware within the
	iVoteBallot application code.
*/
const session = require('express-session');

/*
	The statement const sqliteDB = require('better-sqlite3'); is a piece of code that is
	used to import the better-sqlite3 library in a Node.js application. The better-sqlite3
	library provides a faster and safer way to interact with SQLite3 databases in Node.js
	compared to the built-in sqlite3 library.

	Once the better-sqlite3 library is imported, the sqliteDB constant can be used to create
	a new instance of the better-sqlite3 database class and perform various database operations
	like querying and modifying data.
*/
const sqliteDB = require('better-sqlite3');

const { route } = require('./views_Router');

/*
	This statement is importing and configuring a session store module called
	"better-sqlite3-session-store" for the use with a Node.js application that
	is utilizing the "session" middleware. The "const" keyword declares a constant
	variable named "AlabamaSqlite3SessionStore" that assigned the result of
	calling the "require" function with the "better-sqlite3-session-store" library
	as its argument. The resulting module is then initialized with the "session" 
	middleware and the resulting store object is assigned to the constant variable.
*/
const AlabamaSqlite3SessionStore = require('better-sqlite3-session-store')(session);

/*
	This statement creates a new instance of an SQLites database object called "db" with
	the name "Alabama_Id_Session.db". The optional second argument specifies a 
	configuration object for the SQlite3 database, which includes the "verbose" property
	set to the value of the function call "console.log('The The Alabama_Id_Session have
	been successfully created')". This function call logs a message to the console
	indicating that the database has been successfully created.
*/
const db = new sqliteDB('Alabama_Id_Session.db', { verbose: console.log('The Alabama_Id_Session have been successfully created') });

/*
	This statement sets up a middleware function within iVoteBallot web application 
	in the Node.js router that uses the session package to manage user sessions. 
	And, the router.use creates a new SQLite3-based session store that will persist
	session data to be file, and configures the session to use a secure, HTTP-only 
	cookie within a maximum age of 30 minutes. The secret option sets the key used
	to sign the session ID cookie.
*/
router.use(
	session({
		store: new AlabamaSqlite3SessionStore ({
			client: db,
			dir:'Alabama_Id_Session.db',
			name:'ALABAMA_SESSION',
			cookie: {
				secure: true,
				httpOnly: true,
				sameSite: true,
				resave: false,
				saveUninitialized: false,
				maxAge: 'SESSION_MAX_AGE' // 30 minuites in milliseconds
			}
		}),
		secret: 'EXPRESS_SESSION_KEY',
		resave: false
	})
)

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
	users to be authenticated across multiple requests by persisting user's data information
	within the session store.

	The router.use() method is used to register middleware functions for a specific route
	or group of routes. In this case, passport.session() is a middleware function provided
	by Passport library that retrieves user's data information from the session store and
	deserializes it into a user object (email and password). This middleware is typically 
	used after Passport's authentication middleware has been invoked.
*/
router.use(passport.session());

router.use(flashPassport());

/*
	The statement `router.use(flash())` is employed within the context of the custom 
	JavaScript-coded language used in the development of the iVoteBallot web application. 
	This particular configuration is pivotal for incorporating flash messaging functionality. 
	And, flash messaging is a technique commonly used in web applications to provide user 
	feedback, especially after form submissions. In this instance, the `router.use(flash())` 
	statement signifies the integration of the Flash library into the application's routing 
	system. The Flash library facilitates the creation and display of temporary messages to
	users, enhancing the overall user experience by conveying information about the success
	or failure of specific actions, such as form submissions or authentication processes. 
	This implementation aligns with modern web development practices, contributing to a more 
	interactive and user-friendly application.
*/
router.use(flash());

/* 
	In the JavaScript code snippet `router.use('/alabamaDMV_Commission_01', (req, res, next) => { ... }`,
	a pivotal middleware is integrated into the Node.js API. This middleware, when invoked onto
	the specified route '/alabamaDMV_Commission_01', serves a crucial role in users' authentications. 
	The middleware begins by logging a message to the console ('middleware called!'), and subsequently
	checks, if the user is already authenticated by inspecting the session cookie id information within
	the SQLite3 database. If the user is not authenticated, the middleware marks the request as 
	unauthenticated, particularly relevant when the request is directed towards the '/login' URL. 
	
	The `next()` function ensures the seamless flow of the request through the middleware stack. 
	This mechanism aids in controlling access to the specified route, exemplifying the versatility 
	of the `router.use()` method for registering middleware functions tailored to specific routes 
	or route groups in a Node.js application.
*/
router.use('/alabamaDMV_Commission_01', (req, res, next) => {
    console.log('middleware called!');
    // Check if user is Already authenticated
    if (!req.session.isAuthenticated) {  
      
        // User of '/login#' URL
        req.isUnauthenticated = true;
    }
    next();
});

/* 
	In the JavaScript code snippet `router.use('/alabamaVoters_SignUpLogin_01', (req, res, next) 
	=> { ... }`, a pivotal middleware is integrated into the Node.js API. This middleware, when 
	invoked onto the specified route '/alabamaVoters_SignUpLogin_01', serves a crucial role in 
	users' authentications. The middleware begins by logging a message to the console 
	('middleware called!'), and subsequently checks, if the user is already authenticated by 
	inspecting the session cookie id information within the SQLite3 database. If the user is not
	authenticated, the middleware marks the request as unauthenticated, particularly relevant when
	the request is directed towards the '/login' URL. 
	
	The `next()` function ensures the seamless flow of the request through the middleware stack. 
	This mechanism aids in controlling access to the specified route, exemplifying the versatility 
	of the `router.use()` method for registering middleware functions tailored to specific routes 
	or route groups in a Node.js application.
*/

router.use('/alabamaVoters_SignUpLogin_01', (req, res, next) => {
    console.log('middleware called!');
    // Check if user is Already authenticated
    if (!req.session.isAuthenticated) {  
      
        // User of '/login' URL
        req.isUnauthenticated = true;
    }
    next();
});


/*
	In the JavaScript snippet `router.use('/alabamaDMV_Commission_01', (req, res, next) => { ... }`, 
	a critical middleware operation is introduced within the context of a Node.js application. 
	This middleware is specifically designed to scrutinize users' authentications onto the route
	'/alabamaDMV_Commission_01'. The code initiates by assessing whether the user has already been
	authenticated, and examining the session cookie id information from the SQLite3 database. If 
	the user is not authenticated, the middleware sets the `req.isUnauthenticated` flag to true. 
	The `next()` function ensures the smooth progression of the request through the middleware stack. 
	This implementation effectively controls access to the specified route, showcasing the utility 
	of the `router.use()` method for incorporating middleware functions tailored to particular routes
	or route groups within a Node.js application.
*/
router.use('/alabamaDMV_Commission_01', (req, res, next) => {
	// Check if user has Already been authenticated.
	if(!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

/*
	In the JavaScript snippet `router.use('/alabamaVoters_SignUpLogin_01', (req, res, next) => 
	{ ... }`, a critical middleware operation is introduced within the context of a Node.js 
	application. This middleware is specifically designed to scrutinize users' authentications
	onto the route '/alabamaVoters_SignUpLogin_01'. The code initiates by assessing whether the
	user has already been authenticated, and examining the session cookie id information from 
	the SQLite3 database. If the user is not authenticated, the middleware sets the 
	`req.isUnauthenticated` flag to true. The `next()` function ensures the smooth progression of
	the request through the middleware stack. This implementation effectively controls access to the
	specified route, showcasing the utility of the `router.use()` method for incorporating middleware
	functions tailored to particular routes or route groups within a Node.js application.
*/
/*
router.use('/alabamaVoters_SignUpLogin_01', (req, res, next) => {
	// Check if user has Already been authenticated.
	if(!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});
*/

/*
	The provided JavaScript code configures routing paths for the iVoteBallot web application within the Express.js
	framework. These routes involve both HTTP POST and GET methods, each mapped to specific functions within the 
	associated controller modules. Multiple statements employing the HTTP POST method are present to facilitate 
	the creation of new entries in the SQLite3 database. These statements direct requests to functions named:

	`alabamaDMV_Commission_01_AuthenticatePost`, 
	`createAlabamaDMV_Commission_01_Database`, 
	`createContactUs_01_Database`, and 
	`contactUs_01_PassportPost` 

	within the `alabamaDMV_Commission_01_Controller` and `contactUs_01_Controller` modules.

	Conversely, HTTP GET requests are accommodated by several statements, directing users to pages related to 
	authentications. These GET requests are mapped to functions named:

	`alabamaDMV_Commission_01_RouteGet`, 
	`alabamaDMV_Commission_01_PassportGet`, and 
	`contactUs_01_PassportGet` 
	
	within the respective controller modules. This organized structure in routing and function mapping streamlines
	the flow of requests and interactions within the iVoteBallot web application, enhancing clarity and 
	maintainability within the codebase.	
*/
router
	.get('/alabamaDMV_Commission_01', alabamaDMV_Commission_01_Controller.alabamaDMV_Commission_01_RouteGet);

router	
	.get('/alabamaDMV_Commission_01', alabamaDMV_Commission_01_Controller.alabamaDMV_Commission_01_PassportGet);

router
	.post('/alabamaDMV_Commisson_01', alabamaDMV_Commission_01_Controller.alabamaDMV_Commission_01_AuthenticatePost);

router
	.post('/alabamaDMV_Commission_01', alabamaDMV_Commission_01_Controller.createAlabamaDMV_Commission_01_Database);

router
    .post('/contactUs_01', contactUs_01_Controller.createContactUs_01_Database);

router
    .get('/contactUs_01', contactUs_01_Controller.contactUs_01_PassportGet);

router
    .post('/contactUs_01', contactUs_01_Controller.contactUs_01_PassportPost);

	


 
/*
	In a Node.js application, the module.exports is used to expose a module, as a single object
	or function to other parts of the iVoteBallot web application. And, the router refers to an
	instance of the Express router, which is used for handling HTTP requests in an Express 
	library by ways of setting module.exports to those routers, the Developer is exporting the router
	instance to other parts of the iVoteBallot web application, allowing them to access and
	use those routers for handling requests.
*/
module.exports = router; 