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


//iVoteBallotApp.use(flash2());

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
        userDMV_FirstName VARCHAR (100) NOT NULL, 
        userDMV_MiddleName VARCHAR (100) NOT NULL, 
        userDMV_LastName VARCHAR(100) NOT NULL,
        userDMV_Suffix VARCHAR(25) NOT NULL,
        userDMV_DateOfBirth VARCHAR(50) NOT NULL,
        userDMV_BirthSex VARCHAR(25) NOT NULL,
        userDMV_GenderIdentity VARCHAR(25) NOT NULL,
        userDMV_Race VARCHAR(250) NOT NULL,
        userDMV_SSN VARCHAR(25) NOT NULL,
        userDMV_Email VARCHAR(150) NOT NULL,
        userDMV_ConfirmEmail VARCHAR(150) NOT NULL,
        userDMV_PhoneNumber VARCHAR(50) NOT NULL,
        userDMV_Address VARCHAR(200) NOT NULL,
        userDMV_UnitType VARCHAR(100) NOT NULL,
        userDMV_UnitTypeNumber VARCHAR(15) NOT NULL,
        userDMV_CountrySelection VARCHAR(100) NOT NULL,
        userDMV_StateSelection VARCHAR(100) NOT NULL,
        userDMV_CountySelection VARCHAR(100) NOT NULL,
        userDMV_CitySelection VARCHAR(100) NOT NULL,
        userDMV_ZipSelection VARCHAR(25) NOT NULL,
        userDMV_IdType VARCHAR(100) NOT NULL,
        userDMV_IdTypeNumber VARCHAR(25) NOT NULL,
        userCommission_IvoteBallotIdIdentifierCode VARCHAR(50) NOT NULL,
        userCommission_IvoteBallotIdCodeBcryptic VARCHAR(50) NOT NULL
        
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
    usernameField: 'userDMV_Email',
    passwordField: 'userCommission_IvoteBallotIdIdentifierCode',
    passReqToCallback: true // To allow request object to be passed to callback
},   
    async (req, userDMV_Email, userCommission_IvoteBallotIdIdentifierCode, done) => {
        console.log('The passport.use(login2) email is: ' + userDMV_Email);
        console.log('The passport.use(login2) password: ' + userCommission_IvoteBallotIdIdentifierCode);
        
        if (!userCommission_IvoteBallotIdIdentifierCode) {
            console.log('User password enter onto the login field:' + userCommission_IvoteBallotIdIdentifierCode);            
            console.log('The user passport.use LocalStrategy password and confirm password does not match');
            return done(null, false, { message: 'Your password and confirm password does not match.'})
            
        } else 
         await db1.get(`SELECT * FROM alabamaDMV_Commission_01 WHERE userDMV_Email = ?`, userDMV_Email, (err, row) => {
            if (err) {
                return done(err);
            }
          
            if (!row) {
                return done(null, false, { message: 'You have entered the incorrect email address.'});
            }
            
             bcrypt.compare(userCommission_IvoteBallotIdIdentifierCode, row.userCommission_IvoteBallotIdIdentifierCode, (err, result) => {
               
                if (err) {
                    return done(err);
                }
                if (!result) {
                    return done(null, false, { message: 'You have entered the incorrect password.'});
                }
                //return done(null, row);

                return done(null, { id: row.id, userDMV_Email:row.userDMV_Email, isAuthenticated: true });

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
      return done(null, { id: row.id, userDMV_Email:row.userDMV_Email, isAuthenticated: true });
    });
  });
               

  / User route /
  iVoteBallotApp.get('/', (req, res) => {
	  // Check if user already authenticated.
	  if (req.session.isAuthenticated) {
		  return alert('You are already logged in!');
	  }
	  // Check if this is the first use of '/ivoteballot' route URL bar
	  if (req.isUnauthenticated) {
		  res.render('ivoteballot');
	  } else {
		  // Render signup page for new users
		  res.render('error404')
	  }  
  });

// User route signup
iVoteBallotApp.get('/alabamaDMV_Commission_01',  (req, res) => {    
    // Check if user already authenticated.
    if (req.session.isAuthenticated) {
        return alert('You are already logged in!');
    }
    console.log(req.session);
    // Check if this is the first use of '/alabamaDMV_Commission_01' route URL bar
    if (req.isUnauthenticated) {
        //console.log(req.flash());
        res.render('alabamaDMV_Commission_01');        
        
    } else {
        console.log(req.flash());        
       
    }  
});

iVoteBallotApp.post(
    '/alabamaDMV_Commission_01',
    passport.authenticate('login2', {
        successRedirect: '/ivoteballot',
        failureRedirect: '/alabamaDMV_Commission_01',
        failureFlash: true 
}));


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

iVoteBallotApp.post(
    '/alabamaDMV_Commission_01',
    passport.authenticate('login2', {
        successRedirect: '/iVoteBallot',
        failureRedirect: '/alabamaDMV_Commission_01',
        failureFlash: true 
}));

iVoteBallotApp.post
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
            userDMV_Email: req.body.userDMV_Email,
            userDMV_ConfirmEmail: req.body.userDMV_ConfirmEmail,
            userDMV_PhoneNumber: req.body.userDMV_PhoneNumber,
            userDMV_Address: req.body.userDMV_Address,
            userDMV_UnitType: req.body.userDMV_UnitType,
            userDMV_UnitTypeNumber: req.body.userDMV_CountrySelection,
            userDMV_CountrySelection: req.body.userDMV_CountrySelection,
            userDMV_StateSelection: req.body.userDMV_StateSelection,
            userDMV_CountySelection: req.body.userDMV_CountySelection,
            userDMV_CitySelection: req.body.userDMV_CitySelection,
            userDMV_ZipSelection: req.body.userDMV_ZipSelection,
            userDMV_IdType: req.body.userDMV_IdType,
            userDMV_IdTypeNumber: req.body.userDMV_IdTypeNumber,
            userCommission_IvoteBallotIdIdentifierCode: req.body.userCommission_IvoteBallotIdIdentifierCode,
            userCommission_IvoteBallotIdCodeBcryptic: req.body.userCommission_IvoteBallotIdCodeBcryptic

        }
			
	console.log(req.body);

	console.log('User first name: ' + data.userDMV_FirstName + '.');
	console.log('User middle name is: ' + data.userDMV_MiddleName + '.');
	console.log('User last name is: ' + data.userDMV_LastName + '.');
	console.log('User suffix is: ' + data.userDMV_Suffix + '.');
	console.log('User date of birth is: ' + data.userDMV_DateOfBirth + '.');
	console.log('User birth sex is: ' + data.userDMV_BirthSex + '.');
	console.log('User gender identity is: ' + data.userDMV_GenderIdentity + '.');
	console.log('User race is: ' + data.userDMV_Race + '.');
	console.log('User SSN is: ' + data.userDMV_SSN + '.');
	console.log('User email is: ' + data.userDMV_Email + '.');
	console.log('User confirm email is: ' + data.userDMV_ConfirmEmail + '.');
	console.log('User phone number is: ' + data.userDMV_PhoneNumber + '.');
	console.log('User address is: ' + data.userDMV_Address + '.');
	console.log('User unit type is: ' + data.userDMV_UnitType + '.');
	console.log('User unit type number is: ' + data.userDMV_UnitTypeNumber + '.');
	console.log('User country selection is: ' + data.userDMV_CountrySelection + '.');
	console.log('User state selection is: ' + data.userDMV_StateSelection + '.');
	console.log('User county selection is: ' + data.userDMV_CountySelection + '.');
	console.log('User city selection is: ' + data.userDMV_CitySelection + '.');
	console.log('User state selection is: ' + data.userDMV_StateSelection + '.');
	console.log('User zip code selection is: ' + data.userDMV_ZipSelection + '.');
	console.log('User Id type is: ' + data.userDMV_IdType + '.');
	console.log('User Id type number is: ' + data.userDMV_IdTypeNumber + '.');
	console.log('User iVoteBallot Id Identifier Code is: ' + data.userCommission_IvoteBallotIdIdentifierCode + '.');
	console.log('User iVoteBallot Id Identifier Code Bcryption is: ' + data.userCommission_IvoteBallotIdCodeBcryptic + '');

	console.log(req.session);

	 // User input data information validation.
	 if (!userDMV_FirstName || !userDMV_MiddleName || !userDMV_LastName ||!userDMV_Suffix ||!userDMV_DateOfBirth ||!userDMV_BirthSex ||!userDMV_GenderIdentity ||!userDMV_Race ||!userDMV_SSN ||!userDMV_Email ||!userDMV_ConfirmEmail ||!userDMV_PhoneNumber ||!userDMV_Address ||!userDMV_UnitType ||!userDMV_UnitTypeNumber ||!userDMV_CountrySelection ||!userDMV_StateSelection ||!userDMV_CountySelection  ||!userDMV_CitySelection ||!userDMV_ZipSelection ||!userDMV_IdType ||!userDMV_IdTypeNumber ||!userCommission_IvoteBallotIdIdentifierCode ||!userCommission_IvoteBallotIdCodeBcryptic) {
		req.flash('error', 'Please fill in all fields');
		return res.redirect('/alabamaDMV_Commission_01');           
	
	} 

	if (userCommission_IvoteBallotIdIdentifierCode !== userCommission_IvoteBallotIdCodeBcryptic) {
		req.flash('error', 'The user\'s iVoteballot Id Identifier Code does not match to the user\'s iVoteballot Id Identifier Code Bcryptic you have entered into the input fields.');
		return res.redirect('/alabamaDMV_Commission_01');        

	} else {
		console.log('The user passwordHashed and confirmPasswordHashed successfully match, and the user is successfully authenticated to the passport and session.');
	}   


	const sqlInsert = 'INSERT INTO alabamaDMV_Commission_01 (userDMV_FirstName, userDMV_MiddleName, userDMV_LastName, userDMV_Suffix, userDMV_DateOfBirth, userDMV_BirthSex, userDMV_GenderIdentity, userDMV_Race, userDMV_SSN, userDMV_Email, userDMV_ConfirmEmail, userDMV_PhoneNumber, userDMV_Address, userDMV_UnitType, userDMV_UnitTypeNumber, userDMV_CountrySelection, userDMV_StateSelection, userDMV_CountySelection, userDMV_CitySelection, userDMV_ZipSelection, userDMV_IdType, userDMV_IdTypeNumber, userCommission_IvoteBallotIdIdentifierCode, userCommission_IvoteBallotIdCodeBcryptic) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
	const params = [data.userDMV_FirstName, data.userDMV_MiddleName, data.userDMV_LastName, data.userDMV_Suffix, data.userDMV_DateOfBirth, data.userDMV_BirthSex, data.userDMV_GenderIdentity, data.userDMV_Race, data.userDMV_SSN, data.userDMV_Email, data.userDMV_ConfirmEmail, data.userDMV_PhoneNumber, data.userDMV_Address, data.userDMV_UnitType, data.userDMV_UnitTypeNumber, data.userDMV_CountrySelection, data.userDMV_StateSelection, data.userDMV_CountySelection, data.userDMV_CitySelection, data.userDMV_ZipSelection, data.userDMV_IdType, data.userDMV_IdTypeNumber, data.userCommission_IvoteBallotIdIdentifierCode, data.userCommission_IvoteBallotIdCodeBcryptic];

	req.flash('Success', 'You are registered and can log in');
	res.redirect('/alabamaDMV_Commission_01');

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
			from: req.body.userDMV_Email,
			to: 'testdevelopmentenvcustomercare@ivoteballot.com', 
			subject: `CEO/Manager | The iVoteBallot have received a New User Online Email Concern[s]`,  
			html: ` 
			
				<p>The following user has submitted an online concern:</p>
				<ul>
					
				</ul>

				
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
			to: req.body.userDMV_Email, 
			subject: `Notification from iVoteBallot's Customer Care Services`,			
			html: 			
				`			
				
				
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

