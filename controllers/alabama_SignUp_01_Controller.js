/*
	The purpose of this JavaScript coded language is to require the "alabama_SignUp_01_Router" 
	module from the "../models/alabama_SignUp_01_Router" file. This indicates that the module
	is necessary for the execution of the current const alabama_SignUp_01_Controller script, and 
	allows access to the functions and properties of the "alabama_SignUp_01_Router" module. The
	alabama_SignUp_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles users sign up form submissions.
*/
const alabama_SignUp_01_Router = require('../models/alabama_SignUp_01_Router');

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
	users based on iVoteBallot ID Card Identifier Code and Alabama State Identification Card
	credentials stored in a session cookie, as opposed to using an external authentication
	services.
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
	handling, including the maximum age of these sessions, the session names, and the encryption
	keys used to secure sessions data. And, the IONOS_SECRET_KEY constant is used for accessing
	sensitive data or services protected by an API key or other credentials.
*/
const SESSION_NAME = process.env.SIGNUPSESSION;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;

const flash = require('express-flash');

/*
	This JavaScript coded language creates a connection to the SQLite3 database with the
	filename 'db_Alabama_SignUp'. And, the 'new' keyword is used to create a new instance
	of the 'sqlite3.Database' class. The code includes error handling, where if an error
	occurs during the connection process, an error message is logged to the console, 
	otherwise, a success message is logged. This code is used in an iVoteBallot web applications; 
	in order to interact with SQLite3 databases, which are lightweight and commonly used for
	local back-end storage.
*/
const db2 = new sqlite3.Database('alabamaIvoteballotDatabase.db', err => {
    if (err) {
        console.log('Developer has created the constant db1 SQLite3 alabamaDMVDatabase database connection from her JavaScript codes language which has a generated an error, as ' + err + '.');
    }else {
        console.log('Developer has created the constant db1 SQLite3 alabamaDMVDatabase database connection from her JavaScript codes language which has a generated successfully connection.');
    }
});

/*
	This JavaScript coded language creates a SQLite3 database table named "alabama_SignUp_01" with
	13 columns: ID, userDate, userRegistrationCode, userIdType, userIdTypeNumber, userConfirmIdTypeNumber, 
	userEmail, userConfirmEmail, userPassword, userConfirmPassword, userPhoneNumber and userRandomAlphaNumeric. 
	And, the ID column is set, as the primary key with auto-incrementing integers. The other
	columns are set, as NOT NULL and have their own data types and size restrictions. The code
	uses the SQLite3 library and the db1 object; in order to serialize the creation of the table,
	and ensuring that the schemas code executes in the correct order. The code also includes
	error handling, with console.log statements that report whether the table was created
	successfully or if an error occurred.	
*/

db2.serialize( () => {
	const sqlTable =  (`CREATE TABLE IF NOT EXISTS alabamaIvoteballotDatabase (
		ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
		userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
		userDMV_FirstName VARCHAR (100) NOT NULL, 
		userDMV_MiddleName VARCHAR (100) NOT NULL,
		userDMV_LastName VARCHAR (100) NOT NULL,  
		userDMV_Suffix VARCHAR (50) NOT NULL, 
		userDMV_DateOfBirth VARCHAR (25) NOT NULL, 
		userDMV_BirthSex VARCHAR (25) NOT NULL,
		userDMV_GenderIdentity VARCHAR (50) NOT NULL, 
		userDMV_Race VARCHAR (50) NOT NULL, 
		userDMV_SSN VARCHAR (25) NOT NULL, 
		userDMV_EmailAddress VARCHAR (100) NOT NULL, 
		userDMV_Address VARCHAR (150) NOT NULL, 
		userDMV_AddressUnitType VARCHAR (50) NOT NULL,
		userDMV_UnitTypeNumber VARCHAR (100) NOT NULL,
		userDMV_Country VARCHAR (200) NOT NULL,
		userDMV_State VARCHAR (100) NOT NULL,
		userDMV_County VARCHAR (100) NOT NULL,
		userDMV_City VARCHAR (100) NOT NULL,
		userDMV_ZipCode VARCHAR (25) NOT NULL,
		userDMV_AlabamaStateIdType VARCHAR (100) NOT NULL,
		userDMV_AlabamaIdCardNumber VARCHAR (25) NOT NULL,
		userDMV_IvoteballotIdIdentifierCode VARCHAR (75) NOT NULL,
		userRegistrationCode VARCHAR (50) NOT NULL,
		userIdType VARCHAR (100) NOT NULL,
		userIdTypeNumber VARCHAR (25) NOT NULL,
		userConfirmIdTypeNumber VARCHAR (25) NOT NULL,
		userEmail VARCHAR (150) NOT NULL,
		userConfirmEmail VARCHAR (150) NOT NULL,
		userPassword VARCHAR (100) NOT NULL,
		userConfirmPassword VARCHAR (100) NOT NULL,
		userPhoneNumber VARCHAR (25) NOT NULL,
		userTemporaryPassword VARCHAR (100) NOT NULL

	)`);
		
	db2.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Developer created the SQLite3 alabamaDMVDatabase database table is not programmatically coded with an: ' + error + '!');
		} else {
			console.log('Developer has created the Sqlite3 alabamaDMVDatabase database table which was programmatically coded successfully!');   
		}
	});        
});

