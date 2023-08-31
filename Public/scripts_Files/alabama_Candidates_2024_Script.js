var getslide = document.querySelectorAll('.main-box li').length - 1;

	var slidecal = (30 / getslide) + '%';

	var boxes = document.querySelectorAll('.box');
		for (var i = 0; i < boxes.length; i++) {
		boxes[i].style.width = slidecal;

		boxes[i].addEventListener('click', function() {
			var boxes = document.querySelectorAll('.box');
			for (var j = 0; j < boxes.length; j++) {
			boxes[j].classList.remove('active');
			}
			this.classList.add('active');
		});
	}

function displaySelections() {
	const alabamaUserSelections_Candidates2024 = document.getElementById('alabamaSelected_Candidates2024_Form');
	const userSelected_President = alabamaUserSelections_Candidates2024.elements['userPresident'].value;
	const userSelected_AlabamaGovernor = alabamaUserSelections_Candidates2024.elements['userGovernor'].value;
	const userSelected_AlabamaLieutenantGovernor = alabamaUserSelections_Candidates2024.elements['userLieutenantGovernor'].value;
	const userSelected_AlabamaAttorneyGeneral = alabamaUserSelections_Candidates2024.elements['userAttorneyGeneral'].value;
	const userSelected_AlabamaSecretaryofState = alabamaUserSelections_Candidates2024.elements['userSecretaryofState'].value;
	const userSelected_AlabamaStateTreasurer = alabamaUserSelections_Candidates2024.elements['userStateTreasurer'].value;
	const userSelected_AlabamaStateAuditor = alabamaUserSelections_Candidates2024.elements['userStateAuditor'].value;
	const userSelected_AlabamaAgriculture = alabamaUserSelections_Candidates2024.elements['userAgriculture'].value;
	const userSelected_AlabamaSenator = alabamaUserSelections_Candidates2024.elements['userSenator'].value;
	const userSelected_AlabamaUS1stCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS1stCongressionalDist'].value;
	const userSelected_AlabamaUS2ndCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS2ndCongressionalDist'].value;
	const userSelected_AlabamaUS3rdCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS3rdCongressionalDist'].value;
	const userSelected_AlabamaUS4thCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS4thCongressionalDist'].value;
	const userSelected_AlabamaUS5thCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS5thCongressionalDist'].value;
	const userSelected_AlabamaUS6thCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS6thCongressionalDist'].value;
	const userSelected_AlabamaUS7thCongressionalDist = alabamaUserSelections_Candidates2024.elements['userUS7thCongressionalDist'].value;
	const userSelected_AlabamaPublicServiceCommissionPlace1 = alabamaUserSelections_Candidates2024.elements['userPublicServiceCommission_Place_1'].value;
	const userSelected_AlabamaPublicServiceCommissionPlace2 = alabamaUserSelections_Candidates2024.elements['userPublicServiceCommission_Place_2'].value;
	const userSelected_AlabamaStateBoardofEducationPlace2 = alabamaUserSelections_Candidates2024.elements['userStateBoardofEducation_Place_2'].value;
	const userSelected_AlabamaStateBoardofEducationPlace4 = alabamaUserSelections_Candidates2024.elements['userStateBoardofEducation_Place_4'].value;
	const userSelected_AlabamaStateBoardofEducationPlace6 = alabamaUserSelections_Candidates2024.elements['userStateBoardofEducation_Place_6'].value;
	const userSelected_AlabamaStateBoardofEducationPlace8 = alabamaUserSelections_Candidates2024.elements['userStateBoardofEducation_Place_8'].value;
	const userSelected_AlabamaSupremeCourtPlace5 = alabamaUserSelections_Candidates2024.elements['userSupremeCourt_Place_5'].value;
	const userSelected_AlabamaSupremeCourtPlace6 = alabamaUserSelections_Candidates2024.elements['userSupremeCourt_Place_6'].value;

	let selectedCandidatesText = '1 | President of the United States: ' + userSelected_President + '<br>';
	selectedCandidatesText += '2 | Governor of the State of Alabama: ' + userSelected_AlabamaGovernor + '<br>';
	selectedCandidatesText += ' 3 | Lieutenant Governor of the State of Alabama: ' + userSelected_AlabamaLieutenantGovernor + ' <br>';
	selectedCandidatesText += ' 4 | Attorney General of the State of Alabama: ' + userSelected_AlabamaAttorneyGeneral + ' <br>';
	selectedCandidatesText += ' 5 | Secretary of State of the State of Alabama: ' + userSelected_AlabamaSecretaryofState + '<br>';
	selectedCandidatesText += ' 6 | State Trasurer of the State of Alabama: ' + userSelected_AlabamaStateTreasurer + ' <br>';
	selectedCandidatesText += ' 7 | State Auditor of the State of Alabama: ' + userSelected_AlabamaStateAuditor + ' <br>';
	selectedCandidatesText += ' 8 | Agriculture of the State of Alabama: ' + userSelected_AlabamaAgriculture + ' <br>';
	selectedCandidatesText += ' 9 | Senator of the State of Alabama: ' + userSelected_AlabamaSenator + ' <br>';
	selectedCandidatesText += '10 | 1st Congressional District of the United States: ' + userSelected_AlabamaUS1stCongressionalDist + ' <br>';
	selectedCandidatesText += '11 | 2nd Congressional District of the United States: ' + userSelected_AlabamaUS2ndCongressionalDist + ' <br>';
	selectedCandidatesText += '12 | 3rd Congressional District of the United States: ' + userSelected_AlabamaUS3rdCongressionalDist + ' <br>';
	selectedCandidatesText += '13 | 4th Congressional District of the United States: ' + userSelected_AlabamaUS4thCongressionalDist + ' <br>';
	selectedCandidatesText += '14 | 5th Congressional District of the United States: ' + userSelected_AlabamaUS5thCongressionalDist + ' <br>';
	selectedCandidatesText += '15 | 6th Congressional District of the United States: ' + userSelected_AlabamaUS6thCongressionalDist + ' <br>';
	selectedCandidatesText += '16 | 7th Congressional District of the United States: ' + userSelected_AlabamaUS7thCongressionalDist + ' <br>';
	selectedCandidatesText += '17 | Public Service Commission District - Place 1 of the State of Alabama: ' + userSelected_AlabamaPublicServiceCommissionPlace1 + ' <br>';
	selectedCandidatesText += '18 | Public Service Commission District - Place 2 of the State of Alabama: ' + userSelected_AlabamaPublicServiceCommissionPlace2 + ' <br>';
	selectedCandidatesText += '19 | State Board of Education - Place 2 of the State of Alabama: ' + userSelected_AlabamaStateBoardofEducationPlace2 + ' <br>';
	selectedCandidatesText += '20 | State Board of Education - Place 4 of the State of Alabama: ' + userSelected_AlabamaStateBoardofEducationPlace4 + ' <br>';
	selectedCandidatesText += '21 | State Board of Education - Place 6 of the State of Alabama: ' + userSelected_AlabamaStateBoardofEducationPlace6 + ' <br>';
	selectedCandidatesText += '22 | State Board of Education - Place 8 of the State of Alabama: ' + userSelected_AlabamaStateBoardofEducationPlace8 + ' <br>';
	selectedCandidatesText += '23 | Supreme Court - Place 5 of the State of Alabama: ' + userSelected_AlabamaSupremeCourtPlace5 + ' <br>';
	selectedCandidatesText += '24 | Supreme Court - Place 6 of the State of Alabama: ' + userSelected_AlabamaSupremeCourtPlace6 + ' <br>';
	
	// Set the selectedCandidatesText to the 'selectedCandidatesText' paragraph
	const selectedCandidatesParagraph = document.getElementById('selectedCandidatesText');
	selectedCandidatesParagraph.innerHTML = selectedCandidatesText;

	// Display the popup modal
	const userCandidatesSelectionsModal = document.getElementById('userCandidatesVerification_2024');
	userCandidatesSelectionsModal.style.display = 'block';

	// Get the <span> element that closes the popupModal
	const span = document.getElementsByClassName('close')[0];

	// When the user clicks on the <span> tag (x) will close the popupModal
	span.onclick = () => {
		userCandidatesSelectionsModal.style.display = 'none';
	}

}	

