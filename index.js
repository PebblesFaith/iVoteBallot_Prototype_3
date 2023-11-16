const express = require('express');

const flash2 = require('connect-flash');

const flash = require('express-flash');

const iVoteBallotApp = express();

const path = require('path');

const ejs = require('ejs');

const sqlite3 = require('sqlite3').verbose();

const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');

const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const sqliteDB = require('better-sqlite3');

const db = new sqliteDB('Alabama_Id_Session.db', { verbose: console.log('The Alabama_Id_Session.db have been successfully created') });

const session = require('express-session');

const AlabamaSqlite3SessionStore = require('better-sqlite3-session-store')(session);

const nodemailer = require('nodemailer');

require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

//const boxicons = require('boxicons');
/*
const pdfDocument = require('pdfkit');
const PDFDocument2 = require('pdfkit');
const fs = require('fs');
*/

const port = 8080; 

iVoteBallotApp.listen(port, '0.0.0.0', function(err) {
    if (err) {
        console.log('There is a problem loading iVoteBallot prototype 2 port 8080' + err);
    } else {    
        console.log('The Nodejs in conjunction with Express framework is listening onto port ' + port + ' from express\' iVoteBallotApp prototype 3.');
    }
});

if (process.env.NODE_ !== 'production') {
	require('dotenv').config();
}

const ALABAMA_SESSION = process.env.ALABAMA_SESSION;
const SESSION_MAX_AGE = process.env.SESSION_MAX_AGE;
const EXPRESS_SESSION_KEY = process.env.EXPRESS_SESSION_KEY;
const IONOS_SECRET_KEY = process.env.IONOS_SECRET_KEY;

const views_Controller = require('./models/views_Router');
const contactUs_01_Controller = require('./models/alabama_Session_Router');
//const alabama_SignUp_01_Controller = require('./models/contactUs_01_Router');
//const alabamaDMV_Commission_01_Controller = require('./models/alabamaDMV_Commission_01_Router');

iVoteBallotApp.set('view engine', 'ejs');

iVoteBallotApp.set('views', './Public/views');
iVoteBallotApp.set('common', './Public/common');

iVoteBallotApp.use(express.urlencoded({ extended: false }));

iVoteBallotApp.use(express.json());

iVoteBallotApp.use(express.static(path.join(__dirname, 'public')));

iVoteBallotApp.use('/', require('./models/views_Router'));
iVoteBallotApp.use(views_Controller);

iVoteBallotApp.use('/', require('./models/alabama_Session_Router'));
iVoteBallotApp.use(contactUs_01_Controller);

/* Middleware to set req.isUnauthenticated for the first use of the
  '/alabamaDMV_Commission_01' URL bar
*/

iVoteBallotApp.use('/alabamaDMV_Commission_01', (req, res, next) => {
    console.log('middleware called!');
    // Check if user is Already authenticated
    if (!req.session.isAuthenticated) {  
      
        // User of '/login' URL
        req.isUnauthenticated = true;
    }
    next();
});

// Middleware to set req.isUnauthenticated for the first use of the '/signup' URL bar

/*
const redirectAlabamaDMV_Commission_01 = (req, res, next) => {
    if(req.session.userId) {
        res.redirect('/ivoteballot');
    } else {
        next();
    }
}

*/

//iVoteBallotApp.use('/', require('./models/alabama_SignUp_01_Router'));
//iVoteBallotApp.use(alabama_SignUp_01_Controller);

//iVoteBallotApp.use('/', require('./models/alabamaDMV_Commission_01_Router'));
//iVoteBallotApp.use(alabamaDMV_Commission_01_Controller);

const db1 = new sqlite3.Database('alabamaDMV_Commission_01.db', err => {
    if (err) {
        console.log('Sarai Hannah Ajai has created the SQLite3 database connection from her written JavaScript coded language for \'alabamaDMV_Commission_01\' which has a generated an error, as ' + err + '.');
    }else {
        console.log('Sarai Hannah Ajai has created the SQLite3 database connection from her written JavaScript coded language which \'alabamaDMV_Commission_01\' has a generated successfully connection.');
    }
});

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

