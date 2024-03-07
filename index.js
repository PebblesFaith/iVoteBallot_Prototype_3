/*
	The code statement  "const express = require('express')" means that the server-side JavaScript code is using the Express.js framework to handle
	the HTTP requests and responses, routing, middleware, and other web application functionalities are as follows:	

	1. const express: This line declares a constant variable named "express". In JavaScript, "const" is used to declare variables 
	   that cannot be re-assigned once they are initialized.
	2. require('express'): This part is a CommonJS module system function used in Node.js to import modules. In this case, the
	   Node.js modules imports the 'express' module, which is a popular Node.js web application framework used for building web 
	   servers and APIs.

	So, when you see "const express = require('express')"", this means that the server-side JavaScript code is using the Express.js
		framework to handle HTTP requests and responses, routing, middleware, and other web application functionalities.
*/
const express = require('express');

/*
	The code statement "const iVoteBallotApp = express()" creates a new instance of the Express.js framework and assigns it to the
	constant iVoteBallotApp, allowing the iVoteBallot web application to define routes and middleware management.
*/
const iVoteBallotApp = express();

/*
	1. The code statement "const path = require('path')" imports the built-in Node.js path module, which provides utilities for working 
	   with file and directory paths.
	2. You can use the path module to manipulate file paths in a platform-independent way and perform tasks such as resolving
	   relative paths, joining multiple paths, and extracting file extensions.
*/
const path = require('path');

/*
	1. The code statement "const ejs = require('ejs')" imports the EJS (Embedded JavaScript) template engine into Sarai Hannah Ajai's 
	   (the Developer) Node.js iVoteBallot web application.
	2. Sarai Hanna Ajai (the Developer) can use the ejs module to render dynamic HTML pages by embedding JavaScript code 
	   into iVoteballot HTML templates, allowing her to easily generate dynamic content based on data from iVoteBallot
	   web application.
*/
const ejs = require('ejs');

/*

	The code statement "const fs = require('fs')" imports the File System module into Sarai Hannah Ajai's (the Developer) Node.js iVoteBallot
	web application, enabling her to work with the file system in order to perform operations such as, reading from and writing to files, and 
	enhancing the functionality of the iVoteBallot web application.
*/
const fs = require('fs');

/*
	1. The code statement "const sqlite3 = require('sqlite3').verbose()" imports the SQLite3 module into the Node.js iVoteBallot web application.
	2. The .verbose() method provides additional debugging information when working with the SQLite3 database.
	3. Sarai Hannah Ajai (the Developer) can use the sqlite3 module to create, read, update, and delete data in an SQLite3 database,
	   which is a popular embedded database engine.
*/
const sqlite3 = require('sqlite3').verbose();

/*
	1. The code statment "const bodyParser = require('body-parser')" is a middleware module that parses incoming request bodies into the Node.js
	   iVoteballot web application.
	2. The body-parser module can parse different types of request bodies, including JSON, URL-encoded, and	multipart forms.
	3. Once the request body is parsed, the middleware adds the parsed data to the request objects, which Sarai Hannah Ajai (the Developer) can 
	   then access into the iVoteBallot web application route handlers.
*/
const bodyParser = require('body-parser');

/*
	1. The code statement "const bcrypt = require('bcrypt')" is a library that allows Sarai Hannah Ajai (the Developer) to hash and compare passwords
	   into the Node.js iVoteBallot web application through the passport.js library and session id management library.
	2. The bcrypt library uses a one-way hashing algorithm to securely store users' passwords into the SQLite3 database, making it difficult for 
	   attackers to retrieve the original password.
	3. Ms. Ajai (the Developer) can use the bcrypt module to generate a salted hash of the users' passwords, and later compare the hash with 
	   the users' input fields such as, email address in orderto verify their identityt hrough the passport.js library and session id management
	   library.
*/
const bcrypt = require('bcrypt');

/*	
	1. The code statement "const passport = require('passport')" is a middleware library that provides authentication support onto the Node.js 
	   iVoteBallot web application.
	2. The passport library provides a flexible and modular authentication framework that can be easily integrated into the iVoteBallot web application.
	3. Sarai Hannah Ajai (the Developer) can use the passport library to implement various authentication strategies, such as local authentication, 
	   social authentication, and token-based authentication, to secure iVoteballot web application's resources.
*/
const passport = require('passport');

/*
	1. The code statement "const LocalStrategy = require('passport-local').Strategy" is a library that provides a local authentication strategy for
	   the passport middleware.
	2. The passport-local library allows Sarai Hannah Ajai (the Developer) to authenticate users using a username and password combination that are
	   stored locally into the iVoteBallot web application.
	3. Ms. Ajai (the Developer) can use the LocalStrategy object to define how the authentication process works and provide custom validation and 
	   error handlings logic for the authentication flow.
*/
const LocalStrategy = require('passport-local').Strategy;

/*
	1. The code statement "const sqliteDB = require('better-sqlite3')" is a library that provides a more efficient and convenient way to work with
	   SQLite databases within the Node.js iVoteBallot web application.
	2. The better-sqlite3 library is built on top of the standard sqlite3 library to which, provides a simpler and more	intuitive API for 
	   performing common database operations.
	3. Sarai Hannah Ajai (the Developer) can use the better-sqlite3 library to create, read, update, and delete data with the SQLite database,
	   and leverage features such as, prepared statements and transactions for better performance and security.
*/
const sqliteDB = require('better-sqlite3');

/*
	The code statement "const session = require('express-session')" imports the express-session library and assigns it to a constant variable named 
	session. This library provides a middleware that allows Sarai Hanna Ajai (the Developer) to create and manage users' sessions within the 
	iVoteBalot's index.js (server) web application. With express-session, Ms, Ajai (the Developer) can store the users' data information within a 
	session and requests it across multiple EJS templates.
*/
const session = require('express-session');

/*
	The code statement "const Sqlite3SessionStore = require("better-sqlite3-session-store")(session)" imports the better-sqlite3-session-store 
	library and creates a new instance of the session store that can be used with the express-session middleware. This session store uses the 
	better-sqlite3 library to store users' session data information in a SQLite database. By using this library, Ms. Ajai (the Developer) can 
	store and manage users' sessions in a reliable and efficient way when users' logged in or out of iVoteBallot web application.
*/
const AlabamaSqlite3SessionStore = require('better-sqlite3-session-store')(session);

/*
	In the iVoteBallot web application, the line "const flash = require('express-flash')" is a piece of code written in JavaScript that imports
	the 'express-flash' library and assigns it to the variable 'flash' as the following:

	1. const: This keyword is used to declare a constant variable in JavaScript. Constants are variables whose values cannot be changed once they
	   are assigned. In this case, 'flash' is declared as a constant variable.

	2. flash: This is the name of the variable being declared.

	3. require('express-flash'): In Node.js, the require function is used to include libraries that are available in the iVoteBallot web application. 
	   Here, 'express-flash' is the name of the library being imported. This library is likely used for handling flash messages within the Express.js 
	   iVoteBallot web application framework.

	Flash messages are temporary messages that are typically displayed to the users for a short period, often after a specific action such as submitting
	a iVoteBallot templates or completing a tasks. They are commonly used to provide feedback or alerts to the front-end users about the outcome of their 
	actions. The 'express-flash' library helps manage and display these flash messages within an Express.js iVoteBallot web application.

	Overall, the line "const flash = require('express-flash')" imports the 'express-flash' library and assigns it to the constant variable 'flash',
	allowing the iVoteBallot web application to utilize the functionality provided by the library to handle flash messages effectively.
*/
const flash = require('express-flash');

/* 
	The coded statement "const methodOverride = require('method-override')" within the a Node.js web application such as iVoteBallot imports the
	  'method-override' middleware into the iVoteBallot web application. This means in the context of the iVoteBallot web application:

		1. Middleware in Node.js: Middleware in Node.js is software that provides services to iVoteBallot web applications outside of what is 
		  offered by the operating system. In the iVoteBallot web applications, middleware sits between the incoming request and the application's
		  response from the front-end users. The method-override intercept, process, and modify both the HTML requests and the responses from the 
		  front-end users.

		2. "method-override" Middleware: The "method-override" middleware allows Sarai Hannah Ajai (the Developer) to use HTTP verbs such as PUT or 
		   DELETE in places where the back-end clients does not support it. For example, HTML forms only support GET and POST methods, so if Ms. Ajai
		   (the Developer) want to perform actions like update or delete using an HTML form, she will need to override the method using a query parameter
		   or a header.

		3. How it Works: When included in an Express.js web application like iVoteBallot, "method-override" intercepts incoming requests and looks for a
		   special parameter or header that tells it to override the HTTP method being used. For example, it might look for a "_method" query parameter or
		   a "X-HTTP-Method-Override" header. If it finds one, it replaces the HTTP method of the request with the one specified in the parameter or header.

		4. Use Case in iVoteBallot: In the iVoteBallot web application, the "method-override" might be used to handle situations where HTML forms need to
		   perform actions like updating or deleting records in the database using HTTP methods other than GET or POST. By using method override, the 
		   iVoteBallot web application can interpret these requests correctly and route them to the appropriate handlers.

	Overall, the "const methodOverride = require('method-override')" library within the iVoteBallot web application sets up the middleware necessary to 
	handle HTTP method overrides, enabling more flexibility and functionality in handling HTTP requests.
*/
const methodOverride = require('method-override');