/*
	The passport.use Local Strategy (login1) checks, if the front-end users, 'userDMV_AlabamaCardNumber' and
	'userDMV_IvoteballotIdIdentifierCode' data information exists onto the SQLite3, 'alabamaIvoteballotDatabase'
	file to which passes the front-end users data information through the SESSION COOKIE for the front-end users' 
	authentication permissions for which must be match to the SQLite3, database 'userDMV_AlabamaCardNumber' and
	'userDMV_IvoteballotIdIdentifierCode' columns. If the front-end users' passport.use Local Strategy (login1)
	does not match the SESSION COOKIE authentications than the SESSION COOKIE will not authenticate the front-end
	users data information.	
*/
passport.use(
    'login2',
    new LocalStrategy({
	usernameField: 'userDMV_AlabamaIdCardNumber',
	passwordField: 'userDMV_IvoteballotIdIdentifierCode',

    passReqToCallback: true // To allow request object to be passed to callback
},   

async (req, userDMV_AlabamaIdCardNumber, userDMV_IvoteballotIdIdentifierCode, done) => {
	console.log('The user passport.use(login2) DMV\s Alabama Card Number is: ' + userDMV_AlabamaIdCardNumber);
	console.log('The user passport.use(login2) DMV assiged iVoteBallot Id Identifier Code: ' + userDMV_IvoteballotIdIdentifierCode);

	if (!userDMV_IvoteballotIdIdentifierCode) {
		console.log('The user\s IvoteBallot Id Identifier Code entered into the sign up field is: ' + userDMV_IvoteballotIdIdentifierCode + '.');
		console.log('The user\s passport.use LocalStrategy IvoteBallot Id Identifier Code from the session Sign Up database does not match to the user\s entered field IvoteBallot Id Identifier Code.');
		
		return done(null, false, { message: 'Your entered iVoteBallot Id Identifier Code does not match to the iVoteBallot Id Identifier Code within our database. Please try again.'});
	
	} else 
		await db2.get(`SELECT * FROM users WHERE userDMV_AlabamaIdCardNumber = ?`, userDMV_AlabamaIdCardNumber, (err, row) => {

			if (err) {
				return done(err);
			}
	
			if (!row) {
				return done(null, false, { message: 'You have entered the incorrect Alabama Identification Card Number.'});
			}

			bcrypt.compare(userDMV_IvoteballotIdIdentifierCode, row.userDMV_IvoteballotIdIdentifierCode, (err, result) => {
		   
				if (err) {
					console.log('The front-end users\s Alabama DMV iVoteBallot Id Identifier Code from the passport.use LocalStrategy that passes through the Sign Up session cookie and, the user\s iVoteBallot ID Identifier Code entered into the Sign Up field have successfully matched to the Alabama DMV database');
					return done(err);
				}
	
				if (!result) {
					console.log('The front-end users\s Alabama DMV iVoteBallot ID Identifier Code have not successfully matched to the passport.use LocalStrategy that passes through the Sign Up session cookie Alabama DMV database');
					return done(null, false, { message: 'You have entered the incorrect Alabama\s IvoteBallot Id Identifier Code.'});
				}
				//return done(null, row);
	
				return done(null, {
					id: row.id,
					userDMV_FirstName: row.userDMV_FirstName,					 
					userDMV_MiddleName: row.userDMV_MiddleName,
					userDMV_LastName: row.userDMV_LastName, 
					userDMV_Suffix: row.userDMV_Suffix,
					userDMV_DateOfBirth: row.userDMV_DateOfBirth,
					userDMV_BirthSex: row.userDMV_BirthSex,
					userDMV_GenderIdentity: row.userDMV_GenderIdentity,
					userDMV_Race: row.userDMV_Race,
					userDMV_SSN: row.userDMV_SSN,
					userDMV_EmailAddress: row.userDMV_EmailAddress,
					userDMV_PhoneNumber: userDMV_PhoneNumber,
					userDMV_Address: row.userDMV_Address,
					userDMV_AddressUnitType: row.userDMV_AddressUnitType,
					userDMV_UnitTypeNumber: row.userDMV_UnitTypeNumber,
					userDMV_Country: row.userDMV_Country,
					userDMV_State: row.userDMV_State,
					userDMV_County: row.userDMV_County,
					userDMV_City: row.userDMV_City,
					userDMV_ZipCode: row.userDMV_ZipCode,
					userDMV_AlabamaStateIdType: row.userDMV_AlabamaStateIdType,
					userDMV_AlabamaIdCardNumber: row.userDMV_AlabamaIdCardNumber,
					userDMV_IvoteballotIdNumber: row.userDMV_IvoteballotIdNumber,
					userDMV_IvoteballotIdIdentifierCode: row.userDMV_IvoteballotIdIdentifierCode,
					userIdType: row.userIdType, 
					userIdTypeNumber: row.userIdTypeNumber,
					userConfirmIdTypeNumber: row.userConfirmIdTypeNumber,
					userEmail: row.userEmail,
					userConfirmEmail: row.userConfirmEamil,
					userPassword: row.userPassword,			
					userConfirmPassword: row.userConfirmPassword,
					userPhoneNumber: row.userPhoneNumber,
					userTemporaryPassword: row.userTemporaryPassword,	
	
					isAuthenticated: true
				 });
			});	

        });                
          
    }
));

