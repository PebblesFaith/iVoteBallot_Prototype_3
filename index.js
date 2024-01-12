const express = require('express');

const iVoteBallotApp = express();

/*
	1. The code const path = require('path') imports the built-in Node.js path module, which
	provides utilities for working with file and directory paths.
	2. You can use the path module to manipulate file paths in a platform-independent way and
	perform tasks such as resolving relative paths, joining multiple paths, and extracting 
	file extensions.
*/
const path = require('path');

const ejs = require('ejs');

const fs = require('fs');

/*
	This JavaScript coded language imports the "sqlite3" library, and sets it to a constant
	variable "sqlite3". And, the ".verbose()" method allows for verbose mode, which provides
	additional information during execution for debugging purposes. This .verbose() method is
	typically used for interacting with SQLite3 databases within the iVoteBallot web application.
*/
const sqlite3 = require('sqlite3').verbose();

/*
	The body-parser middleware is used to parse the body of incoming requests, which
	is necessary for accessing any user data information submitted through a form on 
	the "Contact Us" web page. This data can then be used to send emails, store text messages,
	and/or perform other actions based on the iVoteBallot application's requirements.
*/
const bodyParser = require('body-parser');

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
The code const flash = require('connect-flash'); imports the connect-flash module, which provides a 
middleware for storing and displaying flash messages in an Express.js application. Flash messages are 
short-lived messages that are stored in the session and displayed to the user on the next request. With
connect-flash, you can easily create and manage flash messages in your application, which can be used to
display success messages, error messages, or any other kind of notification to the user.
*/
const flash2 = require('connect-flash');

const flash = require('express-flash');

const methodOverride = require('method-override');

/*
	The given Javascript coded language imports the 'nodemailer' library which is used for
	sending email within the iVoteBallot web application. The 'require' function is a
	built-in method in Node.js that is used to load modules or files. The 'const' keyword
	declares a constant variable 'nodemailer' that holds the reference to the loaded 
	'nodemailer' library.
*/
const nodemailer = require('nodemailer');

/*
	This statement creates a new instance of an SQLites database object called "db" with
	the name "Alabama_Id_Session.db". The optional second argument specifies a 
	configuration object for the SQlite3 database, which includes the "verbose" property
	set to the value of the function call "console.log('The The Alabama_Id_Session have
	been successfully created')". This function call logs a message to the console
	indicating that the database has been successfully created.
*/
const db = new sqliteDB('Alabama_Id_Session.db', { verbose: console.log('The Alabama_Id_Session database have been successfully created.') });

//const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const port = 8080;

iVoteBallotApp.listen(port, '0.0.0.0', function (err) {
	if (err) {
		console.log('There is a problem loading iVoteBallot prototype 3 port 8080' + err);
	} else {
		console.log('The Nodejs in conjunction with Express framework is listening onto port ' + port + ' from express\' iVoteBallotApp prototype 3.');
	}
});

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

iVoteBallotApp.use(express.urlencoded({ extended: false }));

iVoteBallotApp.use(express.json());

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
	} else {
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
db1.serialize(() => {
	db1.run(`CREATE TABLE IF NOT EXISTS alabamaDMV_Commission_01 (

        id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        Date DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
		DMVPhoto BLOB (250) NOT NULL,
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
  
	)`), (err) => {

			if (err) {
				console.log('Sarai Hannah Ajai have created the Sqlite3 \'alabamaDMV_Commission_01\' database table which is not JavaScript programmatically coded successfully for which have generated an error message: ' + err + '!');
			} else {
				console.log('Sarai Hannah Ajai have created the Sqlite3 \'alabamaDMV_Commission_01\' database table which is JavaScript programmatically coded successfully!');
			}
		};
});

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
		store: new AlabamaSqlite3SessionStore({

			client: db,
			dir: 'Alabama_Id_Session.db',
			name: 'ALABAMA_SESSION',
			cookie: {
				secure: true,
				httpOnly: true,
				sameSite: true,
				resave: false,
				saveUninitialized: true,
				//proxy: true,
				maxAge: 'SESSION_MAX_AGE' // 1 hour				
			}
		}),

		secret: 'EXPRESS_SESSION_KEY'

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

iVoteBallotApp.use(flash());
iVoteBallotApp.use(flash2());

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
			console.log('The iVoteBallot\'s user\'s passport.use(local1) password (\'IvoteBallotIdIdentifierCode\') as: ' + IvoteBallotIdIdentifierCode);

			if (!DMVEmail) {
				return done(null, false, { message: 'You have entered an email address that already exist in iVoteBallot\'s database: ' + DMVEmail });				
			}

			if (!IvoteBallotIdIdentifierCode) {
				console.log('The user\'s iVoteBallot Id Identifier Code entered into the input field is: ' + IvoteBallotIdIdentifierCode + '.');
				console.log('The user\'s iVoteBallot Id Identifier Code does not match to the Session cookie id\'s database.');
				return done(null, false, { message: 'Your iVoteBallot Id Identifier Code does not match to our iVoteballot\'s database.' });

			} else

				await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?`, DMVEmail, (err, row) => {

					if (err) {
						return done(err);
					}

					if (!row) {
						console.log('The user\'s have entered the incorrect email address for local1: ' + DMVEmail);
						return done(null, false, { message: 'You have entered the incorrect email address: ' + DMVEmail });
					}

					bcrypt.compare(IvoteBallotIdIdentifierCode, row.IvoteBallotIdIdentifierCode, (err, result) => {

						if (err) {
							return done(err);
						}
						if (!result) {
							console.log('The user\'s iVoteBallot Id Identifier Code was entered incorrectly for local1: ' + IvoteBallotIdIdentifierCode);
							return done(null, false, { message: 'You have entered the incorrect iVoteBallot Id Identifier Code: ' + IvoteBallotIdIdentifierCode });
						} else {

							//return done(null, user);

							return done(null,
								{
									id: row.id,
									DMVPhoto: row.DMVPhoto,
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
				}
				);
		}
	)
);

passport.use(
	'local2',
	new LocalStrategy({
		usernameField: 'DMVEmail',
		passwordField: 'Temporary_Password',
		passReqToCallback: true // To allow request object to be passed to callback
	},
		async (req, DMVEmail, Temporary_Password, done) => {

			console.log('The iVoteBallot\'s user\'s passport.use(local2) email (\'DMVEmail\') as: ' + DMVEmail);
			console.log('The iVoteBallot\'s user\'s passport.use(local2) password (\'Temporary_Password\') as: ' + Temporary_Password);


			await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?`, DMVEmail, (err, row) => {

				if (err) {
					return done(err);
				}

				if (!row) {
					console.log('The user\'s have entered the incorrect email address from local2: ' + DMVEmail);
					return done(null, false, { message: 'You have entered the incorrect email address: ' + DMVEmail });
				}

				bcrypt.compare(Temporary_Password, row.Temporary_Password, (err, result) => {

					if (err) {
						return done(err);
					}
					if (!result) {
						console.log('The user\'s temporary password was entered incorrectly from local2: ' + Temporary_Password);
						return done(null, false, { message: 'You have entered the incorrect temporary password: ' + Temporary_Password });
					}
					//return done(null, row);

					return done(null,
						{
							id: row.id,
							DMVPhoto: row.DMVPhoto,
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
				});
			});
		}
	)
);

