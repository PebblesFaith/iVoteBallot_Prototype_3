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
    'login1',
    new LocalStrategy({
    usernameField: 'iVoteBallot_Id_Number',
    passwordField: 'Alabama_Id_Card_Number',
    passReqToCallback: true // To allow request object to be passed to callback
},   
    async (req, email, password, done) => {
        console.log('The user passport.use(login1) iVoteBallot Id Card Identifier Code is: ' + iVoteBallot_Id_Number);
        console.log('The user passport.use(login1) Alabama Identification Card Number is: ' + Alabama_Id_Card_Number);
        
        if (!Alabama_Id_Card_Number) {
            console.log('User\s Alabama Identification Card Number enter onto the "What is your Alabama Identification Card Number" field:' + Alabama_Id_Card_Number);            
            console.log('The user passport.use LocalStrategy Alabama Identification Card Number and confirm Alabama Identification Card Number does not match');
            return done(null, false, { message: 'Your Alabama Identification Card Number and confirm  Alabama Identification Card Number does not match.'})
            
        } else 
         await db1.get(`SELECT * FROM users WHERE iVoteBallot_Id_Number = ?`, iVoteBallot_Id_Number,(err, row) => {
            if (err) {
                return done(err);
            }
          
            if (!row) {
                return done(null, false, { message: 'You have entered the incorrect iVoteBallot_Id_Number.'});
            }
            
             bcrypt.compare(Alabama_Id_Card_Number, row.Alabama_Id_Card_Number, (err, result) => {
               
                if (err) {
                    return done(err);
                }
                if (!result) {
                    return done(null, false, { message: 'You have entered the incorrect Alabama Identification Card Number.'});
                }
                //return done(null, row);

                return done(null, { id: row.id,
					 iVoteBallot_Id_Number: row.iVoteBallot_Id_Number,
					 First_Name: row.First_Name, 
					 Middle_Name: row.Middle_Name,
					 Last_Name: row.Last_Name, 
					 Suffix: row.Suffix,
					 Date_Of_Birth: row.Date_Of_Birth,
					 Birth_Sex: row.Birth_Sex,
					 Gender_Identity: row.Gender_Identity,
					 Race: row.Race,
					 Social_Security_Number: row.Social_Security_Number,
					 Email_Address: row.Email_Address,
					 Phone_Number: row.Phone_Number,
					 Address: row.Address,
					 Address_Unit_Type: row.Address_Unit_Type,
					 Unit_Type_Number: row.Unit_Type_Number,
					 Country: row.Country,
					 State: row.State,
					 County: row.County,
					 City: row.City,
					 Zip_Code: row.Zip_Column,
					 Alabama_State_Id_Type: row.Alabama_State_Id_Type,
					 Alabama_Id_Card_Number: row.Alabama_Id_Card_Number,

					 isAuthenticated: true });

            });                
        });       
    }
));
