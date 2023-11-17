/*
	The purpose of this JavaScript coded language is to require the "alabama_Session_Router" 
	module from the "../models/alabama_Session_Router" file. This indicates that the module
	is necessary for the execution of the current const 'alabamaDMV_Commission_01_Controller' script, and 
	allows access to the functions and properties of the "alabama_Session_Router" module. The
	alabamaDMV_Commission_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles user contact us form submissions.
*/
const alabama_Session_Router = require('../models/alabama_Session_Router');

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
	1. The code const path = require('path') imports the built-in Node.js path module, which
	provides utilities for working with file and directory paths.
	2. You can use the path module to manipulate file paths in a platform-independent way and
	perform tasks such as resolving relative paths, joining multiple paths, and extracting 
	file extensions.
*/
const path = require('path');

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
        userCommissionIvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
        userCommissionIvoteBallotIdCodeBcryptic VARCHAR(50) NOT NULL
        
    )`);  
		
	db1.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Sarai Hannah Ajai have created the Sqlite3 \'alabamaDMV_Commission_01\' database table is not JavaScript programmatically coded with an error message: ' + error + '!');
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
    'login2',
    new LocalStrategy({
    usernameField: 'userDMVEmail',
    passwordField: 'userCommissionIvoteBallotIdIdentifierCode',
    passReqToCallback: true // To allow request object to be passed to callback
},   
    async (req, userDMVEmail, userCommissionIvoteBallotIdIdentifierCode, done) => {
        console.log('The passport.use(login2) email is: ' + userDMVEmail);
        console.log('The passport.use(login2) password: ' + userCommissionIvoteBallotIdIdentifierCode);
        
        if (!userCommissionIvoteBallotIdIdentifierCode) {
            console.log('User password enter onto the login field:' + userCommissionIvoteBallotIdIdentifierCode);            
            console.log('The user passport.use LocalStrategy password and confirm password does not match');
            return done(null, false, { message: 'Your password and confirm password does not match.'})
            
        } else 
         await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE userDMVEmail = ?`, userDMVEmail, (err, row) => {
            if (err) {
                return done(err);
            }
          
            if (!row) {
                return done(null, false, { message: 'You have entered the incorrect email address.'});
            }
            
             bcrypt.compare(userCommissionIvoteBallotIdIdentifierCode, row.userCommissionIvoteBallotIdIdentifierCode, (err, result) => {
               
                if (err) {
                    return done(err);
                }
                if (!result) {
                    return done(null, false, { message: 'You have entered the incorrect password.'})
                }
                //return done(null, row);

                return done(null, { 
					id: row.id,					

						row:userDMVFirstName,       
						row:userDMVMiddleName, 
						row:userDMVLastName,        
						row:userDMVSuffix,
						row:userDMVDateOfBirth,
						row:userDMVBirthSex,
						row:userDMVGenderIdentity,
						row:userDMVRace,
						row:userDMVSSN,
						row:userDMVEmail,
						row:userDMVConfirmEmail,
						row:userDMVPhoneNumber,
						row:userDMVAddress,
						row:userDMVUnitType,
						row:userDMVUnitTypeNumber,
						row:userDMVCountrySelection,
						row:userDMVStateSelection,
						row:userDMVCountySelection,
						row:userDMVCitySelection,
						row:userDMVZipSelection,
						row:userDMVIdType,
						row:userDMVIdTypeNumber,
						row:userCommissionIvoteBallotIdIdentifierCode,
						row:userCommissionIvoteBallotIdCodeBcryptic,
							
					isAuthenticated: true });
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
	representation only once for authentication process through the session cookie.

	This serialized user data informaiton is then stored in the session, allowing the server to
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
    console.log('Deserializing user...')
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

			row:userDMVFirstName,       
			row:userDMVMiddleName, 
			row:userDMVLastName,        
			row:userDMVSuffix,
			row:userDMVDateOfBirth,
			row:userDMVBirthSex,
			row:userDMVGenderIdentity,
			row:userDMVRace,
			row:userDMVSSN,
			row:userDMVEmail,
			row:userDMVConfirmEmail,
			row:userDMVPhoneNumber,
			row:userDMVAddress,
			row:userDMVUnitType,
			row:userDMVUnitTypeNumber,
			row:userDMVCountrySelection,
			row:userDMVStateSelection,
			row:userDMVCountySelection,
			row:userDMVCitySelection,
			row:userDMVZipSelection,
			row:userDMVIdType,
			row:userDMVIdTypeNumber,
			row:userCommissionIvoteBallotIdIdentifierCode,
			row:userCommissionIvoteBallotIdCodeBcryptic,
				
		isAuthenticated: true });	
		
    });
});