/*
	The line "const { v4: uuidv4 } = require('uuid');" statement within the iVoteBallot web application is using CommonJS syntax in Node.js to import the
	version 4 of the UUID (Universally Unique Identifier) generation library from the 'uuid' package.

	Here is Sarai Hannah Ajai (the Developer) breakdown of what is happening:

		1. require('uuid'): This statement imports the 'uuid' module, which is a Node.js package used to generate UUIDs.
		2. { v4: uuidv4 }: This is destructuring assignment in JavaScript coded lanaguage. It is extracting a specific property v4 from the object exported by
		the 'uuid' library and assigning it to a variable named uuidv4.
		3. const: This keyword declares a constant variable named uuidv4, which will hold the function for generating version 4 UUIDs.
		
	So, after this line of code executes, Ms. Ajai (the Developer) can use the uuidv4() function to generate users' UUIDs within the iVoteBallot web application.
*/
const { v4: uuidv4 } = require('uuid');

/*
	In the iVoteBallot web application, the line "const userId = uuidv4();" will generate an unique identifier (UUID) for each user who interacts with the
	iVoteBallot web application. Here is Sarai Hannah Ajai (the Developer) breakdown of what each part of the code does:

	1. "const userId": This declares a constant variable named "userId". This constant is a variable whose value cannot be changed once it is assigned.

	2. "=": This is the assignment operator, which assigns a value to a variable.

	3. "uuidv4()": This is a function call that generates a version 4 UUID (Universally Unique Identifier). These UUIDs are standardized identifiers that
	   are intended to be unique across both space and time, meaning that it is extremely unlikely for two generated UUIDs to be the same.

	Therefore, the line "const userId = uuidv4()" creates a new UUID and assigns it to the variable "userId". This UUID can then be used to uniquely identify
	each front-end user within the iVoteBallot web application who have created an iVoteBallot's accounts, such as for tracking their interactions, maintaining
	session state, or ensuring data information integrity.
*/
const userId = uuidv4();

/*
	The given Javascript coded language imports the 'nodemailer' library which is used for sending email within the iVoteBallot web application. The 'require'
	function is a built-in method within Node.js that is used to load modules or files. The 'const' keyword declares a constant variable 'nodemailer' that holds
	the reference to the loaded 'nodemailer' library.
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

const timeout = require('connect-timeout');

//const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);


/*
	The function starts the iVoteBallotApp prototype 3 web application by listening to port 8080 on the IP address '0.0.0.0'. If there is an error during the
	process, the function logs a message indicating the problem encountered while loading the iVoteBallot prototype 3 web application. Otherwise, the function
	logs a confirmation message stating that the Node.js server, in conjunction with the Express framework, is listening on port 8080 for the iVoteBallotApp 
	prototype 3 web application.
*/
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
		console.log('Sarai Hannah Ajai has not created the SQLite3 database connection from her written JavaScript coded language for \'alabamaDMV_Commission_01\' which has a generated an error, as ' + err + '.');
	} else {
		console.log('Sarai Hannah Ajai has created the SQLite3 database connection from her written JavaScript coded language which \'alabamaDMV_Commission_01\' has a generated successfully connection' + Date() + '.');
	}
});

/*
	The provided JavaScript code initializes a SQLite3 database connection named `db1_LoggedInHistory`, targeting a database file named,
	'alabamaUsers_LoggedIn_History.db'. And, if an error occurs during the connection attempt, the SQLite3 database connection logs a message 
	indicating the failure to create the database table along with the error details. Conversely, if the connection is successful,  SQLite3 
	database connction logs a message confirming the creation of the database table 'alabamaUsers_LoggedIn_History.db' with passport and session 
	management authentications, appended with the current date and time.
*/
const db1_LoggedInHistory = new sqlite3.Database('alabamaUsers_LoggedIn_History.db', err => {
	if (err) {
		console.log('Sarai Hannah Ajai has not created the SQLite3 database table named, alabamaUsers_LoggedIn_History.db with passport and session management authentications:' + err + '.');
	} else {
		console.log('Sarai Hannah Ajai has successfully created the SQLite3 database table named, alabamaUsers_LoggedIn_History.db with passport and session management authentications' + Date() + '.');
	}
});




const db1_LoggedPasswordChange = new sqlite3.Database('alabamaUsers_PasswordChange_History.db', err => {
	if (err) {
		console.log('Sarai Hannah Ajai has not created the SQLite3 database table named, alabamaUsers_PasswordChange_History.db with passport and session management authentications:' + err + '.');
	} else {
		console.log('Sarai Hannah Ajai has successfully created the SQLite3 database table named, alabamaUsers_PasswordChange_History.db with passport and session management authentications' + Date() + '.');
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

        id TEXT DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))), 2) || '-a' || substr(lower(hex(randomblob(2))), 2) || '-6' || substr(lower(hex(randomblob(2))), 2) || lower(hex(randomblob(6)))), 
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
		DMVUSResidentStatusSelection VARCHAR(50) NOT NULL,
		DMVUSResidentStatusCategorySelection VARCHAR (250) NOT NULL,
		DMVUSResidentStatusSubjectSelection VARCHAR (250) NOT NULL,
		DMVGradeSchool VARCHAR(300) NOT NULL,
		DMVGradeSchoolSelection VARCHAR(10) NOT NULL,
		DMVGradeSchoolYearSelection VARCHAR(25) NOT NULL,
		DMVHighSchool VARCHAR(300) NOT NULL,
		DMVHighSchoolSelection VARCHAR(10) NOT NULL,
		DMVHighSchoolYearSelection VARCHAR(25) NOT NULL,
		DMVCollege VARCHAR(300) NOT NULL,
		DMVDegreeSelection VARCHAR(100) NOT NULL,
		DMVCategorySelection VARCHAR(100) NOT NULL,
		DMVSubjectSelection VARCHAR(100) NOT NULL,
		DMVCollegeYearSelection VARCHAR(25) NOT NULL,
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
	The JavaScript lines of codes utilizes the SQLite3 database connection `db1_LoggedInHistory` to create a table named 'alabamaUsers_LoggedIn_History'. 
	The table structure includes fields such as uniqueId, url, userAgent, userId, User_Login_Time, User_Logout_Time, total_Time_Hours, total_Time_Minutes, 
	total_Time_Seconds, and total_Time_Milliseconds. And, if the table creation is successful, it logs a message confirming the creation along with the
	current date and time. Otherwise, if an error occurs during the creation process, the SQLites database connection logs a message indicating the failure
	along with the error details.
*/
db1_LoggedInHistory.serialize(() => {
	db1_LoggedInHistory.run(`CREATE TABLE IF NOT EXISTS alabamaUsers_LoggedIn_History (

		uniqueId TEXT DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))), 2) || '-a' || substr(lower(hex(randomblob(2))), 2) || '-6' || substr(lower(hex(randomblob(2))), 2) || lower(hex(randomblob(6)))), 
		url TEXT,
		userAgent TEXT,
		userId TEXT,		
		User_Login_Time DATETIME, 
		User_Logout_Time DATETIME,		
		total_Time_Hours TEXT,           
		total_Time_Minutes TEXT,        
		total_Time_Seconds TEXT,         
		total_Time_Milliseconds TEXT
		
	)`), (err) => {

			if (err) {
				console.log('Sarai Hannah Ajai have not created the Sqlite3 \'alabamaUsers_LoggedIn_History\' database table which was coded successfully and she received a message: ' + err + '!');
			} else {
				console.log('Sarai Hannah Ajai have successfully created the Sqlite3 \'alabamaUsers_LoggedIn_History\' database table' + Date() + '.');
			}
		};
});

