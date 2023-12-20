const express = require('express');

const iVoteBallotApp = express();

/*
	The purpose of this JavaScript coded language is to require the "alabama_Session_Router" 
	module from the "../models/alabama_Session_Router" file. This indicates that the module
	is necessary for the execution of the current const 'alabamaDMV_Commission_01_Controller' script, and 
	allows access to the functions and properties of the "alabama_Session_Router" module. The
	alabamaDMV_Commission_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles user contact us form submissions.
*/
const alabama_Session_Router = require('../models/alabama_Session_Router');

const session = require('express-session');

/*
	This line of JavaScript coded language imports the Passport library by assigning
	it to a constant variable called "passport". The Passport library is typically used
	for authentication in iVoteBallot web application which allows users to log in and
	access his/her protected log in credentials.
*/
const passport = require('passport');

/*
	The JavaScript coded language const LocalStrategy = require('passport-local').Strategy
	is used for setting up a local authentication strategy using the Passport.js library. 
	And, the 'passport-local' library is being required to access the LocalStrategy constructor 
	function that defines the authentication strategy. The LocalStrategy is used to authenticate
	users based on username and password credentials stored in a session cookie, as opposed to
	using an external authentication services.
*/
const LocalStrategy = require('passport-local').Strategy;

/*
	This JavaScript coded language imports the "sqlite3" library, and sets it to a constant
	variable "sqlite3". And, the ".verbose()" method allows for verbose mode, which provides
	additional information during execution for debugging purposes. This .verbose() method is
	typically used for interacting with SQLite3 databases within the iVoteBallot web application.
*/
const sqlite3 = require('sqlite3').verbose();

/*
	1. The code const bcrypt = require('bcrypt') is a module that allows Sarai Hannah Ajai 
	(the Developer) to hash and compare passwords in a Node.js application.
	2. The bcrypt module uses a one-way hashing algorithm to securely store user's passwords 
	in SQLite3 database, making it difficult for attackers to retrieve the original password.
	3. Ms. Ajai (the Developer) can use the bcrypt module to generate a salted hash of the user's
	password, and later compare the hash with the user's input field such as, email address
	to verify their identity.
*/
const bcrypt = require('bcrypt');

/*
	The given Javascript coded language imports the 'nodemailer' library which is used for
	sending email within the iVoteBallot web application. The 'require' function is a
	built-in method in Node.js that is used to load modules or files. The 'const' keyword
	declares a constant variable 'nodemailer' that holds the reference to the loaded 
	'nodemailer' library.
*/
const nodemailer = require('nodemailer');

/*
The code const flash = require('connect-flash'); imports the connect-flash module, which provides a 
middleware for storing and displaying flash messages in an Express.js application. Flash messages are 
short-lived messages that are stored in the session and displayed to the user on the next request. With
connect-flash, you can easily create and manage flash messages in your application, which can be used to
display success messages, error messages, or any other kind of notification to the user.
*/
const flash2 = require('connect-flash');

const flash = require('express-flash');

/*
	1. The code const path = require('path') imports the built-in Node.js path module, which
	provides utilities for working with file and directory paths.
	2. You can use the path module to manipulate file paths in a platform-independent way and
	perform tasks such as resolving relative paths, joining multiple paths, and extracting 
	file extensions.
*/
//const path = require('path');

/*
	The if (process.env.NODE_ !== 'production') block checks whether the application is running
	in production mode, and if not, loads additional environment variables from another .env file.	
	This is a common practice to ensure that sensitive information is not accidentally leaked in
	development or testing environments.
*/
if (process.env.NODE_ !== 'production') {
	require('dotenv').config();
}

/*
	The JavaScript coded language defines four constants by assigning values retrieved from 
	an environment variables. These constants are used within the iVoteBallot web application
	that requires session management, and are used to configure the behavior of session 
	handling, including the maximum age of these sessions, the session names, and the encryption
	keys used to secure sessions data. And, the IONOS_SECRET_KEY constant is used for accessing
	sensitive data or services protected by an nodemailer API key or other credentials.
*/
const ALABAMA_SESSION = process.env.ALABAMA_SESSION;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;

/*
	The code creates a new instance of the SQLite3 Database using the sqlite3 module in JavaScript. 
	The first argument passed to the constructor is the name of the database file to create or 
	connect to. In this case, the name of the database file is 'alabamaDMV_Commission_01.db'. If 
	there is an error during the database connection, the error message will be logged to the console
	with an appropriate message. If the connection is successful, a message will be logged to the
	console indicating that the connection has been established successfully. The created instance of the 
	SQLite3 database can be used to perform database operations such as inserting, updating, deleting or
	querying data.

	This code is useful for Sarai Hannah Ajai who want to use a lightweight, serverless SQLite3 database
	for her JavaScript iVoteBallot web application without the need for a separate server or installation
	process.
*/
const db1 = new sqlite3.Database('alabamaDMV_Commission_01.db', err => {
    if (err) {
        console.log('Sarai Hannah Ajai has created the SQLite3 database connection from her written JavaScript coded language for \'alabamaDMV_Commission_01\' which has a generated an error, as ' + err + '.');
    }else {
        console.log('Sarai Hannah Ajai has created the SQLite3 database connection from her written JavaScript coded language which \'alabamaDMV_Commission_01\' has a generated successfully connection.');
    }
});