/*
	The written JavaScript code language defines a route handler for the '/alabamaDMV_Commission_01'
	route in the iVoteballot web application. This route is designed to handle HTTP GET requests. 
	The code first checks, if the user is already authenticated by examining the 'isAuthenticated' 
	property in the 'req.session' object. If the user is authenticated, an alert is triggered, 
	notifying the user that he or she is already logged in. Subsequently, the code checks, if the
	request is unauthenticated using 'req.isUnauthenticated'. If unauthenticated, the code logs any
	flash messages and renders the 'alabamaDMV_Commission_01' view, providing a message to the user
	regarding the documentation of iVoteBallot data onto the SQlite3's iVoteBallot database. If the 
	user is authenticated, the code simply logs any flash messages for which is part of an authentication
	flow and rendering logic for a specific route in an iVoteBallot web application, with a focus on
	handling both authenticated and unauthenticated users requests.
*/
const alabamaDMV_Commission_01_RouteGet = ('/alabamaDMV_Commission_01',  (req, res) => {    
    // Check if user already authenticated.
    if (req.session.isAuthenticated) {
        return alert('You are already logged in!');
    }
    console.log(req.session);
    // Check if this is the first use of '/alabamaDMV_Commission_01' route URL bar
    if (req.isUnauthenticated) {
        console.log(req.flash());
        res.render('alabamaDMV_Commission_01', { messages: (req.flash('This is your time you are documenting the user\'s iVoteBallot data information onto the iVoteBallot database.')) })        
        
    } else {
        console.log(req.flash());        
       
    }  
});

/*
	The written JavaScript coded language, creates a route handler for the endpoint 
	'/alabamaDMV_Commission_01'. This route is designed to handle HTTP requests and 
	response logic. The function begins by checking, if the user's request is authenticated
	using Passport, a popular authentication middleware for Node.js. If the user's request
	is authenticated, the user's data information is logged to the console, including their
	session cookie id details and the success of the user's login process. A message is then
	logged, indicating that the user has been successfully authenticated through Passport 
	from the iVoteBallot's employee direct user posting to the 'alabamaDMV_Commission_01' 
	webpage. 
	
	Finally, the response renders the 'alabamaDMV_Commission_01' view. If the user's request 
	is not authenticated, the code renders the '500' view and logs a message stating that the
	user was not successfully authenticated within the session through Passport from the 
	iVoteBallot's employee direct user posting to the 'alabamaDMV_Commission_01' webpage.
*/
const alabamaDMV_Commission_01_PassportGet = ('/alabamaDMV_Commission_01', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User had been successfully authenticated within the Session through the passport from the iVoteBallot\'s employee direct user posting to the \'alabamaDMV_Commission_01\' webpage!');
        res.render('alabamaDMV_Commission_01');
    } else {
        res.render('500')       
        console.log('The user is not successfully authenticated within the session through the passport from the iVoteBallot\'s employee direct user posting to the \'alabamaDMV_Commission_01\' webpage!');
    }
});

