/*
	The require('express') statement imports the express library, which provides a set of
	functions and tools for building iVoteBallot web applications in Node.js. The router
	objects defined in this module can handle various HTTP methods, such as GET, POST, PUT,
	and DELETE, and specify the corresponding actions to take for each requests.
*/
const express = require('express');

/*
	The alabama_SignUp_01_Router.js file is a router module that handles requests related to the
	contact us form web page within an iVoteBallot web applications in Node.js. The
	require('passport') statement is importing the Passport.js authentication middleware
	library, which is used in conjunction with the contact form; in order to authenticate
	user submissions and/or perform other authentication-related tasks.
*/
const passport = require('passport');

/*
	The body-parser middleware is used to parse the body of incoming requests, which
	is necessary for accessing any user data information submitted through a form on 
	the "Contact Us" web page. This data can then be used to send emails, store text messages,
	and/or perform other actions based on the iVoteBallot application's requirements.
*/
const bodyParser = require('body-parser');

/*
	The statement imports the alabama_SignUp_01_Controller module from the ../controllers directory
	using the require function. This module contains codes that handles the algorithm
	logic for the "alabama_SignUp_01.ejs" form feature of the iVoteBallot web application.
*/
const alabama_SignUp_01_Controller = require('../controllers/alabama_SignUp_01_Controller');