/*
	The given JavaScript codes language creates a SQLite3 database table named 
	"alabamaDMV_Commission_01",	if it does not already exist. The "alabamaDMV_Commission_01" 
	table has twenty-six columns, including an auto-incrementing primary key column named
	"id", and twenty-five other columns that store user's data information such as first name,
	middle name, last name, suffix, date of birth, sex and etc. And, All input fields are 
	required except for suffix and unit type number which are both optional characters
	respectively.

	The "serialize" function is called on the database instance, which ensures that all
	database queries within the function are executed sequentially and not concurrently.
	The "run" function is then used to execute the SQLite3 query that creates the 
	"alabamaDMV_Commission_01" table, which is wrapped in a template string for easy 
	readability and formatting.

	This code snippet is commonly used in web development to create a database table for
	storing user account data information, which can be accessed and manipulated as needed.
*/
db1.serialize( () => {
    const sqlTable =  (`CREATE TABLE IF NOT EXISTS alabamaDMV_Commission_01 (

        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        Date DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
        DMVFirstName VARCHAR (100) NOT NULL, 
        DMVMiddleName VARCHAR (100) NOT NULL, 
        DMVLastName VARCHAR(100) NOT NULL,
        DMVSuffix VARCHAR(25) NOT NULL,
        DMVDateOfBirth VARCHAR(50) NOT NULL,
        DMVBirthSex VARCHAR(25) NOT NULL,
        DMVGenderIdentity VARCHAR(25) NOT NULL,
        DMVRace VARCHAR(250) NOT NULL,
        DMVSSN VARCHAR(25) NOT NULL,
        DMVEmail VARCHAR(150) NOT NULL,
        DMVConfirmEmail VARCHAR(150) NOT NULL,
        DMVPhoneNumber VARCHAR(50) NOT NULL,
        DMVAddress VARCHAR(200) NOT NULL,
        DMVUnitType VARCHAR(100) NOT NULL,
        DMVUnitTypeNumber VARCHAR(15) NOT NULL,
        DMVCountrySelection VARCHAR(100) NOT NULL,
        DMVStateSelection VARCHAR(100) NOT NULL,
        DMVCountySelection VARCHAR(100) NOT NULL,
        DMVCitySelection VARCHAR(100) NOT NULL,
        DMVZipSelection VARCHAR(25) NOT NULL,
        DMVIdType VARCHAR(100) NOT NULL,
        DMVIdTypeNumber VARCHAR(25) NOT NULL,
        IvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
        ConfirmIvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
		Password VARCHAR(50) NOT NULL,
		ConfirmPassword VARCHAR(50) NOT NULL,
		Temporary_Password VARCHAR(50) NOT NULL
        
    )`);  
		
	db1.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Sarai Hannah Ajai have created the Sqlite3 \'alabamaDMV_Commission_01\' database table which is not JavaScript programmatically coded successfully for which have generated an error message: ' + err + '!');
		} else {
			console.log('Sarai Hannah Ajai have created the Sqlite3 \'alabamaDMV_Commission_01\' database table which is JavaScript programmatically coded successfully!');   
		}
	});        
});

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
iVoteBallotApp.use(
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
iVoteBallotApp.use([passport.initialize()]);

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
iVoteBallotApp.use(passport.session());

/*
	The JavaScript codes language sets up a local1, LocalStrategy for Passport, which is a popular
	authentication middleware for Node.js. It defines a function that will be called when an
	user attempts to log in. The function takes the user's email and password, as an input
	and uses them to search for an user within a SQLite3 database (alabamaDMV_Commission_01).

	If the user is not found, the function returns an error message to the client (user). If the user
	is found, the function uses the bcrypt library to compare the provided password 
	(userCommissionIvoteBallotIdIdentifierCode) with the stored hashed password 
	(userCommissionIvoteBallotIdIdentifierCode). If the password (userCommissionIvoteBallotIdIdentifierCode) 
	match, the function returns the user's data information	to the client (back-end server).

	The passReqToCallback option is set to true, which allows the request object to be passed
	to the callback function, enabling the Sarai Hannah Ajai (Developer) to access other request
	parameters, if necessary. This code provides a simple but effective way to authenticate users
	and ensurethe security of their iVoteballot data information.
*/

passport.use(
	'local1',
	new LocalStrategy({
	usernameField: 'DMVEmail',
	passwordField: 'IvoteBallotIdIdentifierCode',
	passReqToCallback: true // To allow request object to be passed to callback
},   
	async (req, DMVEmail, IvoteBallotIdIdentifierCode, done) => {
		
		console.log('The iVoteBallot\'s user\'s passport.use(local1) email (\'DMVEmail\') as: ' + DMVEmail);
		console.log('The iVoteBallot\'s user\'s passport.use(local1) password (\'IvoteBallotIdIdentifierCode\') as: ' + IvoteBallotIdIdentifierCode );	

		if (!IvoteBallotIdIdentifierCode) {
			console.log('The user\'s iVoteBallot Id Identifier Code entered into the input field is: ' + IvoteBallotIdIdentifierCode + '.');
			console.log('The user\'s iVoteBallot Id Identifier Code does not match to the Session cookie id\'s database.');
			return done (null, false, { message: 'Your iVoteBallot Id Identifier Code does not match to our iVoteballot\'s database.' });

		} else 
		
			await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?`, DMVEmail, (err, row) => {
			
				if (err) {
					return done(err);
				}

				if (!row) {
					return done (null, false, { message: 'You have entered the incorrect email address.'});
				}
				
				bcrypt.compare(IvoteBallotIdIdentifierCode, row.IvoteBallotIdIdentifierCode, (err, result) => {
				
				if (err) {
					return done(err);
				}
				if (!result) {
					console.log('The user\'s iVoteBallot Id Identifier Code was entered incorrectly.' )
					return done(null, false, { message: 'You have entered the incorrect iVoteBallot Id Identifier Code.'});
				} else {
				
				//return done(null, user);

					return done(null, {

						id: row.id, 
				
						DMVFirstName: row.DMVFirstName, 
						DMVMiddleName: row.DMVMiddleName, 
						DMVLastName: row.DMVLastName, 
						DMVSuffix: row.DMVSuffix, 
						DMVDateOfBirth: row.DMVDateOfBirth, 
						DMVBirthSex: row.DMVBirthSex, 
						DMVGenderIdentity: row.DMVGenderIdentity, 
						DMVRace: row.DMVRace, 
						DMVSSN: row.DMVSSN, 
						DMVEmail: row.DMVEmail, 
						DMVConfirmEmail: row.DMVConfirmEmail, 
						DMVPhoneNumber: row.DMVPhoneNumber, 
						DMVAddress: row.DMVAddress, 
						DMVUnitType: row.DMVUnitType, 
						DMVUnitTypeNumber: row.DMVUnitType, 
						DMVCountrySelection: row.DMVCountrySelection, 
						DMVStateSelection: row.DMVStateSelection, 
						DMVCountySelection: row.DMVCountySelection, 
						DMVCitySelection: row.DMVCitySelection, 
						DMVZipSelection: row.DMVZipSelection, 
						DMVIdType: row.DMVIdType, 
						DMVIdTypeNumber: row.DMVIdTypeNumber, 
						IvoteBallotIdIdentifierCode: row.IvoteBallotIdIdentifierCode, 
						ConfirmIvoteBallotIdIdentifierCode: row.ConfirmIvoteBallotIdIdentifierCode, 
						Password: row.Password, 
						ConfirmPassword: row.DMVConfirmEmail, 
						Temporary_Password: row.Temporary_Password, 
						
						isAuthenticated: true
							 
						}
					
					);

				}
				});                
			});       
		}
	)
);

/*
passport.use(
	'login2',
	new LocalStrategy({
	usernameField: 'userDMVEmail',
	passwordField: 'userIvoteBallotIdIdentifierCode',
	passReqToCallback: true // To allow request object to be passed to callback
},   
	async (req, userDMVEmail, userIvoteBallotIdIdentifierCode, done) => {
		
		console.log('The iVoteBallot\'s user\'s passport.use(login2) email (\'userDMVEmail\') as: ' + userDMVEmail);
		console.log('The iVoteBallot\'s user\'s passport.use(login2) password (\'userIvoteBallotIdIdentifierCode\') as: ' + userIvoteBallotIdIdentifierCode );	

				
		await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE userDMVEmail = ?`, userDMVEmail, (err, row) => {
		
			if (err) {
				return done(err);
			}

			if (!row) {
				return done (null, false, { message: 'You have entered the incorrect email address '+  userDMVEmail + '.'});
			}
			
			bcrypt.compare(userIvoteBallotIdIdentifierCode, row.userIvoteBallotIdIdentifierCode, (err, result) => {
			
			if (err) {
				return done(err);
			}
			if (!result) {
				console.log('The user\'s iVoteBallot Id Identifier Code was entered incorrectly ' + userPassword + '.');
				return done(null, false, { message: 'You have entered the incorrect iVoteBallot Id Identifier Code' + userPassword + '.'});
			}
			//return done(null, row);

				return done(null, 
					{	
						id: row.id, 
						
						userDMVFirstName: row.userDMVFirstName, 
						userDMVMiddleName: row.userDMVMiddleName, 
						userDMVLastName: row.userDMVLastName, 
						userDMVSuffix: row.userDMVSuffix, 
						userDMVDateOfBirth: row.userDMVDateOfBirth, 
						userDMVBirthSex: row.userDMVBirthSex, 
						userDMVGenderIdentity: row.userDMVGenderIdentity, 
						userDMVRace: row.userDMVRace, 
						userDMVSSN: row.userDMVSSN, 
						userDMVEmail: row.userDMVEmail, 
						userDMVConfirmEmail: row.userDMVConfirmEmail, 
						userDMVPhoneNumber: row.userDMVPhoneNumber, 
						userDMVAddress: row.userDMVAddress, 
						userDMVUnitType: row.userDMVUnitType, 
						userDMVUnitTypeNumber: row.userDMVUnitType, 
						userDMVCountrySelection: row.userDMVCountrySelection, 
						userDMVStateSelection: row.userDMVStateSelection, 
						userDMVCountySelection: row.userDMVCountySelection, 
						userDMVCitySelection: row.userDMVCitySelection, 
						userDMVZipSelection: row.userDMVZipSelection, 
						userDMVIdType: row.userDMVIdType, 
						userDMVIdTypeNumber: row.userDMVIdTypeNumber, 
						userIvoteBallotIdIdentifierCode: row.userIvoteBallotIdIdentifierCode, 
						userConfirmIvoteBallotIdIdentifierCode: row.userConfirmIvoteBallotIdIdentifierCode, 
						userPassword: row.userPassword, 
						userConfirmPassword: row.userDMVConfirmEmail, 
						userTemporary_Password: row.userTemporary_Password, 
						
						isAuthenticated: true
							
					}
				
				);

			});
				               
		});

	}

));
*/