/*
	The provided JavaScript coded language defines a function called passport.serializeUser
	which is a part of the Passport.js authentication library. This function takes two
	arguments: user and done. The purpose of this function is to serialize the users' objects
	(iVoteBallot_Id_Number and Alabama_Id_Card_Number) and store its with an unique identifier
	(user ID) in a sessions. The console logs are used for debugging purposes; in order to log
	a message indicating that the users are being serialized which should only be once for each
	users' passport authentication process sessions.
*/
passport.serializeUser(function (user, done) {
    console.log('Serializing user...');
    console.log('user');
    done(null, user.id);
});

/*
	This JavaScript coded language snippet is implementing the passport.deserializeUser function, 
	which is responsible for retrieving an users' objects (iVoteBallot_Id_Number and Alabama_Id_Card_Number)
	from the SQLite3 database based on the users' ID provided. The function takes two parameters: the users'
	ID and a callback function called "done". The code first logs a message to the console; in order
	to indicate that the users are being deserialized (in the case, an users can be deserialized many times
	within the same passport's session). It then queries the SQLite3 database using the users' ID; 
	in order to retrieve the corresponding users' objects (iVoteBallot_Id_Number and Alabama_Id_Card_Number).
	If an error occurs during the query, it returns the error via the "done" callback. And, if the users are
	not found, it returns null and false via the "done" callback. If the user is found, it constructs an
	users' objects and returns it via the "done" callback. The users' objects contains various fields such 
	as the users' iVoteBallot_Id_Number, Alabama_State_Id_Type, Alabama_Id_Card_Number, Email_Address
	and other properties.
*/
passport.deserializeUser(function(id, done) {
    console.log('Deserializing user...')
    console.log(id);   
    db2.get('SELECT * FROM users WHERE id = ?', id, (err, row) => {
		if (err) { 
			return done(err); 
		}
		if (!row) { 
			return done(null, false); 
		}
		return done(null, { 
			id: row.id,
			userDMV_FirstName: row.userDMV_FirstName,					 
			userDMV_MiddleName: row.userDMV_MiddleName,
			userDMV_LastName: row.userDMV_LastName, 
			userDMV_Suffix: row.userDMV_Suffix,
			userDMV_DateOfBirth: row.userDMV_DateOfBirth,
			userDMV_BirthSex: row.userDMV_BirthSex,
			userDMV_GenderIdentity: row.userDMV_GenderIdentity,
			userDMV_Race: row.userDMV_Race,
			userDMV_SSN: row.userDMV_SSN,
			userDMV_EmailAddress: row.userDMV_EmailAddress,
			userDMV_PhoneNumber: userDMV_PhoneNumber,
			userDMV_Address: row.userDMV_Address,
			userDMV_AddressUnitType: row.userDMV_AddressUnitType,
			userDMV_UnitTypeNumber: row.userDMV_UnitTypeNumber,
			userDMV_Country: row.userDMV_Country,
			userDMV_State: row.userDMV_State,
			userDMV_County: row.userDMV_County,
			userDMV_City: row.userDMV_City,
			userDMV_ZipCode: row.userDMV_ZipCode,
			userDMV_AlabamaStateIdType: row.userDMV_AlabamaStateIdType,
			userDMV_AlabamaIdCardNumber: row.userDMV_AlabamaIdCardNumber,
			userDMV_IvoteballotIdIdentifierCode: row.userDMV_IvoteballotIdIdentifierCode,
			userRegistrationCode: row.userRegistrationCode,
			userIdType: row.userIdType, 
			userIdTypeNumber: row.userIdTypeNumber,
			userConfirmIdTypeNumber: row.userConfirmIdTypeNumber,
			userEmail: row.userEmail,
			userConfirmEmail: row.userConfirmEamil,
			userPassword: row.userPassword,
			userConfirmPassword: row.userConfirmPassword,
			userPhoneNumber: row.userPhoneNumber,
			userTemporaryPassword: row.userTemporaryPassword,
			
			isAuthenticated: true
		});
    });
});

  /*
	The given JavaScript coded language is defining a route handler function for a POST request
	to the "/signup1" URL path. This function checks, if the users' requests are authenticated using
	the PassportJS middleware by calling the req.isAuthenticated() function. And, if the requests are
	authenticated, it is logged information within the sessions which is related to the users' data
	information, and renders the "signup1" template. Otherwise, it renders the "error500" template,
	and logs an error message indicating that the users are not authenticated within the sessions 
	using PassportJS middleware. This code is used for handling users' authentication and 
	rendering appropriate responses based on the authentications status of the POST requests.
*/
const alabamaSignUp_01_PassportGet = ('/login2', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User had been successfully authenticated within the Session through the passport from reset password webpage!');
        res.render('signup1');
    } else {
        res.render('error500')       
        console.log('The user is not successfully authenticated within the session through the passport from reset password webpage!');
    }
});

