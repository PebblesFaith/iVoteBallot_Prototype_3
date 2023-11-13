/*
	The purpose of this JavaScript coded language is to require the "alabamaDMV_Commission_01_Router" 
	module from the "../models/alabamaDMV_Commission_01_Router" file. This indicates that the module
	is necessary for the execution of the current const alabamaDMV_Commission_01_Controller script, and 
	allows access to the functions and properties of the "alabamaDMV_Commission_01_Router". The
	alabamaDMV_Commission_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles user contact us form submissions.
*/
const alabamaDMV_Commission_01_Router = require('../models/alabamaDMV_Commission_01_Router');

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
	The given Javascript coded language imports the 'nodemailer' library which is used for
	sending email within the iVoteBallot web application. The 'require' function is a
	built-in method in Node.js that is used to load modules or files. The 'const' keyword
	declares a constant variable 'nodemailer' that holds the reference to the loaded 
	'nodemailer' library.
*/
const nodemailer = require('nodemailer');

const path = require('path');

/*
	This JavaScript coded language checks, if the environment variable "NODE_ENV" is not set
	to "production". If it is not set to production, it loads the "dotenv" module to load 
	environment variables from a ".env" file into the process environment. This is commonly
	used in a development environments to keep sensitive information like API keys and 
	passwords out of code GitHub repository.
*/
if (process.env.NODE_ !== 'production') {
	require('dotenv').config();
}

/*
	The JavaScript coded language defines four constants by assigning values retrieved from 
	an environment variables. These constants are used within the iVoteBallot web application
	that requires session management, and are used to configure the behavior of session 
	handling, including the maximum age of these sessions, the session names, the encryption and etc
	keys used to secure sessions data. And, the IONOS_SECRET_KEY constant is used for accessing
	sensitive data or services protected by an API key or other credentials.
*/
const SESSION_NAME = process.env.SESSION_NAME;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;
const SIGNUPSESSION = process.env.SIGNUPSESSION;

/*
	This JavaScript coded language utilizes the passport.js and the LocalStrategy libraries
	for user authentication. It specifies an user's email and password fields required for 
	login, and allows the request object to be passed to the callback function. And, this
	code queries a database to validate user credentials, and uses Bcrypt library for secure 
	user's password comparison. If the user's email or password is incorrect, an appropriate
	error message is returned to the user device screen.
*/
passport.use(
    'login1',
    new LocalStrategy({
    usernameField: 'userDMV_email',
    passwordField: 'userCommission_IvoteBallotIdIdentifierCode',
    passReqToCallback: true // To allow request object to be passed to callback
},   
    async (req, userDMV_email, userCommission_IvoteBallotIdIdentifierCode, done) => {
        console.log('The passport.use(login1) user\'s DMV email is: ' + userDMV_email);
        console.log('The passport.use(login1) user\'s Commission iVoteBallot Id Identifier Code is: ' + userCommission_IvoteBallotIdIdentifierCode);
        
        if (!userCommission_IvoteBallotIdIdentifierCode) {
            console.log('The user\'s Commission iVoteBallot Id Identifier Code enter into the login field:' + userCommission_IvoteBallotIdIdentifierCode + '.');            
            console.log('The user\'s passport.use LocalStrategy for the userCommission_IvoteBallotIdIdentifierCode (password) does not match to the session pass-through SQLite3 database within the \'votersDMV_CommissionIvoteballot\' for the column \'userCommission_IvoteBallotIdIdentifierCode\'.');
            return done(null, false, { message: 'Your iVoteBallot Id Identifier Code entered does not match to the iVoteBallot system.'})
            
        } else 
         await db1.get(`SELECT * FROM users WHERE userDMV_email = ?`, userDMV_email,(err, row) => {
            if (err) {
                return done(err);
            }
          
            if (!row) {
                return done(null, false, { message: 'You have entered the incorrect DMV email address.'});
            }
            
             bcrypt.compare(userCommission_IvoteBallotIdIdentifierCode, row.userCommission_IvoteBallotIdIdentifierCode, (err, result) => {
               
                if (err) {
                    return done(err);
                }
                if (!result) {
                    return done(null, false, { message: 'You have entered the incorrect iVoteBallot Id Identifier Code. Please try again or contact our iVoteBallot Customer Care Term.'});
                }
                //return done(null, row);

                return done(null, { 
					id: row.id, 					
					userDMV_FirstName: row.userDMV_FirstName, 
					userDMV_MiddleName: row.userDMV_MiddleName, 
					userDMV_LastName: row.userDMV_LastName, 

					userDMV_email: row.userDMV_email, 
					
					isAuthenticated: true });

            });                
        });       
    }
));