/*
	The code passport.serializeUser(function (user, done) { done(null, user.id); }) is a function
	that is used by Passport to serialize the user object for storage in a session.

	The serializeUser function takes in a callback function that receives the user object and a
	done callback function as its parameters. The done function is called with null and the
	user's id property as arguments, which is then used to serialize the user object to a string
	representation only once for authentication process through the session cookie id.

	This serialized user data information is then stored in the session, allowing the server to
	persist the user's authentication state across requests.

	Overall, serializeUser is an essential function for Passport-based authentication, as it enables
	the back-end server to efficiently manage user sessions cookie id and keep track of user's
	authentication.
*/
passport.serializeUser(function (user, done) {
    console.log('Serializing user...');
    console.log(user);
    done(null, user.id);
});

/*
	The code passport.deserializeUser is used by Passport to deserialize the user object from a 
	session cookie. This function takes in the user's id and a callback function done as parameters.

	The deserializeUser function first queries the database using the user's id to retrieve
	the user's data information. If the user is not found, the function returns a false value to 
	the done callback function. If the user is found, the function returns an object containing 
	the user's id, userDMVFirstName, userDMVMiddleName, userDMVLastName, userDMVDateOfBirth, 
	userDMVBirthSex and etc to the done callback function.

	Overall, deserializeUser is an important function in the Passport-based authentication, as it 
	allows the index.js (server) to retrieve user data information from the sessions cookie id
	and use it to authenticate requests.
*/
passport.deserializeUser(function(id, done) {
    console.log('Deserializing users...')
    console.log(id);   
    db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE id = ?', id, (err, row) => {
		
      if (err) { 
        return done(err); 
    }
      if (!row) { 
        return done(null, false); 
    } else {
      return done(null, 
	
		{
			id: row.id, 
			
			DMVFirstName: row.DMVFirstName, 
			DMVMiddleName: row.DMVMiddleName, 
			DMVLastName: row.DMVLastName, 
			DMVSuffix: row.DMVSuffix, 
			DMVDateOfBirth: row.DMVDateOfBirth, 
			DMVBirthSex: row.DMVBirthSex, 
			DMVGenderIdentity: row.DMVGenderIdentity, 
			DMVRace: row.DMVRace, 
			DMVSSN: row.DMVSSN, 
			DMVEmail: row.DMVEmail, 
			DMVConfirmEmail: row.DMVConfirmEmail, 
			DMVPhoneNumber: row.DMVPhoneNumber, 
			DMVAddress: row.DMVAddress, 
			DMVUnitType: row.DMVUnitType, 
			DMVUnitTypeNumber: row.DMVUnitType, 
			DMVCountrySelection: row.DMVCountrySelection, 
			DMVStateSelection: row.DMVStateSelection, 
			DMVCountySelection: row.DMVCountySelection, 
			DMVCitySelection: row.DMVCitySelection, 
			DMVZipSelection: row.DMVZipSelection, 
			DMVIdType: row.DMVIdType, 
			DMVIdTypeNumber: row.DMVIdTypeNumber, 
			IvoteBallotIdIdentifierCode: row.IvoteBallotIdIdentifierCode, 
			ConfirmIvoteBallotIdIdentifierCode: row.ConfirmIvoteBallotIdIdentifierCode, 
			Password: row.Password, 
			ConfirmPassword: row.DMVConfirmEmail, 
			Temporary_Password: row.Temporary_Password, 
			
			isAuthenticated: true 

		});	
	
	}
		
    });

});