db1_LoggedPasswordChange.serialize(() => {
	db1_LoggedPasswordChange.run(`CREATE TABLE IF NOT EXISTS alabamaUsers_PasswordChange_History (

		uniqueId TEXT DEFAULT (lower(hex(randomblob(4))) || '-' || lower(hex(randomblob(2))) || '-4' || substr(lower(hex(randomblob(2))), 2) || '-a' || substr(lower(hex(randomblob(2))), 2) || '-6' || substr(lower(hex(randomblob(2))), 2) || lower(hex(randomblob(6)))), 
		url TEXT,
		userAgent TEXT,
		userId TEXT,		
		User_PasswordChange_Time DATETIME, 		
		total_Time_Hours TEXT,           
		total_Time_Minutes TEXT,        
		total_Time_Seconds TEXT,         
		total_Time_Milliseconds TEXT
		
	)`), (err) => {

			if (err) {
				console.log('Sarai Hannah Ajai have not created the Sqlite3 \'alabamaUsers_LoggedIn_History\' database table which was coded successfully and she received a message: ' + err + '!');
			} else {
				console.log('Sarai Hannah Ajai have successfully created the Sqlite3 \'alabamaUsers_LoggedIn_History\' database table' + Date() + '.');
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
				httpOnly: false,
				sameSite: true,
				resave: true,
				saveUninitialized: true,
				proxy: true,
				maxAge: 'SESSION_MAX_AGE' // 10 minutes		
			},

			rolling: true, // Resets the expiration time on each request
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

/*
	The provided JavaScript line configures the iVoteBallotApp to utilize the 'flash' middleware. This middleware is typically
	used in the iVoteBallot web applications built with frameworks like Express.js to display flash messages. Flash messages 
	are temporary messages that can be displayed to users to convey notifications or alerts, often after a specific action has 
	been performed, such as submitting a form or completing an operation. The 'flash' middleware enables the iVoteBallotApp to 
	handle and display these messages effectively to users interacting with the iVoteBallot web application.
*/

iVoteBallotApp.use(flash());

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
									DMVUSResidentStatusSelection: row.DMVUSResidentStatusSelection,
									DMVUSResidentStatusCategorySelection: row.DMVUSResidentStatusCategorySelection,
									DMVUSResidentStatusSubjectSelection: row.DMVUSResidentStatusSubjectSelection,
									DMVRace: row.DMVRace,
									DMVGradeSchool: row.DMVGradeSchool,
									DMVGradeSchoolSelection: row.DMVGradeSchoolSelection,
									DMVGradeSchoolYearSelection: row.DMVGradeSchoolYearSelection,
									DMVHighSchool: row.DMVHighSchool,
									DMVHighSchoolSelection: row.DMVHighSchoolSelection,
									DMVHighSchoolYearSelection: row.DMVHighSchoolYearSelection,
									DMVCollege: row.DMVCollege,
									DMVDegreeSelection: row.DMVDegreeSelection,
									DMVCategorySelection: row.DMVCategorySelection,
									DMVSubjectSelection: row.DMVSubjectSelection,
									DMVCollegeYearSelection: row.DMVCollegeYearSelection,
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
									ConfirmPassword: row.ConfirmPassword,
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

/*
	The JavaScript code block establishes the use of Passport's 'local2' authentication strategy within the iVoteBallot application. This 
	strategy utilizes a LocalStrategy object configured to handle authentication requests where the username field is identified as 'DMVEmail' 
	and the password field as 'Temporary_Password'. Upon receiving a request, the passport.use strategy logs the provided email and password 
	for debugging purposes. Subsequently, the passport.use strategy queries a SQLite database named 'alabamaDMV_Commission_01' to retrieve an 
	user information associated with the provided email address. If an error occurs during the database query, the  the passport.use strategy 
	returns the error to the authentication process. If no user record is found for the provided email, the passport.use strategy returns a 
	message indicating the incorrect email address. Additionally, the passport.use strategy uses bcrypt to compare the provided temporary 
	password with the hashed password retrieved from the database. If the passwords do not match, the passport.use strategy returns a message 
	indicating the incorrect temporary password. However, if authentication is successful, the passport.use strategy returns the user information
	along with authentication status as 'isAuthenticated: true'.

	This strategy encapsulates the user authentication logic for the iVoteBallot web application, validating user credentials against the stored
	information in the database. The passport.use strategy ensures that only authorized users with correct credentials can access the 
	iVoteBallot web application's functionalities, thereby enhancing the iVoteBallot web application security and user authentication mechanisms.
*/
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
							DMVUSResidentStatusSelection: row.DMVUSResidentStatusSelection,
							DMVUSResidentStatusCategorySelection: row.DMVUSResidentStatusCategorySelection,
							DMVUSResidentStatusSubjectSelection: row.DMVUSResidentStatusSubjectSelection,
							DMVGradeSchool: row.DMVGradeSchool,
							DMVGradeSchoolSelection: row.DMVGradeSchoolSelection,
							DMVGradeSchoolYearSelection: row.DMVGradeSchoolYearSelection,
							DMVHighSchool: row.DMVHighSchool,
							DMVHighSchoolSelection: row.DMVHighSchoolSelection,
							DMVHighSchoolYearSelection: row.DMVHighSchoolYearSelection,
							DMVCollege: row.DMVCollege,
							DMVDegreeSelection: row.DMVDegreeSelection,
							DMVCategorySelection: row.DMVCategorySelection,
							DMVSubjectSelection: row.DMVSubjectSelection,
							DMVCollegeYearSelection: row.DMVCollegeYearSelection,
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
							ConfirmPassword: row.ConfirmPassword,
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
							DMVUSResidentStatusSelection: row.DMVUSResidentStatusSelection,
							DMVUSResidentStatusCategorySelection: row.DMVUSResidentStatusCategorySelection,
							DMVUSResidentStatusSubjectSelection: row.DMVUSResidentStatusSubjectSelection,
							DMVGradeSchool: row.DMVGradeSchool,
							DMVGradeSchoolSelection: row.DMVGradeSchoolSelection,
							DMVGradeSchoolYearSelection: row.DMVGradeSchoolYearSelection,
							DMVHighSchool: row.DMVHighSchool,
							DMVHighSchoolSelection: row.DMVHighSchoolSelection,
							DMVHighSchoolYearSelection: row.DMVHighSchoolYearSelection,
							DMVCollege: row.DMVCollege,
							DMVDegreeSelection: row.DMVDegreeSelection,
							DMVCategorySelection: row.DMVCategorySelection,
							DMVSubjectSelection: row.DMVSubjectSelection,
							DMVCollegeYearSelection: row.DMVCollegeYearSelection,
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
							ConfirmPassword: row.ConfirmPassword,
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
				DMVUSResidentStatusSelection: user.DMVUSResidentStatusSelection,
				DMVUSResidentStatusCategorySelection: user.DMVUSResidentStatusCategorySelection,
				DMVUSResidentStatusSubjectSelection: user.DMVUSResidentStatusSubjectSelection,
				DMVGradeSchool: user.DMVGradeSchool,
				DMVGradeSchoolSelection: user.DMVGradeSchoolSelection,
				DMVGradeSchoolYearSelection: user.DMVGradeSchoolYearSelection,
				DMVHighSchool: user.DMVHighSchool,
				DMVHighSchoolSelection: user.DMVHighSchoolSelection,
				DMVHighSchoolYearSelection: user.DMVHighSchoolYearSelection,
				DMVCollege: user.DMVCollege,
				DMVDegreeSelection: user.DMVDegreeSelection,
				DMVCategorySelection: user.DMVCategorySelection,
				DMVSubjectSelection: user.DMVSubjectSelection,
				DMVCollegeYearSelection: user.DMVCollegeYearSelection,
				DMVSSN: user.DMVSSN,
				DMVEmail: user.DMVEmail,
				DMVConfirmEmail: user.DMVConfirmEmail,
				DMVPhoneNumber: user.DMVPhoneNumber,
				DMVAddress: user.DMVAddress,
				DMVUnitType: user.DMVUnitType,
				DMVUnitTypeNumber: user.DMVUnitTypeNumber,
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
				ConfirmPassword: user.ConfirmPassword,
				Temporary_Password: user.Temporary_Password,

				isAuthenticated: true

			}
			
		);

	});	

});

passport.deserializeUser(function (userId, done) {
    console.log('Deserializing user from alabamaUsers_LoggedIn_History...');
    console.log(userId);

    // Query the database to retrieve user data based on the provided userId
    db1_LoggedInHistory.get('SELECT * FROM alabamaUsers_LoggedIn_History WHERE userId = ?', userId, (err, user) => {
        if (err) {
            return done(err);
        }
        if (!user) {
            // If user not found in the second table, return false
            return done(null, false);
        }

        // Return userId data from the second table
        return done(null, {
            userId: user.userId,
            total_Time_Seconds: user.total_Time_Seconds,
            isAuthenticated: true
        });
    });
});


const redirectDashboard = (req, res, next) => {
	if (req.session.userId) {
		res.redirect('/dashboard_01');
	} else {
		next();
		res.redirect('/alabamaVoters_LogIn_01');
	}
}

function checkMiddlewareAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();
	}
	res.redirect('/alabamaVoters_Login_01');
}

function checkDeleteMiddlewareAuthentication(req, res, next) {
	if (req.isAuthenticated()) {
		return next();

	}
	res.redirect('/alabamaVoters_LogOut_01');
}