iVoteBallotApp.use(
	session({
		store: new AlabamaSqlite3SessionStore ({
			client: db,
			dir:'Alabama_Id_Session.db',
			name:'ALABAMA_SESSION',
			cookie: {
				secure: true,
				httpOnly: true,
				sameSite: true,
				resave: false,
				saveUninitialized: false,
				maxAge: 'SESSION_MAX_AGE' // 30 minuites in milliseconds
			}
		}),
		secret: 'EXPRESS_SESSION_KEY',
		resave: false
	})
)

iVoteBallotApp.use([passport.initialize()]);

iVoteBallotApp.use(passport.session());

iVoteBallotApp.use(flash());

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

passport.serializeUser(function (user, done) {
    console.log('Serializing user...');
    console.log('user');
    done(null, user.id);
});

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

iVoteBallotApp.use('/alabamaDMV_Commission_01', (req, res, next) => {
	// Check if user has Already been authenticated.
	if(!req.session.isAuthenticated) {
		req.isUnauthenticated = true;
	}
	next();
})

// User route signup
iVoteBallotApp.get('/alabamaDMV_Commission_01',  (req, res) => {    
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
function createAlabamaPDF_Candidates_2024() {

	const stream = fs.createWriteStream('./pdf_Files/alabama_PDF/user_AlabamaCandidates_Selections_2024.pdf');
	const pdf = new pdfDocument();

	pdf.image('./pdf_Files/alabama_Images/iVoteBallotCanva_Logo.png', 10, 25, {width: 150, height: 150});

	const paragraph_01 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Porta lorem mollis aliquam ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Vitae sapien pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Phasellus faucibus scelerisque eleifend donec pretium. Consectetur lorem donec massa sapien. Vel fringilla est ullamcorper eget. Arcu ac tortor dignissim convallis aenean et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Amet venenatis urna cursus eget nunc scelerisque. Sed viverra tellus in hac habitasse platea. Facilisis gravida neque convallis a cras semper auctor neque vitae.';
	const paragraph_02 = 'Tincidunt eget nullam non nisi. Vel facilisis volutpat est velit egestas dui id. Risus sed vulputate odio ut enim blandit volutpat. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Tempus imperdiet nulla malesuada pellentesque. Tempor orci eu lobortis elementum nibh. Facilisi nullam vehicula ipsum a arcu. Et netus et malesuada fames. Senectus et netus et malesuada fames ac turpis. Ac ut consequat semper viverra nam libero justo. Condimentum mattis pellentesque id nibh tortor. Semper risus in hendrerit gravida rutrum. Ultricies integer quis auctor elit sed vulputate. Non odio euismod lacinia at. Vulputate ut pharetra sit amet aliquam id diam. Scelerisque fermentum dui faucibus in ornare.';
	const boldText = 'Times-Bold';
	const normalText = 'Times-Roman';

	pdf.text('Hello World, to the new World Order!', 10, 195);

	pdf.font(boldText).text('I am Learning How to Use the PDFKit Library module.', 10, 210)

	pdf.font(normalText).fillColor('#0d41ff').fontSize('15').text(paragraph_01, 25, 230);
	pdf.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_02, 25, 425);

	pdf.addPage();

	pdf.rect(5, 20, 560, 200).stroke('#0d41ff');
	pdf.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_01, 25, 25);
	pdf.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', {link: 'http://localhost:8080/alabama_Candidates_2024'});

	pdf.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', {link: 'downloadPDF()'});

	pdf.pipe(stream);	

	pdf.end();

	console.log('The user\'s have successfully created an Alabama PDF candidates file final results');

}

createAlabamaPDF_Candidates_2024();