/* -------------------------- The beginning of the alabamaDMV_Commission_01 section ----------------------------- */

const redirectSignUp = (req, res, next) => {
    if(req.session.userId) {
        res.redirect('/alabamaVoters_SignUp_01');
    } else {
        next();
    }
}

const alabamaDMV_Commission_01_RouteGet = ('/alabamaDMV_Commission_01', redirectSignUp, (req, res) => {

	// To check, if user is have already been authenticated.
	if (req.session.isAuthenticated) {
		return alert('You are already logged in to sign up for an iVoteballot account!');

	}
	console.log(req.session);
	// To check, if the user have used the '/alabamaDMV_Commission_01' URL route bar first.
	if (req.isUnauthenticated) {
		console.log(req.flash());
		res.render('alabamaDMV_Commission_01', { messages: (req.flash()) });

	} else {
		console.log(req.flash())
	}

});

const alabamaDMV_Commission_01_AuthenticatedGet = ('/alabamaDMV_Commission_01', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User have been successfully authenticated within the passport.user login1 LocalStrategy through the Session Cookie Id from the SQLite3 database for which is known as, serialization.');
        res.render('alabamaVoters_SignUp_01');
    } else {
        res.render('500')
       
        console.log('The User have not been successfully authenticated within the passport.user login1 LocalStrategy through the Session Cookie Id from the SQLite3 database for which is known as, serialization.');
    }
});

/* -------------------------- The ending of the alabamaDMV_Commission_01 section ----------------------------- */

/* -------------------------- The beginning of the alabamaVoters_SignUp_01 section ----------------------------- */
const alabamaVoters_SignUp_01_RoutePost = (
	'/alabamaVoters_SignUp_01',
	passport.authenticate('local1', {
		successRedirect: '/alabamaVoters_EmailVerification_01',
		failureRedirect: '/alabamaVoters_SignUp_01',
		failureFlash: true
	})
);

/* -------------------------- The ending of the alabamaVoters_SignUp_01 section ----------------------------- */

/* -------------------------- The beginning of the alabamaVoters_EmailVerification section ----------------------------- */

const alabamaVoters_EmailVerification_01_AuthenticatedGet = ('/alabamaVoters_EmailVerification_01', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User have been successfully authenticated within the passport.user login1 LocalStrategy through the Session Cookie Id from the SQLite3 database for which is known as, serialization.');
        res.render('ivoteballot');
    } else {
        res.render('500')
       
        console.log('The User have not been successfully authenticated within the passport.user login1 LocalStrategy through the Session Cookie Id from the SQLite3 database for which is known as, serialization.');
    }
});

/* -------------------------- The ending of the alabamaVoters_EmailVerification_01 section ----------------------------- */




/* -------------------------- The beginning of the alabamaVoters_CreatePassword_01 section ----------------------------- */

const alabamaVoters_CreatePasswords_01_RouteGet = ('/alabamaVoters_CreatePasswords_01', (req, res) => {
    if (req.isAuthenticated) {
        console.log(req.user);
        console.log(req.session);
        console.log('User had been successfully authenticated within the Session through the passport from dashboard!');
        res.render('alabamaVoters_CreatePasswords_01', { DMVFirstName: req.user.DMVFirstName, DMVLastName: req.user.DMVLastName, DMVEmail: req.user.DMVEmail });
    } else if (req.isUnauthenticated) {
        res.render('/alabamaVoters_SignUp_01')
        console.log('User is not successfully authenticated within the session through the passport from dashboard!');
    }
});

/* -------------------------- The ending of the alabamaVoters_CreatePassword_01 section ----------------------------- */

/* -------------------------- The beginning of the alabamaVoters_LogIn_01 section ----------------------------- */