iVoteBallotApp.get('/dashboard_01', checkMiddlewareAuthentication, async (req, res) => {

	if (req.isAuthenticated()) {

		const user_agent = req.headers['user-agent'];
		req.session.user_agent = user_agent;

		const ip_address = req.ip;
		req.session.ip_address = ip_address;

		console.log(req.user);
		console.log(req.session);
		console.log('User had been successfully authenticated within the Session through the passport from dashboard!');

		console.group('\n GET /user - request details:')
		console.log('_____________________________________ \.n');
		console.log('req.body:', req.body);
		console.log('req.params:', req.params);
		console.log('req.headers:', req.headers);
		console.log('req.isAuthenticated:', req.isAuthenticated);
		console.log('_____________________________________ \.n');
		console.log('req.sesssion.user_agent:', req.session.user_agent);
		console.log('ip_address:', req.session.ip_address);
		console.log('_____________________________________ \.n');
		console.log('req.user', req.user);

		console.groupEnd();

		// Call the userHistoryLogin function to log the user's login session
		userHistoryLogin(req, res);

		const bufferData = Buffer.from(req.user.DMVPhoto, 'base64');

		res.render('dashboard_01', {
			DMVFirstName: req.user.DMVFirstName,
			DMVMiddleName: req.user.DMVMiddleName,
			DMVLastName: req.user.DMVLastName,
			DMVPhoto: bufferData.toString('base64'),
			DMVIdType: req.user.DMVIdType,
			DMVDateOfBirth: req.user.DMVDateOfBirth,
			DMVBirthSex: req.user.DMVBirthSex,
			DMVUSResidentStatusSelection: req.user.DMVUSResidentStatusSelection,
			DMVUSResidentStatusCategorySelection: req.user.DMVUSResidentStatusCategorySelection,
			DMVUSResidentStatusSubjectSelection: req.user.DMVUSResidentStatusSubjectSelection,
			DMVGradeSchool: req.user.DMVGradeSchool,
			DMVGradeSchoolSelection: req.user.DMVGradeSchoolSelection,
			DMVGradeSchoolYearSelection: req.user.DMVGradeSchoolYearSelection,
			DMVHighSchool: req.user.DMVHighSchool,
			DMVHighSchoolSelection: req.user.DMVHighSchoolSelection,
			DMVHighSchoolYearSelection: req.user.DMVHighSchoolYearSelection,
			DMVCollege: req.user.DMVCollege,
			DMVDegreeSelection: req.user.DMVDegreeSelection,
			DMVCategorySelection: req.user.DMVCategorySelection,
			DMVSubjectSelection: req.user.DMVSubjectSelection,
			DMVCollegeYearSelection: req.user.DMVCollegeYearSelection,
			DMVEmail: req.user.DMVEmail,
			DMVAddress: req.user.DMVAddress,
			DMVUnitType: req.user.DMVUnitType,
			DMVUnitTypeNumber: req.user.DMVUnitTypeNumber,
			DMVCountrySelection: req.user.DMVCountrySelection,
			DMVStateSelection: req.user.DMVStateSelection,
			DMVCountySelection: req.user.DMVCountySelection,
			DMVCitySelection: req.user.DMVCitySelection,
			DMVZipSelection: req.user.DMVZipSelection,
			DMVPhoneNumber: req.user.DMVPhoneNumber,

			alabama_Candidates_2024_02: '/alabama_Candidates_2024_02',
			alabamaVoters_LogOut_01: '/alabamaVoters_LogOut_01',
		});

		console.log('UUIDv4:', req.user.id);
		console.log('DMVFirstName:', req.user.DMVFirstName);
		console.log('DMVMiddleName:', req.user.DMVMiddleName);
		console.log('DMVLastName:', req.user.DMVLastName);
		console.log('DMVPhoto:', req.user.DMVPhoto);
		console.log('DMVIdType:', req.user.DMVIdType);
		console.log('DMVDateOfBirth:', req.user.DMVDateOfBirth);
		console.log('DMVBirthSex:', req.user.DMVBirthSex);
		console.log('DMVUSResidentStatusSelection:', req.user.DMVUSResidentStatusSelection);
		console.log('DMVUSResidentStatusCategorySelection:', req.user.DMVUSResidentStatusCategorySelection);
		console.log('DMVUSResidentStatusSubjectSelection:', req.user.DMVUSResidentStatusSubjectSelection);
		console.log('DMVGradeSchool:', req.user.DMVGradeSchool);
		console.log('DMVGradeSchoolSelection:', req.user.DMVGradeSchoolSelection);
		console.log('DMVGradeSchoolYearSelection:', req.user.DMVGradeSchoolYearSelection);
		console.log('DMVHighSchool:', req.user.DMVHighSchool);
		console.log('DMVHighSchoolSelection:', req.user.DMVHighSchoolSelection);
		console.log('DMVHighSchoolYearSelection:', req.user.DMVHighSchoolYearSelection);
		console.log('DMVCollege:', req.user.DMVCollege);
		console.log('DMVDegreeSelection:', req.user.DMVDegreeSelection);
		console.log('DMVCategorySelection:', req.user.DMVCategorySelection);
		console.log('DMVSubjectSelection:', req.user.DMVSubjectSelection);
		console.log('DMVCollegeYearSelection', req.user.DMVCollegeYearSelection);
		console.log('DMVEmail:', req.user.DMVEmail);
		console.log('DMVAddress:', req.user.DMVAddress);
		console.log('DMVUnitType:', req.user.DMVUnitType);
		console.log('DVMIdTypeNumber:', req.user.DMVIdTypeNumber);
		console.log('DMVCountrySelection:', req.user.DMVCountrySelection);
		console.log('DMVStateSelection:', req.user.DMVStateSelection);
		console.log('DMVCountySelection:', req.user.DMVCountySelection);
		console.log('DMVCitySelection:', req.user.DMVCitySelection);
		console.log('DMVZipSelection:', req.user.DMVZipSelection);
		console.log('DMVPhoneNumber:', req.user.DMVPhoneNumber);

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
				pass: process.env.IONOS_SECRET_KEY,
			}
		});

		const imagePath = './Public/images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png';

		if (req.isAuthenticated()) {

			// Get current date and time
			const passwordChangeDateTime = new Date().toLocaleString('en-US', {
				timeZone: 'CST',
				month: 'long',      // Full month name (e.g., January, February)
				day: 'numeric',     // Day of the month (e.g., 1, 2, 3)
				year: 'numeric',    // Full year (e.g., 2024)
				hour: 'numeric',    // Hour (e.g., 1, 2, ..., 12)
				minute: '2-digit',  // Two-digit minute (e.g., 05, 10, 15)
				hour12: true,       // Use 12-hour clock (true) or 24-hour clock (false)
			});

			console.log(passwordChangeDateTime + ' CST');

			// Retrieve user-agent header
			const userAgent = req.headers['user-agent'];

			// Retrieve IP address of the client
			const ipAddress = req.ip;
			console.log(ipAddress);

			// Function to asterisk the last four digits of the IP address
			function maskIPAddress(ip) {
				// Split the IP address by dots
				const parts = ip.split('.');

				// Asterisk the last part (last octet) of the IP address
				// If the IP address doesn't have at least four parts, return the original IP
				if (parts.length < 4) {
					return ip;
				}

				// Replace the last part with asterisks for all characters
				parts[3] = '***';

				// Join the parts back together
				return parts.join('.');
			}

			// Test the function
			const maskedIPAddress = maskIPAddress(ipAddress);
			console.log(maskedIPAddress); // For Example Output: 192.168.0.***

			// Extracting device type and browser information from user-agent
			// You may use libraries like 'express-useragent' for more comprehensive parsing
			const deviceType = userAgent.match(/\((.*?)\)/)[1];
			const browserInfo = userAgent.match(/(Firefox|Chrome|Safari|Edge|MSIE|Trident|Opera)/)[0];

			/*
			Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
			using the default SMTP transporter nodemailer API library.
			*/

			const mailOptions_01 = {
				from: 'electionassureexpert@ivoteballot.com',
				to: req.body.DMVEmail,
				bcc: 'cio_developmenttest@ivoteballot.com, envdevelopmenttest1_recipient@ivoteballot.com',
				subject: `Important Security Notification: iVoteBallot Account Login`,
				html: `
					
					<div style="text-align: center;">
						<img src="cid:iVoteBallotLogo" style="width: 85px; height: auto; display: inline-block;" />
					</div>						
		
					<p>Hello ${req.user.DMVFirstName} ${req.user.DMVMiddleName},</p>
	
					<p>We are writing to inform you about an important security update regarding your iVoteBallot account. Here are the details:</p>
					
					<p>Web Application: iVoteBallot.com [Website]
					
					<p>Device Type: ${deviceType}</p>

					<p>Browser Type: ${browserInfo}</p>
					
					<p>Date and Time Login: ${passwordChangeDateTime}</p>

					<p>IP Address: ${maskedIPAddress}</p>
												
					<p>
						We highly recommend that you take a moment to review the security settings of your email account. Additionally, please avoid using the
						same password across multiple online web applications. For additional tips on password safety, please <a href="https://www.cisa.gov/secure-our-world/use-strong-passwords">click here</a>.                        					
					</p>

					<p>
						Ensuring your iVoteBallot security is our utmost priority.
					</p>											
										
					<p> Best regards,</p>	
	
					<p>iVoteBallot's Election Assure Experts Team</p>									
					
					`,

				attachments: [
					{
						filename: 'iVoteBallotLogo.png',
						path: imagePath,
						cid: 'iVoteBallotLogo'

					}
				],

			};

			/*
			Sarai Hannah Ajai has written her JavaScript programmatic codes to send an user test email to AccouNetrics' customercare@accounetrics.com
			email account with nodemailer defined transporter object.
			*/

			transporter.sendMail(mailOptions_01, (error, info) => {
				if (error) {
					console.log(error);
					res.send('error');
				} else {
					console.log('Email Sent - mailOptions_01: ' + info.response);
					res.send('success!');
				}
			});

		} else {
			res.render('535');
			console.log('The nodemailer user could not be authenticated.');

		}

	} else {

		res.redirect('/alabamaVoters_LogIn_01');

		console.log('The user is not successfully authenticated within the session through the passport from dashboard!');

	}

});