function downloadPDF() {	
	  
	const stream = fs.createWriteStream('./pdf_Files/alabama_PDF/user_AlabamaCandidates_Selections_2024_02.pdf');
	const pdf2 = new PDFDocument2();

	pdf2.image('./pdf_Files/alabama_Images/iVoteBallotCanva_Logo.png', 10, 25, { width: 150, height: 150 });

	const paragraph_01 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Porta lorem mollis aliquam ut. Nam libero justo laoreet sit amet cursus sit amet dictum. Vitae sapien pellentesque habitant morbi tristique senectus et. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Dictum fusce ut placerat orci nulla pellentesque dignissim enim. Phasellus faucibus scelerisque eleifend donec pretium. Consectetur lorem donec massa sapien. Vel fringilla est ullamcorper eget. Arcu ac tortor dignissim convallis aenean et. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Amet venenatis urna cursus eget nunc scelerisque. Sed viverra tellus in hac habitasse platea. Facilisis gravida neque convallis a cras semper auctor neque vitae.';
	const paragraph_02 = 'Tincidunt eget nullam non nisi. Vel facilisis volutpat est velit egestas dui id. Risus sed vulputate odio ut enim blandit volutpat. Sem fringilla ut morbi tincidunt augue interdum velit euismod in. Tempus imperdiet nulla malesuada pellentesque. Tempor orci eu lobortis elementum nibh. Facilisi nullam vehicula ipsum a arcu. Et netus et malesuada fames. Senectus et netus et malesuada fames ac turpis. Ac ut consequat semper viverra nam libero justo. Condimentum mattis pellentesque id nibh tortor. Semper risus in hendrerit gravida rutrum. Ultricies integer quis auctor elit sed vulputate. Non odio euismod lacinia at. Vulputate ut pharetra sit amet aliquam id diam. Scelerisque fermentum dui faucibus in ornare.';
	const boldText = 'Times-Bold';
	const normalText = 'Times-Roman';

	pdf2.text('Hello World, to the new World Order x 222222 x 333333 x 5555555!', 10, 195);

	pdf2.font(boldText).text('I am Learning How to Use the PDFKit Library module.', 10, 210);

	pdf2.font(normalText).fillColor('#0d41ff').fontSize('15').text(paragraph_01, 25, 230);
	pdf2.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_02, 25, 425);

	pdf2.addPage();

	pdf2.rect(5, 20, 560, 200).stroke('#0d41ff');
	pdf2.font(normalText).fillColor('#0c91818').fontSize('15').text(paragraph_01, 25, 25);
	pdf2.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', { link: 'http://localhost:8080/alabama_Candidates_2024' });

	pdf2.fillColor('#0d41ff').fontSize('15').text('iVoteBallot', { link: 'downloadPDF()' });

	pdf2.pipe(stream);
	pdf2.end();

	console.log("The user had successfully download the Alabama PDF candidates file  have been successfully created.");
}

downloadPDF();
*/


// This is your test secret API key.
/*
iVoteBallotApp.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
        price: 'price_1NyiWdHvyzFhhzdWjaN2p9Fm',
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${port}/success.html`,
    cancel_url: `${port}/cancel.html`,
  });

  res.redirect(303, session.url);
});

*/

iVoteBallotApp.get('/alabamaDMV_Commission_01', (req, res) => {
    if (req.isAuthenticated()) {
        console.log(req.user);
        console.log('Request Session:' + req.session)
        console.log('' + req.logIn);
        console.log('The User had been successfully authenticated within the Session through the passport from the iVoteBallot\'s employee direct user posting to the \'alabamaDMV_Commission_01\' webpage!');
        res.render('login1');
    } else {
        res.render('500')       
        console.log('The user is not successfully authenticated within the session through the passport from the iVoteBallot\'s employee direct user posting to the \'alabamaDMV_Commission_01\' webpage!');
    }
});

iVoteBallotApp.post(
    '/alabama_DMV_Commission_01',
    passport.authenticate('login2', {
        successRedirect: '/iVoteBallot',
        failureRedirect: '/alabamaDMV_Commission_01',
        failureFlash: true 
	}
));


iVoteBallotApp.post('/alabamaDMV_Commission_01',
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
		
	});
	
	

});