const alabamaVoters_LogIn_01_RouteGet = ('/alabamaVoters_LogIn_01', (req, res) => {
    if (req.isAuthenticated) {
        console.log(req.user);
        console.log(req.session);
        console.log('User had been successfully authenticated within the Session through the passport from dashboard!');
        res.render('ivoteballot', { DMVFirstName: req.user.DMVFirstName, DMVLastName: req.user.DMVLastName, DMVEmail: req.user.DMVEmail });
    } else if (req.isUnauthenticated) {
        res.render('/alabamaVoters_LogIn_01')
        console.log('User is not successfully authenticated within the session through the passport from dashboard!');
    }
});

/* -------------------------- The ending of the alabamaVoters_LogIn_01 section ----------------------------- */

/* -------------------------- The beginning of All SQLite3 databases section ----------------------------- */

const alabamaDMV_Commission_01_CreateDatabase = ('/alabamaDMV_Commission_01',
	async (req, res) => { 	
		
		console.log(req.req);

		const DMVFirstName = req.body.DMVFirstName;       
		const DMVMiddleName = req.body.DMVMiddleName; 
		const DMVLastName = req.body.DMVLastName;        
		const DMVSuffix = req.body.DMVSuffix;
		const DMVDateOfBirth = req.body.DMVDateOfBirth;
		const DMVBirthSex = req.body.DMVBirthSex;
		const DMVGenderIdentity = req.body.DMVGenderIdentity;
		const DMVRace = req.body.DMVRace;
		const DMVSSN = req.body.DMVSSN;
		const DMVEmail = req.body.DMVEmail;
		const DMVConfirmEmail = req.body.DMVConfirmEmail;
		const DMVPhoneNumber = req.body.DMVPhoneNumber;
		const DMVAddress = req.body.DMVAddress;
		const DMVUnitType = req.body.DMVUnitType;
		const DMVUnitTypeNumber = req.body.DMVUnitTypeNumber;
		const DMVCountrySelection = req.body.DMVCountrySelection;
		const DMVStateSelection = req.body.DMVStateSelection;
		const DMVCountySelection = req.body.DMVCountySelection;
		const DMVCitySelection = req.body.DMVCitySelection;
		const DMVZipSelection = req.body.DMVZipSelection;
		const DMVIdType = req.body.DMVIdType;
		const DMVIdTypeNumber = req.body.DMVIdTypeNumber;
		const IvoteBallotIdIdentifierCode = req.body.IvoteBallotIdIdentifierCode;
		const ConfirmIvoteBallotIdIdentifierCode = req.body.ConfirmIvoteBallotIdIdentifierCode;
		const Password = req.body.Password;
		const ConfirmPassword = req.body.ConfirmPassword;
		const Temporary_Password = req.body.Temporary_Password;

		console.log(req.body);

		console.log('The user\'s first name: ' + DMVFirstName + '.');
		console.log('The user\'s middle name is: ' + DMVMiddleName + '.');
		console.log('The user\'s last name is: ' + DMVLastName + '.');
		console.log('The user\'s suffix is: ' + DMVSuffix + '.');
		console.log('The user\'s date of birth is: ' + DMVDateOfBirth + '.');
		console.log('The user\'s birth sex is: ' + DMVBirthSex + '.');
		console.log('The user\'s gender identity is: ' + DMVGenderIdentity + '.');
		console.log('The user\'s race is: ' + DMVRace + '.');
		console.log('The user\'s SSN is: ' + DMVSSN + '.');
		console.log('The user\'s email is: ' + DMVEmail + '.');
		console.log('The user\'s confirm email is: ' + DMVConfirmEmail + '.');
		console.log('The user\'s phone number is: ' + DMVPhoneNumber + '.');
		console.log('The user\'s address is: ' + DMVAddress + '.');
		console.log('The user\'s unit type is: ' + DMVUnitType + '.');
		console.log('The user\'s unit type number is: ' + DMVUnitTypeNumber + '.');
		console.log('The user\'s country selection is: ' + DMVCountrySelection + '.');
		console.log('The user\'s state selection is: ' + DMVStateSelection + '.');
		console.log('The user\'s county selection is: ' + DMVCountySelection + '.');
		console.log('The user\'s city selection is: ' + DMVCitySelection + '.');
		console.log('The user\'s state selection is: ' + DMVStateSelection + '.');
		console.log('The user\'s zip code selection is: ' + DMVZipSelection + '.');
		console.log('The user\'s Id type is: ' + DMVIdType + '.');
		console.log('The user\'s Id type number is: ' + DMVIdTypeNumber + '.');
		console.log('The user\'s iVoteBallot Id Identifier Code is: ' + IvoteBallotIdIdentifierCode + '.');
		console.log('The user\'s confirm iVoteBallot Id Identifier Code is: ' + ConfirmIvoteBallotIdIdentifierCode + '.');
		console.log('The user\'s password is: ' + Password + '.');
		console.log('The user\'s confirm password is: ' + ConfirmPassword + '.');
		console.log('The user\'s temporary password is: ' + Temporary_Password + '.');

		console.log(req.session);	

		// The user's input dat information validation
		/*
		if (
			!userDMVFirstName || 
			!userDMVMiddleName || 
			!userDMVLastName || 
			!userDMVSuffix || 
			!userDMVDateOfBirth || 
			!userDMVBirthSex ||
			!userDMVGenderIdentity ||
			!userDMVRace || 
			!userDMVSSN || 
			!userDMVEmail || 
			!userDMVConfirmEmail ||
			!userDMVPhoneNumber ||
			!userDMVAddress ||
		
			
			!userDMVCountrySelection ||
			!userDMVStateSelection ||
			!userDMVCountySelection ||
			!userDMVCitySelection ||
			!userDMVZipSelection ||
			!userDMVIdType ||
			!userDMVIdTypeNumber ||
			!userIvoteBallotIdIdentifierCode ||
			!userConfirmIvoteBallotIdIdentifierCode ||
			!userPassword ||
			!userConfirmPassword ||
			!userTemporary_Password			
			
		) {
			req.flash('error', 'Please fill in all required fields.')
			return res.redirect('/alabamaDMV_Commission_01');
		}	
		*/		
		
		if (IvoteBallotIdIdentifierCode !== ConfirmIvoteBallotIdIdentifierCode) {
			req.flash('error', 'The user\'s iVoteballot Id Identifier Code does not match to the user\'s confirm iVoteballot Id Identifier Code for which, you have entered into the input fields.');			
			return res.redirect('/alabamaDMV_Commission_01');        

		} else {
			req.flash('success', 'The user\' iVoteBallot Id Identifier Code have successfully matched to his or her iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login1, LocalStrategy through the session cookie id.');
			console.log('The user\' iVoteBallot Id Identifier Code have successfully matched to his or her confirm iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login1, LocalStrategy through the session cookie id.');
		}  
		
		// To hash the user's DMVSSN input field using bcryption.
		const salt = await bcrypt.genSalt(12);
		const DMVSSNHashed = await bcrypt.hash(req.body.DMVSSN, salt);
		
		// To hash the user's IvoteBallotIdIdentifierCode input field using bcryption.		
		const IvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.IvoteBallotIdIdentifierCode, salt);

		// To hash the user's IvoteBallotIdIdentifierCode input field using bcryption.	
		const ConfirmIvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.ConfirmIvoteBallotIdIdentifierCode, salt);

		const newUser = {

			DMVFirstName,
			DMVMiddleName, 
			DMVLastName,
			DMVSuffix,
			DMVDateOfBirth, 
			DMVBirthSex,
			DMVGenderIdentity,
			DMVRace, 
			DMVSSN: DMVSSNHashed, 
			DMVEmail,
			DMVConfirmEmail,
			DMVPhoneNumber,
			DMVAddress,
			DMVUnitType,
			DMVUnitTypeNumber,
			DMVCountrySelection,
			DMVStateSelection,
			DMVCountySelection,
			DMVCitySelection,
			DMVZipSelection,
			DMVIdType,
			DMVIdTypeNumber,
			IvoteBallotIdIdentifierCode: IvoteBallotIdIdentifierCodeHashed,
			ConfirmIvoteBallotIdIdentifierCode: ConfirmIvoteBallotIdIdentifierCodeHashed,
			Password,
			ConfirmPassword,
			Temporary_Password

		}

		const sqlInsert = 'INSERT INTO alabamaDMV_Commission_01 (DMVFirstName, DMVMiddleName, DMVLastName, DMVSuffix, DMVDateOfBirth, DMVBirthSex, DMVGenderIdentity, DMVRace, DMVSSN, DMVEmail, DMVConfirmEmail, DMVPhoneNumber, DMVAddress, DMVUnitType, DMVUnitTypeNumber, DMVCountrySelection, DMVStateSelection, DMVCountySelection, DMVCitySelection, DMVZipSelection, DMVIdType, DMVIdTypeNumber, IvoteBallotIdIdentifierCode, ConfirmIvoteBallotIdIdentifierCode, Password, ConfirmPassword, Temporary_Password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';	
		
		const params = [newUser.DMVFirstName, newUser.DMVMiddleName, newUser.DMVLastName, newUser.DMVSuffix, newUser.DMVDateOfBirth, newUser.DMVBirthSex, newUser.DMVGenderIdentity, newUser.DMVRace, newUser.DMVSSN, newUser.DMVEmail, newUser.DMVConfirmEmail, newUser.DMVPhoneNumber, newUser.DMVAddress, newUser.DMVUnitType, newUser.DMVUnitTypeNumber, newUser.DMVCountrySelection, newUser.DMVStateSelection, newUser.DMVCountySelection, newUser.DMVCitySelection, newUser.DMVZipSelection, newUser.DMVIdType, newUser.DMVIdTypeNumber, newUser.IvoteBallotIdIdentifierCode, newUser.ConfirmIvoteBallotIdIdentifierCode, newUser.Password, newUser.ConfirmPassword, newUser.Temporary_Password];
		
		db1.run(sqlInsert, params, function (err) {	
			
			if (err) {
				console.error(err);
				req.flash('error', 'An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.');
				console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
				res.render('500');			
			
			} else {
				console.log('The user data information typed into the \'alabamaDMV_Commission_01\' input fields have been successfully parsed into the \'alabamaDMV_Commission_01\', SQLite3 database. ' + Date());			
				req.flash('Success', 'The user is successfully registered into the iVoteBallot database, and the user can now sign up to create his or her iVoteBallot account.');
				
				res.redirect('/alabamaVoters_SignUp_01');	

			}
			
			const transporter = nodemailer.createTransport ({
				host: 'smtp.ionos.com',
				port: 587,
				secure: false,
				auth: {
					user: 'testdevelopmentenvcustomercare@ivoteballot.com',
					pass: IONOS_SECRET_KEY,
				}
			}); 
			
			const imagePath = './Public/images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png';

			const mailOptions_01 = {
				from: req.body.DMVEmail,
				to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
				subject: `CEO/Election Assure Experts' Manager | An iVoteBallot's employee have manually entered, a new iVoteballot's user sucessfully into the iVoteballot database.`,  
				html: ` 
								
					<p>The following user have been successfully entered into the iVoteBallot database by an iVoteBallot's Election Assure Experts' employee:</p>
					<ul>
						<li>
							Name: ${req.body.DMVFirstName} ${req.body.DMVMiddleName} ${req.body.DMVLastName}
						</li>
						<li>
							Email: ${req.body.DMVEmail}
						</li>					
					</ul>
					
					<img src="cid:iVoteBallot Canva - Logo Dated 05-05-23 copy" />
					`,		
					
				attachments: [
					{
						filename: 'iVoteBallot Canva - Logo Dated 05-05-23 copy.png',
						path: imagePath,					
						cid: 'iVoteBallot Canva - Logo Dated 05-05-23 copy'
					}
				]
			};

			const mailOptions_02 = {
				from: 'testdevelopmentenvcustomercare@ivoteballot.com',
				to: req.body.DMVEmail, 
				subject: `Notification from iVoteBallot's Election Assure Experts`,			
				html: 			
					`			
					<p>Dear ${req.body.DMVFirstName} ${req.body.DMVMiddleName} ${req.body.DMVLastName},</p>	
								
					<p>
						
					</p>
					
					<p>
						
					</p>

					Thank you for choosing iVoteBallot, and we hope you have a great day, 
					${req.body.DMVFirstName}.
					</p>
						
					<p>Respectfully,</p>			
					
					<p>iVoteBallot's Election Assure Experts</p>

					<img src="cid:iVoteBallot Canva - Logo Dated 05-05-23 copy" />
					
					`,   
					
				attachments: [
					{
						filename: 'iVoteBallot Canva - Logo Dated 05-05-23 copy.png',
						path: imagePath,					
						cid: 'iVoteBallot Canva - Logo Dated 05-05-23 copy'
					}
				]
			};

			transporter.sendMail(mailOptions_01, (error, info) => {
				if (error) {				
					console.log('The nodemailer have received an error message for the mailOptions_01:' + error + '.');
					res.render('535');
				} else {
					console.log('Email Sent successfully: ' + info.response);			
				}
			});                

			transporter.sendMail(mailOptions_02, (error, info) => {
				if (error) {
					console.log('The nodemailer have received an error message for the mailOptions_02:' + error + '.');
					res.render('535');				
				} else {
					console.log('Email Sent successfully: ' + info.response);
					
				}
			});	

		});		

	}
);

