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

        ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
        userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
        userDMVFirstName VARCHAR (100) NOT NULL, 
        userDMVMiddleName VARCHAR (100) NOT NULL, 
        userDMVLastName VARCHAR(100) NOT NULL,
        userDMVSuffix VARCHAR(25) NOT NULL,
        userDMVDateOfBirth VARCHAR(50) NOT NULL,
        userDMVBirthSex VARCHAR(25) NOT NULL,
        userDMVGenderIdentity VARCHAR(25) NOT NULL,
        userDMVRace VARCHAR(250) NOT NULL,
        userDMVSSN VARCHAR(25) NOT NULL,
        userDMVEmail VARCHAR(150) NOT NULL,
        userDMVConfirmEmail VARCHAR(150) NOT NULL,
        userDMVPhoneNumber VARCHAR(50) NOT NULL,
        userDMVAddress VARCHAR(200) NOT NULL,
        userDMVUnitType VARCHAR(100) NOT NULL,
        userDMVUnitTypeNumber VARCHAR(15) NOT NULL,
        userDMVCountrySelection VARCHAR(100) NOT NULL,
        userDMVStateSelection VARCHAR(100) NOT NULL,
        userDMVCountySelection VARCHAR(100) NOT NULL,
        userDMVCitySelection VARCHAR(100) NOT NULL,
        userDMVZipSelection VARCHAR(25) NOT NULL,
        userDMVIdType VARCHAR(100) NOT NULL,
        userDMVIdTypeNumber VARCHAR(25) NOT NULL,
        userIvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
        userConfirmIvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
		userPassword VARCHAR(50) NOT NULL,
		userConfirmPassword VARCHAR(50) NOT NULL,
		userTemporary_Password VARCHAR(50) NOT NULL
        
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
	The JavaScript codes language sets up a login2, LocalStrategy for Passport, which is a popular
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
	'login1',
	new LocalStrategy({
	usernameField: 'userDMVEmail',
	passwordField: 'userIvoteBallotIdIdentifierCode',
	passReqToCallback: true // To allow request object to be passed to callback
},   
	async (req, userDMVEmail, userIvoteBallotIdIdentifierCode, done) => {
		
		console.log('The iVoteBallot\'s user\'s passport.use(login1) email (\'userDMVEmail\') as: ' + userDMVEmail);
		console.log('The iVoteBallot\'s user\'s passport.use(login1) password (\'userIvoteBallotIdIdentifierCode\') as: ' + userIvoteBallotIdIdentifierCode );	

		if (!userIvoteBallotIdIdentifierCode) {
			console.log('The user\'s iVoteBallot Id Identifier Code entered into the input field is: ' + userIvoteBallotIdIdentifierCode + '.');
			console.log('The user\'s iVoteBallot Id Identifier Code does not match to the Session cookie id\'s database.');
			return done (null, false, { message: 'Your iVoteBallot Id Identifier Code does not match to our iVoteballot\'s database.' });

		} else 
		
			await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE userDMVEmail = ?`, userDMVEmail, (err, row) => {
			
				if (err) {
					return done(err);
				}

				if (!row) {
					return done (null, false, { message: 'You have entered the incorrect email address.'});
				}
				
				bcrypt.compare(userIvoteBallotIdIdentifierCode, row.userIvoteBallotIdIdentifierCode, (err, result) => {
				
				if (err) {
					return done(err);
				}
				if (!result) {
					console.log('The user\'s iVoteBallot Id Identifier Code was entered incorrectly.' )
					return done(null, false, { message: 'You have entered the incorrect iVoteBallot Id Identifier Code.'});
				}
				//return done(null, row);

					return done(null, {	id: row.id, userDMVFirstName: row.userDMVFirstName, userDMVMiddleName: row.userDMVMiddleName, userDMVLastName: row.userDMVLastName, userDMVSuffix: row.userDMVSuffix, userDMVDateOfBirth: row.userDMVDateOfBirth, userDMVBirthSex: row.userDMVBirthSex, userDMVGenderIdentity: row.userDMVGenderIdentity, userDMVRace: row.userDMVRace, userDMVSSN: row.userDMVSSN, userDMVEmail: row.userDMVEmail, userDMVConfirmEmail: row.userDMVConfirmEmail, userDMVPhoneNumber: row.userDMVPhoneNumber, userDMVAddress: row.userDMVAddress, userDMVUnitType: row.userDMVUnitType, userDMVUnitTypeNumber: row.userDMVUnitType, userDMVCountrySelection: row.userDMVCountrySelection, userDMVStateSelection: row.userDMVStateSelection, userDMVCountySelection: row.userDMVCountySelection, userDMVCitySelection: row.userDMVCitySelection, userDMVZipSelection: row.userDMVZipSelection, userDMVIdType: row.userDMVIdType, userDMVIdTypeNumber: row.userDMVIdTypeNumber, userIvoteBallotIdIdentifierCode: row.userIvoteBallotIdIdentifierCode, userConfirmIvoteBallotIdIdentifierCode: row.userConfirmIvoteBallotIdIdentifierCode, userPassword: row.userPassword, userConfirmPassword: row.userDMVConfirmEmail, userTemporary_Password: row.userTemporary_Password, isAuthenticated: true });

			});                
		});       
	}
));
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
passport.deserializeUser(function(id, done) {
    console.log('Deserializing users numbers...')
    console.log(id);   
    db1.get('SELECT * FROM alabamaDMV_Commission_01 WHERE id = ?', id, (err, row) => {

      if (err) { 
        return done(err); 
    }
      if (!row) { 
        return done(null, false); 
    }
      return done(null, {
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
				
		isAuthenticated: true });	
		
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
        res.render('alabamaDMV_Commission_01');
    } else {
        res.render('500')
       
        console.log('The User have not been successfully authenticated within the passport.user login1 LocalStrategy through the Session Cookie Id from the SQLite3 database for which is known as, serialization.');
    }
});

/* -------------------------- The ending of the alabamaDMV_Commission_01 section ----------------------------- */

/* -------------------------- The beginning of the alabamaVoters_SignUp_01 section ----------------------------- */

const redirectLogin = (req, res, next) => {
    if(req.session.userId) {
        res.redirect('/alabamaVoters_LogIn_01');
    } else {
        next();
    }
}

const alabamaVoters_SignUp_01_RouteGet = ('/alabamaVoters_SignUp_01', (req, res) => {
    if (req.isAuthenticated) {
        console.log(req.user);
        console.log(req.session);
        console.log('User had been successfully authenticated within the Session through the passport from dashboard!');
        res.render('alabamaVoters_LogIn_01', { firstName: req.user.firstName, lastName: req.user.lastName, email: req.user.email});
    } else if (req.isUnauthenticated) {
        res.render('/alabamaVoters_SignUp_01')
        console.log('User is not successfully authenticated within the session through the passport from dashboard!');
    }
});
/*
const alabamaVoters_SignUp_01_RouteGet = ('/alabamaVoters_SignUp_01', redirectLogin, (req, res) => {

	console.log(req.session);
	console.log('isUnauthenticated: ', req.isUnauthenticated);
	// To check, if user is already been authenticated.
	if (req.isUnauthenticated) {
		res.render('alabamaVoters_SignUp_01');
		console.log('The user have not successfully logged into the alabamaVoters_SignUp_01 webpage in order to create password and confirm password.');

	} else if 
		(req.session.isAuthenticated) {
			res.redirect('alabamaVoters_LogIn_01');
			console.log('The user have successfully logged into the alabamaVoters_SignUp_01 webpage in order to create password and confirm password.');

	} else {
		res.render('404');
	}

});
*/

const alabamaVoters_SignUp_01_RoutePost = (
	'/alabamaVoters_SignUp_01',
	passport.authenticate('login1', {
		successRedirect: 'alabamaVoters_LogIn_01',
		failureRedirect: '/alabamaVoters_SignUp_01',
		failureFlash: true
	})
);

/* -------------------------- The ending of the alabamaVoters_SignUp_01 section ----------------------------- */

/* -------------------------- The beginning of All SQLite3 databases section ----------------------------- */

const alabamaDMV_Commission_01_CreateDatabase = ('/alabamaDMV_Commission_01',
	async (req, res) => { 		   

		const userDMVFirstName = req.body.userDMVFirstName;       
		const userDMVMiddleName = req.body.userDMVMiddleName; 
		const userDMVLastName = req.body.userDMVLastName;        
		const userDMVSuffix = req.body.userDMVSuffix;
		const userDMVDateOfBirth = req.body.userDMVDateOfBirth;
		const userDMVBirthSex = req.body.userDMVBirthSex;
		const userDMVGenderIdentity = req.body.userDMVGenderIdentity;
		const userDMVRace = req.body.userDMVRace;
		const userDMVSSN = req.body.userDMVSSN;
		const userDMVEmail = req.body.userDMVEmail;
		const userDMVConfirmEmail = req.body.userDMVConfirmEmail;
		const userDMVPhoneNumber = req.body.userDMVPhoneNumber;
		const userDMVAddress = req.body.userDMVAddress;
		const userDMVUnitType = req.body.userDMVUnitType;
		const userDMVUnitTypeNumber = req.body.userDMVUnitTypeNumber;
		const userDMVCountrySelection = req.body.userDMVCountrySelection;
		const userDMVStateSelection = req.body.userDMVStateSelection;
		const userDMVCountySelection = req.body.userDMVCountySelection;
		const userDMVCitySelection = req.body.userDMVCitySelection;
		const userDMVZipSelection = req.body.userDMVZipSelection;
		const userDMVIdType = req.body.userDMVIdType;
		const userDMVIdTypeNumber = req.body.userDMVIdTypeNumber;
		const userIvoteBallotIdIdentifierCode = req.body.userIvoteBallotIdIdentifierCode;
		const userConfirmIvoteBallotIdIdentifierCode = req.body.userConfirmIvoteBallotIdIdentifierCode;
		const userPassword = req.body.userPassword;
		const userConfirmPassword = req.body.userConfirmPassword;
		const userTemporary_Password = req.body.userTemporary_Password;

		console.log(req.body);

		console.log('The user\'s first name: ' + userDMVFirstName + '.');
		console.log('The user\'s middle name is: ' + userDMVMiddleName + '.');
		console.log('The user\'s last name is: ' + userDMVLastName + '.');
		console.log('The user\'s suffix is: ' + userDMVSuffix + '.');
		console.log('The user\'s date of birth is: ' + userDMVDateOfBirth + '.');
		console.log('The user\'s birth sex is: ' + userDMVBirthSex + '.');
		console.log('The user\'s gender identity is: ' + userDMVGenderIdentity + '.');
		console.log('The user\'s race is: ' + userDMVRace + '.');
		console.log('The user\'s SSN is: ' + userDMVSSN + '.');
		console.log('The user\'s email is: ' + userDMVEmail + '.');
		console.log('The user\'s confirm email is: ' + userDMVConfirmEmail + '.');
		console.log('The user\'s phone number is: ' + userDMVPhoneNumber + '.');
		console.log('The user\'s address is: ' + userDMVAddress + '.');
		console.log('The user\'s unit type is: ' + userDMVUnitType + '.');
		console.log('The user\'s unit type number is: ' + userDMVUnitTypeNumber + '.');
		console.log('The user\'s country selection is: ' + userDMVCountrySelection + '.');
		console.log('The user\'s state selection is: ' + userDMVStateSelection + '.');
		console.log('The user\'s county selection is: ' + userDMVCountySelection + '.');
		console.log('The user\'s city selection is: ' + userDMVCitySelection + '.');
		console.log('The user\'s state selection is: ' + userDMVStateSelection + '.');
		console.log('The user\'s zip code selection is: ' + userDMVZipSelection + '.');
		console.log('The user\'s Id type is: ' + userDMVIdType + '.');
		console.log('The user\'s Id type number is: ' + userDMVIdTypeNumber + '.');
		console.log('The user\'s iVoteBallot Id Identifier Code is: ' + userIvoteBallotIdIdentifierCode + '.');
		console.log('The user\'s confirm iVoteBallot Id Identifier Code is: ' + userConfirmIvoteBallotIdIdentifierCode + '.');
		console.log('The user\'s password is: ' + userPassword + '.');
		console.log('The user\'s confirm password is: ' + userConfirmPassword + '.');
		console.log('The user\'s temporary password is: ' + userTemporary_Password + '.');

		console.log(req.session);	

		// The user's input dat information validation
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
			!userDMVUnitType ||
			
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
		
		if (userIvoteBallotIdIdentifierCode !== userConfirmIvoteBallotIdIdentifierCode) {
			req.flash('error', 'The user\'s iVoteballot Id Identifier Code does not match to the user\'s confirm iVoteballot Id Identifier Code for which, you have entered into the input fields.');			
			return res.redirect('/alabamaDMV_Commission_01');        

		} else {
			req.flash('success', 'The user\' iVoteBallot Id Identifier Code have successfully matched to his or her iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login1, LocalStrategy through the session cookie id.');
			console.log('The user\' iVoteBallot Id Identifier Code have successfully matched to his or her confirm iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login1, LocalStrategy through the session cookie id.');
		}   	
		
		// To hash the user's userIvoteBallotIdIdentifierCode input field using bcryption.
		const salt = await bcrypt.genSalt(13);
		const userIvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.userIvoteBallotIdIdentifierCode, salt);

		// To hash the user's userIvoteBallotIdIdentifierCode input field using bcryption.	
		const userConfirmIvoteBallotIdIdentifierCodeHashed = await bcrypt.hash(req.body.userConfirmIvoteBallotIdIdentifierCode, salt);

		const newUser = {

			userDMVFirstName,
			userDMVMiddleName, 
			userDMVLastName,
			userDMVSuffix,
			userDMVDateOfBirth, 
			userDMVBirthSex,
			userDMVGenderIdentity,
			userDMVRace, 
			userDMVSSN, 
			userDMVEmail,
			userDMVConfirmEmail,
			userDMVPhoneNumber,
			userDMVAddress,
			userDMVUnitType,
			userDMVUnitTypeNumber,
			userDMVCountrySelection,
			userDMVStateSelection,
			userDMVCountySelection,
			userDMVCitySelection,
			userDMVZipSelection,
			userDMVIdType,
			userDMVIdTypeNumber,
			userIvoteBallotIdIdentifierCode: userIvoteBallotIdIdentifierCodeHashed,
			userConfirmIvoteBallotIdIdentifierCode: userConfirmIvoteBallotIdIdentifierCodeHashed,
			userPassword,
			userConfirmPassword,
			userTemporary_Password

		}

		const sqlInsert = 'INSERT INTO alabamaDMV_Commission_01 (userDMVFirstName, userDMVMiddleName, userDMVLastName, userDMVSuffix, userDMVDateOfBirth, userDMVBirthSex, userDMVGenderIdentity, userDMVRace, userDMVSSN, userDMVEmail, userDMVConfirmEmail, userDMVPhoneNumber, userDMVAddress, userDMVUnitType, userDMVUnitTypeNumber, userDMVCountrySelection, userDMVStateSelection, userDMVCountySelection, userDMVCitySelection, userDMVZipSelection, userDMVIdType, userDMVIdTypeNumber, userIvoteBallotIdIdentifierCode, userConfirmIvoteBallotIdIdentifierCode, userPassword, userConfirmPassword, userTemporary_Password) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';	
		
		const params = [newUser.userDMVFirstName, newUser.userDMVMiddleName, newUser.userDMVLastName, newUser.userDMVSuffix, newUser.userDMVDateOfBirth, newUser.userDMVBirthSex, newUser.userDMVGenderIdentity, newUser.userDMVRace, newUser.userDMVSSN, newUser.userDMVEmail, newUser.userDMVConfirmEmail, newUser.userDMVPhoneNumber, newUser.userDMVAddress, newUser.userDMVUnitType, newUser.userDMVUnitTypeNumber, newUser.userDMVCountrySelection, newUser.userDMVStateSelection, newUser.userDMVCountySelection, newUser.userDMVCitySelection, newUser.userDMVZipSelection, newUser.userDMVIdType, newUser.userDMVIdTypeNumber, newUser.userIvoteBallotIdIdentifierCode, newUser.userConfirmIvoteBallotIdIdentifierCode, newUser.userPassword, newUser.userConfirmPassword, newUser.userTemporary_Password];
		
		db1.run(sqlInsert, params, function (err, result) {	
			if (err) { 
				return next(err); 
			}				
			
			if (err) {
				res.redirect('/500');
				req.flash('error', 'An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.');
				console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
							
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
				from: req.body.userDMVEmail,
				to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
				subject: `CEO/Election Assure Experts' Manager | An iVoteBallot's employee have manually entered, a new iVoteballot's user sucessfully into the iVoteballot database.`,  
				html: ` 
				
					<p>The following user have been successfully entered into the iVoteBallot database by an iVoteBallot's Election Assure Experts' employee:</p>
					<ul>
						<li>
							Name: ${req.body.userDMVFirstName} ${req.body.userDMVMiddleName} ${req.body.userDMVLastName}
						</li>
						<li>
							Email: ${req.body.userDMVEmail}
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
				to: req.body.userDMVEmail, 
				subject: `Notification from iVoteBallot's Election Assure Experts`,			
				html: 			
					`			
					<p>Dear ${req.body.userDMVFirstName} ${req.body.userDMVMiddleName} ${req.body.userDMVLastName},</p>	
								
					<p>
						
					</p>
					
					<p>
						
					</p>

					Thank you for choosing iVoteBallot, and we hope you have a great day, 
					${req.body.userDMVFirstName}.
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

	alabamaVoters_SignUp_01_RouteGet,
	alabamaVoters_SignUp_01_RoutePost


	
}
  

