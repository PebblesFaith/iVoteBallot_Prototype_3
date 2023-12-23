/*
	Sarai Hannah Ajai written JavaScript coded language defines several functions that
	serve as controllers for rendering views to the iVoteBallot web application. 
	These controllers are designed to work with the Model-View-Controller (MVC) 
	architecture requirements, which separates an iVoteBalot application's data 
	(the model), its presentation (the view), and the logic that connects the two
	to the (the controller).

	The views_Controllers.js file requires a views_Router module and a path module.
	It then defines several controller functions that each render a specific view when
	called. The views include a custom 401 error page, a custom 404 error page, a custom
	500 error page, a custom 535 error page, a "footer" page, a "header" page, an "about"	
	page, a "contact us" page, and an "iVote" ballot page.

	Finally, the module.exports statement makes these controller functions available to
	other parts of the iVoteBallot web application that require them.
*/

const views_Router = require('../models/views_Router');
const path = require('path');

const view_401 = (req, res) => {
	res.render('401');
}

const view_404 = (req, res) => {
	res.render('404');
}

const view_500 = (req, res) => {
	res.render('500');
}

const view_535 = (req, res) => {
	res.render('535');
}

const view_About = (req, res) => {
	res.render('about');
}

const view_alabama_Candidates_2024_02 = (req, res) => {
	res.render('alabama_Candidates_2024_02');
}

const view_alabama_SignUporLogIn_01 = (req, res) => {
	res.render('alabama_SignUporLogIn_01');
}

const view_alabamaDMV_Commission_01 = (req, res) => {
	res.render('alabamaDMV_Commission_01');
}

const view_alabamaVoters_CreatePasswords_01 = (req, res) => {
	res.render('alabamaVoters_CreatePasswords_01');
}

const view_alabamaVoters_EmailVerification_01 = (req, res) => {
	res.render('alabamaVoters_EmailVerification_01');
}

const view_alabamaVoters_LogIn_01 = (req, res) => {
	res.render('alabamaVoters_LogIn_01');
}

const view_alabamaVoters_SignUp_01 = (req, res) => {
	res.render('alabamaVoters_SignUp_01');
}

const view_alabamaVoters_SignUpLogin_01 = (req, res) => {
	res.render('alabamaVoters_SignUpLogin_01');
}

const view_alabamaVoters_VerifyEmailPassword_01 = (req, res) => {
	res.render('alabamaVoters_VerifyEmailPassword_01');
}

const view_ContactUs_01 = (req, res) => {
	res.render('contactUs_01');
}

const view_Dashboard_01A = (req, res) => {
	res.render('dashboard_01A');
}

const view_HelpCenter = (req, res) => {
	res.render('helpCenter');
}

const view_iVoteBallot = (req, res) => {
	res.render('iVoteBallot');
}

const view_Footer = (req, res) => {
	res.render('footer');
}

const view_Header = (req, res) => {
	res.render('header');
}

const view_Test = (req, res) => {
	res.render('test');
}

module.exports = {	

	view_401,
	view_404,
	view_500,
	view_535,
	view_About,	
	view_alabama_Candidates_2024_02,
	view_alabama_SignUporLogIn_01,
	view_alabamaDMV_Commission_01,
	view_alabamaVoters_CreatePasswords_01,
	view_alabamaVoters_EmailVerification_01,
	view_alabamaVoters_LogIn_01,
	view_alabamaVoters_SignUp_01,
	view_alabamaVoters_SignUpLogin_01,
	view_alabamaVoters_VerifyEmailPassword_01,	
	view_ContactUs_01,
	view_Dashboard_01A,
	view_HelpCenter,
	view_iVoteBallot,
	view_Footer,	
	view_Header,	
	view_Test,	
	
}