const alabamaVoters_SignUp_01_CreateDatabase = ('/alabamaVoters_SignUp_01',

	async (req, res) => {

		const DMVEmail = req.body.DMVEmail;
		//const userIvoteBallotIdIdentifierCode = req.body.userIvoteBallotIdIdentifierCode;
		const Password = req.body.Password;
		const ConfirmPassword = req.body.ConfirmPassword;

		console.log('These are the request body' + req.body);

		//console.log('The user email address is: ' + userDMVEmail + '.');
		//console.log('The user iVoteBallot Id Identifier Code is: ' + userIvoteBallotIdIdentifierCode + '.');
		console.log('The user password is: ' + Password + '.');
		console.log('The user confirm password is: ' + ConfirmPassword + '.');

		console.log('The request session: ' + req.session + '.');

		// To hash the newPassword input field using bcrypt library.
		const salt = await bcrypt.genSalt(14);
		const passwordHashed = await bcrypt.hash(Password, salt);

		// To hash the confirmNewPassword input field using bcrypt library.
		const confirmPasswordHashed = await bcrypt.hash(ConfirmPassword, salt);
		
		// To check, if the user's email address exists onto the passport serialization through the session cookie id.
		db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?', DMVEmail, (err, user) => {

			if (err) {

				console.error(err);
				console.log('The user\'s input fields for passport.use local1 Local Strategy and Session Cookie Id did not successfully executed from the internet causing an 500 error message most likely from the Developer\'s JavaScript coded written algorithm problems.');
				res.render('500');

			} else if (!user) {

				console.log('The user\'s email address is not found successfully through the process of the passport.use local1 Local Strategy and Session Cookie Id to the SQLite3 database for serializtion.');
				res.render('alabamaVoters_SignUp_01');

			} else {
		
				db1.run('UPDATE alabamaDMV_Commission_01 SET Password = ?, ConfirmPassword = ? WHERE DMVEmail = ?', passwordHashed, confirmPasswordHashed, req.DMVEmail, (err) => {

					if (err) {
						console.error(err);
						console.log('The user\s passport and session was not successfully executed causing an 500 error message due from Developer\s programmatic coding language problems.');
						res.render('500');   

					} else {

						console.log('The user\s email address is successfully found within the passport serialization authenticated processes through the session.');
						res.redirect('/ivoteballot');
					}  

				});

			}

		});

	}
	
);

