/*
	The purpose of this JavaScript coded language is to require the "alabama_SignUp_01_Router" 
	module from the "../models/alabama_SignUp_01_Router" file. This indicates that the module
	is necessary for the execution of the current const alabama_SignUp_01_Controller script, and 
	allows access to the functions and properties of the "alabama_SignUp_01_Router" module. The
	alabama_SignUp_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles users sign up form submissions.
*/
const alabama_SignUp_01_Router = require('../models/alabama_SignUp_01_Router');

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
const SESSION_NAME = process.env.SESSION_NAME;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;

/*
	This JavaScript coded language utilizes the passport.js and the LocalStrategy libraries
	for user authentication. It specifies an user's email (iVoteBallot_Id_Number) and password
	(Alabama_Id_Card_Number) fields required for an users match login authentications from the	
	Alabama's DMV, and allows the request object to be passed to the callback function from the
	Alabama's DMV. And, this code queries the Alabama's DMV database to validate users credentials, 
	and uses library for secure users' iVoteBallot_Id_Number secret code comparison. If the users'
	iVoteBallot_Id_Number or Alabama_Id_Card_Number is incorrect, an appropriate error message is
	returned to the users' device screens.
*/
passport.use(
    'signup1',
    new LocalStrategy({
	usernameField: 'email',
	passwordField: 'password',
    passReqToCallback: true // To allow request object to be passed to callback
},   
async (req, email, password, done) => {
	console.log('The passport.use(login1) email is: ' + email);
	console.log('The passport.use(login1) password: ' + password);
	
	if (!password) {
		console.log('User password enter onto the login field:' + password);            
		console.log('The user passport.use LocalStrategy password and confirm password does not match');
		return done(null, false, { message: 'Your password and confirm password does not match.'})
		
	} else 
	 await db1.get(`SELECT * FROM users WHERE email = ?`, email,(err, row) => {
		if (err) {
			return done(err);
		}
	  
		if (!row) {
			return done(null, false, { message: 'You have entered the incorrect email address.'});
		}
		
		 bcrypt.compare(password, row.password, (err, result) => {
		   
			if (err) {
				return done(err);
			}
			if (!result) {
				return done(null, false, { message: 'You have entered the incorrect password.'});
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

					isAuthenticated: true });

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
    db1.get('SELECT * FROM users WHERE id = ?', id, (err, row) => {
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
		userDMV_IvoteballotIdNumber: row.userDMV_IvoteballotIdNumber,
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
		
		isAuthenticated: true });
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
const alabamaSignUp_01_PassportGet = ('/signup1', (req, res) => {
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
    '/signup1',
    passport.authenticate('signup1', {
        successRedirect: '/dashboard_01',
        failureRedirect: '/alabama_SignUp_01',
        failureFlash: true 
}));

/*
	This JavaScript coded language creates a connection to the SQLite3 database with the
	filename 'db_Alabama_SignUp'. And, the 'new' keyword is used to create a new instance
	of the 'sqlite3.Database' class. The code includes error handling, where if an error
	occurs during the connection process, an error message is logged to the console, 
	otherwise, a success message is logged. This code is used in an iVoteBallot web applications; 
	in order to interact with SQLite3 databases, which are lightweight and commonly used for
	local back-end storage.
*/
const db1 = new sqlite3.Database('alabamaIvoteballotDatabase.db', err => {
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

db1.serialize( () => {
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
		
	db1.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Developer created the SQLite3 alabamaDMVDatabase database table is not programmatically coded with an: ' + error + '!');
		} else {
			console.log('Developer has created the Sqlite3 alabamaDMVDatabase database table which was programmatically coded successfully!');   
		}
	});        
});

/*
The given JavaScript codes language defines a route for signing up a new users using
the HTTP POST method. When an user submits a signup form, the back-end server extracts 
the form data (first name, last name, username, email, password, and confirmPassword) 
from the request body using the req.body object.

The JavaScript codes language then logs each user input to the console, and prints 
their values using string concatenation. It also logs the req.session object, which
may contain session data specific to the user.

The user's password and confirm password fields are then hashed using the bcrypt
algorithm, with the bcrypt library. The same salt is used to hash both fields, 
and the hashed values are stored in separate variables. The two hashes are compared 
using the bcrypt.compare() method to ensure they match, and if they do not, the user
is redirected to the signup page with an error message.

If the passwords match, the user's data is inserted into a SQLite3 database using an
SQLite3 query. The query is executed using the db1.run() method, and the results are
returned either as a successful redirect to the login page, or an error page if
something goes wrong.
*/
const createAlabamaIvoteballotDatabase = 
	async (req, res, next) => {   	

	const data = {		
		userDMV_FirstName: req.body.userDMV_FirstName,
		userDMV_MiddleName: req.body.userDMV_MiddleName, 
		userDMV_LastName: req.body.userDMV_LastName,
		userDMV_Suffix: req.body.userDMV_Suffix,
		userDMV_DateOfBirth: req.body.userDMV_DateOfBirth,
		userDMV_BirthSex: req.body.userDMV_BirthSex,
		userDMV_GenderIdentity: req.body.userDMV_GenderIdentity,
		userDMV_Race: req.body.userDMV_Race,
		userDMV_SSN: req.body.userDMV_SSN,		
		userDMV_EmailAddress: req.body.userDMV_EmailAddress,
		userDMV_Address: req.body.userDMV_Address,
		userDMV_AddressUnitType: req.body.userDMV_AddressUnitType,
		userDMV_UnitTypeNumber: req.body.userDMV_UnitTypeNumber,
		userDMV_Country: req.body.userDMV_Country ,
		userDMV_State: req.body.userDMV_State,
		userDMV_County: req.body.userDMV_County,
		userDMV_City: req.body.userDMV_City,
		userDMV_ZipCode: req.body.userDMV_ZipCode,
		userDMV_AlabamaStateIdType: req.body.userDMV_AlabamaStateIdType,
		userDMV_AlabamaIdCardNumber: req.body.userDMV_AlabamaIdCardNumber,
		userDMV_IvoteballotIdIdentifierCode: req.body.userDMV_IvoteballotIdIdentifierCode,
		userRegistrationCode: req.body.userRegistrationCode,
		userIdType: req.body.userIdType,
		userIdTypeNumber: req.body.userIdTypeNumber,
		userConfirmIdTypeNumber: req.body.userConfirmIdTypeNumber,
		userEmail: req.body.userEmail,
		userConfirmEmail: req.body.userConfirmEmail,
		userPassword: req.body.userPassword,
		userConfirmPassword: req.body.userPassword,
		userPhoneNumber: req.body.userPhoneNumber,
		userTemporaryPassword: req.body.userTemporaryPassword
	}    
			
	console.log(req.body);

	console.log('User first name is: ' + data.userDMV_FirstName + '.');
	console.log('User middle name is: ' + data.userDMV_MiddleName + '.');
	console.log('User last name is: ' + data.userDMV_LastName + '.');
	console.log('User suffix is: ' + data.userDMV_Suffix + '.');
	console.log('User date of birth is: ' + data.userDMV_DateOfBirth + '.');
	console.log('User birth sex is: ' + data.userDMV_BirthSex + '.');
	console.log('User gender identity is: ' + data.userDMV_GenderIdentity + '.');
	console.log('User race is: ' + data.userDMV_Race + '.');
	console.log('User social security number is: ' + data.userDMV_SSN + '.');		
	console.log('User email address is: ' + data.userDMV_EmailAddress + '.');	
	console.log('User address is: ' + data.userDMV_Address + '.');	
	console.log('User address unit type is: ' + data.userDMV_AddressUnitType + '.');	
	console.log('User unit type number is: ' + data.userDMV_UnitTypeNumber + '.');	
	console.log('User country is: ' + data.userDMV_Country + '.');	
	console.log('User state is: ' + data.userDMV_State + '.');	
	console.log('User county is: ' + data.userDMV_County + '.');	
	console.log('User city is: ' + data.userDMV_City + '.');	
	console.log('User zip code is: ' + data.userDMV_ZipCode + '.');	
	console.log('User\s Alabama state id type is: ' + data.userDMV_AlabamaStateIdType + '.');	
	console.log('User\s Alabama Id card number is: ' + data.userDMV_AlabamaIdCardNumber + '.');
	console.log('User\s Alabama iVoteBallot number is: ' + data.userDMV_IvoteballotIdIdentifierCode + '.');	
	console.log('User\s registration code is: ' + data.userRegistrationCode + '.');
	console.log('User\s Id type is: ' + data.userIdType + '.');
	console.log('User\s Id type number is: ' + data.userIdTypeNumber + '.');
	console.log('User\s confirm Id type number is: ' + data.userConfirmIdTypeNumber + '.');
	console.log('User\s email address is: ' + data.userEmail + '.');
	console.log('User\s confirm email address is: ' + data.userConfirmEmail + '.');
	console.log('User\s password is: ' + data.userPassword + '.');
	console.log('User\s confirm password is: ' + data.userConfirmPassword + '.');
	console.log('User\s phone number is: ' + data.userPhoneNumber + '.');
	console.log('User\s temporary password is: ' + data.userTemporaryPassword + '.');

	console.log(req.session);

	const sqlInsert = 'INSERT INTO alabamaIvoteballotDatabase (userDMV_FirstName, userDMV_MiddleName, userDMV_LastName, userDMV_Suffix, userDMV_DateOfBirth, userDMV_BirthSex, userDMV_GenderIdentity, userDMV_Race, userDMV_SSN, userDMV_EmailAddress, userDMV_Address, userDMV_AddressUnitType, userDMV_UnitTypeNumber, userDMV_Country, userDMV_State, userDMV_County, userDMV_City, userDMV_ZipCode, userDMV_AlabamaStateIdType, userDMV_AlabamaIdCardNumber, userDMV_IvoteballotIdIdentifierCode, userRegistrationCode, userIdType, userIdTypeNumber, userConfirmIdTypeNumber, userEmail, userConfirmEmail, userPassword, userConfirmPassword, userPhoneNumber, userTemporaryPassword) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	const params = [data.userDMV_FirstName, data.userDMV_MiddleName, data.userDMV_LastName, data.userDMV_Suffix, data.userDMV_DateOfBirth, data.userDMV_BirthSex, data.userDMV_GenderIdentity, data.userDMV_Race, data.userDMV_SSN, data.userDMV_EmailAddress, data.userDMV_Address, data.userDMV_AddressUnitType, data.userDMV_UnitTypeNumber, data.userDMV_Country, data.userDMV_State, data.userDMV_County, data.userDMV_City, data.userDMV_ZipCode, data.userDMV_AlabamaStateIdType, data.userDMV_AlabamaIdCardNumber, data.userDMV_IvoteballotIdIdentifierCode, data.userRegistrationCode, data.userIdType, data.userIdTypeNumber, data.userConfirmIdTypeNumber, data.userEmail, data.userConfirmEmail, data.userPassword, data.userConfirmPassword, data.userPhoneNumber, data.userTemporaryPassword];
	
	await db1.run(sqlInsert, params, function (err, result) {
		if (err) {
			res.redirect('/500');
			console.log('An syntax error has occurred during Alabama user\s DMV input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
						
		} else {
			console.log('The user Alabama data information typed into the sign up input fields webpage has been successfully parsed into the iVoteBallot\s Sign Up database. ' + Date());
			res.redirect('/iVoteBallot');
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
			from: req.body.userEmail,
			to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
			subject: `CEO/Sign Up Manager | The iVoteBallot have received a New User Sign Up Email`,  
			html: ` 
			
				<p>iVoteBallot have received a new Voter Sign Up Email</p>
				<ul>
					<li>
						Registration Code: ${req.body.userRegistrationCode} 
					</li>
					<li>
						Email: ${req.body.userEmail}
					</li>					
					
				</ul>

				<p>
					
				</p>

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
			to: req.body.userEmail, 
			subject: `Welcome to iVoteBallot - Your Voice, Your Vote!`,			
			html: 			
				`			
				<p>Dear Voter</p>
				
				<p>
					Welcome to iVoteBallot, your trusted platform for participating in the
					democratic process. We're excited to have you join our community of engaged
					voters who are committed to making a difference through their votes.										
				</p>
							
				<p>
					Here at iVoteBallot, we believe that every voice matters, and we're dedicated 
					to making the voting process as accessible and convenient as possible for you. 
					Whether you're a seasoned voter or a first-time participant, we're here to support 
					you every step of the way.
				</p>
				
				<p>
					Here's what you can expect from iVoteBallot:
				</p>

				<p>
					1.	Easy Registration: Our user-friendly platform makes it simple to sign up and 
					    start voting. We've designed the process to be hassle-free and secure.

					2.	Voting Information: Stay informed about upcoming elections, candidates, and 
					    ballot measures. We provide resources and reminders to ensure you never miss 
						an opportunity to make your voice heard.
					
					3.	Secure and Private: Your privacy and security are our top priorities. We use 
					    state-of-the-art technology to safeguard your data and maintain the confidentiality
						of your vote.
					
					4.	Community Engagement: Connect with like-minded individuals who share your passion
					    for civic engagement. We offer forums, discussions, and events to help you stay 
						involved.
				</p>

				<p>
					To get started, simply log in to your iVoteBallot account using the credentials you 
					provided during registration. Once you're in, you'll have access to all the tools and 
					information you need to cast your vote.
				</p>

				<p>
					If you ever have questions or need assistance, our iVoteBallot Customer Caret team 
					is just an email or message away. We're here to help you have a smooth and positive 
					voting experience.
				</p>

				<p>
					Thank you for choosing iVoteBallot to be your partner in democracy. Your voice is 
					important, and your vote can make a real difference. Together, we can create a better 
					future.
				</p>

				<p>
					Let's get started!
				</p>	
					
				<p>Sincerely</p>			
				
				<p>Sarai Hannah Ajai, CEO, iVoteBallot</p>

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
	db1,
	
	createAlabamaIvoteballotDatabase	
}
  


