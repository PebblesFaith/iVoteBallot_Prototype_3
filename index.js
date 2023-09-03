
const express = require('express');

const iVoteBallotApp = express();

const path = require('path');

const ejs = require('ejs');

const bodyParser = require('body-parser');

//const boxicons = require('boxicons');

const pdfDocument = require('pdfkit');
const PDFDocument2 = require('pdfkit');
const fs = require('fs');


const contactUs_01_Controller = require('./models/contactUs_01_Router');

iVoteBallotApp.use(express.urlencoded({ extended: false }));

iVoteBallotApp.use(express.json());

const port = 8080; 

iVoteBallotApp.listen(port, function(err) {
    if (err) {
        console.log('There is a problem loading iVoteBallot prototype 2 port 8080' + err);
    } else {    
        console.log('The Nodejs in conjunction with Express framework is listening onto port ' + port + ' from express\' iVoteBallotApp prototype 2.');
    }
});

iVoteBallotApp.set('view engine', 'ejs');

iVoteBallotApp.set('views', './Public/views');
iVoteBallotApp.set('common', './Public/common');

iVoteBallotApp.use(express.static(path.join(__dirname, 'public')));

iVoteBallotApp.use('/', require('./models/views_Router'));

iVoteBallotApp.use('/', require('./models/contactUs_01_Router'));
iVoteBallotApp.use(contactUs_01_Controller);

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