function generateNewPassword() {
    const length = 20;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]:";?,./~';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    return newPassword;
}  

const alabamaVoters_EmailVerification_01_CreateDatabase = ('/alabamaVoters_EmailVerification_01', (req, res) => {
	const email = req.body.DMVEmail;
	
		// Check if the email exists in the database
		db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?', email, (err, row) => {
			if (err) {
			console.error(err);
			console.log('SQLite3 language did not successfully execute user/s email address search properly; therefore this error means a JavaScript codes language error.');
			res.render('500');
	
			} else if (!row) {
			res.render('/alabamaVoters_EmailVerification_01', { error: 'Email not found' });
			console.log('User/s email was not successfully found onto the SQlite3 database.')
			} else {
			// Generate a new password and update the user's record in the database
		  
			const newPassword = generateNewPassword();
			const hash = bcrypt.hashSync(newPassword, 13);
		   
			db1.run('UPDATE alabamaDMV_Commission_01 SET Temporary_Password = ? WHERE DMVEmail = ?', hash, email, (err) => {
				if (err) {
				console.error(err);
				console.log('SQlite3 language had not properly execute the UPDATE correctly.')
				res.render('500');
				} else {
				// Send the new password to the user's email to nodemailer 
				//sendEmail(email, 'New password', `Your new password is: ${newPassword}`);
	
				res.redirect('/alabamaVoters_CreatePasswords_01');
				console.log('SQlite3 language had properly execute the UPDATE successfully for the user.')
	
				/*
				Sarai Hannah Ajai has generated a test SMTP service account; in order to receive AccouNetrics' customercare@ionos.com emails from the 
				'transporter' constant object from the AccouNetrics' users which pass through the 'nodemailer' API library.
				*/
				const transporter = nodemailer.createTransport ({
					host: 'smtp.ionos.com',
					port: 587,
					secure: false,
					auth: {
						user: 'testdevelopmentenvcustomercare@ivoteballot.com',
						pass: IONOS_SECRET_KEY,
					}
				});            
				
				if (req.isAuthenticated()) {
					/*
					Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
					using the default SMTP transporter nodemailer API library.
					*/
					const mailOptions_01 = {
						from: req.body.DMVEmail,
						to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
						subject: `iVoteBallot has a New Online Voter Registration Not Yet Verified`,  
						text: `iVoteBallot new online voter registration name is:
						${req.user.DMVFirstName} ${req.user.DMVLastName}
						and ${req.user.DMVFirstName} ${req.user.DMVLastName} has been sent an iVoteBallot's verification link registration in order to verify his/her
						email account, ${req.user.DMVEmail}.`,     
					};
	
					const mailOptions_02 = {
						from: 'testdevelopmentenvcustomercare@ivoteballot.com',
						to: req.body.DMVEmail, 
						subject: `Authenticate your iVoteBallot's Email Address Link`,
						html: `
						
						<p>Dear ${req.user.DMVFirstName} ${req.user.DMVLastName},</p>
	
						<p>Please click onto the following link in order to authenticate your email address:<p>
	
						<p>Your new temporary password is: ${newPassword}</p;
					
						<br>
						
						<p>and, your email address verification code will expire in 10 minutes. </p>
						<br>        
						<p>Respectfully, </p>
						
						<br>
	
						<p>iVoteBallot's Customer Care Team </p>
						
						`,          
					};
	
					/*
					Sarai Hannah Ajai has written her JavaScript programmatic codes to send an user test email to AccouNetrics' customercare@accounetrics.com
					email account with nodemailer defined transporter object.
					*/
					
					transporter.sendMail(mailOptions_01, (error, info) => {
						if (error) {
						  console.log(error);
						} else {
						  console.log('Email Sent: ' + info.response);
						}
					  });                
	
					  transporter.sendMail(mailOptions_02, (error, info) => {
						if (error) {
						  console.log(error);
						  res.send('error');
						} else {
						  console.log('Email Sent: ' + info.response);
						  res.send('success!');
						}
					  });                  
					  
				} else {
					res.render('error404');
					console.log('The nodemailer user could not be authenticated.');
	
				}
							  
				}
			});
			}
		});
	});
	