function printContent() {
	var printWindow = window.open('', '_blank');
	var selectedCandidatesText = document.getElementById('selectedCandidatesText').innerHTML;	
	
	var htmlContent = '<html>' +
		'<head>' +	
			'<style>' +
				'@font-face {' +
				'	font-family: "Megrim-Regular";' +
				'	src: url(../fonts/Source_Code_Pro/SourceCodePro-SemiBold.ttf) format("truetype");' +
				' 	font-weight: normal;' +				
				'}' +
				'#header_Image_01 {' +
				'	display: inline-block;' +										
				'}' +
				'#wrapImage {' +
				'	display: flex;' +
				'	justify-content: center;' +
				'	align-items: center;' +
				'}' +
				'#imageTitle {' +
				'   color: #0d41ff;' +
				'   font-family: Megrim-Regular, Cambria, Cochin, Georgia, Times, serif;' +
				'	font-size: clamp(16px, 2vw, 18px);' +
				'	text-align: center;' +
				'}' +
				'#section_Title {' +
				'   color: #c91818;' +
				'   font-family: Megrim-Regular, Cambria, Cochin, Georgia, Times, serif;' +
				'	font-size: clamp(14px, 2vw, 16px);' +
				'	text-align: center;' +
				'}' +
				'#selectedCandidatesText {' +
				'   color: #0d41ff;' +
				'   font-family: Megrim-Regular, Cambria, Cochin, Georgia, Times, serif;' +
				'	font-size: clamp(10px, 2vw, 12px);' +
				'}' +
			'</style>' +							
		'</head>' +
		'<body>' +	

			'<div id="wrapImage">' +
				'<img id="header_Image_01" src="../images/free_Canva_Created_Images/iVoteBallot Canva - Logo Dated 05-05-23 copy.png" alt="Image" width="100" height="100" />' +										
			'</div>' +
			'<div id="imageHeader">' +
				'<p id="imageTitle">2024 Selected Candidates</p>' +
			'</div>' +
			'<p id="section_Title">Here are Your Federal and Alabama State Selected 2024 Candidates</p>' +
			'<p id="selectedCandidatesText">' + selectedCandidatesText + '</p>' +
		'</body>' +
		'</html>';

	printWindow.document.write(htmlContent);			
	printWindow.document.close('');
	printWindow.print();
}