/*
	This JavaScript coded language defines a route handler for the '/signup1' endpoint in
	an iVoteballot web application that uses the PassportJS authentication middleware. And, 
	when an users' submits a login form, the passport.authenticate function will attempt to
	authenticate the user using the 'signup1' strategy. If users' authentication are
	successful than the users will be redirected to the '/dashboard_01' endpoint. If users'
	authentication fails than the users will be redirected to the '/alabama_SignUp_01' endpoint
	and a failure message will be displayed onto users' device screens. The failureFlash option
	indicates that a message should be displayed to the users, if users' authentication fails.
*/
const alabamaSignUp_01_PassportPost = (
    '/login2',
    passport.authenticate('login2', {
        successRedirect: '/dashboard_01',
        failureRedirect: '/alabama_SignUp_01',
        failureFlash: true 
}));


/*
    The code defines a function called generateNewPassword() that generates a new random
    password string. Here is the programmatic logic behind it:

    1. Declare a constant length equal to 20, which represents the length of the new password.
    2. Declare a constant charset which contains all the characters that can be used to
       generate the password. This includes lowercase and uppercase letters, numbers, and special characters.
    3. Declare a variable newPassword as an empty string to store the generated password.
    4. Start a for loop that iterates length times. In each iteration, do the following:
        a. Generate a random index between 0 and the length of charset using 
           Math.floor(Math.random() * n), where n is the length of charset.
        b. Use charAt() method to retrieve the character at the generated index from charset.
        c. Append the retrieved character to the newPassword variable.
    5. After the for loop completes, return the generated newPassword string.

    In summary, the function generates a new random password by selecting random characters
    from a predefined set of characters (i.e. charset) and concatenating them to form a password
    of length 20.

    Here is a caveat for you. If the new random password string does not contain one number when
    sent to the user email address from nodemailer than then resetPassword.ejs file will alert
    the user of a password error.
*/

function generateNewPassword() {
    const length = 20;
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-={}[]:";?,./~';
    let newPassword = '';
    for (let i = 0, n = charset.length; i < length; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * n));
    }
    return newPassword;
}

