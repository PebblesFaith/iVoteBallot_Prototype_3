/*
	The purpose of this JavaScript coded language is to require the "contactUs_01_Router" 
	module from the "../models/contactUs_01_Router" file. This indicates that the module
	is necessary for the execution of the current const contactUs_01_Controller script, and 
	allows access to the functions and properties of the "contactUs_01_Router" module. The
	contactUs_01_Controller script is part of a larger iVoteBallot index.js (server) file
	that handles user contact us form submissions.
*/
const contactUs_01_Router = require('../models/contactUs_01_Router');

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
	for user authentication. It specifies an user's email and password fields required for 
	login, and allows the request object to be passed to the callback function. And, this
	code queries a database to validate user credentials, and uses Bcrypt library for secure 
	user's password comparison. If the user's email or password is incorrect, an appropriate
	error message is returned to the user device screen.
*/
passport.use(
    'login1',
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

                return done(null, { id: row.id, email: row.email, firstName: row.firstName, lastName: row.lastName, isAuthenticated: true });

            });                
        });       
    }
));

/*
	The provided JavaScript coded language defines a function called passport.serializeUser
	which is a part of the Passport.js authentication library. This function takes two
	arguments: user and done. The purpose of this function is to serialize the user object
	(email and password) and store its with an unique identifier (user ID) in a session. 
	The console logs are used for debugging purposes; in order to log a message indicating that
	the user is being serialized which should only be once for each user's passport 
	authentication process session.
*/
passport.serializeUser(function (user, done) {
    console.log('Serializing user...');
    console.log('user');
    done(null, user.id);
});

/*
	This JavaScript coded language snippet is implementing the passport.deserializeUser function, 
	which is responsible for retrieving an user's object (email and password) from the SQLite3 
	database based on the user's ID provided. The function takes two parameters: the user's
	ID and a callback function called "done". The code first logs a message to the console; in order
	to indicate that the user is being deserialized (in the case, an user can be deserialized many times
	within the same passport's session). It then queries the SQLite3 database using the user's ID; 
	n order to retrieve the corresponding user's object (email and password). If an error occurs during
	the query, it returns the error via the "done" callback. And, if the user is not found, it 
	returns null and false via the "done" callback. If the user is found, it constructs an user's
	object and returns it via the "done" callback. The user's object contains various fields such 
	as the user's ID, email, first name, last name, password, and other properties.
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
      return done(null, { id: row.id, email: row.email, firstName: row.firstName, lastName: row.lastName,password: row.password, confirmPassword: row.confirmPassword, temporary_Password: row.temporary_Password, isAuthenticated: true });
    });
  });

/*
	The given JavaScript coded language is defining a route handler function for a POST request
	to the "/login1" URL path. This function checks, if the user's request is authenticated using
	the PassportJS middleware by calling the req.isAuthenticated() function. And, if the request is
	authenticated, it is logged information within the session which is related to the user data
	information, and renders the "login1" template. Otherwise, it renders the "error500" template,
	and logs an error message indicating that the user is not authenticated within the session 
	using PassportJS middleware. This code is used for handling user's authentication and 
	rendering appropriate responses based on the authentication status of the POST request.
*/
  const contactUs_01_PassportGet = ('/login1', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User had been successfully authenticated within the Session through the passport from reset password webpage!');
        res.render('login1');
    } else {
        res.render('error500')       
        console.log('The user is not successfully authenticated within the session through the passport from reset password webpage!');
    }
});

/*
	This JavaScript coded language defines a route handler for the '/login1' endpoint in
	an iVoteballot web application that uses the PassportJS authentication middleware. And, 
	when an user submits a login form, the passport.authenticate function will attempt to
	authenticate the user using the 'login1' strategy. If user's authentication is
	successful than the user will be redirected to the '/iVoteBallot' endpoint. If user's
	authentication fails than the user will be redirected to the '/contactUs_01' endpoint
	and a failure message will be displayed onto user device screen. The failureFlash option
	indicates that a message should be displayed to the user, if user's authentication fails.
*/
const contactUs_01_PassportPost = (
    '/login1',
    passport.authenticate('login1', {
        successRedirect: '/iVoteBallot',
        failureRedirect: '/contactUs_01',
        failureFlash: true 
}));