iVoteBallotApp.get('/alabama_Candidates_2024_02', checkMiddlewareAuthentication, async (req, res) => {
	if (req.isAuthenticated()) {

		console.log('The User had been successfully authenticated within the Session through the passport from alabama_Candidates_2024_02!');
		//const bufferData = Buffer.from(req.user.DMVPhoto, 'base64');

		// If user is authenticated, render the Alabama DMV page
		res.render('alabama_Candidates_2024_02', {

			// Pass any necessary data to the template
			// For example: DMVFirstName, DMVLastName, etc.
			DMVFirstName: req.user.DMVFirstName,
			DMVMiddleName: req.user.DMVMiddleName,
			DMVLastName: req.user.DMVLastName,
			//DMVPhoto: bufferData.toString('base64'),
			DMVIdType: req.user.DMVIdType,
			DMVDateOfBirth: req.user.DMVDateOfBirth,
			DMVBirthSex: req.user.DMVBirthSex,
			DMVUSResidentStatusSelection: req.user.DMVUSResidentStatusSelection,
			DMVUSResidentStatusCategorySelection: req.user.DMVUSResidentStatusCategorySelection,
			DMVUSResidentStatusSubjectSelection: req.user.DMVUSResidentStatusSubjectSelection,
			DMVGradeSchool: req.user.DMVGradeSchool,
			DMVGradeSchoolSelection: req.user.DMVGradeSchoolSelection,
			DMVGradeSchoolYearSelection: req.user.DMVGradeSchoolYearSelection,
			DMVHighSchool: req.user.DMVHighSchool,
			DMVHighSchoolSelection: req.user.DMVHighSchoolSelection,
			DMVHighSchoolYearSelection: req.user.DMVHighSchoolYearSelection,
			DMVCollege: req.user.DMVCollege,
			DMVDegreeSelection: req.user.DMVDegreeSelection,
			DMVCategorySelection: req.user.DMVCategorySelection,
			DMVSubjectSelection: req.user.DMVSubjectSelection,
			DMVCollegeYearSelection: req.user.DMVCollegeYearSelection,
			DMVEmail: req.user.DMVEmail,
			DMVAddress: req.user.DMVAddress,
			DMVUnitType: req.user.DMVUnitType,
			DMVUnitTypeNumber: req.user.DMVUnitTypeNumber,
			DMVCountrySelection: req.user.DMVCountrySelection,
			DMVStateSelection: req.user.DMVStateSelection,
			DMVCountySelection: req.user.DMVCountySelection,
			DMVCitySelection: req.user.DMVCitySelection,
			DMVZipSelection: req.user.DMVZipSelection,
			DMVPhoneNumber: req.user.DMVPhoneNumber,
		});

		console.log('DMVFirstName:', req.user.DMVFirstName);
		console.log('DMVMiddleName:', req.user.DMVMiddleName);
		console.log('DMVLastName:', req.user.DMVLastName);
		//console.log('DMVPhoto:', req.user.DMVPhoto);
		console.log('DMVIdType:', req.user.DMVIdType);
		console.log('DMVDateOfBirth:', req.user.DMVDateOfBirth);
		console.log('DMVBirthSex:', req.user.DMVBirthSex);
		console.log('DMVUSResidentStatusSelection:', req.user.DMVUSResidentStatusSelection);
		console.log('DMVUSResidentStatusCategorySelection:', req.user.DMVUSResidentStatusCategorySelection);
		console.log('DMVUSResidentStatusSubjectSelection:', req.user.DMVUSResidentStatusSubjectSelection);
		console.log('DMVGradeSchool:', req.user.DMVGradeSchool);
		console.log('DMVGradeSchoolSelection:', req.user.DMVGradeSchoolSelection);
		console.log('DMVGradeSchoolYearSelection:', req.user.DMVGradeSchoolYearSelection);
		console.log('DMVHighSchool:', req.user.DMVHighSchool);
		console.log('DMVHighSchoolSelection:', req.user.DMVHighSchoolSelection);
		console.log('DMVHighSchoolYearSelection:', req.user.DMVHighSchoolYearSelection);
		console.log('DMVCollege:', req.user.DMVCollege);
		console.log('DMVDegreeSelection:', req.user.DMVDegreeSelection);
		console.log('DMVCategorySelection:', req.user.DMVCategorySelection);
		console.log('DMVSubjectSelection:', req.user.DMVSubjectSelection);
		console.log('DMVCollegeYearSelection', req.user.DMVCollegeYearSelection);
		console.log('DMVEmail:', req.user.DMVEmail);
		console.log('DMVAddress:', req.user.DMVAddress);
		console.log('DMVUnitType:', req.user.DMVUnitType);
		console.log('DVMIdTypeNumber:', req.user.DMVIdTypeNumber);
		console.log('DMVCountrySelection:', req.user.DMVCountrySelection);
		console.log('DMVStateSelection:', req.user.DMVStateSelection);
		console.log('DMVCountySelection:', req.user.DMVCountySelection);
		console.log('DMVCitySelection:', req.user.DMVCitySelection);
		console.log('DMVZipSelection:', req.user.DMVZipSelection);
		console.log('DMVPhoneNumber:', req.user.DMVPhoneNumber);

	} else {
		// If user is not authenticated, redirect to the login page
		res.redirect('/alabamaVoters_LogIn_01');
		console.log('The user is not successfully authenticated within the session through the passport from alabamaDMV_Commission_01.');
	}
});