const alabamaSelectedCandidates2024Form = (e) => { 

	const errorMessages = [
		{ fieldName: 'userPresident', message: 'President Section: You have not selected a Presidential candidate for President.' },
		{ fieldName: 'userGovernor', message: 'Governor Section: You have not selected a Governor candidate for the State of Alabama.' },
		{ fieldName: 'userLieutenantGovernor', message: 'Lieutenant Governor Section: You have not selected a Lieutenant Governor candidate for the State of Alabama.' },
		{ fieldName: 'userAttorneyGeneral', message: 'Attorney General Section: You have not selected a Attorney General candidate for the State of Alabama.' },
		{ fieldName: 'userSecretaryofState', message: 'Secretary of State Section: You have not selected a Secretary of State candidate for the State of Alabama.' },
		{ fieldName: 'userStateTreasurer', message: 'State Treasurer Section: You have not selected a State Treasurer candidate for the State of Alabama.' },
		{ fieldName: 'userStateAuditor', message: 'State Auditor Section: You have not selected a State Auditor candidate for the State of Alabama.' },
		{ fieldName: 'userAgriculture', message: 'Agriculture Section: You have not selected an Agriculture candidate for the State of Alabama.' },
		{ fieldName: 'userSenator', message: 'Senator Section: You have not selected a Senator candidate for the State of Alabama.' },
		{ fieldName: 'userUS1stCongressionalDist', message: 'U.S. 1st Congressional District Section: You have not selected an U.S. 1st Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS2ndCongressionalDist', message: 'U.S. 2nd Congressional District Section: You have not selected an U.S. 2nd Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS3rdCongressionalDist', message: 'U.S. 3rd Congressional District Section: You have not selected an U.S. 3rd Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS4thCongressionalDist', message: 'U.S. 4th Congressional District Section: You have not selected an U.S. 4th Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS5thCongressionalDist', message: 'U.S. 5th Congressional District Section: You have not selected an U.S. 5th Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS6thCongressionalDist', message: 'U.S. 6th Congressional District Section: You have not selected an U.S. 6th Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userUS7thCongressionalDist', message: 'U.S. 7th Congressional District Section: You have not selected an U.S. 7th Congressional District candidate for the State of Alabama.' },
		{ fieldName: 'userPublicServiceCommission_Place_1', message: 'Public Service Commission - Place 1 Section: You have not selected a Public Service Commission - Place 1 candidate for the State of Alabama.' },
		{ fieldName: 'userPublicServiceCommission_Place_2', message: 'Public Service Commission - Place 2 Section: You have not selected a Public Service Commission - Place 2 candidate for the State of Alabama.' },
		{ fieldName: 'userStateBoardofEducation_Place_2', message: 'State Board of Education - Place 2 Section: You have not selected a State Board of Education - Place 2 candidate for the State of Alabama.' },
		{ fieldName: 'userStateBoardofEducation_Place_4', message: 'State Board of Education - Place 4 Section: You have not selected a State Board of Education - Place 4 candidate for the State of Alabama.' },
		{ fieldName: 'userStateBoardofEducation_Place_6', message: 'State Board of Education - Place 6 Section: You have not selected a State Board of Education - Place 6 candidate for the State of Alabama.' },
		{ fieldName: 'userStateBoardofEducation_Place_8', message: 'State Board of Education - Place 8 Section: You have not selected a State Board of Education - Place 8 candidate for the State of Alabama.' },
		{ fieldName: 'userSupremeCourt_Place_5', message: 'Supreme Court - Place 5 Section: You have not selected a Supreme Court - Place 5 candidate for the State of Alabama.' },
		{ fieldName: 'userSupremeCourt_Place_6', message: 'Supreme Court - Place 6 Section: You have not selected a Supreme Court - Place 6 candidate for the State of Alabama.' },
					
	];

	const errorMessageContainer = document.getElementById('errorMessageContainer');

	for (const errorMessage of errorMessages) {
	const input = document.querySelector(`input[name="${errorMessage.fieldName}"]:checked`);

	if (input === '' || input == null) {
		const errorDiv = document.createElement('div');
		errorDiv.textContent = errorMessage.message;
		errorMessageContainer.appendChild(errorDiv);

		setTimeout(function() {
		errorMessageContainer.removeChild(errorDiv);
		}, 9000);

		return false;
	} else {
		// do nothing for now							
								
	}

	console.log('input');
}


	e.preventDefault();                                      

	form.addEventListner('submit', alabamaSelectedCandidates2024Form);
	return true; 

} 