const alabamaVoters_CreatePasswords_01_CreateDatabase = ('/alabamaVoters_CreatePasswords_01',
	
	async(req, res) => {

		console.log('req.user:', req.DMVEmail);

		const userDMVEmail = req.user.DMVEmail;
		const userPassword = req.body.Password;
		const userConfirmPassword = req.body.ConfirmPassword;

		console.log(req.body);

		if (!DMVEmail) {

			console.log('The user is not found within the req.body.');
		}

		// To hash the newPassword input field using bcrypt library.
		const salt = await bcrypt.genSalt(14);
		const passwordHashed = await bcrypt.hash(Password, salt);

		// To hash the confirmNewPassword input field using bcrypt library.
		const confirmPasswordHashed = await bcrypt.hash(userConfirmPassword, salt);

		console.log('The user\'s email is: ' + userDMVEmail + '.');

		if (passwordHashed !== confirmPasswordHashed) {
			return res.render('alabamaVoters_CreatePasswords_01', { error: 'Your new password does not match to confirm password.' });

		} else {

			db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?', DMVEmail, (err, row) => {

				if (err) {

					console.error(err);

					// Handle the error...

				} else if (!row) {

					console.log('The user is not found in the SQLite3 database');

					// Handle the case where the user is not found.
					console.log('To retrieved user from the SQLite3 database.');
				}
			});


			db1.run('UPDATE alabamaDMV_Commission_01 SET Password = ?, ConfirmPassword = ? WHERE DMVEmail = ?', 
				[
					passwordHashed,
					confirmPasswordHashed,
					DMVEmail
				],
				(err) => {
					
					if (err) {
						console.log(err.message);
						return res.redirect('alabamaVoters_CreatePasswords_01', { error: 'An error occurred while user was updating his/her new password and confirm password from the \'alabamaVoters_CreatePasswords_01\' webpage.' });

					} else {

						res.redirect('/alabamaVoters_LogIn_01');
					}

				}
			)
		}
	}
);


/* -------------------------- The ending of All SQLite3 databases section ----------------------------- */

/*
	The given JavaScript coded language exports a module with multiple components, including
	a router, Passport authentication functions for GET and POST requests, a database instance, 
	and a function to create a database for handling the alabamaDMV_Commission_01 form submissions.
	These components are intended for use in an iVoteBallot web application's alabamaDMV_Commission_01 
	form feature by ways of providing the necessary functionality for handling user input and storing
	his or her data information when exporting these components, as a module, they can be easily imported
	and utilized in other parts of the iVoteBallot's web application.
*/
module.exports = {

	alabama_Session_Router,

	alabamaDMV_Commission_01_RouteGet,
	alabamaDMV_Commission_01_AuthenticatedGet,
	alabamaDMV_Commission_01_CreateDatabase,

	//alabamaVoters_SignUp_01_RouteGet,
	alabamaVoters_SignUp_01_RoutePost,
	alabamaVoters_SignUp_01_CreateDatabase,

	alabamaVoters_EmailVerification_01_AuthenticatedGet,
	alabamaVoters_EmailVerification_01_CreateDatabase,

	alabamaVoters_CreatePasswords_01_RouteGet,
	//alabamaVoters_CreatePasswords_01_RoutePost,	
	alabamaVoters_CreatePasswords_01_CreateDatabase,

	alabamaVoters_LogIn_01_RouteGet



	
}
  