passport.use(
	'local3',
	new LocalStrategy({
		usernameField: 'DMVEmail',
		passwordField: 'Password',
		passReqToCallback: true // To allow request object to be passed to callback
	},
		async (req, DMVEmail, Password, done) => {

			console.log('The iVoteBallot\'s user\'s passport.use(local3) email (\'DMVEmail\') as: ' + DMVEmail);
			console.log('The iVoteBallot\'s user\'s passport.use(local3) password (\'Password\') as: ' + Password);

			await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?`, DMVEmail, (err, row) => {

				if (err) {
					return done(err);
				}

				if (!row) {
					console.log('The user\'s have entered the incorrect email address from local3: ' + DMVEmail);
					return done(null, false, { message: 'You have entered the incorrect email address: ' + DMVEmail + '.' });
				}

				bcrypt.compare(Password, row.Password, (err, result) => {

					if (err) {
						return done(err);
					}
					if (!result) {
						console.log('The user\'s password was entered incorrectly for local3: ' + Password + '.');
						return done(null, false, { message: 'You have entered the incorrect password: ' + Password + '.' });
					}
					//return done(null, row);

					return done(null,
						{
							id: row.id,
							DMVPhoto: row.DMVPhoto,
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


				});

			});

		}

	)
);

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
	console.log('user');
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
passport.deserializeUser(function (id, done) {
	console.log('Deserializing users...')
	console.log(id);
	const user = db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE id = ?', id, (err, user) => {

		if (err) {
			return done(err);
		}
		if (!user) {
			return done(null, false);
		}
		
		return done(null,
			{
				id: user.id,
				DMVPhoto: user.DMVPhoto,
				DMVFirstName: user.DMVFirstName,
				DMVMiddleName: user.DMVMiddleName,
				DMVLastName: user.DMVLastName,
				DMVSuffix: user.DMVSuffix,
				DMVDateOfBirth: user.DMVDateOfBirth,
				DMVBirthSex: user.DMVBirthSex,
				DMVGenderIdentity: user.DMVGenderIdentity,
				DMVRace: user.DMVRace,
				DMVSSN: user.DMVSSN,
				DMVEmail: user.DMVEmail,
				DMVConfirmEmail: user.DMVConfirmEmail,
				DMVPhoneNumber: user.DMVPhoneNumber,
				DMVAddress: user.DMVAddress,
				DMVUnitType: user.DMVUnitType,
				DMVUnitTypeNumber: user.DMVUnitType,
				DMVCountrySelection: user.DMVCountrySelection,
				DMVStateSelection: user.DMVStateSelection,
				DMVCountySelection: user.DMVCountySelection,
				DMVCitySelection: user.DMVCitySelection,
				DMVZipSelection: user.DMVZipSelection,
				DMVIdType: user.DMVIdType,
				DMVIdTypeNumber: user.DMVIdTypeNumber,
				IvoteBallotIdIdentifierCode: user.IvoteBallotIdIdentifierCode,
				ConfirmIvoteBallotIdIdentifierCode: user.ConfirmIvoteBallotIdIdentifierCode,
				Password: user.Password,
				ConfirmPassword: user.DMVConfirmEmail,
				Temporary_Password: user.Temporary_Password,

				isAuthenticated: true
			}
			
		);

	});

});

iVoteBallotApp.get('/dashboard_01', async (req, res) => {
	
	if (req.isAuthenticated) {
		
		console.log(req.user);
		console.log(req.session);
		console.log('User had been successfully authenticated within the Session through the passport from dashboard!');

		console.group('\n GET /user - request details:')
			console.log('_____________________________________ \.n');
			console.log('req.body:', req.body);
			console.log('req.params:', req.params);
			console.log('req.headers:', req.headers);
			console.log('req.isAuthenticated:', req.isAuthenticated);

			console.log('req.user', req.user);

		console.groupEnd();

		const bufferData = Buffer.from(req.user.DMVPhoto, 'base64');

		res.render('dashboard_01', { DMVFirstName: req.user.DMVFirstName, DMVMiddleName: req.user.DMVMiddleName, DMVLastName: req.user.DMVLastName, DMVPhoto: bufferData.toString('base64') });
		console.log('DMVFirstName:', req.user.DMVFirstName);
		console.log('DMVMiddleName:', req.user.DMVMiddleName);
		console.log('DMVLastName:', req.user.DMVLastName);

	} else if (req.isUnauthenticated) {
		res.render('/alabamaVoters_LogIn_01')
		console.log('User is not successfully authenticated within the session through the passport from dashboard!');
	}
});

/* -------------------------- The beginning of the use section ----------------------------- */

// Middleware to set req.isUnauthenticated for the first use of the '/401' URL bar.
iVoteBallotApp.use('/401', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'401\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/404' URL bar.
iVoteBallotApp.use('/404', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'404\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/500' URL bar.
iVoteBallotApp.use('/500', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'500\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/535' URL bar.
iVoteBallotApp.use('/535', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'535\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaDMV_Commission_01' URL bar.
iVoteBallotApp.use('/alabamaDMV_Commission_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaDMV_Commission_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/login2' URL bar
iVoteBallotApp.use('/alabamaVoters_SignUp_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_SignUp_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/forgotPassword' URL bar
iVoteBallotApp.use('/alabamaVoters_EmailVerification_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_EmailVerification_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_VerifyEmailPassword_01' URL bar
iVoteBallotApp.use('/alabamaVoters_VerifyEmailPassword_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_VerifyEmailPassword_01!');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_LogIn_01' URL bar
iVoteBallotApp.use('/alabamaVoters_LogIn_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_LogIn_01!');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/dashboard_01' URL bar
iVoteBallotApp.use('/dashboard_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'dashboard_01!');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	} else {
		if (req.isAuthenticated()) {
			// If authenticated, add the key-value pair to the req object
			req.userInfo = {
				userName: 'Fred Daniel Flintstone', // Replace with your dynamic value
				// Add more key-value pairs if needed
			};
		}
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_LogOut_01' URL bar
iVoteBallotApp.use('/alabamaVoters_LogOut_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_LogOut_01!');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

iVoteBallotApp.set('views', './Public/views');
iVoteBallotApp.set('common', './Public/common');

iVoteBallotApp.set('view engine', 'ejs');
iVoteBallotApp.use(express.static(path.join(__dirname, 'public')));

const views_Controller = require('./models/views_Router');
const contactUs_01_Controller = require('./models/alabama_Session_Router');
const { view_iVoteBallot } = require('./controllers/views_Controller');

iVoteBallotApp.use('/', require('./models/views_Router'));
iVoteBallotApp.use(views_Controller);

/* -------------------------- The ending of the use section ----------------------------- */


/* -------------------------- The beginning of the GET ROUTE section ----------------------------- */

// User route 401
iVoteBallotApp.get('/401', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		return alert('You are already logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/401' route URL bar
	if (req.isUnauthenticated) {
		res.render('401');

	} else {
		console.log(req.flash());
		res.render('500');

	}
});

// User route 404
iVoteBallotApp.get('/404', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		return alert('You are already logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/404' route URL bar
	if (req.isUnauthenticated) {
		res.render('404');

	} else {
		console.log(req.flash());
		res.render('500');

	}
});

// User route 500
iVoteBallotApp.get('/500', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		return alert('You are already logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/500' route URL bar
	if (req.isUnauthenticated) {
		res.render('500')

	} else {
		console.log(req.flash());
		res.render('535');

	}
});

// User route 535
iVoteBallotApp.get('/535', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		return alert('You are already logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/535' route URL bar
	if (req.isUnauthenticated) {
		res.render('535');

	} else {
		console.log(req.flash());
		res.render('500');
	}
});

/* -------------------------- The beginning of the redirectDashboard section ----------------------------- */

/*
	The constant redirectDashboard is a middleware function that checks if the user is already
	logged in by verifying the existence of a userId property in the user's session. If the user
	is logged in, the function redirects them to the dashboard page; otherwise, it allows the
	request to proceed to the next middleware function. This middleware is commonly used to restrict
	access to certain routes for authenticated users.
*/
const redirectDashboard = (req, res, next) => {
	if (req.session.userId) {
		res.redirect('/dashboard_01');
	} else {
		next();
		res.redirect('/alabamaVoters_LogIn_01');
	}
}

/* -------------------------- The ending of the redirectDashboard section ----------------------------- */

// The User route for alabamaDMV_Commission_01 
iVoteBallotApp.get('/alabamaDMV_Commission_01', redirectDashboard, (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		console.log('Another Election Assure Expert have already created the user iVoteBallot\'s account.');
		req.flash('success', 'Another Election Assure Expert have already created the user iVoteBallot\'s account.');
		res.render('/alabamaVoters_SignUp_01');
	}
	console.log(req.session);
	// Check if this is the first use of '/alabamaDMV_Commission_01' route URL bar
	if (req.isUnauthenticated) {
		console.log(req.flash());
		req.flash('error', 'You have not manually updated user\'s data information.');
		res.render('/alabamaDMV_Commission_01');

	} else {
		res.render('535');

	}
});

iVoteBallotApp.get('/alabamaVoters_SignUp_01', (req, res) => {

	if (req.isAuthenticated()) {
		console.log(req.user);
		console.log('Request Session:' + req.session)
		console.log('' + req.logIn);
		console.log('The User had been successfully authenticated within the Session through the passport from reset password webpage!');
		res.render('alabamaVoters_EmailVerification_01');

	} else {

		res.render('500')

		console.log('The user is not successfully authenticated within the session through the passport from reset password webpage!');

	}
});

// User route forgotPassword
iVoteBallotApp.get('/alabamaVoters_EmailVerification_01', (req, res) => {
	// Check if user already authenticated.
	if (req.isUnauthenticated) {
		console.log('User had been successfully authenticated within the Session through the passport from forgotPassword webpage!');
		res.render('alabamaVoters_VerifyEmailPassword_01');
	} else {
		// Render signup page for new users
		console.log('User had not been successfully authenticated within the Session through the passport from forgotPassword webpage!');
		res.render('404')
	}
});

iVoteBallotApp.get('/alabamaVoters_VerifyEmailPassword_01', (req, res) => {
	if (req.isAuthenticated) {
		console.log(req.user);
		console.log(req.session);
		console.log('User had been successfully authenticated within the Session through the passport from local2!');
		res.render('alabamaVoters_EmailVerification_01', { firstName: req.user.DMVFirstName, lastName: req.user.DMVLastName, email: req.user.DMVEmail });
	} else if (req.isUnauthenticated) {
		res.redirect('/alabamaVoters_VerifyEmailPassword_01')
		console.log('User is not successfully authenticated within the session through the passport from local2!');
	}
});

iVoteBallotApp.get('/alabamaVoters_LogIn_01', redirectDashboard, (req, res) => {
	console.log(req.session);
	console.log('isUnauthenticated: ', req.isUnauthenticated);
	// Check if user already authenticated.
	if (req.isUnauthenticated) {
		res.render('alabamaVoters_LogIn_01');
		console.log('User is not logged into the dashboard!');
	} else if
		(req.session.isAuthenticated) {

		res.redirect('/dashboard_01');
		console.log('User is logged into the dashboard!');

	} else {
		res.render('404');
	}
});


// User route for alabamaVoters_LogOut_01
iVoteBallotApp.get('/alabamaVoters_LogOut_01', (req, res) => {
	if (req.isAuthenticated()) {
		console.log('The User have successfully logged out of the dashboard!');
		res.render('alabamaVoters_LogOut_01');
	} else {
		res.render('404');
	}
});

/* -------------------------- The ending of the GET ROUTE section ----------------------------- */

/* -------------------------- The beginning of the DELETE ROUTE section ----------------------------- */

// Delete a route for the alabamaVoters_LogOut_01 page
iVoteBallotApp.delete('/alabamaVoters_LogOut_01', (req, res) => {
	if (req.isAuthenticated()) {

		req.logOut();
		res.render('alabamaVoters_LogIn_01');
	}
	/* The logout logic will clear the users from the session object and save. 
	Also, will enure that the re-using of the old session id does not have
	a logged in user again.
	*/
	req.session.user = null
	req.session.save(function (err) {
		if (err)
			next(err)

		/* The regenerate of the session, which is good practice to help safe
		guard against users' forms of session fixation.
		*/
		req.session.regenerate(function (err) {
			if (err) next(err)
			res.render('dashboard_01');
		});
	}
	);
});

/* -------------------------- The ending of the DELETE ROUTE section ----------------------------- */

/* -------------------------- The beginning of the POST LOCAL STRATEGY section ----------------------------- */

iVoteBallotApp.post(
	'/alabamaVoters_SignUp_01',
	passport.authenticate('local1', {
		successRedirect: '/alabamaVoters_EmailVerification_01',
		failureRedirect: '/alabamaVoters_SignUp_01',
		failureFlash: true
	}
	));

iVoteBallotApp.post(
	'/alabamaVoters_VerifyEmailPassword_01',
	passport.authenticate('local2', {
		successRedirect: 'alabamaVoters_CreatePasswords_01',
		failureRedirect: '/alabamaVoters_VerifyEmailPassword_01',
		failureFlash: true
	}
	));

iVoteBallotApp.post(
	'/alabamaVoters_LogIn_01',
	passport.authenticate('local3', {
		successRedirect: '/dashboard_01',
		failureRedirect: '/alabamaVoters_LogIn_01',
		failureFlash: true
	}
	));

iVoteBallotApp.post(
	'/alabamaVoters_LogOut_01',
	passport.authenticate('local3', {
		successRedirect: '/alabamaVoters_LogIn_01',
		failureRedirect: '/alabamaVoters_LogOut_01',
		failureFlash: true
	}));

/* -------------------------- The ending of the POST LOCAL STRATEGY section ----------------------------- */

/* -------------------------- The beginning of All SQLite3 databases section ----------------------------- */

iVoteBallotApp.post('/alabamaDMV_Commission_01',
	async (req, res) => {

		const DMVPhoto = req.body.DMVPhoto;
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

		console.log('The user\'s photograph image is: ' + DMVPhoto + '.');
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
			console.log('The user\' iVoteBallot Id Identifier Code have not successfully matched to the confirm iVoteBallot Id Code entered into the input fields by our Election Assure Expert.');
			return res.redirect('/alabamaDMV_Commission_01');

		} else {
			console.log('The user\' iVoteBallot Id Identifier Code have successfully matched to his or her confirm iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login1, LocalStrategy through the session cookie id.');
		}

		// To hash the user's DMVSSN input field using bcryption.
		const salt = await bcrypt.genSalt(12);
		const DMVSSNHashed = await bcrypt.hash(req.body.DMVSSN, salt);
		const DMVIdTypeNumberHashed = await bcrypt.hash(req.body.DMVIdTypeNumber, salt);

		// To hash the user's IvoteBallotIdIdentifierCode input field using bcryption.		
		const IvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.IvoteBallotIdIdentifierCode, salt);

		// To hash the user's IvoteBallotIdIdentifierCode input field using bcryption.	
		const ConfirmIvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.ConfirmIvoteBallotIdIdentifierCode, salt);

		// To hash the user's Password input field using bcryption.	
		const PasswordHashed = await bcrypt.hash(req.body.Password, salt);

		// To hash the user's Confirm Password input field using bcryption.	
		const ConfirmPasswordHashed = await bcrypt.hash(req.body.ConfirmPassword, salt);

		// To hash the user's Confirm Password input field using bcryption.	
		const Temporary_PasswordHashed = await bcrypt.hash(req.body.Temporary_Password, salt);

		// Read the photo file as binary data
		const photoFilePath = `/Users/saraihannahajai/Documents/iVoteBallot_Prototype_3/Public/images/Alabama DMV Voters Photos/${DMVPhoto}`;
		const photoFileData = fs.readFileSync(photoFilePath);

		const newUser = {

			DMVPhoto,
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
			DMVIdTypeNumber: DMVIdTypeNumberHashed,
			IvoteBallotIdIdentifierCode: IvoteBallotIdIdentifierCodeHashed,
			ConfirmIvoteBallotIdIdentifierCode: ConfirmIvoteBallotIdIdentifierCodeHashed,
			Password: PasswordHashed,
			ConfirmPassword: ConfirmPasswordHashed,
			Temporary_Password: Temporary_PasswordHashed

		};

		await db1.run(
			`INSERT INTO alabamaDMV_Commission_01 (DMVPhoto, DMVFirstName, DMVMiddleName, DMVLastName, DMVSuffix, DMVDateOfBirth, DMVBirthSex, DMVGenderIdentity, DMVRace, DMVSSN, DMVEmail, DMVConfirmEmail, DMVPhoneNumber, DMVAddress, DMVUnitType, DMVUnitTypeNumber, DMVCountrySelection, DMVStateSelection, DMVCountySelection, DMVCitySelection, DMVZipSelection, DMVIdType, DMVIdTypeNumber, IvoteBallotIdIdentifierCode, ConfirmIvoteBallotIdIdentifierCode, Password, ConfirmPassword, Temporary_Password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,

			[Buffer.from(photoFileData), newUser.DMVFirstName, newUser.DMVMiddleName, newUser.DMVLastName, newUser.DMVSuffix, newUser.DMVDateOfBirth, newUser.DMVBirthSex, newUser.DMVGenderIdentity, newUser.DMVRace, newUser.DMVSSN, newUser.DMVEmail, newUser.DMVConfirmEmail, newUser.DMVPhoneNumber, newUser.DMVAddress, newUser.DMVUnitType, newUser.DMVUnitTypeNumber, newUser.DMVCountrySelection, newUser.DMVStateSelection, newUser.DMVCountySelection, newUser.DMVCitySelection, newUser.DMVZipSelection, newUser.DMVIdType, newUser.DMVIdTypeNumber, newUser.IvoteBallotIdIdentifierCode, newUser.ConfirmIvoteBallotIdIdentifierCode, newUser.Password, newUser.ConfirmPassword, newUser.Temporary_Password], (err) => {
			
	
				if (err) {
					console.error(err);
					req.flash('error', 'An syntax error has occurred when you have entered your data information into the input field that is link to our iVoteBallot database submission that cause our 500 error message display onto your device screen.');
					console.log('An syntax error has occurred when the user have entered his/her data information into the input field that is link our iVoteBallot database submission that cause our 500 error message display onto your device screen.');
					res.render('/500');					

				} else {
					console.log('The user data information typed into the \'alabamaDMV_Commission_01\' input fields have been successfully parsed into the \'alabamaDMV_Commission_01\', SQLite3 database for user to create his/her iVoteBallot account. ' + Date());
					req.flash('success', 'The Election Assure Expert have successfully registered your data information onto the iVoteBallot database, and you can now sign up to create your iVoteBallot account.');
					
					res.redirect('/alabamaVoters_SignUp_01');

				}			

				const transporter = nodemailer.createTransport({
					host: 'smtp.ionos.com',
					port: 587,
					secure: false,
					auth: {
						user: 'ceo_developmenttest@ivoteballot.com',
						pass: IONOS_SECRET_KEY,
					}
				});

				const imagePath = './Public/images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png';

				const mailOptions_01 = {
					from: req.body.DMVEmail,
					to: 'electionassureexpert@ivoteballot.com',	
					bcc: 'cio_developmenttest@ivoteballot.com',				
					subject: `New User Signup Notification | iVoteBallot Employee Entry`,
					html: ` 
													
					<p>Dear CEO/CIO/Manager,</p>
					<p>An iVoteBallot employee has manually entered a new user into the iVoteBallot database. Here are the details:</p>
			
						<ul>
							<li>
								Name: ${req.body.DMVFirstName} ${req.body.DMVMiddleName} ${req.body.DMVLastName}
							</li>
							<li>
								Email: ${req.body.DMVEmail}
							</li>					
						</ul>					
						
					<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />

					`,					

					attachments: [
						{
							filename: 'iVoteBallotLogo.png',
							path: imagePath,
							cid: 'iVoteBallotLogo'

						}
					]
				};								

				const mailOptions_02 = {
					from: 'electionassureexpert@ivoteballot.com',
					to: req.body.DMVEmail,
					bcc: 'cio_developmenttest@ivoteballot.com',
					subject: `Notification from the iVoteBallot's Election Assure Experts`,
					html:
						`	
					
						<p>Dear ${req.body.DMVFirstName} ${req.body.DMVMiddleName} ${req.body.DMVLastName},</p>
						<p>Congratulations! Your iVoteballot account has been successfully set up by our dedicated Election Assure Experts.</p>

						<p>
							At iVoteBallot, we are committed to providing you with a seamless voting experience. And, your account is now ready for you to sign up, and we encourage you to explore our platform.
						</p>

						<p>
							Thank you for choosing iVoteBallot. We wish you a fantastic voting journey and hope you have a great day, ${req.body.DMVFirstName}.
						</p>

						<p>Best Regards,</p>
						<p>iVoteBallot's Election Assure Expert Team</p>

						<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />

						`,

						attachments: [
							{
								filename: 'iVoteBallotLogo.png',
								path: imagePath,
								cid: 'iVoteBallotLogo'
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
			}			
		);
	}
);

iVoteBallotApp.post('/alabamaVoters_SignUp_01',

	async (req, res) => {

		const DMVEmail = req.user.DMVEmail;
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
				req.flash('error', 'The user have entered the incorrect email address and/or password that were not successfully process through the passport.use local1 Local Strategy and Session Cookie Id to the SQlite3 database authentication from serialization.');
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
						res.redirect('/alabamaVoters_EmailVerification');
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

iVoteBallotApp.post('/alabamaVoters_EmailVerification_01', (req, res) => {
	const email = req.body.DMVEmail;

	// Check if the email exists in the database
	db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?', email, (err, row) => {
		if (err) {
			console.error(err);
			console.log('SQLite3 language did not successfully execute user/s email address search properly; therefore this error means a JavaScript codes language error.');
			req.flash('error', 'This email address input field have generated an error message 500, please contact iVoteballot customer care team.');
			res.render('500');

		} else if (!row) {
			req.flash('error', 'Your email address was not found in our iVoteBallot database.');
			console.log('User/s email was not successfully found onto the SQlite3 database.')
			res.render('alabamaVoters_EmailVerification_01');
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

					res.redirect('/alabamaVoters_VerifyEmailPassword_01');
					console.log('SQlite3 language had properly execute the UPDATE successfully for the user\'s Temporary Password.')
				}
				/*
				Sarai Hannah Ajai has generated a test SMTP service account; in order to receive iVoteBallot's customercare@ionos.com emails from the 
				'transporter' constant object from the AccouNetrics' users which pass through the 'nodemailer' API library.
				*/
				const transporter = nodemailer.createTransport({
					host: 'smtp.ionos.com',
					port: 587,
					secure: false,
					auth: {
						user: 'ceo_developmenttest@ivoteballot.com',
						pass: IONOS_SECRET_KEY,
					}
				});

				const imagePath = './Public/images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png';

				if (req.isAuthenticated()) {
					/*
					Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
					using the default SMTP transporter nodemailer API library.
					*/
					const mailOptions_01 = {
						from: req.body.DMVEmail,
						to: 'electionassureexpert@ivoteballot.com',
						bcc: 'cio_developmenttest@ivoteballot.com',
						subject: `New User Registration - iVoteBallot Online Voter Registration Not Yet Verified`,
						html: `	
		
					<p>iVoteBallot has received a new online registration:</p>

					<p>New User Registration: ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName}, has been sent a temporary password for an iVoteBallot account verification.</p> 
					<p>The email associated with the iVoteBallot's account is: ${req.user.DMVEmail}.</p>															
				
					<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />

				`,

						attachments: [
							{
								filename: 'iVoteBallotLogo.png',
								path: imagePath,
								cid: 'iVoteBallotLogo'

							}
						]

					};

					const mailOptions_02 = {
						from: 'electionassureexpert@ivoteballot.com',
						to: req.body.DMVEmail,
						bcc: 'cio_developmenttest@ivoteballot.com',
						subject: `Authenticate Your iVoteBallot's Account`,
						html: `
			
				<p>Dear ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName},</p>

				<p>Thank you for choosing iVoteBallot to complete your sign-up process, please use the following temporary password:<p>

				<p><strong>${newPassword}</strong></p;

				<br>

				<p>in order for iVoteBallot to verify your email address identity.</p>						
				
				<p>This temporary password is valid for the next 10 minutes. After, successful authentication, you can set your permanent password and confirm password.</p>
				
				<p>Should you have any questions or concerns, feel free to reach out to our iVoteBallot's Election Assure Expert Team Team.</p>
				
				<p>Respectfully, </p>	

				<p>iVoteBallot's Election Assure Expert Team </p>

				<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />
				
				`,
				
					attachments: [
							{
								filename: 'iVoteBallotLogo.png',
								path: imagePath,
								cid: 'iVoteBallotLogo'

							}
						]

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
			});
		}
	});
});

iVoteBallotApp.post('/alabamaVoters_VerifyEmailPassword_01',
	async (req, res) => {

		const DMVEmail = req.body.DMVEmail;
		const temporary_Password = req.body.temporary_Password;
		const password = req.body.password;
		const confirmPassword = req.body.confirmPassword;

		console.log('These are the request body' + req.body);

		console.log('User email is: ' + DMVEmail + '.');
		console.log('User temporary password is: ' + temporary_Password + '.');
		console.log('User password is: ' + password + '.');
		console.log('User confirm password is: ' + confirmPassword + '.');

		console.log('The request session: ' + req.session);

		// Hash the password field using bcrypt.
		const salt = await bcrypt.genSalt(14);
		const passwordHashed = await bcrypt.hash(password, salt);

		// Hash the confirmPassword field using the same salt, as the password field.
		const confirmPasswordHashed = await bcrypt.hash(confirmPassword, salt);

		// Check, if the user's email exists onto the passport serialization through the session.
		db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE DMVEmail = ?', DMVEmail, (err, row) => {
			if (err) {
				console.error(err);
				console.log('The user\s passport and session was not successfully executed causing an 500 error message due from Developer\s programmatic coding language problems.');
				res.render('500');
			} else if (!row) {
				console.log('The user\s email address is not successfully found within the passport serialization authenticated processes through the session.');
				res.render('alabamaVoters_VerifyEmailPassword_01');
			} else {

				db1.run('UPDATE alabamaDMV_Commission_01 SET password = ?, confirmPassword = ? WHERE DMVEmail = ?', passwordHashed, confirmPasswordHashed, row.DMVEmail, (err) => {
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
	});

iVoteBallotApp.post('/alabamaVoters_CreatePasswords_01',

	async (req, res) => {

		console.log('req.user:', req.user.DMVEmail);

		const DMVEmail = req.user.DMVEmail;
		const Password = req.body.Password;
		const ConfirmPassword = req.body.ConfirmPassword;

		console.log(req.body);

		// To hash the newPassword input field using bcrypt library.
		const salt = await bcrypt.genSalt(14);
		const passwordHashed = await bcrypt.hash(Password, salt);

		// To hash the confirmNewPassword input field using bcrypt library.
		const confirmPasswordHashed = await bcrypt.hash(ConfirmPassword, salt);

		console.log('The user\'s email is: ' + DMVEmail + '.');

		if (passwordHashed !== confirmPasswordHashed) {
			return res.render('alabamaVoters_CreatePasswords_01', { error: 'Your new password does not match to confirm password.' });

		} else {

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

						const imagePath = './Public/images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png';

						const transporter = nodemailer.createTransport({
							host: 'smtp.ionos.com',
							port: 587,
							secure: false,
							auth: {
								user: 'ceo_developmenttest@ivoteballot.com',
								pass: IONOS_SECRET_KEY,
							}
						});

						// Send notification email to admin

						const mailOptions_01 = {
							from: req.body.DMVEmail,
							to: 'electionassureexpert@ivoteballot.com',
							bcc: 'cio_developmenttest@ivoteballot.com',
							subject: `New User Signup Notification Successfully Completed`,
							html: `	
			
						<p>iVoteBallot has received a new online registration completion:</p>

						<p>New User ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName} has successfully registered for iVoteBallot.</p> 
						<p>: ${req.user.DMVEmail}.</p>																
						
						<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />

					`,

							attachments: [
								{
									filename: 'iVoteBallotLogo.png',
									path: imagePath,
									cid: 'iVoteBallotLogo'

								}
							]

						};

						// Send welcome email to the user
						const mailOptions_02 = {
							from: 'electionassureexpert@ivoteballot.com',
							to: DMVEmail,
							bcc: 'cio_developmenttest@ivoteballot.com',
							subject: 'Successful Registration for iVoteBallot',
							html: `
						<p>Dear ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName},</p>
						<p>You have successfully registered for iVoteBallot.</p>
						<p>Thank you for choosing iVoteBallot!</p>
						<p>Best regards,</p>
						<p>iVoteBallot's Election Assure Expert Team </p>
						<img src="cid:iVoteBallotLogo" style="width: 100px; height: auto;" />
					`,

							attachments: [
								{
									filename: 'iVoteBallotLogo.png',
									path: imagePath,
									cid: 'iVoteBallotLogo'

								}
							]

						};

						transporter.sendMail(mailOptions_01, (err, info) => {
							if (err) {
								console.log(err);
							} else {
								console.log('Email Sent: ' + info.response);
							}
						});

						transporter.sendMail(mailOptions_02, (err, info) => {
							if (err) {
								console.log(err);
							} else {
								console.log('Email Sent: ' + info.response);
							}
						});

						res.redirect('/alabamaVoters_LogIn_01');

					}

				}
			)
		}
	}
);









//const boxicons = require('boxicons');
/*
const pdfDocument = require('pdfkit');
const PDFDocument2 = require('pdfkit');
const fs = require('fs');
*/






/*
function createAlabamaPDF_Candidates_2024() {

	const stream = fs.createWriteStream('./pdf_Files/alabama_PDF/user_AlabamaCandidates_Selections_2024.pdf');
	const pdf = new pdfDocument();

	pdf.image('./pdf_Files/alabama_Images/iVoteBallotCanva_Logo.png', 10, 25, {width: 150, height: 150});

	const paragraph_01 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Porta lorem mollis aliquam ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Vitae sapien pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Phasellus faucibus scelerisque eleifend donec pretium. Consectetur lorem donec massa sapien. Vel fringilla est ullamcorper eget. Arcu ac tortor dignissim convallis aenean et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Amet venenatis urna cursus eget nunc scelerisque. Sed viverra tellus in hac habitasse platea. Facilisis gravida neque convallis a cras semper auctor neque vitae.';
	const paragraph_02 = 'Tincidunt eget nullam non nisi. Vel facilisis volutpat est velit egestas dui id. Risus sed vulputate odio ut enim blandit volutpat. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Tempus imperdiet nulla malesuada pellentesque. Tempor orci eu lobortis elementum nibh. Facilisi nullam vehicula ipsum a arcu. Et netus et malesuada fames. Senectus et netus et malesuada fames ac turpis. Ac ut consequat semper viverra nam libero justo. Condimentum mattis pellentesque id nibh tortor. Semper risus in hendrerit gravida rutrum. Ultricies integer quis auctor elit sed vulputate. Non odio euismod lacinia at. Vulputate ut pharetra sit amet aliquam id diam. Scelerisque fermentum dui faucibus in ornare.';
	const boldText = 'Times-Bold';
	const normalText = 'Times-Roman';

	pdf.text('Hello World, to the new World Order!', 10, 195);

	pdf.font(boldText).text('I am Learning How to Use the PDFKit Library module.', 10, 210)

	pdf.font(normalText).fillColor('#0d41ff').fontSize('15').text(paragraph_01, 25, 230);
	pdf.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_02, 25, 425);

	pdf.addPage();

	pdf.rect(5, 20, 560, 200).stroke('#0d41ff');
	pdf.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_01, 25, 25);
	pdf.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', {link: 'http://localhost:8080/alabama_Candidates_2024'});

	pdf.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', {link: 'downloadPDF()'});

	pdf.pipe(stream);

	pdf.end();

	console.log('The user\'s have successfully created an Alabama PDF candidates file final results');

}

createAlabamaPDF_Candidates_2024();

function downloadPDF() {

	const stream = fs.createWriteStream('./pdf_Files/alabama_PDF/user_AlabamaCandidates_Selections_2024_02.pdf');
	const pdf2 = new PDFDocument2();

	pdf2.image('./pdf_Files/alabama_Images/iVoteBallotCanva_Logo.png', 10, 25, { width: 150, height: 150 });

	const paragraph_01 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Porta lorem mollis aliquam ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Vitae sapien pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Phasellus faucibus scelerisque eleifend donec pretium. Consectetur lorem donec massa sapien. Vel fringilla est ullamcorper eget. Arcu ac tortor dignissim convallis aenean et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Amet venenatis urna cursus eget nunc scelerisque. Sed viverra tellus in hac habitasse platea. Facilisis gravida neque convallis a cras semper auctor neque vitae.';
	const paragraph_02 = 'Tincidunt eget nullam non nisi. Vel facilisis volutpat est velit egestas dui id. Risus sed vulputate odio ut enim blandit volutpat. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Tempus imperdiet nulla malesuada pellentesque. Tempor orci eu lobortis elementum nibh. Facilisi nullam vehicula ipsum a arcu. Et netus et malesuada fames. Senectus et netus et malesuada fames ac turpis. Ac ut consequat semper viverra nam libero justo. Condimentum mattis pellentesque id nibh tortor. Semper risus in hendrerit gravida rutrum. Ultricies integer quis auctor elit sed vulputate. Non odio euismod lacinia at. Vulputate ut pharetra sit amet aliquam id diam. Scelerisque fermentum dui faucibus in ornare.';
	const boldText = 'Times-Bold';
	const normalText = 'Times-Roman';

	pdf2.text('Hello World, to the new World Order x 222222 x 333333 x 5555555!', 10, 195);

	pdf2.font(boldText).text('I am Learning How to Use the PDFKit Library module.', 10, 210);

	pdf2.font(normalText).fillColor('#0d41ff').fontSize('15').text(paragraph_01, 25, 230);
	pdf2.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_02, 25, 425);

	pdf2.addPage();

	pdf2.rect(5, 20, 560, 200).stroke('#0d41ff');
	pdf2.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_01, 25, 25);
	pdf2.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', { link: 'http://localhost:8080/alabama_Candidates_2024' });

	pdf2.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', { link: 'downloadPDF()' });

	pdf2.pipe(stream);
	pdf2.end();

	console.log("The user had successfully download the Alabama PDF candidates file  have been successfully created.");
}

downloadPDF();
*/


// This is your test secret API key.
/*
iVoteBallotApp.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
	line_items: [
	  {
		// Provide the exact Price ID (for example, pr_1234) of the product you want to sell
		price: 'price_1NyiWdHvyzFhhzdWjaN2p9Fm',
		quantity: 1,
	  },
	],
	mode: 'payment',
	success_url: `${port}/success.html`,
	cancel_url: `${port}/cancel.html`,
  });

  res.redirect(303, session.url);
});

*/