/*
The code creates a new instance of the SQLite3 Database using the sqlite3 module in JavaScript. 
The first argument passed to the constructor is the name of the database file to create or 
connect to. In this case, the name of the database file is 'users.db'. If there is an error
during the database connection, the error message will be logged to the console with an 
appropriate message. If the connection is successful, a message will be logged to the console
indicating that the connection has been established successfully. The created instance of the 
SQLite3 database can be used to perform database operations such as inserting, updating, or
querying data.

This code is useful for developers who want to use a lightweight, serverless SQLite3 database
for their JavaScript application without the need for a separate server or installation process.
*/
const db1 = new sqlite3.Database('votersDMW_CommissionIvoteballot.db', err => {
    if (err) {
        console.log('Sarai Hannah Ajai\'s Developer has created the SQLite3 database connection from her JavaScript codes language which has a generated a database connection with an error message, as ' + err + '.');
    }else {
        console.log('Sarai Hannah Ajai\'s Developer has created the SQLite3 database connection from her JavaScript codes language which has a generated successfully database connection.');
    }
});

/*
	This JavaScript coded language creates a SQLite3 database table named "ContactUs_01" with
	11 columns: ID, userDate, userFirstName, userMiddleName, userLastName, userEmail, 
	userConfirmEmail, userQuestion, userConcern, userTextMessage, and userRandomAlphaNumeric. 
	And, the ID column is set, as the primary key with auto-incrementing integers. The other
	columns are set, as NOT NULL and have their own data types and size restrictions. The code
	uses the SQLite3 library and the db1 object; in order to serialize the creation of the table,
	and ensuring that the schemas code executes in the correct order. The code also includes
	error handling, with console.log statements that report whether the table was created
	successfully or if an error occurred.
*/
db1.serialize( () => {
	const sqlTable =  (`CREATE TABLE IF NOT EXISTS alabamaDMV_Commission_01 (
		ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
		userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
		userDMV_FirstName VARCHAR (100) NOT NULL, 
		userDMV_MiddleName VARCHAR (100) NOT NULL, 
		userDMV_LastName VARCHAR(100) NOT NULL,
		userDMV_Suffix VARCHAR(25) NOT NULL,
		userDMV_DateOfBirth VARCHAR(50) NOT NULL,
		userDMV_BirthSex VARCHAR(25) NOT NULL,
		userDMV_GenderIdentity VARCHAR(25) NOT NULL,
		userDMV_Race VARCHAR(250) NOT NULL,
		userDMV_SSN VARCHAR(25) NOT NULL,
		userDMV_Email VARCHAR(150) NOT NULL,
		userDMV_ConfirmEmail VARCHAR(150) NOT NULL,
		userDMV_PhoneNumber VARCHAR(50) NOT NULL,
		userDMV_Address VARCHAR(200) NOT NULL,
		userDMV_UnitType VARCHAR(100) NOT NULL,
		userDMV_UnitTypeNumber VARCHAR(15) NOT NULL,
		userDMV_CountrySelection VARCHAR(100) NOT NULL,
		userDMV_StateSelection VARCHAR(100) NOT NULL,
		userDMV_CountySelection VARCHAR(100) NOT NULL,
		userDMV_CitySelection VARCHAR(100) NOT NULL,
		userDMV_ZipSelection VARCHAR(25) NOT NULL,
		userDMV_IdType VARCHAR(100) NOT NULL,
		userDMV_IdTypeNumber VARCHAR(25) NOT NULL,
		userCommission_IvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
		userCommission_IvoteBallotIdCodeBcryptic VARCHAR(50) NOT NULL
		
	)`);
		
	db1.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Sarai Hannah Ajai\'s Developer has created the Sqlite3 database table which is programmatically coded with an error message: ' + error + '!');
		} else {
			console.log('Sarai Hannah Ajai\'s Developer has created the Sqlite3 database table which is programmatically coded successfully!');   
		}
	});        
});






/*
	The given JavaScript coded language exports a module with multiple components, including
	a router, Passport authentication functions for GET and POST requests, a database instance, 
	and a function to create a database for handling the contact us form submissions. These 
	components are intended for use in an iVoteBallot web application's contact us form feature 
	by ways of providing the necessary functionality for handling user input and storing his/her
	data information when exporting these components, as a module, they can be easily imported
	and utilized in other parts of the iVoteBallot web application.
*/
module.exports = {
	alabamaDMV_Commission_01_Router,
	
	db1,	
	
}
  