/*
	This JavaScript coded language creates a connection to the SQLite3 database with the
	filename 'contactUs_01.db'. And, the 'new' keyword is used to create a new instance
	of the 'sqlite3.Database' class. The code includes error handling, where if an error
	occurs during the connection process, an error message is logged to the console, 
	otherwise, a success message is logged. This code is used in an iVoteBallot web applications; 
	in order to interact with SQLite3 databases, which are lightweight and commonly used for
	local back-end storage.
*/
const db1 = new sqlite3.Database('contactUs_01.db', err => {
    if (err) {
        console.log('Developer has created the SQLite3 database connection from her JavaScript codes language which has a generated an error, as ' + err + '.');
    }else {
        console.log('Developer has created the SQLite3 database connection from her JavaScript codes language which has a generated successfully connection.');
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
	const sqlTable =  (`CREATE TABLE IF NOT EXISTS ContactUs_01 (
		ID INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, 
		userDate DATETIME NOT NULL DEFAULT (datetime(CURRENT_TIMESTAMP, 'localtime')), 
		userFirstName VARCHAR (150) NOT NULL, 
		userMiddleName VARCHAR (150) NOT NULL, 
		userLastName VARCHAR(150) NOT NULL, 
		userEmail VARCHAR (255) NOT NULL, 
		userConfirmEmail VARCHAR (255) NOT NULL, 
		userQuestion VARCHAR (20) NOT NULL, 
		userConcern VARCHAR (255) NOT NULL, 
		userTextMessage TEXT (4000) NOT NULL, 
		userRandomAlphaNumeric VARCHAR(50) NOT NULL
	)`);
		
	db1.run(sqlTable, (err) => {       
	
		if (err) {
			console.log('Developer created database table is not programmatically coded with an: ' + error + '!');
		} else {
			console.log('Developer has created a Sqlite3 database table which was programmatically coded successfully!');   
		}
	});        
});

/*
	The given JavaScript coded language defines an asynchronous function createContactUs_01_Database
	that handles a POST request to a index.js (server) file. The function extracts data from the
	request body and logs it to the console, and inserts the data into an SQLite3 database table
	named "ContactUs_01" then sends two emails using NodeMailer library:
		1. first one to the iVoteBallot website owner and 
		2  second one to the user who submitted the form. 
	The first email notifies the IVoteBallot website owner of the new contact form submission, 
	and the second email sends a confirmation message to the user. And, the function also handles
	errors than redirects the user to appropriate web pages.
*/
const createContactUs_01_Database = 
	async (req, res, next) => {   	

	const data = {		
		userFirstName: req.body.userFirstName,
		userMiddleName: req.body.userMiddleName, 
		userLastName: req.body.userLastName,
		userEmail: req.body.userEmail,
		userConfirmEmail: req.body.userConfirmEmail,
		userQuestion: req.body.userQuestion,
		userConcern: req.body.userConcern,
		userTextMessage: req.body.userTextMessage,		
		userRandomAlphaNumeric: req.body.userRandomAlphaNumeric			
	}    
			
	console.log(req.body);

	console.log('User first name is: ' + data.userFirstName + '.');
	console.log('User middle name is: ' + data.userMiddleName + '.');
	console.log('User last name is: ' + data.userLastName + '.');
	console.log('User email address is: ' + data.userEmail + '.');
	console.log('User confirm email address is: ' + data.userConfirmEmail + '.');
	console.log('User selected answer is: ' + data.userQuestion + '.');
	console.log('User selected concern is: ' + data.userConcern + '.');
	console.log('User text message is: ' + data.userTextMessage + '.');		
	console.log('User email confirmation number is: ' + data.userRandomAlphaNumeric + '.');	
	console.log(req.session);

	const sqlInsert = 'INSERT INTO ContactUs_01 (userFirstName, userMiddleName, userLastName, userEmail, userConfirmEmail, userQuestion, userConcern, userTextMessage, userRandomAlphaNumeric) VALUES (?,?,?,?,?,?,?,?,?)';
	const params = [data.userFirstName, data.userMiddleName, data.userLastName, data.userEmail, data.userConfirmEmail, data.userQuestion, data.userConcern, data.userTextMessage, data.userRandomAlphaNumeric];
	
	await db1.run(sqlInsert, params, function (err, result) {
		if (err) {
			res.redirect('/500');
			console.log('An syntax error has occurred during user\s contact us input fields from DOM submission with a 500 error message webpage display onto the user device screen.'); 
						
		} else {
			console.log('The user data information typed into the input fields section has been successfully parsed into the AccouNetrics\s SQLite3 database. ' + Date());
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
			subject: `CEO/Manager | The iVoteBallot have received a New User Online Email Concern[s]`,  
			html: ` 
			
				<p>The following user has submitted an online concern:</p>
				<ul>
					<li>
						Name: ${req.body.userFirstName} ${req.body.userLastName}
					</li>
					<li>
						Email: ${req.body.userEmail}
					</li>
					<li>
						Concern: ${req.body.userConcern}
					</li>
					<li>
						Message: ${req.body.userTextMessage}
					</li>
				</ul>

				<p>
					And, the user confirmation number, ${req.body.userRandomAlphaNumeric}, has been generated for 
					this concern and forwarded to the customer care services team.
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
			subject: `Notification from iVoteBallot's Customer Care Services`,			
			html: 			
				`			
				<p>Dear ${req.body.userFirstName} ${req.body.userLastName},</p>
				
				<p>
					Thank you for reaching out to iVoteBallot's Customer Care Services regarding your
					${req.body.userConcern}	concern: 
					<br>
					<br>
					${req.body.userTextMessage}
				</p>
							
				<p>
					We understand the importance of resolving your concerns promptly and ensuring your
					seamless experience with iVoteBallot website. Please be assured that our iVoteBallot's team is working 
					diligently to resolve your ${req.body.userConcern} concern.
				</p>
				
				<p>
					We have assigned a confirmation number ${req.body.userRandomAlphaNumeric} for your
					${req.body.userConcern} concern. Please keep this number for your reference in case
					you need to follow up on your request with our customer care services team.
				</p>

				Thank you for choosing iVoteBallot, and we hope you have a great day, 
				${req.body.userFirstName}.
				</p>
					
				<p>Respectfully,</p>			
				
				<p>iVoteBallot's Customer Care Team</p>

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
	contactUs_01_Router,
	contactUs_01_PassportGet,
	contactUs_01_PassportPost,
	db1,	
	createContactUs_01_Database	
}
  