/* -------------------------- The beginning of the USE section ----------------------------- */

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

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_SignUp_01' URL bar
iVoteBallotApp.use('/alabamaVoters_SignUp_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_SignUp_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_ForgotPasswordSignUp_01' URL bar
iVoteBallotApp.use('/alabamaVoters_ForgotPasswordSignUp_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_ForgotPasswordSignUp_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_EmailVerification_01' URL bar
iVoteBallotApp.use('/alabamaVoters_EmailVerification_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_EmailVerification_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_ForgotPassword_01' URL bar
iVoteBallotApp.use('/alabamaVoters_ForgotPassword_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_ForgotPassword_01\'.');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/alabamaVoters_VerifyEmailForgotPassword_01' URL bar
iVoteBallotApp.use('/alabamaVoters_VerifyEmailForgotPassword_01', (req, res, next) => {
	console.log('The middleware have been call for the user\'s \'alabamaVoters_VerifyEmailForgotPassword_01!');
	// Check if user is Already authenticated
	if (!req.session.isAuthenticated) {

		// User of '/login' URL
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

// Use method-override middleware
iVoteBallotApp.use(methodOverride('_method'));

const views_Controller = require('./models/views_Router');
const contactUs_01_Controller = require('./models/alabama_Session_Router');
const { view_iVoteBallot } = require('./controllers/views_Controller');
const { ErrorCreate } = require('session/lib/session/storage/base');

iVoteBallotApp.use('/', require('./models/views_Router'));
iVoteBallotApp.use(views_Controller);

/* -------------------------- The ending of the USE section ----------------------------- */

/* -------------------------- The beginning of the redirectDashboard section ----------------------------- */

/*
	The constant redirectDashboard is a middleware function that checks if the user is already
	logged in by verifying the existence of a userId property in the user's session. If the user
	is logged in, the function redirects them to the dashboard page; otherwise, it allows the
	request to proceed to the next middleware function. This middleware is commonly used to restrict
	access to certain routes for authenticated users.
*/


/* -------------------------- The ending of the redirectDashboard section ----------------------------- */

/* -------------------------- The beginning of the GET ROUTE section ----------------------------- */

/*
   This section defines various GET routes for handling user authentication and session management
   in the iVoteBallot web application. Here's a breakdown of each route's functionality:

   - '/alabamaDMV_Commission_01': Renders the alabamaVoters_SignUp_01 page, if the user is not 
	 authenticated. If the user is authenticated, it renders the '/alabamaVoters_EmailVerification_01'
	 page. And the passport.js checks for user's authentication status and displays appropriate messages accordingly.

   - '/alabamaVoters_SignUp_01': Renders the alabamaVoters_EmailVerification_01 page, if the user is
	 authenticated. Otherwise, renders the '500' error page and logs an authentication failure message.

   - '/alabamaVoters_EmailVerification_01': Renders the alabamaVoters_VerifyEmailPassword_01 page,
	 if the user is not authenticated. Otherwise, renders the '404' error page.

   - '/alabamaVoters_VerifyEmailPassword_01': Renders the alabamaVoters_EmailVerification_01 page,
	 if the user is authenticated. Otherwise, redirects to '/alabamaVoters_VerifyEmailPassword_01'
	 and logs an authentication failure message.

   - '/alabamaVoters_LogIn_01': Renders the alabamaVoters_LogIn_01 page if the user is not logged in.
	 If the user is authenticated, redirects to '/dashboard_01'. Renders the '404' error page for 
	 unrecognized conditions.

   - '/alabamaVoters_LogOut_01': Renders the alabamaVoters_LogOut_01 page, if the user is not
	 authenticated. Otherwise, renders the '404' error page.

   - '/401', '/404', '/500', '/535', '/', '/ivoteballot': These routes handle various HTTP status
	 code scenarios and render appropriate pages based on user authentication status. If the user
	 is authenticated, an alert message is shown indicating that the user is already logged in.
	 Otherwise, it renders the respective error or landing page based on the route.

   Ensure that the Passport.js middleware and session management are properly configured to enable
   user authentication and session handling. Check the order of routes and middleware to ensure
   proper authentication before accessing protected routes.
*/

// User route 401
iVoteBallotApp.get('/401', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		req.flash('success', 'You are already logged in!');
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
		req.flash('success', 'You are already logged in!');
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
		req.flash('success', 'You are already logged in!');
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
		req.flash('success', 'You are already logged in!');
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

// User route /
iVoteBallotApp.get('/', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		req.flash('success', 'You are not logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/535' route URL bar
	if (req.isUnauthenticated) {
		res.render('ivoteballot');

	} else {
		console.log(req.flash());
		res.render('500');
	}
});

// User route ivoteballot
iVoteBallotApp.get('/ivoteballot', (req, res) => {
	// Check if user already authenticated.
	if (req.session.isAuthenticated) {
		req.flash('success', 'You are not logged in!');
	}
	console.log(req.session);
	// Check if this is the first use of '/535' route URL bar
	if (req.isUnauthenticated) {
		res.render('ivoteballot');

	} else {
		console.log(req.flash());
		res.render('500');
	}
});

// The User route for alabamaDMV_Commission_01.
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

// The User route for alabamaVoters_SignUp_01. 
iVoteBallotApp.get('/alabamaVoters_SignUp_01', (req, res) => {

	if (req.isAuthenticated()) {
		console.log(req.user);
		console.log('Request Session:' + req.session)
		console.log('' + req.logIn);
		console.log('The User had been successfully authenticated within the Session through the passport from reset signup password webpage!');
		res.render('alabamaVoters_EmailVerification_01');

	} else {

		res.render('500')

		console.log('The user is not successfully authenticated within the session through the passport from reset password webpage!');

	}
});

// The User route for alabamaVoters_ForgotPasswordSignUp_01. 
iVoteBallotApp.get('/alabamaVoters_ForgotPasswordSignUp_01', (req, res) => {

	if (req.isAuthenticated()) {
		console.log(req.user);
		console.log('Request Session:' + req.session)
		console.log('' + req.logIn);
		console.log('The User had been successfully authenticated within the Session through the passport from reset password webpage!');
		res.render('alabamaVoters_ForgotPassword_01');

	} else {

		res.render('500')

		console.log('The user is not successfully authenticated within the session through the passport from reset password webpage!');

	}
});

// The User route for alabamaVoters_EmailVerification_01.
iVoteBallotApp.get('/alabamaVoters_EmailVerification_01', (req, res) => {
	// Check if user already authenticated.
	if (req.isUnauthenticated) {
		console.log('The user attempted to verify email address without being fully authenticated via passport session from the alabamaVoters_EmailVerification_01 webpage.');
		res.render('alabamaVoters_VerifyEmailPassword_01');
	} else {
		// Render signup page for new users
		console.log('The user attempted to verify email address but encountered an authentication error within the passport session from the alabamaVoters_EmailVerification_01 webpage.');
		res.render('404')
	}
});

// The User route for alabamaVoters_EmailVerification_02.
iVoteBallotApp.get('/alabamaVoters_ForgotPassword_01', (req, res) => {
    // Check if user already authenticated.
	if (req.isUnauthenticated) {
		console.log('The user attempted to verify email address without being fully authenticated via passport session from the alabamaVoters_ForgotPassword_01 webpage.');
		res.render('alabamaVoters_VerifyEmailPassword_01');
	} else {
		// Render signup page for new users
		console.log('The user attempted to verify email address but encountered an authentication error within the passport session from the alabamaVoters_ForgotPassword_01 webpage.');
		res.render('404')
	}
});


// The user route for alabamaVoters_VerifyEmailPassword_01.
iVoteBallotApp.get('/alabamaVoters_VerifyEmailPassword_01', (req, res) => {
	if (req.isAuthenticated) {
		console.log(req.user);
		console.log(req.session);
		console.log('The user had been successfully authenticated within the Session through the passport from local2!');
		res.render('alabamaVoters_EmailVerification_01', { firstName: req.user.DMVFirstName, lastName: req.user.DMVLastName, email: req.user.DMVEmail });
	} else if (req.isUnauthenticated) {
		res.redirect('/alabamaVoters_VerifyEmailPassword_01')
		console.log('The user is not successfully authenticated within the session through the passport from local2!');
	}
});

// The user route for alabamaVoters_VerifyEmailPassword_01.
iVoteBallotApp.get('/alabamaVoters_VerifyEmailForgotPassword_01', (req, res) => {
	if (req.isAuthenticated) {
		console.log(req.user);
		console.log(req.session);
		console.log('The User had been successfully authenticated within the Session through the passport from local4!');
		res.render('alabamaVoters_ForgotPassword_01', { firstName: req.user.DMVFirstName, lastName: req.user.DMVLastName, email: req.user.DMVEmail });
	} else if (req.isUnauthenticated) {
		res.redirect('/alabamaVoters_VerifyEmailForgotPassword_01')
		console.log('The User is not successfully authenticated within the session through the passport from local4!');
	}
})

// The user route for alabamaVoters_LogIn_01.
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

/*------------------------------------------------*/

/*
	The function `userHistoryLogin` logs the user's login session. It generates a unique ID using UUIDv4 and captures the current time in ISO format. 
	The function also constructs the user's requested URL and stores the URL along with the user's ID and user agent information. Then the function inserts 
	data into a user login history table named `alabamaUsers_LoggedIn_History`. If the insertion is successful, the function logs a confirmation message; 
	otherwise or the function renders an error page.
*/
const userHistoryLogin = function logLoginSession(req, res) {

	const uniqueId = uuidv4(); // Generate a new UUIDv4 for the uniqueId column

	const currentTime = new Date().toISOString();

	console.log('-----------------------------')
	console.log(currentTime + ' CST');
	console.log('_____________________________')

	const dashboardRoutes = {

		dashboard_01: '/dashboard_01',
		alabama_Candidates_2024_02: '/alabama_Candidates_2024_02',

	};

	const baseUrl = req.protocol + '://' + req.get('host');
	const url = baseUrl + req.originalUrl;

	// To check if, the requested route matches any routes in dashboardRoutes
	if (req.originalUrl in dashboardRoutes) {
		url = baseUrl + dashboardRoutes[req.originalUrl];
	}

	//const url = req.protocol + '://' + req.get('host') + req.originalUrl;

	console.log('------------------------------------------------------')
	console.log('The user url path:' + url);
	console.log('______________________________________________________')

	// To use the existing userId from req.user
	const userId = req.user.id;

	const user_agent = req.headers['user-agent'];
	req.session.user_agent = user_agent;

	// To insert a new record into the user login history table
	db1_LoggedInHistory.run(`INSERT INTO alabamaUsers_LoggedIn_History (uniqueId, url, userId, userAgent, User_Login_Time) VALUES (?, ?, ?, ?, ?)`, [uniqueId, url, userId, user_agent, currentTime], (err) => {
		if (err) {
			console.error('Error inserting into user login history:', err);
			// To render appropriate error page
			res.render('535');
		} else {
			console.log('------------------------------------------------------')
			console.log('The user login time session have been logged successfully.');
			console.log('______________________________________________________')
		}
	});
};

/*
	The function `userHistoryLogout` is designed to log the user's logout session. The function captures the current time and updates the user's logout 
	time in the login history table `alabamaUsers_LoggedIn_History` where the user ID matches and where the logout time is currently null. If the update 
	encounters an error, it renders an appropriate error page. Upon successful update or the function fetches the necessary data, calculates the total
	login time, and updates the database with the total login time in hours, minutes, seconds, and milliseconds for the corresponding user session. If 
	any error occurs during these calculations or updates or the function redirects to an error page.
*/
const userHistoryLogout = function logLogoutSession(req, res) {
	// Get current date and time
	const currentTime = new Date().toISOString();

	console.log('-----------------------------')
	console.log(currentTime + ' CST');
	console.log('_____________________________')

	// Use the existing userId from req.user
	const userId = req.user.id;

	// To update the record in the user login history table
	db1_LoggedInHistory.run(`UPDATE alabamaUsers_LoggedIn_History SET User_Logout_Time = ? WHERE userId = ? AND User_Logout_Time IS NULL`, [currentTime, userId], (err) => {
		if (err) {
			console.error('Error updating user logout history:', err);
			res.render('535'); // Render appropriate error page
		} else {
			console.log('------------------------------------------------------------')
			console.log('The user logout time session has been updated successfully.');
			console.log('____________________________________________________________')

			// Now, fetch the necessary data after updating logout time
			db1_LoggedInHistory.get(`SELECT uniqueId, url, userId, User_Logout_Time, User_Login_Time FROM alabamaUsers_LoggedIn_History WHERE userId = ? AND User_Logout_Time = ?`, [userId, currentTime], (err, row) => {
				if (err) {
					console.error('Error fetching user login data:', err);

					// To Render appropriate error page
					res.render('/535');
				} else {

					// To calculate total_Time_Login                   
					function calculateTotalTimeLogin(row) {
						try {
							const logoutTime = new Date(row.User_Logout_Time).getTime();
							const loginTime = new Date(row.User_Login_Time).getTime();

							if (!isNaN(logoutTime) && !isNaN(loginTime)) {
								const totalTimeMillis = logoutTime - loginTime;
								const totalTimeSeconds = Math.floor(totalTimeMillis / 1000);
								const hours = Math.floor(totalTimeSeconds / 3600);
								const minutes = Math.floor((totalTimeSeconds % 3600) / 60);
								const seconds = totalTimeSeconds % 60;

								return {
									hours: hours,
									minutes: minutes,
									seconds: seconds,
									milliseconds: totalTimeMillis % 1000
								};
							} else {
								console.error("An invalid date format detected.");
								return null;
							}
						} catch (error) {
							console.error("An error occurred while calculating total time login:", error);
							return null;
						}
					}

					const totalTimeLogin = calculateTotalTimeLogin(row);

					// To update total_Time_Login in the database
					db1_LoggedInHistory.run(`UPDATE alabamaUsers_LoggedIn_History SET total_Time_Hours = ?, total_Time_Minutes = ?, total_Time_Seconds = ?, total_Time_Milliseconds = ? WHERE uniqueId = ?`, [totalTimeLogin.hours, totalTimeLogin.minutes, totalTimeLogin.seconds, totalTimeLogin.milliseconds, row.uniqueId], (err) => {
						if (err) {
							console.error('Error updating total time login:', err);

							// To render appropriate error page
							res.redirect('/535');

						} else {
							console.log('Total time login have been updated successfully.');

						}
					});

				}
			});
		}
	});
};

/*------------------------------------------------*/

// User route for alabamaVoters_LogOut_01
iVoteBallotApp.get('/alabamaVoters_LogOut_01', (req, res) => {
	if (req.isUnauthenticated()) {
		console.log('The User have successfully logged out of the dashboard!');
		logLogoutSession(req); // Log the logout session
		res.render('alabamaVoters_LogOut_01');
	} else {
		res.render('404');
	}
});

/* -------------------------- The ending of the GET ROUTE section ----------------------------- */

/* -------------------------- The beginning of the DELETE ROUTE section ----------------------------- */
/*
   This route handler is responsible for processing logout requests from authenticated users
   accessing the '/alabamaVoters_LogOut_01' endpoint of the iVoteBallot web applicatin. Here is a breakdown
   of the functionality:

   1. The route handler checks, if the incoming request is authenticated using req.isAuthenticated().
   2. If the request is authenticated, it destroys the session associated with the request using
	  req.session.destroy(), effectively removing the session ID connectivity from the server.
   3. After destroying the session, the user is redirected to the '/alabamaVoters_LogIn_01' page,
	  indicating successful logout.
   4. If the request is not authenticated, the user is redirected to the '/500' page, presumably
	  indicating a server error.
   5. Information about the user and the logout process is logged to the console for debugging
	  and monitoring purposes.
   6. Request details such as req.body, req.params, req.headers, and req.isUnauthenticated are logged
	  within a console group to provide additional context.
   7. The console group is closed using console.groupEnd().

   In order to ensure that Passport.js authentication middleware and express-session middleware are properly
   configured and initialized to enable session handling and user authentication. Additionally,
   verify that routes and middlewares are set up in the correct order to enforce authentication
   before accessing protected routes like the logout endpoint.
*/

iVoteBallotApp.delete('/alabamaVoters_LogOut_01', checkDeleteMiddlewareAuthentication, (req, res) => {
	
	if (req.isAuthenticated()) {
		
		req.session.destroy();		
		
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
			
			// Get current date and time
			const passwordChangeDateTime = new Date().toLocaleString('en-US', {
				timeZone: 'CST',
				month: 'long',      // Full month name (e.g., January, February)
				day: 'numeric',     // Day of the month (e.g., 1, 2, 3)
				year: 'numeric',    // Full year (e.g., 2024)
				hour: 'numeric',    // Hour (e.g., 1, 2, ..., 12)
				minute: '2-digit',  // Two-digit minute (e.g., 05, 10, 15)
				hour12: true,       // Use 12-hour clock (true) or 24-hour clock (false)
			});
			
			console.log(passwordChangeDateTime + ' CST');

			// Retrieve user-agent header
			const userAgent = req.headers['user-agent'];

			// Retrieve IP address of the client
			const ipAddress = req.ip;
			console.log(ipAddress);

			// Function to asterisk the last four digits of the IP address
			function maskIPAddress(ip) {
			// Split the IP address by dots
			const parts = ip.split('.');
				
				// Asterisk the last part (last octet) of the IP address
				// If the IP address doesn't have at least four parts, return the original IP
				if (parts.length < 4) {
					return ip;
				}
				
				// Replace the last part with asterisks for all characters
				parts[3] = '***';
				
				// Join the parts back together
				return parts.join('.');
			}

			// Test the function
			const maskedIPAddress = maskIPAddress(ipAddress);
			console.log(maskedIPAddress); // For Example Output: 192.168.0.***

			// Extracting device type and browser information from user-agent
			// You may use libraries like 'express-useragent' for more comprehensive parsing
			const deviceType = userAgent.match(/\((.*?)\)/)[1];
			const browserInfo = userAgent.match(/(Firefox|Chrome|Safari|Edge|MSIE|Trident|Opera)/)[0];			

			/*
			Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
			using the default SMTP transporter nodemailer API library.
			*/
							
			const mailOptions_01 = {
				from: 'electionassureexpert@ivoteballot.com', 
				to: req.body.DMVEmail,
				bcc: 'cio_developmenttest@ivoteballot.com, envdevelopmenttest1_recipient@ivoteballot.com',
				subject: `Important Security Notification: iVoteBallot Account Logout`,
				html: `
					
					<div style="text-align: center;">
						<img src="cid:iVoteBallotLogo" style="width: 85px; height: auto; display: inline-block;" />
					</div>						
		
					<p>Hello ${req.user.DMVFirstName} ${req.user.DMVMiddleName},</p>
	
					<p>We are writing to inform you about an important security update regarding your iVoteBallot account. Here are the details:</p>
					
					<p>Web Application: iVoteBallot.com [Website]
					
					<p>Device Type: ${deviceType}</p>

					<p>Browser Type: ${browserInfo}</p>
					
					<p>Date and Time Logout: ${passwordChangeDateTime}</p>

					<p>IP Address: ${maskedIPAddress}</p>
												
					<p>
						We highly recommend that you take a moment to review the security settings of your email account. Additionally, please avoid using the
						same password across multiple online web applications. For additional tips on password safety, please <a href="https://www.cisa.gov/secure-our-world/use-strong-passwords">click here</a>.                        					
					</p>

					<p>
						Ensuring your iVoteBallot security is our utmost priority.
					</p>											
										
					<p> Best regards,</p>	
	
					<p>iVoteBallot's Election Assure Experts Team</p>									
					
					`,
					
					attachments: [
						{
							filename: 'iVoteBallotLogo.png',
							path: imagePath,
							cid: 'iVoteBallotLogo'

						}
					],															

			};

			/*
			Sarai Hannah Ajai has written her JavaScript programmatic codes to send an user test email to AccouNetrics' customercare@accounetrics.com
			email account with nodemailer defined transporter object.
			*/	

			transporter.sendMail(mailOptions_01, (error, info) => {
				if (error) {
					console.log(error);
					res.send('error');
				} else {
					console.log('Email Sent - mailOptions_01: ' + info.response);
					res.send('success!');
				}
			});

			} else {
				res.render('535');
				console.log('The nodemailer user could not be authenticated.');

			}
	
		res.redirect('/alabamaVoters_LogIn_01'); // Redirect to login page if not authenticated

		userHistoryLogout(req, res);

	} else {

	res.render('535');

}
	
console.log('reg.user', req.user);	
console.log('User had been successfully logout through "passport.use passport.use local3, new LocalStrategy" authenticated within the Session Id passport from dashboard!');

console.group('\n GET /user - request details:')
	console.log('_____________________________________ \.n');
	console.log('req.body:', req.body);
	console.log('req.params:', req.params);
	console.log('req.headers:', req.headers);
	console.log('req.isUnAuthenticated:', req.isUnauthenticated);
	console.log('_____________________________________ \.n');			
	
	console.log('_____________________________________ \.n');		

console.groupEnd();

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
	}),
	function (req, res) {

		// This function will be called only if authentication succeeds

		res.redirect('/dashboard_01');

	}

);

iVoteBallotApp.post(
	'/alabamaVoters_ForgotPasswordSignUp_01',
	passport.authenticate('local1', {
		successRedirect: '/alabamaVoters_ForgotPassword_01',
		failureRedirect: '/alabamaVoters_ForgotPasswordSignUp_01',
		failureFlash: true
	}
));

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
		const DMVUSResidentStatusSelection = req.body.DMVUSResidentStatusSelection;
		const DMVUSResidentStatusCategorySelection = req.body.DMVUSResidentStatusCategorySelection;
		const DMVUSResidentStatusSubjectSelection = req.body.DMVUSResidentStatusSubjectSelection;
		const DMVGradeSchool = req.body.DMVGradeSchool;
		const DMVGradeSchoolSelection = req.body.DMVGradeSchoolSelection;
		const DMVGradeSchoolYearSelection = req.body.DMVGradeSchoolYearSelection;
		const DMVHighSchool = req.body.DMVHighSchool;
		const DMVHighSchoolSelection = req.body.DMVHighSchoolSelection;
		const DMVHighSchoolYearSelection = req.body.DMVHighSchoolYearSelection;
		const DMVCollege = req.body.DMVCollege;
		const DMVDegreeSelection = req.body.DMVDegreeSelection;
		const DMVCategorySelection = req.body.DMVCategorySelection;
		const DMVSubjectSelection = req.body.DMVSubjectSelection;
		const DMVCollegeYearSelection = req.body.DMVCollegeYearSelection;
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

		console.log('The user\'s U.S. Resident Status is: ' + DMVUSResidentStatusSelection + '.');
		console.log('The user\'s U.S. Resident Status Category is: ' + DMVUSResidentStatusCategorySelection + '.');
		console.log('The user\'s U.S. Resident Status Category is: ' + DMVUSResidentStatusSubjectSelection + '.');

		console.log('The user\'s Elementary School name: ' + DMVGradeSchool + '.');
		console.log('Did the user graduated from grade school: ' + DMVGradeSchoolSelection + '.');
		console.log('What year did the user graudated from grade school name: ' + DMVGradeSchoolYearSelection + '.');

		console.log('The user\'s High School school name: ' + DMVHighSchool + '.');
		console.log('Did the user graduated from high school: ' + DMVHighSchoolSelection + '.');
		console.log('What year did the user graudated from high school name: ' + DMVHighSchoolYearSelection + '.');

		console.log('The user\'s college or university or Trade School name is:' + DMVCollege + '.');
		console.log('What is the user\'s degree:' + DMVDegreeSelection + '.');
		console.log('What is the user\'s degree category:' + DMVCategorySelection + '.');
		console.log('What is the user\'s degree subject:' + DMVSubjectSelection + '.');
		console.log('What year did the user graudated from College or University or Trade School name: ' + DMVCollegeYearSelection + '.');

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
			DMVUSResidentStatusSelection,
			DMVUSResidentStatusCategorySelection,
			DMVUSResidentStatusSubjectSelection,
			DMVGradeSchool,
			DMVGradeSchoolSelection,
			DMVGradeSchoolYearSelection,
			DMVHighSchool,
			DMVHighSchoolSelection,
			DMVHighSchoolYearSelection,
			DMVCollege,
			DMVDegreeSelection,
			DMVCategorySelection,
			DMVSubjectSelection,
			DMVCollegeYearSelection,
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
			`INSERT INTO alabamaDMV_Commission_01 (DMVPhoto, DMVFirstName, DMVMiddleName, DMVLastName, DMVSuffix, DMVDateOfBirth, DMVBirthSex, DMVGenderIdentity, DMVRace, DMVUSResidentStatusSelection, DMVUSResidentStatusCategorySelection, DMVUSResidentStatusSubjectSelection, DMVGradeSchool, DMVGradeSchoolSelection, DMVGradeSchoolYearSelection, DMVHighSchool, DMVHighSchoolSelection, DMVHighSchoolYearSelection, DMVCollege, DMVDegreeSelection, DMVCategorySelection, DMVSubjectSelection, DMVCollegeYearSelection, DMVSSN, DMVEmail, DMVConfirmEmail, DMVPhoneNumber, DMVAddress, DMVUnitType, DMVUnitTypeNumber, DMVCountrySelection, DMVStateSelection, DMVCountySelection, DMVCitySelection, DMVZipSelection, DMVIdType, DMVIdTypeNumber, IvoteBallotIdIdentifierCode, ConfirmIvoteBallotIdIdentifierCode, Password, ConfirmPassword, Temporary_Password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,

			[Buffer.from(photoFileData), newUser.DMVFirstName, newUser.DMVMiddleName, newUser.DMVLastName, newUser.DMVSuffix, newUser.DMVDateOfBirth, newUser.DMVBirthSex, newUser.DMVGenderIdentity, newUser.DMVRace, newUser.DMVUSResidentStatusSelection, newUser.DMVUSResidentStatusCategorySelection, newUser.DMVUSResidentStatusSubjectSelection, newUser.DMVGradeSchool, newUser.DMVGradeSchoolSelection, newUser.DMVGradeSchoolYearSelection, newUser.DMVHighSchool, newUser.DMVHighSchoolSelection, newUser.DMVHighSchoolYearSelection, newUser.DMVCollege, newUser.DMVDegreeSelection, newUser.DMVCategorySelection, newUser.DMVSubjectSelection, newUser.DMVCollegeYearSelection, newUser.DMVSSN, newUser.DMVEmail, newUser.DMVConfirmEmail, newUser.DMVPhoneNumber, newUser.DMVAddress, newUser.DMVUnitType, newUser.DMVUnitTypeNumber, newUser.DMVCountrySelection, newUser.DMVStateSelection, newUser.DMVCountySelection, newUser.DMVCitySelection, newUser.DMVZipSelection, newUser.DMVIdType, newUser.DMVIdTypeNumber, newUser.IvoteBallotIdIdentifierCode, newUser.ConfirmIvoteBallotIdIdentifierCode, newUser.Password, newUser.ConfirmPassword, newUser.Temporary_Password], (err) => {


				if (err) {
					console.error(err);
					req.flash('error', 'An syntax error has occurred when you have entered your data information into the input field that is link to our iVoteBallot database submission that cause our 500 error message display onto your device screen.');
					console.log('An syntax error has occurred when the user have entered his/her data information into the input field that is link our iVoteBallot database submission that cause our 500 error message display onto your device screen.');
					res.render('500');

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

iVoteBallotApp.post('/alabamaVoters_ForgotPasswordSignUp_01',

	async (req, res) => {

		const DMVEmail = req.user.DMVEmail;
		//const userIvoteBallotIdIdentifierCode = req.body.userIvoteBallotIdIdentifierCode;
		const Password = req.body.Password;
		const ConfirmPassword = req.body.ConfirmPassword;

		console.log('These are the request body' + req.body);
		console.log('The user\'s email is: ' + req.body.DMVEmail + '.');

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
				res.render('alabamaVoters_ForgotPasswordSignUp_01');

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
					res.render('535');
					console.log('The nodemailer user could not be authenticated.');

				}
			});
		}
	});
});


iVoteBallotApp.post('/alabamaVoters_ForgotPassword_01', (req, res) => {
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
			res.render('alabamaVoters_ForgotPassword_01');
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
						subject: `The User Reset Password Requests - iVoteBallot Online Voter Reset Password Not Yet Verified`,
						html: `	
		
						<p>iVoteBallot has received an user reset password requests:</p>

						<p>The User Reset Password Requests: ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName}, has been sent a temporary password for an iVoteBallot account verification.</p> 
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

						<p>Thank you for choosing iVoteBallot to complete your reset password process, please use the following temporary password:<p>

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
					res.render('535');
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
			req.flash('error', 'Your new password does not match to your new confirm password.');

		} else {

			db1.run('UPDATE alabamaDMV_Commission_01 SET Password = ?, ConfirmPassword = ? WHERE DMVEmail = ?',
				[

					passwordHashed,
					confirmPasswordHashed,
					DMVEmail

				],
				(err) => {

					if (err) {
						console.log('alabamaVoters_CreatePasswords_01\'s POST have created either an user login authentication error or syntax POST issues: ' + err.message);
						res.render('500');

					} else {
						console.log('The user have successfully either created or updated he or her password.')
						res.redirect('/alabamaVoters_LogIn_01');					

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
						// Get current date and time
						const passwordChangeDateTime = new Date().toLocaleString();

						/*
						Sarai Hannah Ajai has written her JavaScript programmatic codes for creating a usable 'transporter' constant object by ways of
						using the default SMTP transporter nodemailer API library.
						*/

						const mailOptions_01 = {
							from: 'electionassureexpert@ivoteballot.com',
							to: req.body.DMVEmail,
							bcc: 'cio_developmenttest@ivoteballot.com',
							subject: `Password Changed`,
							html: `
								
								<div style="text-align: center;">
									<img src="cid:iVoteBallotLogo" style="width: 85px; height: auto; display: inline-block;" />
								</div>						
					
								<p>Dear ${req.user.DMVFirstName} ${req.user.DMVMiddleName} ${req.user.DMVLastName},</p>
				
								<p>Your iVoteBallot account password has been recently changed at ${passwordChangeDateTime}.</p>
															
								<p>
									If you did not initiate this password change, please contact iVoteBallot customer care services immediately 
									at our email address, customercare@ivoteballot.com
								</p>

								<p>
									For your iVoteBallot security, ${req.user.DMVFirstName} ${req.user.DMVMiddleName}, we automatically send this
									alert to your primary email address, as a notification.
								</p>											
													
								<p>Respectfully, </p>	
				
								<p>iVoteBallot's Customer Care Team </p>									
								
								`,

							attachments: [
								{
									filename: 'iVoteBallotLogo.png',
									path: imagePath,
									cid: 'iVoteBallotLogo'

								}
							],

						};

						/*
						Sarai Hannah Ajai has written her JavaScript programmatic codes to send an user test email to AccouNetrics' customercare@accounetrics.com
						email account with nodemailer defined transporter object.
						*/

						transporter.sendMail(mailOptions_01, (error, info) => {
							if (error) {
								console.log(error);
								res.send('error');
							} else {
								console.log('Email Sent - mailOptions_01: ' + info.response);
								res.send('success!');
							}
						});

					} else {
						res.render('535');
						console.log('The nodemailer user could not be authenticated.');

					}

				}

			);

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




