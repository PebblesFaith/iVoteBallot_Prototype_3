/*
	Sarai Hannah Ajai have written her JavaScript coded language; in order to 
	creates an instance of the Express routers and defines various routes with
	corresponding controller functions for handling views in a Model-View-Controller
	(MVC) architecture.

	The routes include URLs for displaying error pages (401, 404, 500, 535), 
	as well as pages for displaying the footer, header, About, Contact Us and
	iVoteBallot sections.

	Each route is associated with a specific function defined in the views_Controller
	module that is responsible for rendering the appropriate view.

	Finally, the module exports and the router instances are for use, in other parts 
	of the iVoteBallot web application.
*/

const express = require('express');
const views_Controller = require('../controllers/views_Controller');
const router = express.Router();

router
    .get('/401', views_Controller.view_401);

router
    .get('/404', views_Controller.view_404);

router
    .get('/500', views_Controller.view_500);

router
    .get('/535', views_Controller.view_535);

router
    .get('/about', views_Controller.view_About);

router
    .get('/alabama_Candidates_2024_02', views_Controller.view_alabama_Candidates_2024_02);
    
router
    .get('/alabama_SignUporLogin_01', views_Controller.view_alabama_SignUporLogIn_01),

router
    .get('/alabamaDMV_Commission_01', views_Controller.view_alabamaDMV_Commission_01);

router
    .get('/alabamaVoters_CreatePasswords_01', views_Controller.view_alabamaVoters_CreatePasswords_01);

router
    .get('/alabamaVoters_EmailVerification_01', views_Controller.view_alabamaVoters_EmailVerification_01);

router
    .get('/alabamaVoters_LogIn_01', views_Controller.view_alabamaVoters_LogIn_01);

router
    .get('/alabamaVoters_SignUp_01', views_Controller.view_alabamaVoters_SignUp_01);
    
router
    .get('/alabamaVoters_SignUpLogin_01', views_Controller.view_alabamaVoters_SignUpLogin_01); 

router
    .get('/alabamaVoters_VerifyEmailPassword_01', views_Controller.view_alabamaVoters_VerifyEmailPassword_01);
    
router
    .get('/contactUs_01', views_Controller.view_ContactUs_01);

router
    .get('/dashboard_01', views_Controller.view_Dashboard_01A);

    router
    .get('/helpCenter', views_Controller.view_HelpCenter);

router
    .get('/iVoteBallot', views_Controller.view_iVoteBallot);

router
    .get('/footer', views_Controller.view_Footer);

router
    .get('/header', views_Controller.view_Header);

router
    .get('/test', views_Controller.view_Test);  


module.exports = router;