/*
	In the written JavaScript Coded language provides a route handler which is defined for
	the endpoint '/alabama_DMV_Commission_01', specifically designed for handling user POST 
	requests related to his or her Passport authentication. This route utilizes the Passport
	middleware to authenticate the user using the 'login2' strategy. And, depending on the 
	Passport authentication result, if successful, the user is redirected to the '/iVoteBallot' 
	endpoint, and in case of failure, they are redirected back to the '/alabamaDMV_Commission_01'
	endpoint with the option to display flash messages (set to true). This concise endpoint block 
	of code encapsulates the Passport authentication process, and streamlining the redirection 
	logic based on the outcome of the authentication attempt using Passport.
*/
const alabamaDMV_Commission_01_AuthenticatePost = (
    '/alabama_DMV_Commission_01',
    passport.authenticate('login2', {
        successRedirect: '/iVoteBallot',
        failureRedirect: '/alabamaDMV_Commission_01',
        failureFlash: true 
	}
));

/*
	In the written JavaScript coded language, a route handler is defined for the endpoint 
	'/alabamaDMV_Commission_01', designed to handle asynchronous POST requests related to the
	creation of user data in the SQLite3 'alabamaDMV_Commission_01' database. The function 
	extracts various user input fields data from the request body, including personal details,
	contact information, and iVoteBallot identifiers. And. this data information is then logged 
	to the console for verification purposes.

	The code further performs input fields' validation to ensure that essential fields are not empty,
	but this validation section is currently commented out because Sarai Hannah Ajai (the Developer) 
	had created a separate js file named, "alabamaDMV_Commission_01.ejs" to handle the all input
	fields' validation checks within the DOM 'document.getElementById'. Following validation checks,
	the user's iVoteBallot Id Identifier Code is compared to its bcrypt-hashed counterpart. If a 
	mismatch is detected, an error flash message is generated, and the user is redirected to 
	the '/alabamaDMV_Commission_01' endpoint. Conversely, if the codes match, a success message is
	logged, and the user's iVoteBallot Id Code is hashed and salted using bcrypt API module for secure 
	storage within the SQlite3 database.

	The script then constructs an SQL query to insert the user's data information into the 
	'alabamaDMV_Commission_01' SQLite3 database. If the insertion is successful, a success flash 
	message is generated, and the user is redirected to the '/alabamaDMV_Commission_01' endpoint.
	Concurrently, the script employs the Nodemailer library to send two email notifications: one to
	the iVoteBallot support team informing them of the new user's registration and another to the
	user, as a confirmation. And, an attachments within the emails, including the iVoteBallot logo to
	which enhance the email contents. Additionally, error handling is implemented for the 
	email-sending process, redirecting to a '535' error page if issues arise.
*/
const createAlabamaDMV_Commission_01_Database = ('/alabamaDMV_Commission_01',
	async (req, res, next) => {   		
		
		const userCommissionIvoteBallotIdIdentifierCode = req.body.userCommissionIvoteBallotIdIdentifierCode;
		const userCommissionIvoteBallotIdCodeBcryptic = req.body.userCommissionIvoteBallotIdCodeBcryptic;

		const data = {    

            userDMVFirstName: req.body.userDMVFirstName,       
            userDMVMiddleName: req.body.userDMVMiddleName, 
            userDMVLastName: req.body.userDMVLastName,        
            userDMVSuffix: req.body.userDMVSuffix,
            userDMVDateOfBirth: req.body.userDMVDateOfBirth,
            userDMVBirthSex: req.body.userDMVBirthSex,
            userDMVGenderIdentity: req.body.userDMVGenderIdentity,
            userDMVRace: req.body.userDMVRace,
            userDMVSSN: req.body.userDMVSSN,
            userDMVEmail: req.body.userDMVEmail,
            userDMVConfirmEmail: req.body.userDMVConfirmEmail,
            userDMVPhoneNumber: req.body.userDMVPhoneNumber,
            userDMVAddress: req.body.userDMVAddress,
            userDMVUnitType: req.body.userDMVUnitType,
            userDMVUnitTypeNumber: req.body.userDMVUnitTypeNumber,
            userDMVCountrySelection: req.body.userDMVCountrySelection,
            userDMVStateSelection: req.body.userDMVStateSelection,
            userDMVCountySelection: req.body.userDMVCountySelection,
            userDMVCitySelection: req.body.userDMVCitySelection,
            userDMVZipSelection: req.body.userDMVZipSelection,
            userDMVIdType: req.body.userDMVIdType,
            userDMVIdTypeNumber: req.body.userDMVIdTypeNumber,
            userCommissionIvoteBallotIdIdentifierCode: req.body.userCommissionIvoteBallotIdIdentifierCode,
            userCommissionIvoteBallotIdCodeBcryptic: req.body.userCommissionIvoteBallotIdCodeBcryptic

        }
			
	console.log(req.body);

	console.log('User first name: ' + data.userDMVFirstName + '.');
	console.log('User middle name is: ' + data.userDMVMiddleName + '.');
	console.log('User last name is: ' + data.userDMVLastName + '.');
	console.log('User suffix is: ' + data.userDMVSuffix + '.');
	console.log('User date of birth is: ' + data.userDMVDateOfBirth + '.');
	console.log('User birth sex is: ' + data.userDMVBirthSex + '.');
	console.log('User gender identity is: ' + data.userDMVGenderIdentity + '.');
	console.log('User race is: ' + data.userDMVRace + '.');
	console.log('User SSN is: ' + data.userDMVSSN + '.');
	console.log('User email is: ' + data.userDMVEmail + '.');
	console.log('User confirm email is: ' + data.userDMVConfirmEmail + '.');
	console.log('User phone number is: ' + data.userDMVPhoneNumber + '.');
	console.log('User address is: ' + data.userDMVAddress + '.');
	console.log('User unit type is: ' + data.userDMVUnitType + '.');
	console.log('User unit type number is: ' + data.userDMVUnitTypeNumber + '.');
	console.log('User country selection is: ' + data.userDMVCountrySelection + '.');
	console.log('User state selection is: ' + data.userDMVStateSelection + '.');
	console.log('User county selection is: ' + data.userDMVCountySelection + '.');
	console.log('User city selection is: ' + data.userDMVCitySelection + '.');
	console.log('User state selection is: ' + data.userDMVStateSelection + '.');
	console.log('User zip code selection is: ' + data.userDMVZipSelection + '.');
	console.log('User Id type is: ' + data.userDMVIdType + '.');
	console.log('User Id type number is: ' + data.userDMVIdTypeNumber + '.');
	console.log('User iVoteBallot Id Identifier Code is: ' + data.userCommissionIvoteBallotIdIdentifierCode + '.');
	console.log('User iVoteBallot Id Identifier Code Bcryption is: ' + data.userCommissionIvoteBallotIdCodeBcryptic + '');

	console.log(req.session);

	 // User input data information validation.
	 /*
	 if (!userDMVFirstName || !userDMVMiddleName || !userDMVLastName ||!userDMVSuffix ||!userDMVDateOfBirth ||!userDMVBirthSex ||!userDMVGenderIdentity ||!userDMVRace ||!userDMVSSN ||!userDMVEmail ||!userDMVConfirmEmail ||!userDMVPhoneNumber ||!userDMVAddress ||!userDMVUnitType ||!userDMVUnitTypeNumber ||!userDMVCountrySelection ||!userDMVStateSelection ||!userDMVCountySelection ||!userDMVCitySelection ||!userDMVZipSelection ||!userDMVIdType ||!userDMVIdTypeNumber ||!userCommissionIvoteBallotIdIdentifierCode ||!userCommissionIvoteBallotIdCodeBcryptic) {
		req.flash('error', 'Please fill in all fields');
		return res.redirect('/alabamaDMV_Commission_01'); 
	} 
	*/

	if (userCommissionIvoteBallotIdIdentifierCode !== userCommissionIvoteBallotIdCodeBcryptic) {
		req.flash('error', 'The user\'s iVoteballot Id Identifier Code does not match to the user\'s iVoteballot Id Identifier Code Bcryptic you have entered into the input fields.');
		return res.redirect('/alabamaDMV_Commission_01');        

	} else {
		console.log('The user\' iVoteBallot Id Identifier Code have successfully matched to his or her iVoteBallot Id Code entered into the input fields, and the user is successfully authenticated through the \'passport.use\' login2, LocalStrategy and session cookie.');
	}   

	const salt = await bcrypt.genSalt(15);
	const iVoteBallotIdCodeHashed = await bcrypt.hash(req.body.userCommissionIvoteBallotIdCodeBcryptic, salt);

	const newUser = {
		userCommissionIvoteBallotIdCodeBcryptic:iVoteBallotIdCodeHashed
	};

	const sqlInsert = 'INSERT INTO alabamaDMV_Commission_01 (userDMVFirstName, userDMVMiddleName, userDMVLastName, userDMVSuffix, userDMVDateOfBirth, userDMVBirthSex, userDMVGenderIdentity, userDMVRace, userDMVSSN, userDMVEmail, userDMVConfirmEmail, userDMVPhoneNumber, userDMVAddress, userDMVUnitType, userDMVUnitTypeNumber, userDMVCountrySelection, userDMVStateSelection, userDMVCountySelection, userDMVCitySelection, userDMVZipSelection, userDMVIdType, userDMVIdTypeNumber, userCommissionIvoteBallotIdIdentifierCode, userCommissionIvoteBallotIdCodeBcryptic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	const params = [data.userDMVFirstName, data.userDMVMiddleName, data.userDMVLastName, data.userDMVSuffix, data.userDMVDateOfBirth, data.userDMVBirthSex, data.userDMVGenderIdentity, data.userDMVRace, data.userDMVSSN, data.userDMVEmail, data.userDMVConfirmEmail, data.userDMVPhoneNumber, data.userDMVAddress, data.userDMVUnitType, data.userDMVUnitTypeNumber, data.userDMVCountrySelection, data.userDMVStateSelection, data.userDMVCountySelection, data.userDMVCitySelection, data.userDMVZipSelection, data.userDMVIdType, data.userDMVIdTypeNumber, data.userCommissionIvoteBallotIdIdentifierCode, newUser.userCommissionIvoteBallotIdCodeBcryptic];
	
	await db1.run(sqlInsert, params, function (err, result) {
		if (err) {
			res.redirect('/500');
			console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
						
		} else {
			console.log('The user data information typed into the \'alabamaDMV_Commission_01\' input fields have been successfully parsed into the \'alabamaDMV_Commission_01\', SQLite3 database. ' + Date());
			//res.redirect('/iVoteBallot');
			req.flash('Success', 'The user is successfully registered into the iVoteBallot database, and the user can now sign up to create his or her iVoteBallot account.');
			res.redirect('/alabamaDMV_Commission_01');
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

});

/*
	The given JavaScript coded language exports a module with multiple components, including
	a router, Passport authentication functions for GET and POST requests, a database instance, 
	and a function to create a database for handling the alabamaDMV_Commission_01 form submissions.
	These components are intended for use in an iVoteBallot web application's alabamaDMV_Commission_01 
	form feature by ways of providing the necessary functionality for handling user input and storing
	his or her data information when exporting these components, as a module, they can be easily imported
	and utilized in other parts of the iVoteBallot web application.
*/
module.exports = {

	alabama_Session_Router,
	alabamaDMV_Commission_01_RouteGet,
	alabamaDMV_Commission_01_PassportGet,
	alabamaDMV_Commission_01_AuthenticatePost,
	createAlabamaDMV_Commission_01_Database	
	
}
  