/*
    1. The code shows a JavaScript Express route for a POST request to '/login2', which handles user
       login information submitted via a form.
    2. The code uses the async/await syntax to handle the asynchronous operations in a synchronous
       manner, making the code easier to read and maintain.
    3. The code retrieves the email, temporary password, password, and confirm password fields from 
       the request body using the req.body object.
    4. The code then hashes the password and confirm password fields using the bcrypt library, with
       the same salt value to ensure consistent hashing.
    5. Finally, the code performs a database query to check if the user's email exists, and if so,
       updates the user's password and confirm password fields with the hashed values, and redirects
       the user to the '/login' route upon success. If there is an error with the database query, the
       code renders an error500 page.
*/


const createSignUp_01_Database = 	
	async (req, res) => {  	
		
		const userDMV_AlabamaIdCardNumber = req.body.userDMV_AlabamaIdCardNumber;
		const userDMV_IvoteballotIdIdentifierCode = req.body.userDMV_IvoteballotIdIdentifierCode;

		const userRegistrationCode = req.body.userRegistrationCode;
		const userIdType = req.body.userIdType;
		const userIdTypeNumber = req.body.userIdTypeNumber;
		const userConfirmIdTypeNumber = req.body.userConfirmIdTypeNumber;
		const userEmail = req.body.userEmail;
		const userConfirmEmail = req.body.userConfirmEmail;
		const userPassword = req.body.userPassword;
		const userConfirmPassword = req.body.userConfirmPassword;
		const userPhoneNumber = req.body.userPhoneNumber;		    
				
		console.log(req.body);	
		
		console.log('User\s Alabama Id card number is: ' + userDMV_AlabamaIdCardNumber + '.');
		console.log('User\s Alabama iVoteBallot number is: ' + userDMV_IvoteballotIdIdentifierCode + '.');

		console.log('User\s registration code is: ' + userRegistrationCode + '.');
		console.log('User\s Id type is: ' + userIdType + '.');
		console.log('User\s Id type number is: ' + userIdTypeNumber + '.');
		console.log('User\s confirm Id type number is: ' + userConfirmIdTypeNumber + '.');		
		console.log('User\s email address is: ' + userEmail + '.');
		console.log('User\s confirm email address is: ' + userConfirmEmail + '.');
		console.log('User\s password is: ' + userPassword + '.');
		console.log('User\s confirm password is: ' + userConfirmPassword + '.');
		console.log('User\s phone number is: ' + userPhoneNumber + '.');        
		
        console.log('The request session: ' + req.session);

        // Hash the password field using bcrypt.
        const salt = await bcrypt.genSalt(13);  
        const passwordHashed = await bcrypt.hash(userPassword, salt); 

        // Hash the confirmPassword field using the same salt, as the password field.
        const confirmPasswordHashed = await bcrypt.hash(userConfirmEmail, salt); 

        // Check, if the user's email exists onto the passport serialization through the session.
        db2.get('SELECT * FROM users WHERE userDMV_AlabamaIdCardNumber = ?', userDMV_AlabamaIdCardNumber, (err, row) => {
            if (err) {
                console.error(err);
                console.log('The user\s passport and session was not successfully executed causing an 500 error message due from Developer\s programmatic coding language problems.');
                res.render('500');
            } else if (!row) {
                console.log('The user\s email address is not successfully found within the passport serialization authenticated processes through the session.');
                res.render('alabama_SignUp_01');
            } else {
                
			db1.run('UPDATE users SET userRegistrationCode = ?, userIdType = ?, userIdTypeNumber = ?, userConfirmIdTypeNumber = ?, userEmail = ?, userConfirmEmail = ?, userPassword = ?, userConfirmPassword = ?, userPhoneNumber = ? WHERE userDMV_AlabamaIdCardNumber = ?', row.userRegistrationCode, row.userIdType, row.userIdTypeNumber, row.userConfirmIdTypeNumber, row.userEmail, row.userConfirmEmai,  passwordHashed, confirmPasswordHashed, row.userPhoneNumber, row.userDMV_AlabamaIdCardNumber, (err) => {
				if (err) {
					console.error(err);
					console.log('The user\s passport and session was not successfully executed causing an 500 error message due from Developer\s programmatic coding language problems.');
					res.render('500');                     
				} else {
					console.log('The user\s email address is successfully found within the passport serialization authenticated processes through the session.');
					res.redirect('/alabama_LogIn_01');
				}  
					
			});
		}
	});
};


		
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
	alabama_SignUp_01_Router,
	alabamaSignUp_01_PassportGet,
	alabamaSignUp_01_PassportPost,
	db2,
	
	createSignUp_01_Database	
}
  


