function open_Navigational_Bar() {
	document.getElementById("side_Navigational").style.width = "100%";
}

function close_Navigational_Bar() {
	document.getElementById("side_Navigational").style.width = "0";
}

let toggleMenu = document.querySelectorAll(".panel-heading");

toggleMenu.forEach(function (items) {
  items.addEventListener("click", function () {
    this.classList.toggle("change_icon");
    let thisParent = items.closest(".panels");
    let thisContent = thisParent.children[1];
    thisContent.classList.toggle("collapse");
  });
});

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


/*

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

*/


/*
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
		}

	//e.preventDefault();    
	
	// Call the displaySelections function
	displaySelections();

	// Call the printContent function
	printContent();


	//e.target.submit()

	//form.addEventListner('submit', printContent, alabamaSelectedCandidates2024Form);
	//return true; 

} 

*/

/*
const alabamaSelectedCandidates2024Form = (e) => {

	const presidentSelected = document.querySelector(`input[name="userPresident"]:checked`);

	if (presidentSelected === '' || presidentSelected == null) {

		document.getElementById('userPresidentErrorMessage').textContent = 'You have not selected a Presidential candidate for your United States President.';

		setTimeout (function() {
			document.getElementById('userPresidentErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const governorSelected = document.querySelector(`input[name="userGovernor"]:checked`);

	if (governorSelected === '' || governorSelected == null) {

		document.getElementById('userGovernorErrorMessage').textContent = 'You have not selected a Governor candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userGovernorErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const ltGovernorSelected = document.querySelector(`input[name="userLieutenantGovernor"]:checked`);

	if (ltGovernorSelected === '' || ltGovernorSelected == null) {

		document.getElementById('userLtGovernorErrorMessage').textContent = 'You have not selected a Lieutenant Governor candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userLtGovernorErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const attyGeneralSelected = document.querySelector(`input[name="userAttorneyGeneral"]:checked`);

	if (attyGeneralSelected === '' || attyGeneralSelected == null) {

		document.getElementById('userAttyGeneralErrorMessage').textContent = 'You have not selected an Attorney General candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userAttyGeneralErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}
	
	const secofStateSelected = document.querySelector(`input[name="userSecretaryofState"]:checked`);

	if (secofStateSelected === '' || secofStateSelected == null) {

		document.getElementById('userSecofStateErrorMessage').textContent = 'You have not selected a Secretary of State candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userSecofStateErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateTreasurerSelected = document.querySelector(`input[name="userStateTreasurer"]:checked`);

	if (stateTreasurerSelected === '' || stateTreasurerSelected == null) {

		document.getElementById('userStateTreasurerErrorMessage').textContent = 'You have not selected a State Treasurer candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateTreasurerErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateAuditorSelected = document.querySelector(`input[name="userStateAuditor"]:checked`);

	if (stateAuditorSelected === '' || stateAuditorSelected == null) {

		document.getElementById('userStateAuditorErrorMessage').textContent = 'You have not selected a State Auditor candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateAuditorErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const agricultureSelected = document.querySelector(`input[name="userAgriculture"]:checked`);

	if (agricultureSelected === '' || agricultureSelected == null) {

		document.getElementById('userArgricultureErrorMessage').textContent = 'You have not selected an Argriculture candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userArgricultureErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const senatorSelected = document.querySelector(`input[name="userSenator"]:checked`);

	if (senatorSelected === '' || senatorSelected == null) {

		document.getElementById('userSenatorErrorMessage').textContent = 'You have not selected a Senator candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userSenatorErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us1stCongDistrictSelected = document.querySelector(`input[name="userUS1stCongressionalDist"]:checked`);

	if (us1stCongDistrictSelected === '' || us1stCongDistrictSelected == null) {

		document.getElementById('userUS1stCongDistrictErrorMessage').textContent = 'You have not selected an US 1st Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS1stCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us2ndCongDistrictSelected = document.querySelector(`input[name="userUS2ndCongressionalDist"]:checked`);

	if (us2ndCongDistrictSelected === '' || us2ndCongDistrictSelected == null) {

		document.getElementById('userUS2ndCongDistrictErrorMessage').textContent = 'You have not selected an US 2nd Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS2ndCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us3rdCongDistrictSelected = document.querySelector(`input[name="userUS3rdCongressionalDist"]:checked`);

	if (us3rdCongDistrictSelected === '' || us3rdCongDistrictSelected == null) {

		document.getElementById('userUS3rdCongDistrictErrorMessage').textContent = 'You have not selected an US 3rd Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS3rdCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us4thCongDistrictSelected = document.querySelector(`input[name="userUS4thCongressionalDist"]:checked`);

	if (us4thCongDistrictSelected === '' || us4thCongDistrictSelected == null) {

		document.getElementById('userUS4thCongDistrictErrorMessage').textContent = 'You have not selected an US 4th Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS4thCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us5thCongDistrictSelected = document.querySelector(`input[name="userUS5thCongressionalDist"]:checked`);

	if (us5thCongDistrictSelected === '' || us5thCongDistrictSelected == null) {

		document.getElementById('userUS5thCongDistrictErrorMessage').textContent = 'You have not selected an US 5th Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS5thCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us6thCongDistrictSelected = document.querySelector(`input[name="userUS6thCongressionalDist"]:checked`);

	if (us6thCongDistrictSelected === '' || us6thCongDistrictSelected == null) {

		document.getElementById('userUS6thCongDistrictErrorMessage').textContent = 'You have not selected an US 6th Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS6thCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const us7thCongDistrictSelected = document.querySelector(`input[name="userUS7thCongressionalDist"]:checked`);

	if (us7thCongDistrictSelected === '' || us7thCongDistrictSelected == null) {

		document.getElementById('userUS7thCongDistrictErrorMessage').textContent = 'You have not selected an US 7th Congressional District candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userUS7thCongDistrictErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const publicSerCommissionPlace_1Selected = document.querySelector(`input[name="userPublicServiceCommission_Place_1"]:checked`);

	if (publicSerCommissionPlace_1Selected === '' || publicSerCommissionPlace_1Selected == null) {

		document.getElementById('userPublicSerCommissonPlace_1ErrorMessage').textContent = 'You have not selected a Public Service Commission - Place 1 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userPublicSerCommissonPlace_1ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const publicSerCommissionPlace_2Selected = document.querySelector(`input[name="userPublicServiceCommission_Place_2"]:checked`);

	if (publicSerCommissionPlace_2Selected === '' || publicSerCommissionPlace_2Selected == null) {

		document.getElementById('userPublicSerCommissonPlace_2ErrorMessage').textContent = 'You have not selected a Public Service Commission - Place 2 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userPublicSerCommissonPlace_2ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateBoardofEduPlace_2Selected = document.querySelector(`input[name="userStateBoardofEducation_Place_2"]:checked`);

	if (stateBoardofEduPlace_2Selected === '' || stateBoardofEduPlace_2Selected == null) {

		document.getElementById('userStateBoardofEduPlace_2ErrorMessage').textContent = 'You have not selected a State Board of Education - Place 2 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateBoardofEduPlace_2ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateBoardofEduPlace_4Selected = document.querySelector(`input[name="userStateBoardofEducation_Place_4"]:checked`);

	if (stateBoardofEduPlace_4Selected === '' || stateBoardofEduPlace_4Selected == null) {

		document.getElementById('userStateBoardofEduPlace_4ErrorMessage').textContent = 'You have not selected a State Board of Education - Place 4 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateBoardofEduPlace_4ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateBoardofEduPlace_6Selected = document.querySelector(`input[name="userStateBoardofEducation_Place_6"]:checked`);

	if (stateBoardofEduPlace_6Selected === '' || stateBoardofEduPlace_6Selected == null) {

		document.getElementById('userStateBoardofEduPlace_6ErrorMessage').textContent = 'You have not selected a State Board of Education - Place 6 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateBoardofEduPlace_6ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const stateBoardofEduPlace_8Selected = document.querySelector(`input[name="userStateBoardofEducation_Place_8"]:checked`);

	if (stateBoardofEduPlace_8Selected === '' || stateBoardofEduPlace_8Selected == null) {

		document.getElementById('userStateBoardofEduPlace_8ErrorMessage').textContent = 'You have not selected a State Board of Education - Place 8 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userStateBoardofEduPlace_8ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const supremeCourtPlace_5Selected = document.querySelector(`input[name="userSupremeCourt_Place_5"]:checked`);

	if (supremeCourtPlace_5Selected === '' || supremeCourtPlace_5Selected == null) {

		document.getElementById('userSupremeCourtPlace_5ErrorMessage').textContent = 'You have not selected a Supreme Court - Place 5 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userSupremeCourtPlace_5ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}

	const supremeCourtPlace_6Selected = document.querySelector(`input[name="userSupremeCourt_Place_6"]:checked`);

	if (supremeCourtPlace_6Selected === '' || supremeCourtPlace_6Selected == null) {

		document.getElementById('userSupremeCourtPlace_6ErrorMessage').textContent = 'You have not selected a Supreme Court - Place 6 candidate for your Alabama State.';

		setTimeout (function() {
			document.getElementById('userSupremeCourtPlace_6ErrorMessage').textContent = '';

		}, 9000)
		
		return false;

	}












//e.preventDefault();                                      

//form.addEventListner('submit', displayShoppingCart());
//return true; 
	
}

*/


/*

// Add event listener for the submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', userCandidatesVerification_2024);	

*/

/*
const shoppingCartButton = document.getElementById('userSelectedCandidates_SubmitButton');
shoppingCartButton.addEventListener('click', form.addEventListener('submit', alabamaSelected_Candidates2024_Form));
form.submit();

*/

//const form = document.getElementById('alabamaSelected_Candidates2024_Form');
//form.submit();

/*
function displayShoppingCart() {
	const alabamaUserSelectionsShoppingCart_Candidates2024 = document.getElementById('alabamaSelected_Candidates2024_Form');
	const userSelectedShoppingCart_President = alabamaUserSelectionsShoppingCart_Candidates2024.elements['userPresident'].value;
	const userSelectedShoppingCart_AlabamaGovernor = alabamaUserSelectionsShoppingCart_Candidates2024.elements['userGovernor'].value;

	
	



	let selectedCandidatesShoppingCart = '1 |  President of the United States: ' + userSelectedShoppingCart_President + '<br>';
	selectedCandidatesShoppingCart += '2 | Governor of the State of Alabama: ' + userSelectedShoppingCart_AlabamaGovernor + '<br>';

	// Set the selectedCandidatesShoppingCart to the 'selectedCandidatesShoppingCart' paragraph
	const selectedCandidatesShoppingCartParagraph = document.getElementById('selectedCandidatesShoppingCart');
	selectedCandidatesShoppingCartParagraph.innerHTML = selectedCandidatesShoppingCart;



	// Display the popup modal
	const userCandidatesShoppingCartSelectionsModal = document.getElementById('userCandidatesShoppingCart_2024');
	userCandidatesShoppingCartSelectionsModal.style.display = 'block';

	// Get the <span> element that closes the popupModal
	const span = document.getElementsByClassName('close')[0];

	// When the user clicks on the <span> tag (x) will close the popupModal
	span.onclick = () => {
		userCandidatesShoppingCartSelectionsModal.style.display = 'none';
	}



}
*/


/*
function printShoppingCartContent() {
	
	var printWindow = window.open('', '_blank');
	var selectedCandidatesShoppingCart = document.getElementById('selectedCandidatesShoppingCart').innerHTML;	
	
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
			'<p id="selectedCandidatesText">' + selectedCandidatesShoppingCart + '</p>' +
		'</body>' +
		'</html>';	

	printWindow.document.write(htmlContent);			
	printWindow.document.close('');
	printWindow.print();

}


function displayShoppingCart() {
	// Get the selected Presidential candidate
	const selectedPresident = document.querySelector('input[name="userPresident"]:checked');
	const presidentName = selectedPresident ? selectedPresident.value : '';
	const presidentImage = selectedPresident ? selectedPresident.parentNode.querySelector('img').src : '';
  
	// Get the selected Governor candidate
	const selectedGovernor = document.querySelector('input[name="userGovernor"]:checked');
	const governorName = selectedGovernor ? selectedGovernor.value : '';
	const governorImage = selectedGovernor ? selectedGovernor.parentNode.querySelector('img').src : '';

	// Get the selected Lieutentant Governor candidate
	const selectedLieutenantGovernor = document.querySelector('input[name="userLieutenantGovernor"]:checked');
	const LieutenantGovernorName = selectedLieutenantGovernor ? selectedLieutenantGovernor.value : '';
	const LieutenantGovernorImage = selectedLieutenantGovernor ? selectedLieutenantGovernor.parentNode.querySelector('img').src : '';

	// Get the selected Attorney General candidate
	const selectedAttorneyGeneral = document.querySelector('input[name="userAttorneyGeneral"]:checked');
	const AttorneyGeneralName = selectedAttorneyGeneral ? selectedAttorneyGeneral.value : '';
	const AttorneyGeneralImage = selectedAttorneyGeneral ? selectedAttorneyGeneral.parentNode.querySelector('img').src : '';

	// Get the selected Secretary of State candidate
	const selectedSecretaryofState = document.querySelector('input[name="userSecretaryofState"]:checked');
	const secretaryofStateName = selectedSecretaryofState ? selectedSecretaryofState.value : '';
	const secretaryofStateImage = selectedSecretaryofState ? selectedSecretaryofState.parentNode.querySelector('img').src : '';

	// Get the selected State Treasurer candidate
	const selectedStateTreasurer = document.querySelector('input[name="userStateTreasurer"]:checked');
	const stateTreasurerName = selectedStateTreasurer ? selectedStateTreasurer.value : '';
	const stateTreasurerImage = selectedStateTreasurer ? selectedStateTreasurer.parentNode.querySelector('img').src : '';

	// Get the selected State Auditor candidate
	const selectedStateAuditor = document.querySelector('input[name="userStateAuditor"]:checked');
	const stateAuditorName = selectedStateAuditor ? selectedStateAuditor.value : '';
	const stateAuditorImage = selectedStateAuditor ? selectedStateAuditor.parentNode.querySelector('img').src : '';

	// Get the selected State Argriculture candidate
	const selectedAgriculture = document.querySelector('input[name="userAgriculture"]:checked');
	const agricultureName = selectedAgriculture ? selectedAgriculture.value : '';
	const agricultureImage = selectedAgriculture ? selectedAgriculture.parentNode.querySelector('img').src : '';

	// Get the selected State Senator candidate
	const selectedSenator = document.querySelector('input[name="userSenator"]:checked');
	const senatorName = selectedSenator ? selectedSenator.value : '';
	const senatorImage = selectedSenator ? selectedSenator.parentNode.querySelector('img').src : '';

	// Get the United States 1st Congressional District candidate
	const selectedUS1stCongressionalDist = document.querySelector('input[name="userUS1stCongressionalDist"]:checked');
	const us1stCongressionalDistName = selectedUS1stCongressionalDist ? selectedUS1stCongressionalDist.value : '';
	const us1stCongressionalDistImage = selectedUS1stCongressionalDist ? selectedUS1stCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 2nd Congressional District candidate
	const selectedUS2ndCongressionalDist = document.querySelector('input[name="userUS2ndCongressionalDist"]:checked');
	const us2ndCongressionalDistName = selectedUS2ndCongressionalDist ? selectedUS2ndCongressionalDist.value : '';
	const us2ndCongressionalDistImage = selectedUS2ndCongressionalDist ? selectedUS2ndCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 3rd Congressional District candidate
	const selectedUS3rdCongressionalDist = document.querySelector('input[name="userUS3rdCongressionalDist"]:checked');
	const us3rdCongressionalDistName = selectedUS3rdCongressionalDist ? selectedUS3rdCongressionalDist.value : '';
	const us3rdCongressionalDistImage = selectedUS3rdCongressionalDist ? selectedUS3rdCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 4th Congressional District candidate
	const selectedUS4thCongressionalDist = document.querySelector('input[name="userUS4thCongressionalDist"]:checked');
	const us4thCongressionalDistName = selectedUS4thCongressionalDist ? selectedUS4thCongressionalDist.value : '';
	const us4thCongressionalDistImage = selectedUS4thCongressionalDist ? selectedUS4thCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 5th Congressional District candidate
	const selectedUS5thCongressionalDist = document.querySelector('input[name="userUS5thCongressionalDist"]:checked');
	const us5thCongressionalDistName = selectedUS5thCongressionalDist ? selectedUS5thCongressionalDist.value : '';
	const us5thCongressionalDistImage = selectedUS5thCongressionalDist ? selectedUS5thCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 6th Congressional District candidate
	const selectedUS6thCongressionalDist = document.querySelector('input[name="userUS6thCongressionalDist"]:checked');
	const us6thCongressionalDistName = selectedUS6thCongressionalDist ? selectedUS6thCongressionalDist.value : '';
	const us6thCongressionalDistImage = selectedUS6thCongressionalDist ? selectedUS6thCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the United States 7th Congressional District candidate
	const selectedUS7thCongressionalDist = document.querySelector('input[name="userUS7thCongressionalDist"]:checked');
	const us7thCongressionalDistName = selectedUS7thCongressionalDist ? selectedUS7thCongressionalDist.value : '';
	const us7thCongressionalDistImage = selectedUS7thCongressionalDist ? selectedUS7thCongressionalDist.parentNode.querySelector('img').src : '';

	// Get the Public Service Commission Place 1 candidate
	const selectedPublicServiceCommissionPlace_1 = document.querySelector('input[name="userPublicServiceCommission_Place_1"]:checked');
	const publicServiceCommissionPlace_1Name = selectedPublicServiceCommissionPlace_1 ? selectedPublicServiceCommissionPlace_1.value : '';
	const publicServiceCommissionPlace_1Image = selectedPublicServiceCommissionPlace_1 ? selectedPublicServiceCommissionPlace_1.parentNode.querySelector('img').src : '';

	// Get the Public Service Commission Place 2 candidate
	const selectedPublicServiceCommissionPlace_2 = document.querySelector('input[name="userPublicServiceCommission_Place_2"]:checked');
	const publicServiceCommissionPlace_2Name = selectedPublicServiceCommissionPlace_2 ? selectedPublicServiceCommissionPlace_2.value : '';
	const publicServiceCommissionPlace_2Image = selectedPublicServiceCommissionPlace_2 ? selectedPublicServiceCommissionPlace_2.parentNode.querySelector('img').src : '';

	// Get the State Board of Education - Place 2 candidate
	const selectedStateBoardofEdu_Place_2 = document.querySelector('input[name="userStateBoardofEducation_Place_2"]:checked');
	const stateBoardofEdu_Place_2Name = selectedStateBoardofEdu_Place_2 ? selectedStateBoardofEdu_Place_2.value : '';
	const stateBoardofEdu_Place_2Image = selectedStateBoardofEdu_Place_2 ? selectedStateBoardofEdu_Place_2.parentNode.querySelector('img').src : '';

	// Get the State Board of Education - Place 4 candidate
	const selectedStateBoardofEdu_Place_4 = document.querySelector('input[name="userStateBoardofEducation_Place_4"]:checked');
	const stateBoardofEdu_Place_4Name = selectedStateBoardofEdu_Place_4 ? selectedStateBoardofEdu_Place_4.value : '';
	const stateBoardofEdu_Place_4Image = selectedStateBoardofEdu_Place_4 ? selectedStateBoardofEdu_Place_4.parentNode.querySelector('img').src : '';

	// Get the State Board of Education - Place 6 candidate
	const selectedStateBoardofEdu_Place_6 = document.querySelector('input[name="userStateBoardofEducation_Place_6"]:checked');
	const stateBoardofEdu_Place_6Name = selectedStateBoardofEdu_Place_6 ? selectedStateBoardofEdu_Place_6.value : '';
	const stateBoardofEdu_Place_6Image = selectedStateBoardofEdu_Place_6 ? selectedStateBoardofEdu_Place_6.parentNode.querySelector('img').src : '';

	// Get the State Board of Education - Place 8 candidate
	const selectedStateBoardofEdu_Place_8 = document.querySelector('input[name="userStateBoardofEducation_Place_8"]:checked');
	const stateBoardofEdu_Place_8Name = selectedStateBoardofEdu_Place_8 ? selectedStateBoardofEdu_Place_8.value : '';
	const stateBoardofEdu_Place_8Image = selectedStateBoardofEdu_Place_8 ? selectedStateBoardofEdu_Place_8.parentNode.querySelector('img').src : '';

	// Get the Supreme Court - Place 5 candidate
	const selectedSupremeCourt_Place_5 = document.querySelector('input[name="userSupremeCourt_Place_5"]:checked');
	const supremeCourt_Place_5Name = selectedSupremeCourt_Place_5 ? selectedSupremeCourt_Place_5.value : '';
	const supremeCourt_Place_5Image = selectedSupremeCourt_Place_5 ? selectedSupremeCourt_Place_5.parentNode.querySelector('img').src : '';

	// Get the Supreme Court - Place 6 candidate
	const selectedSupremeCourt_Place_6 = document.querySelector('input[name="userSupremeCourt_Place_6"]:checked');
	const supremeCourt_Place_6Name = selectedSupremeCourt_Place_6 ? selectedSupremeCourt_Place_6.value : '';
	const supremeCourt_Place_6Image = selectedSupremeCourt_Place_6 ? selectedSupremeCourt_Place_6.parentNode.querySelector('img').src : '';

	// Calculate the total number of selected candidates
	const totalCandidates = (selectedPresident ? 1 : 0) + 
		(selectedGovernor ? 1 : 0) + 
		(selectedLieutenantGovernor ? 1 : 0) + 
		(selectedAttorneyGeneral ? 1 : 0) + 
		(selectedSecretaryofState ? 1 : 0) +
		(selectedStateTreasurer ? 1 : 0) +
		(selectedStateAuditor ? 1 : 0) + 
		(selectedAgriculture ? 1 : 0) +
		(selectedSenator ? 1 : 0) +
		(selectedUS1stCongressionalDist ? 1 : 0) +
		(selectedUS2ndCongressionalDist ? 1 : 0) +
		(selectedUS3rdCongressionalDist ? 1 : 0) +
		(selectedUS4thCongressionalDist ? 1 : 0) +
		(selectedUS5thCongressionalDist ? 1 : 0) +
		(selectedUS6thCongressionalDist ? 1 : 0) +
		(selectedUS7thCongressionalDist ? 1 : 0) +
		(selectedPublicServiceCommissionPlace_1 ? 1 : 0) +
		(selectedPublicServiceCommissionPlace_2 ? 1 : 0) +
		(selectedStateBoardofEdu_Place_2 ? 1 : 0) +
		(selectedStateBoardofEdu_Place_4 ? 1 : 0) +
		(selectedStateBoardofEdu_Place_6 ? 1 : 0) +
		(selectedStateBoardofEdu_Place_8 ? 1 : 0) +
		(selectedSupremeCourt_Place_5 ? 1 : 0) +
		(selectedSupremeCourt_Place_6 ? 1 : 0) 
							
	;

	// Calculate the total cost per candidate
	const totalCostPerCandidate = totalCandidates > 0 ? 15 / totalCandidates : 0;

	// Calculate total cost equal to the total cost per candidate times total number of candidates an iVoteBallot users must paid for our online voting services.
	const totalCost = totalCandidates > 0 ? .625 * totalCandidates : 0;
  
	// Display the selected candidates in the shopping cart
	const selectedCandidatesShoppingCart = document.getElementById('selectedCandidatesShoppingCart');
	selectedCandidatesShoppingCart.innerHTML = `	

	<p style=" font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: clamp(12px, 2vw, 16px); text-align: center; ">Selected Candidates:</p>

	<ul style="list-style-type: none; padding-left: 0;">

		<div class="flex_ShoppingCart_Containter" style="display: flex; flex-direction: row; flex-wrap: wrap; align-items: stretch; width: 100%;">

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center; >

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px">
					
						<img src="${presidentImage}" alt="${presidentName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
				
						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Presidential:</span>
						<span style=style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${presidentName}</span>

					</div>

				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
				
						<img src="${governorImage}" alt="${governorName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
									
						<span style="font-weight: bold; margin-left: 0px margin-top: 5px; display: block;">Governor:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${governorName}</span>

					</div>

				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${LieutenantGovernorImage}" alt="${LieutenantGovernorName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Lieutenant Governor:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${LieutenantGovernorName}</span>

					</div>

				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
					<img src="${AttorneyGeneralImage}" alt="${AttorneyGeneralName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

					<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Attorney General:</span>
					<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${AttorneyGeneralName}</span>

					</div>

				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${secretaryofStateImage}" alt="${secretaryofStateName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Secretary of State:</span>
						<span style="font-style: italic; margin-left:0px; margin-top: 5px; display: block;">${secretaryofStateName}</span>

					</div>

				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
					<img src="${stateTreasurerImage}" alt="${stateTreasurerName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
					<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">State Treasurer:</span>
					<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${stateTreasurerName}</span>

					</div>
		
				</li>

			</div>
			
			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${stateAuditorImage}" alt="${stateAuditorName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">State Auditor:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${stateAuditorName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

				<div style="margin-right: 5px;">
				
					<img src="${agricultureImage}" alt="${agricultureName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

					<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Agriculture:</span>
					<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${agricultureName}</span>

				</div>
			
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${senatorImage}" alt="${senatorName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">Senator:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${senatorName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us1stCongressionalDistImage}" alt="${us1stCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 1st Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us1stCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us2ndCongressionalDistImage}" alt="${us2ndCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 2nd Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us2ndCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us3rdCongressionalDistImage}" alt="${us3rdCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
						
						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 3rd Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us3rdCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>
			
				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us4thCongressionalDistImage}" alt="${us4thCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 4th Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us4thCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us5thCongressionalDistImage}" alt="${us5thCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 5th Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us5thCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us6thCongressionalDistImage}" alt="${us6thCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 6th Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us6thCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${us7thCongressionalDistImage}" alt="${us7thCongressionalDistName}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
						
						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The United States 7th Congressional District:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${us7thCongressionalDistName}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${publicServiceCommissionPlace_1Image}" alt="${publicServiceCommissionPlace_1Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The Public Service Commission Place 1:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${publicServiceCommissionPlace_1Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${publicServiceCommissionPlace_2Image}" alt="${publicServiceCommissionPlace_2Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; margin-top: 5px; display: block;">The Public Service Commission Place 2:</span>
						<span style="font-style: italic; margin-left: 0px; margin-top: 5px; display: block;">${publicServiceCommissionPlace_2Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${stateBoardofEdu_Place_2Image}" alt="${stateBoardofEdu_Place_2Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />
						
						<span style="font-weight: bold; margin-left: 0px; display: block;">The State Board of Education - Place 2:</span>
						<span style="font-style: italic; margin-left: 0px; display: block;">${stateBoardofEdu_Place_2Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${stateBoardofEdu_Place_4Image}" alt="${stateBoardofEdu_Place_4Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; display: block;">The State Board of Education - Place 4:</span>
						<span style="font-style: italic; margin-left: 0px; display: block;">${stateBoardofEdu_Place_4Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${stateBoardofEdu_Place_6Image}" alt="${stateBoardofEdu_Place_6Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; display: block;">The State Board of Education - Place 6:</span>
						<span style="font-style: italic; margin-left: 0px; display: block;">${stateBoardofEdu_Place_6Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${stateBoardofEdu_Place_8Image}" alt="${stateBoardofEdu_Place_8Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; display: block;">The State Board of Education - Place 8:</span>
						<span style="font-style: italic; margin-left: 0px; display: block;">${stateBoardofEdu_Place_8Name}</span>

					</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

				<div style="margin-right: 5px;">
				
					<img src="${supremeCourt_Place_5Image}" alt="${supremeCourt_Place_5Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

					<span style="font-weight: bold; margin-left: 0px; display: block;">The Supreme Court - Place 5:</span>
					<span style="font-style: italic; margin-left: 0px; display: block;">${supremeCourt_Place_5Name}</span>

				</div>
		
				</li>

			</div>

			<div style="display: flex; flex: 1 0 calc(20%); background-color: rgb(255, 255, 255); margin: 10px; text-align: center; line-height: 20px; justify-content: center;>

				<li style="text-decoration: none; display: flex; align-items: center;">

					<div style="margin-right: 5px;">
					
						<img src="${supremeCourt_Place_6Image}" alt="${supremeCourt_Place_6Name}" style="width: 75px; height: 75px; margin-bottom: 5px;" />

						<span style="font-weight: bold; margin-left: 0px; display: block;">The Supreme Court - Place 6:</span>
						<span style="font-style: italic; margin-left: 0px; display: block;">${supremeCourt_Place_6Name}</span>

					</div>
		
				</li>

			</div>

		</div>	

	</ul>

	<hr id="hr_Blue_line_02">	
	  
	<p style=" font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: clamp(12px, 2vw, 16px); text-align: center; " >Total Number of Candidates: ${totalCandidates}</p>
	
	<p style=" font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: clamp(12px, 2vw, 16px); text-align: center; " >Total Cost per Candidate: $${totalCostPerCandidate.toFixed(2)}</p>
	
	<p style=" font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif; font-size: clamp(12px, 2vw, 16px); text-align: center; " >Total Cost: $${totalCost.toFixed(2)}</p>

	<hr id="hr_Blue_line_02">

	<br>

	<ul id="shoppingCart"></ul>	

	<div class="cart_Button">
		<button id="emptyCart">Empty Cart</button>
		<button id="checkOut">Check Out</button>
		
	</div>
		
		`;		 
	 
  }
   
  window.onload = function() {
	displayShoppingCart();
  };

/*

	To ensure that each selected candidate is added to the shopping cart within the
	categories before checkout, the Developer, Sarai Hannah Ajai have performed the following checks:

	1.  When adding a candidate to the cart:

	    -Check if a candidate is already selected for the category.
	    -If a candidate is already selected, show an alert to inform the user and prevent adding another
	     candidate to that category.

	2.   When removing a candidate from the cart:

		-Show a confirmation dialog to the user before proceeding with removal.
        -After removal, set the selected candidate for the category to null in the selectedCandidates
		 object.

*/

const selectedCandidates = {
    userPresident: null,
    userGovernor: null,
    userLieutenantGovernor: null,
    userAttorneyGeneral: null,
	userSecretaryofState: null,
	userStateTreasurer: null,
	userStateAuditor: null,
	userAgriculture: null,
	userSenator: null,
	userUS1stCongressionalDist: null,
	userUS2ndCongressionalDist: null,
	userUS3rdCongressionalDist: null,
	userUS4thCongressionalDist: null,
	userUS5thCongressionalDist: null,
	userUS6thCongressionalDist: null,
	userUS7thCongressionalDist: null,
	userPublicServiceCommission_Place_1: null,
	userPublicServiceCommission_Place_2: null,
	userStateBoardofEducation_Place_2: null,
	userStateBoardofEducation_Place_4: null,
	userStateBoardofEducation_Place_6: null,
	userStateBoardofEducation_Place_8: null,
	userSupremeCourt_Place_5: null,
	userSupremeCourt_Place_6: null,
	"President": null,
	"Governor": null,
	"Lieutenant Governor": null,
	"Attorney General": null,
	"Secretary of State": null,
	"State Treasurer": null,
	"State Auditor": null,
	"Agriculture": null,
	"Senator": null,
	"U.S. 1st Congressional District": null,
	"U.S. 2nd Congressional District": null,
	"U.S. 3rd Congressional District": null,
	"U.S. 4th Congressional District": null,
	"U.S. 5th Congressional District": null,
	"U.S. 6th Congressional District": null,
	"U.S. 7th Congressional District": null,
	"Public Service Commission - Place 1": null,
	"Public Service Commission - Place 2": null,
	"State Board of Education - Place 2": null,
	"State Board of Education - Place 4": null,
	"State Board of Education - Place 6": null,
	"State Board of Education - Place 8": null,
	"Supreme Court - Place 5": null,
	"Supreme Court - Place 6": null,

};

function addToCart() {
	const form = document.getElementById('alabamaSelected_Candidates2024_Form');
	
	const selectedCandidate = form.querySelector('input[type="radio"]:checked');
  
	if (!selectedCandidate) {
	  alert("Please select a candidate before adding to the cart.");
	  return;
	}
  
	const category = selectedCandidate.getAttribute('data-category');
	const candidateText = selectedCandidate.parentElement.textContent.trim();
	const candidateImageSrc = selectedCandidate.parentElement.querySelector('img').src;	
  
	const selectedCandidateData = selectedCandidates[category];
	
  
	if (selectedCandidateData !== null) {
	  alert(`A candidate for ${category} is already selected. If you want to update your selected ${category}, go to your shopping cart and remove your selected ${category} than you are able select a new ${category}.`);
	  return;
	}
  
	selectedCandidates[category] = {
	  candidateText: candidateText,
	  candidateImageSrc: candidateImageSrc,
	};
  
	const cart = document.getElementById('shoppingCart');
	const listItem = createListItem(candidateText, candidateImageSrc, category);
	cart.appendChild(listItem);
  
	// Reset the radio buttons for each category after adding to the cart
	const radioButtons = form.querySelectorAll(`input[type="radio"][data-category="${category}"]`);
	for (const radioButton of radioButtons) {
	  radioButton.checked = false;
	}
	 
	// Update the total number of selected candidates and the total cost
	updateTotalSelectedCandidates();
	updateTotalCostForAllCandidates();

}

/*
The Developer, Sarai Hannah ajai have addressed the HTML injection vulnerability security issues
by ways of using DOM manipulation methods instead of innerHTML. Her updated version of the
"createListItem(candidateText, candidateImageSrc, category)" function avoids the HTML injection
vulnerabilities.
*/
function createListItem(candidateText, candidateImageSrc, category) {
	const listItem = document.createElement('div');
	listItem.setAttribute('data-value', category);
  
	const candidateShoppingCartContainer = document.createElement('div');
	candidateShoppingCartContainer.id = 'candidate_ShoppingCart_Container';
  
	const candidateShoppingCartContainerRow = document.createElement('div');
	candidateShoppingCartContainerRow.id = 'candidate_ShoppingCart_Container_Row';
  
	const candidateShoppingCartContainerColumn = document.createElement('div');
	candidateShoppingCartContainerColumn.id = 'candidate_ShoppingCart_Container_Column';
  
	const wrapShoppingCartImages = document.createElement('div');
	wrapShoppingCartImages.id = 'wrap_ShoppingCart_Images';
  
	const candidateImage = document.createElement('img');
	candidateImage.id = 'candidate_ShoppingCart_Images';
	candidateImage.src = candidateImageSrc;
	candidateImage.alt = 'Candidate Image';
  
	const candidateTextCategory = document.createElement('span');
	candidateTextCategory.id = 'candidateTexts_Category';
	candidateTextCategory.textContent = category + ' Candidate:';
  
	const candidateTextName = document.createElement('p');
	candidateTextName.id = 'candidateTexts_Name';
	candidateTextName.textContent = candidateText;
  
	const removeButton = document.createElement('button');
	removeButton.className = 'trash_Button';
	removeButton.type = 'button';
	removeButton.setAttribute('data-value', category);
	removeButton.addEventListener('click', function () {
	  removeFromCart(this);
	});
  
	const trashContainer = document.createElement('div');
	trashContainer.className = 'trash_Container';
  
	const trashCloseIcon = document.createElement('img');
	trashCloseIcon.className = 'trash_Close_Icon';
	trashCloseIcon.src = '../images/paid_Icon_Finder/2254860_bin_close_empty_trash_dustbin_icon-3 32px.png';
  
	const trashOpenOverlay = document.createElement('div');
	trashOpenOverlay.className = 'trash_Open_Overlay';
  
	const trashOpenIconLink = document.createElement('a');
	trashOpenIconLink.href = '#';
	trashOpenIconLink.className = 'icon';
  
	const trashOpenIcon = document.createElement('img');
	trashOpenIcon.className = 'trash_Open_Icon';
	trashOpenIcon.src = '../images/paid_Icon_Finder/2254914_bin_full_trash_dustbin_garbage_icon-3 32px.png';
  
	trashOpenIconLink.appendChild(trashOpenIcon);
	trashOpenOverlay.appendChild(trashOpenIconLink);
	trashContainer.appendChild(trashCloseIcon);
	trashContainer.appendChild(trashOpenOverlay);
	removeButton.appendChild(trashContainer);
  
	wrapShoppingCartImages.appendChild(candidateImage);
	wrapShoppingCartImages.appendChild(candidateTextCategory);
	wrapShoppingCartImages.appendChild(candidateTextName);
	wrapShoppingCartImages.appendChild(document.createElement('br'));
	wrapShoppingCartImages.appendChild(removeButton);
  
	candidateShoppingCartContainerColumn.appendChild(wrapShoppingCartImages);
	candidateShoppingCartContainerRow.appendChild(candidateShoppingCartContainerColumn);
	candidateShoppingCartContainer.appendChild(candidateShoppingCartContainerRow);
	listItem.appendChild(candidateShoppingCartContainer);
  
	return listItem;	
}


// Function to calculate the total number of selected candidates
function updateTotalSelectedCandidates() {
	const totalSelectedCandidates = getTotalSelectedCandidates();
	document.getElementById('totalSelectedCandidates').textContent = totalSelectedCandidates;

	document.getElementById('totalSelectedCandidates_Icon').textContent = totalSelectedCandidates;
  }
  
// Function to calculate the total cost per candidate
function calculateTotalCostPerCandidate24() {
	const costPerCandidate = 24; // Replace 24 with the actual cost per candidate
	return costPerCandidate;
}

// Function to calculate the total cost per candidate (customized to 0.625 cents)
function calculateTotalCostPerCandidate625() {
	const costPerCandidate = 0.625; 
	return costPerCandidate;
}

const totalCost625 = parseFloat(calculateTotalCostPerCandidate625());
const totalCost24 = calculateTotalCostPerCandidate24();

// Function to calculate the total cost for all candidates  
function updateTotalCostForAllCandidates() {
	const totalSelectedCandidates = getTotalSelectedCandidates();
	const totalCostPerCandidate = calculateTotalCostPerCandidate625(); // Use the customized 0.625 cents function
	const totalCost = totalSelectedCandidates * totalCostPerCandidate;
	const roundedTotalCost = Math.round(totalCost); // Round the total cost to the nearest dollar

	// Display the rounded total cost
	document.getElementById('totalCost').textContent = roundedTotalCost.toFixed(2);

	// Update the actual total cost with the rounded value
	const actualTotalCost = totalSelectedCandidates * parseFloat(calculateTotalCostPerCandidate625());
	document.getElementById('actualTotalCost').textContent = actualTotalCost.toFixed(2);

  }  
 
// Function to get the total number of selected candidates
function getTotalSelectedCandidates() {
	let count = 0;
	for (const category in selectedCandidates) {
	  if (selectedCandidates[category] !== null) {
		count++;
	  }
	}
	return count;
}

function removeFromCart(button) {
	const categoryToRemove = button.getAttribute('data-value');
	const listItem = document.querySelector(`div[data-value="${categoryToRemove}"]`);
  
	// Show a confirmation dialog to the user
	const confirmRemove = confirm(`Are you sure you want to remove the candidate from the ${categoryToRemove} shopping cart category?`);
  
	// If the user confirms, proceed with removing the candidate
	if (confirmRemove) {
	  // Remove the candidate from the selectedCandidates object
	  selectedCandidates[categoryToRemove] = null;
  
	  // Remove the candidate from the shopping cart display
	  if (listItem) {
		listItem.remove();
	  }
  
	  // Update the total number of selected candidates and the total cost
	  updateTotalSelectedCandidates();
	  updateTotalCostForAllCandidates();
	}
}

/* Get Presidential Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_FC001_24 = document.getElementById('candidateScoreSheet_Modal_FC001_24');
const candidateScoreSheet_Modal_FC002_24 = document.getElementById('candidateScoreSheet_Modal_FC002_24');
const candidateScoreSheet_Modal_FC003_24 = document.getElementById('candidateScoreSheet_Modal_FC003_24');

/* Get Governor Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL001_24 = document.getElementById('candidateScoreSheet_Modal_AL001_24');
const candidateScoreSheet_Modal_AL002_24 = document.getElementById('candidateScoreSheet_Modal_AL002_24');
const candidateScoreSheet_Modal_AL003_24 = document.getElementById('candidateScoreSheet_Modal_AL003_24');
const candidateScoreSheet_Modal_AL004_24 = document.getElementById('candidateScoreSheet_Modal_AL004_24');
const candidateScoreSheet_Modal_AL005_24 = document.getElementById('candidateScoreSheet_Modal_AL005_24');
const candidateScoreSheet_Modal_AL006_24 = document.getElementById('candidateScoreSheet_Modal_AL006_24');
const candidateScoreSheet_Modal_AL007_24 = document.getElementById('candidateScoreSheet_Modal_AL007_24');
const candidateScoreSheet_Modal_AL008_24 = document.getElementById('candidateScoreSheet_Modal_AL008_24');
const candidateScoreSheet_Modal_AL009_24 = document.getElementById('candidateScoreSheet_Modal_AL009_24');
const candidateScoreSheet_Modal_AL010_24 = document.getElementById('candidateScoreSheet_Modal_AL010_24');
const candidateScoreSheet_Modal_AL011_24 = document.getElementById('candidateScoreSheet_Modal_AL011_24');
const candidateScoreSheet_Modal_AL012_24 = document.getElementById('candidateScoreSheet_Modal_AL012_24');
const candidateScoreSheet_Modal_AL013_24 = document.getElementById('candidateScoreSheet_Modal_AL013_24');
const candidateScoreSheet_Modal_AL014_24 = document.getElementById('candidateScoreSheet_Modal_AL014_24');
const candidateScoreSheet_Modal_AL015_24 = document.getElementById('candidateScoreSheet_Modal_AL015_24');

/* Get Lieutenant Governor Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL016_24 = document.getElementById('candidateScoreSheet_Modal_AL016_24');

/* Get Attorney General Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL017_24 = document.getElementById('candidateScoreSheet_Modal_AL017_24');
const candidateScoreSheet_Modal_AL018_24 = document.getElementById('candidateScoreSheet_Modal_AL018_24');
const candidateScoreSheet_Modal_AL019_24 = document.getElementById('candidateScoreSheet_Modal_AL019_24');

/* Get Secretary of State Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL020_24 = document.getElementById('candidateScoreSheet_Modal_AL020_24');
const candidateScoreSheet_Modal_AL021_24 = document.getElementById('candidateScoreSheet_Modal_AL021_24');
const candidateScoreSheet_Modal_AL022_24 = document.getElementById('candidateScoreSheet_Modal_AL022_24');
const candidateScoreSheet_Modal_AL023_24 = document.getElementById('candidateScoreSheet_Modal_AL023_24');
const candidateScoreSheet_Modal_AL024_24 = document.getElementById('candidateScoreSheet_Modal_AL024_24');

/* Get State Treasurer Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL025_24 = document.getElementById('candidateScoreSheet_Modal_AL025_24');

/* Get State Auditor Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL026_24 = document.getElementById('candidateScoreSheet_Modal_AL026_24');
const candidateScoreSheet_Modal_AL027_24 = document.getElementById('candidateScoreSheet_Modal_AL027_24');
const candidateScoreSheet_Modal_AL028_24 = document.getElementById('candidateScoreSheet_Modal_AL028_24');

/* Get Agriculture Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL029_24 = document.getElementById('candidateScoreSheet_Modal_AL029_24');

/* Get Senator Candidates ScoreSheet Modals. */


/* Get U.S. Congressional District Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_FC017_24 = document.getElementById('candidateScoreSheet_Modal_FC017_24');
const candidateScoreSheet_Modal_FC018_24 = document.getElementById('candidateScoreSheet_Modal_FC018_24');
const candidateScoreSheet_Modal_FC019_24 = document.getElementById('candidateScoreSheet_Modal_FC019_24');
const candidateScoreSheet_Modal_FC020_24 = document.getElementById('candidateScoreSheet_Modal_FC020_24');
const candidateScoreSheet_Modal_FC021_24 = document.getElementById('candidateScoreSheet_Modal_FC021_24');
const candidateScoreSheet_Modal_FC022_24 = document.getElementById('candidateScoreSheet_Modal_FC022_24');
const candidateScoreSheet_Modal_FC023_24 = document.getElementById('candidateScoreSheet_Modal_FC023_24');
const candidateScoreSheet_Modal_FC024_24 = document.getElementById('candidateScoreSheet_Modal_FC024_24');
const candidateScoreSheet_Modal_FC025_24 = document.getElementById('candidateScoreSheet_Modal_FC025_24');
const candidateScoreSheet_Modal_FC026_24 = document.getElementById('candidateScoreSheet_Modal_FC026_24');
const candidateScoreSheet_Modal_FC027_24 = document.getElementById('candidateScoreSheet_Modal_FC027_24');
const candidateScoreSheet_Modal_FC028_24 = document.getElementById('candidateScoreSheet_Modal_FC028_24');
const candidateScoreSheet_Modal_FC029_24 = document.getElementById('candidateScoreSheet_Modal_FC029_24');
const candidateScoreSheet_Modal_FC030_24 = document.getElementById('candidateScoreSheet_Modal_FC030_24');
const candidateScoreSheet_Modal_FC031_24 = document.getElementById('candidateScoreSheet_Modal_FC031_24');
const candidateScoreSheet_Modal_FC032_24 = document.getElementById('candidateScoreSheet_Modal_FC032_24');
const candidateScoreSheet_Modal_FC033_24 = document.getElementById('candidateScoreSheet_Modal_FC033_24');
const candidateScoreSheet_Modal_FC034_24 = document.getElementById('candidateScoreSheet_Modal_FC034_24');
const candidateScoreSheet_Modal_FC035_24 = document.getElementById('candidateScoreSheet_Modal_FC035_24');
const candidateScoreSheet_Modal_FC036_24 = document.getElementById('candidateScoreSheet_Modal_FC036_24');
const candidateScoreSheet_Modal_FC037_24 = document.getElementById('candidateScoreSheet_Modal_FC037_24');

/* Get Public Service Commission Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL030_24 = document.getElementById('candidateScoreSheet_Modal_AL030_24');
const candidateScoreSheet_Modal_AL031_24 = document.getElementById('candidateScoreSheet_Modal_AL031_24');
const candidateScoreSheet_Modal_AL032_24 = document.getElementById('candidateScoreSheet_Modal_AL032_24');
const candidateScoreSheet_Modal_AL033_24 = document.getElementById('candidateScoreSheet_Modal_AL033_24');
const candidateScoreSheet_Modal_AL034_24 = document.getElementById('candidateScoreSheet_Modal_AL034_24');
const candidateScoreSheet_Modal_AL035_24 = document.getElementById('candidateScoreSheet_Modal_AL035_24');
const candidateScoreSheet_Modal_AL036_24 = document.getElementById('candidateScoreSheet_Modal_AL036_24');

/* Get State Board of Education Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL037_24 = document.getElementById('candidateScoreSheet_Modal_AL037_24');
const candidateScoreSheet_Modal_AL038_24 = document.getElementById('candidateScoreSheet_Modal_AL038_24');
const candidateScoreSheet_Modal_AL039_24 = document.getElementById('candidateScoreSheet_Modal_AL039_24');
const candidateScoreSheet_Modal_AL040_24 = document.getElementById('candidateScoreSheet_Modal_AL040_24');
const candidateScoreSheet_Modal_AL041_24 = document.getElementById('candidateScoreSheet_Modal_AL041_24');
const candidateScoreSheet_Modal_AL042_24 = document.getElementById('candidateScoreSheet_Modal_AL042_24');
const candidateScoreSheet_Modal_AL043_24 = document.getElementById('candidateScoreSheet_Modal_AL043_24');

/* Get Supreme Court Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_AL044_24 = document.getElementById('candidateScoreSheet_Modal_AL044_24');
const candidateScoreSheet_Modal_AL045_24 = document.getElementById('candidateScoreSheet_Modal_AL045_24');
const candidateScoreSheet_Modal_AL046_24 = document.getElementById('candidateScoreSheet_Modal_AL046_24');
const candidateScoreSheet_Modal_AL047_24 = document.getElementById('candidateScoreSheet_Modal_AL047_24');


/* Get Presidential candidates ScoreSheet button which will open their modals. */
const candidateButton_FC001_24 = document.getElementById('candidateButton_FC001_24');
const candidateButton_FC002_24 = document.getElementById('candidateButton_FC002_24');
const candidateButton_FC003_24 = document.getElementById('candidateButton_FC003_24');

/* Get Governor candidates ScoreSheet button which will open their modals. */
const candidateButton_AL001_24 = document.getElementById('candidateButton_AL001_24');
const candidateButton_AL002_24 = document.getElementById('candidateButton_AL002_24');
const candidateButton_AL003_24 = document.getElementById('candidateButton_AL003_24');
const candidateButton_AL004_24 = document.getElementById('candidateButton_AL004_24');
const candidateButton_AL005_24 = document.getElementById('candidateButton_AL005_24');
const candidateButton_AL006_24 = document.getElementById('candidateButton_AL006_24');
const candidateButton_AL007_24 = document.getElementById('candidateButton_AL007_24');
const candidateButton_AL008_24 = document.getElementById('candidateButton_AL008_24');
const candidateButton_AL009_24 = document.getElementById('candidateButton_AL009_24');
const candidateButton_AL010_24 = document.getElementById('candidateButton_AL010_24');
const candidateButton_AL011_24 = document.getElementById('candidateButton_AL011_24');
const candidateButton_AL012_24 = document.getElementById('candidateButton_AL012_24');
const candidateButton_AL013_24 = document.getElementById('candidateButton_AL013_24');
const candidateButton_AL014_24 = document.getElementById('candidateButton_AL014_24');
const candidateButton_AL015_24 = document.getElementById('candidateButton_AL015_24');

/* Get Lieutenant Governor candidates ScoreSheet button which will open their modals. */
const candidateButton_AL016_24 = document.getElementById('candidateButton_AL016_24');

/* Get Attorney General candidates ScoreSheet button which will open their modals. */
const candidateButton_AL017_24 = document.getElementById('candidateButton_AL017_24');
const candidateButton_AL018_24 = document.getElementById('candidateButton_AL018_24');
const candidateButton_AL019_24 = document.getElementById('candidateButton_AL019_24');

/* Get Secretary of State candidates ScoreSheet button which will open their modals. */
const candidateButton_AL020_24 = document.getElementById('candidateButton_AL020_24');
const candidateButton_AL021_24 = document.getElementById('candidateButton_AL021_24');
const candidateButton_AL022_24 = document.getElementById('candidateButton_AL022_24');
const candidateButton_AL023_24 = document.getElementById('candidateButton_AL023_24');
const candidateButton_AL024_24 = document.getElementById('candidateButton_AL024_24');

/* Get State Treasurer candidates ScoreSheet button which will open their modals. */
const candidateButton_AL025_24 = document.getElementById('candidateButton_AL025_24');

/* Get State Auditor candidates ScoreSheet button which will open their modals. */
const candidateButton_AL026_24 = document.getElementById('candidateButton_AL026_24');
const candidateButton_AL027_24 = document.getElementById('candidateButton_AL027_24');
const candidateButton_AL028_24 = document.getElementById('candidateButton_AL028_24');

/* Get Agriculture candidates ScoreSheet button which will open their modals. */
const candidateButton_AL029_24 = document.getElementById('candidateButton_AL029_24');

/* Get Senator candidates ScoreSheet button which will open their modals. */



/* Get U.S. Congressional District candidates ScoreSheet button which will open their modals. */
const candidateButton_FC017_24 = document.getElementById('candidateButton_FC017_24');
const candidateButton_FC018_24 = document.getElementById('candidateButton_FC018_24');
const candidateButton_FC019_24 = document.getElementById('candidateButton_FC019_24');
const candidateButton_FC020_24 = document.getElementById('candidateButton_FC020_24');
const candidateButton_FC021_24 = document.getElementById('candidateButton_FC021_24');
const candidateButton_FC022_24 = document.getElementById('candidateButton_FC022_24');
const candidateButton_FC023_24 = document.getElementById('candidateButton_FC023_24');
const candidateButton_FC024_24 = document.getElementById('candidateButton_FC024_24');
const candidateButton_FC025_24 = document.getElementById('candidateButton_FC025_24');
const candidateButton_FC026_24 = document.getElementById('candidateButton_FC026_24');
const candidateButton_FC027_24 = document.getElementById('candidateButton_FC027_24');
const candidateButton_FC028_24 = document.getElementById('candidateButton_FC028_24');
const candidateButton_FC029_24 = document.getElementById('candidateButton_FC029_24');
const candidateButton_FC030_24 = document.getElementById('candidateButton_FC030_24');
const candidateButton_FC031_24 = document.getElementById('candidateButton_FC031_24');
const candidateButton_FC032_24 = document.getElementById('candidateButton_FC032_24');
const candidateButton_FC033_24 = document.getElementById('candidateButton_FC033_24');
const candidateButton_FC034_24 = document.getElementById('candidateButton_FC034_24');
const candidateButton_FC035_24 = document.getElementById('candidateButton_FC035_24');
const candidateButton_FC036_24 = document.getElementById('candidateButton_FC036_24');
const candidateButton_FC037_24 = document.getElementById('candidateButton_FC037_24');

/* Get Public Service Commission candidates ScoreSheet button which will open their modals. */
const candidateButton_AL030_24 = document.getElementById('candidateButton_AL030_24');
const candidateButton_AL031_24 = document.getElementById('candidateButton_AL031_24');
const candidateButton_AL032_24 = document.getElementById('candidateButton_AL032_24');
const candidateButton_AL033_24 = document.getElementById('candidateButton_AL033_24');
const candidateButton_AL034_24 = document.getElementById('candidateButton_AL034_24');
const candidateButton_AL035_24 = document.getElementById('candidateButton_AL035_24');
const candidateButton_AL036_24 = document.getElementById('candidateButton_AL036_24');

/* Get State Board of Education candidates ScoreSheet button which will open their modals. */
const candidateButton_AL037_24 = document.getElementById('candidateButton_AL037_24');
const candidateButton_AL038_24 = document.getElementById('candidateButton_AL038_24');
const candidateButton_AL039_24 = document.getElementById('candidateButton_AL039_24');
const candidateButton_AL040_24 = document.getElementById('candidateButton_AL040_24');
const candidateButton_AL041_24 = document.getElementById('candidateButton_AL041_24');
const candidateButton_AL042_24 = document.getElementById('candidateButton_AL042_24');
const candidateButton_AL043_24 = document.getElementById('candidateButton_AL043_24');

/* Get Supreme Court candidates ScoreSheet button which will open their modals. */
const candidateButton_AL044_24 = document.getElementById('candidateButton_AL044_24');
const candidateButton_AL045_24 = document.getElementById('candidateButton_AL045_24');
const candidateButton_AL046_24 = document.getElementById('candidateButton_AL046_24');
const candidateButton_AL047_24 = document.getElementById('candidateButton_AL047_24');

/* Get Presidential <span> elements which will close their modals. */
const close_ScoreSheet_FC001_24 = document.getElementsByClassName('close_ScoreSheet_FC001_24')[0];
const close_ScoreSheet_FC002_24 = document.getElementsByClassName('close_ScoreSheet_FC002_24')[0];
const close_ScoreSheet_FC003_24 = document.getElementsByClassName('close_ScoreSheet_FC003_24')[0];

/* Get Governor <span> elements which will close their modals. */
const close_ScoreSheet_AL001_24 = document.getElementsByClassName('close_ScoreSheet_AL001_24')[0];
const close_ScoreSheet_AL002_24 = document.getElementsByClassName('close_ScoreSheet_AL002_24')[0];
const close_ScoreSheet_AL003_24 = document.getElementsByClassName('close_ScoreSheet_AL003_24')[0];
const close_ScoreSheet_AL004_24 = document.getElementsByClassName('close_ScoreSheet_AL004_24')[0];
const close_ScoreSheet_AL005_24 = document.getElementsByClassName('close_ScoreSheet_AL005_24')[0];
const close_ScoreSheet_AL006_24 = document.getElementsByClassName('close_ScoreSheet_AL006_24')[0];
const close_ScoreSheet_AL007_24 = document.getElementsByClassName('close_ScoreSheet_AL007_24')[0];
const close_ScoreSheet_AL008_24 = document.getElementsByClassName('close_ScoreSheet_AL008_24')[0];
const close_ScoreSheet_AL009_24 = document.getElementsByClassName('close_ScoreSheet_AL009_24')[0];
const close_ScoreSheet_AL010_24 = document.getElementsByClassName('close_ScoreSheet_AL010_24')[0];
const close_ScoreSheet_AL011_24 = document.getElementsByClassName('close_ScoreSheet_AL011_24')[0];
const close_ScoreSheet_AL012_24 = document.getElementsByClassName('close_ScoreSheet_AL012_24')[0];
const close_ScoreSheet_AL013_24 = document.getElementsByClassName('close_ScoreSheet_AL013_24')[0];
const close_ScoreSheet_AL014_24 = document.getElementsByClassName('close_ScoreSheet_AL014_24')[0];
const close_ScoreSheet_AL015_24 = document.getElementsByClassName('close_ScoreSheet_AL015_24')[0];

/* Get Lieutenant Governor <span> elements which will close their modals. */
const close_ScoreSheet_AL016_24 = document.getElementsByClassName('close_ScoreSheet_AL016_24')[0];

/* Get Attorney General <span> elements which will close their modals. */
const close_ScoreSheet_AL017_24 = document.getElementsByClassName('close_ScoreSheet_AL017_24')[0];
const close_ScoreSheet_AL018_24 = document.getElementsByClassName('close_ScoreSheet_AL018_24')[0];
const close_ScoreSheet_AL019_24 = document.getElementsByClassName('close_ScoreSheet_AL019_24')[0];

/* Get Secretary of State <span> elements which will close their modals. */
const close_ScoreSheet_AL020_24 = document.getElementsByClassName('close_ScoreSheet_AL020_24')[0];
const close_ScoreSheet_AL021_24 = document.getElementsByClassName('close_ScoreSheet_AL021_24')[0];
const close_ScoreSheet_AL022_24 = document.getElementsByClassName('close_ScoreSheet_AL022_24')[0];
const close_ScoreSheet_AL023_24 = document.getElementsByClassName('close_ScoreSheet_AL023_24')[0];
const close_ScoreSheet_AL024_24 = document.getElementsByClassName('close_ScoreSheet_AL024_24')[0];

/* Get State Treasurer <span> elements which will close their modals. */
const close_ScoreSheet_AL025_24 = document.getElementsByClassName('close_ScoreSheet_AL025_24')[0];

/* Get State Auditor <span> elements which will close their modals. */
const close_ScoreSheet_AL026_24 = document.getElementsByClassName('close_ScoreSheet_AL026_24')[0];
const close_ScoreSheet_AL027_24 = document.getElementsByClassName('close_ScoreSheet_AL027_24')[0];
const close_ScoreSheet_AL028_24 = document.getElementsByClassName('close_ScoreSheet_AL028_24')[0];

/* Get Agriculture <span> elements which will close their modals. */
const close_ScoreSheet_AL029_24 = document.getElementsByClassName('close_ScoreSheet_AL029_24')[0];

/* Get Senator <span> elements which will close their modals. */



/* Get U.S. Congressional District <span> elements which will close their modals. */
const close_ScoreSheet_FC017_24 = document.getElementsByClassName('close_ScoreSheet_FC017_24')[0];
const close_ScoreSheet_FC018_24 = document.getElementsByClassName('close_ScoreSheet_FC018_24')[0];
const close_ScoreSheet_FC019_24 = document.getElementsByClassName('close_ScoreSheet_FC019_24')[0];
const close_ScoreSheet_FC020_24 = document.getElementsByClassName('close_ScoreSheet_FC020_24')[0];
const close_ScoreSheet_FC021_24 = document.getElementsByClassName('close_ScoreSheet_FC021_24')[0];
const close_ScoreSheet_FC022_24 = document.getElementsByClassName('close_ScoreSheet_FC022_24')[0];
const close_ScoreSheet_FC023_24 = document.getElementsByClassName('close_ScoreSheet_FC023_24')[0];
const close_ScoreSheet_FC024_24 = document.getElementsByClassName('close_ScoreSheet_FC024_24')[0];
const close_ScoreSheet_FC025_24 = document.getElementsByClassName('close_ScoreSheet_FC025_24')[0];
const close_ScoreSheet_FC026_24 = document.getElementsByClassName('close_ScoreSheet_FC026_24')[0];
const close_ScoreSheet_FC027_24 = document.getElementsByClassName('close_ScoreSheet_FC027_24')[0];
const close_ScoreSheet_FC028_24 = document.getElementsByClassName('close_ScoreSheet_FC028_24')[0];
const close_ScoreSheet_FC029_24 = document.getElementsByClassName('close_ScoreSheet_FC029_24')[0];
const close_ScoreSheet_FC030_24 = document.getElementsByClassName('close_ScoreSheet_FC030_24')[0];
const close_ScoreSheet_FC031_24 = document.getElementsByClassName('close_ScoreSheet_FC031_24')[0];
const close_ScoreSheet_FC032_24 = document.getElementsByClassName('close_ScoreSheet_FC032_24')[0];
const close_ScoreSheet_FC033_24 = document.getElementsByClassName('close_ScoreSheet_FC033_24')[0];
const close_ScoreSheet_FC034_24 = document.getElementsByClassName('close_ScoreSheet_FC034_24')[0];
const close_ScoreSheet_FC035_24 = document.getElementsByClassName('close_ScoreSheet_FC035_24')[0];
const close_ScoreSheet_FC036_24 = document.getElementsByClassName('close_ScoreSheet_FC036_24')[0];
const close_ScoreSheet_FC037_24 = document.getElementsByClassName('close_ScoreSheet_FC037_24')[0];

/* Get Public Service Commission <span> elements which will close their modals. */
const close_ScoreSheet_AL030_24 = document.getElementsByClassName('close_ScoreSheet_AL030_24')[0];
const close_ScoreSheet_AL031_24 = document.getElementsByClassName('close_ScoreSheet_AL031_24')[0];
const close_ScoreSheet_AL032_24 = document.getElementsByClassName('close_ScoreSheet_AL032_24')[0];
const close_ScoreSheet_AL033_24 = document.getElementsByClassName('close_ScoreSheet_AL033_24')[0];
const close_ScoreSheet_AL034_24 = document.getElementsByClassName('close_ScoreSheet_AL034_24')[0];
const close_ScoreSheet_AL035_24 = document.getElementsByClassName('close_ScoreSheet_AL035_24')[0];
const close_ScoreSheet_AL036_24 = document.getElementsByClassName('close_ScoreSheet_AL036_24')[0];

/* Get State Board of Education <span> elements which will close their modals. */
const close_ScoreSheet_AL037_24 = document.getElementsByClassName('close_ScoreSheet_AL037_24')[0];
const close_ScoreSheet_AL038_24 = document.getElementsByClassName('close_ScoreSheet_AL038_24')[0];
const close_ScoreSheet_AL039_24 = document.getElementsByClassName('close_ScoreSheet_AL039_24')[0];
const close_ScoreSheet_AL040_24 = document.getElementsByClassName('close_ScoreSheet_AL040_24')[0];
const close_ScoreSheet_AL041_24 = document.getElementsByClassName('close_ScoreSheet_AL041_24')[0];
const close_ScoreSheet_AL042_24 = document.getElementsByClassName('close_ScoreSheet_AL042_24')[0];
const close_ScoreSheet_AL043_24 = document.getElementsByClassName('close_ScoreSheet_AL043_24')[0];

/* Get Supreme Court <span> elements which will close their modals. */
const close_ScoreSheet_AL044_24 = document.getElementsByClassName('close_ScoreSheet_AL044_24')[0];
const close_ScoreSheet_AL045_24 = document.getElementsByClassName('close_ScoreSheet_AL045_24')[0];
const close_ScoreSheet_AL046_24 = document.getElementsByClassName('close_ScoreSheet_AL046_24')[0];
const close_ScoreSheet_AL047_24 = document.getElementsByClassName('close_ScoreSheet_AL047_24')[0];

/* When the users clicks onto the Presidential candidates' buttons than their modals will pop up. */
candidateButton_FC001_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC001_24.style.display = "block";
}

candidateButton_FC002_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC002_24.style.display = "block";
}

candidateButton_FC003_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC003_24.style.display = "block";
}


/* When the users clicks onto the Governor candidates' buttons than their modals will pop up. */
candidateButton_AL001_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL001_24.style.display = "block";
}

candidateButton_AL002_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL002_24.style.display = "block";
}

candidateButton_AL003_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL003_24.style.display = "block";
}

candidateButton_AL004_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL004_24.style.display = "block";
}

candidateButton_AL005_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL005_24.style.display = "block";
}

candidateButton_AL006_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL006_24.style.display = "block";
}

candidateButton_AL007_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL007_24.style.display = "block";
}

candidateButton_AL008_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL008_24.style.display = "block";
}

candidateButton_AL009_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL009_24.style.display = "block";
}

candidateButton_AL010_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL010_24.style.display = "block";
}

candidateButton_AL011_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL011_24.style.display = "block";
}

candidateButton_AL012_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL012_24.style.display = "block";
}

candidateButton_AL013_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL013_24.style.display = "block";
}

candidateButton_AL014_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL014_24.style.display = "block";
}

candidateButton_AL015_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL015_24.style.display = "block";
}


/* When the users clicks onto the Lieutenant Governor candidates' buttons than their modals will pop up. */
candidateButton_AL016_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL016_24.style.display = "block";
}

/* When the users clicks onto the Attorney General candidates' buttons than their modals will pop up. */
candidateButton_AL017_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL017_24.style.display = "block";
}

candidateButton_AL018_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL018_24.style.display = "block";
}

candidateButton_AL019_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL019_24.style.display = "block";
}

/* When the users clicks onto the Secretary of State candidates' buttons than their modals will pop up. */
candidateButton_AL020_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL020_24.style.display = "block";
}

candidateButton_AL021_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL021_24.style.display = "block";
}

candidateButton_AL022_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL022_24.style.display = "block";
}

candidateButton_AL023_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL023_24.style.display = "block";
}

candidateButton_AL024_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL024_24.style.display = "block";
}

/* When the users clicks onto the State Treasurer candidates' buttons than their modals will pop up. */
candidateButton_AL025_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL025_24.style.display = "block";
}

/* When the users clicks onto the State Auditor candidates' buttons than their modals will pop up. */
candidateButton_AL026_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL026_24.style.display = "block";
}

candidateButton_AL027_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL027_24.style.display = "block";
}

candidateButton_AL028_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL028_24.style.display = "block";
}

/* When the users clicks onto the Agriculure candidates' buttons than their modals will pop up. */
candidateButton_AL029_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL029_24.style.display = "block";
}

/* When the users clicks onto the U.S. Congressional District candidates' buttons than their modals will pop up. */
candidateButton_FC017_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC017_24.style.display = "block";
}

candidateButton_FC018_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC018_24.style.display = "block";
}

candidateButton_FC019_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC019_24.style.display = "block";
}

candidateButton_FC020_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC020_24.style.display = "block";
}

candidateButton_FC021_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC021_24.style.display = "block";
}

candidateButton_FC022_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC022_24.style.display = "block";
}

candidateButton_FC023_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC023_24.style.display = "block";
}

candidateButton_FC024_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC024_24.style.display = "block";
}

candidateButton_FC025_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC025_24.style.display = "block";
}

candidateButton_FC026_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC026_24.style.display = "block";
}

candidateButton_FC027_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC027_24.style.display = "block";
}

candidateButton_FC028_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC028_24.style.display = "block";
}

candidateButton_FC029_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC029_24.style.display = "block";
}

candidateButton_FC030_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC030_24.style.display = "block";
}

candidateButton_FC031_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC031_24.style.display = "block";
}

candidateButton_FC032_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC032_24.style.display = "block";
}

candidateButton_FC033_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC033_24.style.display = "block";
}

candidateButton_FC034_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC034_24.style.display = "block";
}

candidateButton_FC035_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC035_24.style.display = "block";
}

candidateButton_FC036_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC036_24.style.display = "block";
}

candidateButton_FC037_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC037_24.style.display = "block";
}

/* When the users clicks onto the Public Service Commission candidates' buttons than their modals will pop up. */
candidateButton_AL030_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL030_24.style.display = "block";
}

candidateButton_AL031_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL031_24.style.display = "block";
}

candidateButton_AL032_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL032_24.style.display = "block";
}

candidateButton_AL033_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL033_24.style.display = "block";
}

candidateButton_AL034_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL034_24.style.display = "block";
}

candidateButton_AL035_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL035_24.style.display = "block";
}

candidateButton_AL036_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL036_24.style.display = "block";
}

/* When the users clicks onto the State Board of Education candidates' buttons than their modals will pop up. */
candidateButton_AL037_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL037_24.style.display = "block";
}

candidateButton_AL038_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL038_24.style.display = "block";
}

candidateButton_AL039_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL039_24.style.display = "block";
}

candidateButton_AL040_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL040_24.style.display = "block";
}

candidateButton_AL041_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL041_24.style.display = "block";
}

candidateButton_AL042_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL042_24.style.display = "block";
}

candidateButton_AL043_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL043_24.style.display = "block";
}

/* When the users clicks onto the Supreme Court candidates' buttons than their modals will pop up. */
candidateButton_AL044_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL044_24.style.display = "block";
}

candidateButton_AL045_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL045_24.style.display = "block";
}

candidateButton_AL046_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL046_24.style.display = "block";
}

candidateButton_AL047_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_AL047_24.style.display = "block";
}


/* When the users clicks onto the Presidential candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_FC001_24.onclick = function() {
	candidateScoreSheet_Modal_FC001_24.style.display = "none";
}

close_ScoreSheet_FC002_24.onclick = function() {
	candidateScoreSheet_Modal_FC002_24.style.display = "none";
}

close_ScoreSheet_FC003_24.onclick = function() {
	candidateScoreSheet_Modal_FC003_24.style.display = "none";
}

/* When the users clicks onto the Governor candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL001_24.onclick = function() {
	candidateScoreSheet_Modal_AL001_24.style.display = "none";
}

close_ScoreSheet_AL002_24.onclick = function() {
	candidateScoreSheet_Modal_AL002_24.style.display = "none";
}

close_ScoreSheet_AL003_24.onclick = function() {
	candidateScoreSheet_Modal_AL003_24.style.display = "none";
}

close_ScoreSheet_AL004_24.onclick = function() {
	candidateScoreSheet_Modal_AL004_24.style.display = "none";
}

close_ScoreSheet_AL005_24.onclick = function() {
	candidateScoreSheet_Modal_AL005_24.style.display = "none";
}

close_ScoreSheet_AL006_24.onclick = function() {
	candidateScoreSheet_Modal_AL006_24.style.display = "none";
}

close_ScoreSheet_AL007_24.onclick = function() {
	candidateScoreSheet_Modal_AL007_24.style.display = "none";
}

close_ScoreSheet_AL008_24.onclick = function() {
	candidateScoreSheet_Modal_AL008_24.style.display = "none";
}

close_ScoreSheet_AL009_24.onclick = function() {
	candidateScoreSheet_Modal_AL009_24.style.display = "none";
}

close_ScoreSheet_AL010_24.onclick = function() {
	candidateScoreSheet_Modal_AL010_24.style.display = "none";
}

close_ScoreSheet_AL011_24.onclick = function() {
	candidateScoreSheet_Modal_AL011_24.style.display = "none";
}

close_ScoreSheet_AL012_24.onclick = function() {
	candidateScoreSheet_Modal_AL012_24.style.display = "none";
}

close_ScoreSheet_AL013_24.onclick = function() {
	candidateScoreSheet_Modal_AL013_24.style.display = "none";
}

close_ScoreSheet_AL014_24.onclick = function() {
	candidateScoreSheet_Modal_AL014_24.style.display = "none";
}

close_ScoreSheet_AL015_24.onclick = function() {
	candidateScoreSheet_Modal_AL015_24.style.display = "none";
}

/* When the users clicks onto the Lieutenant Governor candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL016_24.onclick = function() {
	candidateScoreSheet_Modal_AL016_24.style.display = "none";
}

/* When the users clicks onto the Attorney General candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL017_24.onclick = function() {
	candidateScoreSheet_Modal_AL017_24.style.display = "none";
}

close_ScoreSheet_AL018_24.onclick = function() {
	candidateScoreSheet_Modal_AL018_24.style.display = "none";
}

close_ScoreSheet_AL019_24.onclick = function() {
	candidateScoreSheet_Modal_AL019_24.style.display = "none";
}

/* When the users clicks onto the Secretary of State candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL020_24.onclick = function() {
	candidateScoreSheet_Modal_AL020_24.style.display = "none";
}

close_ScoreSheet_AL021_24.onclick = function() {
	candidateScoreSheet_Modal_AL021_24.style.display = "none";
}

close_ScoreSheet_AL022_24.onclick = function() {
	candidateScoreSheet_Modal_AL022_24.style.display = "none";
}

close_ScoreSheet_AL023_24.onclick = function() {
	candidateScoreSheet_Modal_AL023_24.style.display = "none";
}

close_ScoreSheet_AL024_24.onclick = function() {
	candidateScoreSheet_Modal_AL024_24.style.display = "none";
}

/* When the users clicks onto the State Treasurer candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL025_24.onclick = function() {
	candidateScoreSheet_Modal_AL025_24.style.display = "none";
}

/* When the users clicks onto the State Auditor candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL026_24.onclick = function() {
	candidateScoreSheet_Modal_AL026_24.style.display = "none";
}

close_ScoreSheet_AL027_24.onclick = function() {
	candidateScoreSheet_Modal_AL027_24.style.display = "none";
}

close_ScoreSheet_AL028_24.onclick = function() {
	candidateScoreSheet_Modal_AL028_24.style.display = "none";
}

/* When the users clicks onto the Agriculture candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL029_24.onclick = function() {
	candidateScoreSheet_Modal_AL029_24.style.display = "none";
}

/* When the users clicks onto the U.S. Congressional District candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_FC017_24.onclick = function() {
	candidateScoreSheet_Modal_FC017_24.style.display = "none";
}

close_ScoreSheet_FC018_24.onclick = function() {
	candidateScoreSheet_Modal_FC018_24.style.display = "none";
}

close_ScoreSheet_FC019_24.onclick = function() {
	candidateScoreSheet_Modal_FC019_24.style.display = "none";
}

close_ScoreSheet_FC020_24.onclick = function() {
	candidateScoreSheet_Modal_FC020_24.style.display = "none";
}

close_ScoreSheet_FC021_24.onclick = function() {
	candidateScoreSheet_Modal_FC021_24.style.display = "none";
}

close_ScoreSheet_FC022_24.onclick = function() {
	candidateScoreSheet_Modal_FC022_24.style.display = "none";
}

close_ScoreSheet_FC023_24.onclick = function() {
	candidateScoreSheet_Modal_FC023_24.style.display = "none";
}

close_ScoreSheet_FC024_24.onclick = function() {
	candidateScoreSheet_Modal_FC024_24.style.display = "none";
}

close_ScoreSheet_FC025_24.onclick = function() {
	candidateScoreSheet_Modal_FC025_24.style.display = "none";
}

close_ScoreSheet_FC026_24.onclick = function() {
	candidateScoreSheet_Modal_FC026_24.style.display = "none";
}

close_ScoreSheet_FC027_24.onclick = function() {
	candidateScoreSheet_Modal_FC027_24.style.display = "none";
}

close_ScoreSheet_FC028_24.onclick = function() {
	candidateScoreSheet_Modal_FC028_24.style.display = "none";
}

close_ScoreSheet_FC029_24.onclick = function() {
	candidateScoreSheet_Modal_FC029_24.style.display = "none";
}

close_ScoreSheet_FC030_24.onclick = function() {
	candidateScoreSheet_Modal_FC030_24.style.display = "none";
}

close_ScoreSheet_FC031_24.onclick = function() {
	candidateScoreSheet_Modal_FC031_24.style.display = "none";
}

close_ScoreSheet_FC032_24.onclick = function() {
	candidateScoreSheet_Modal_FC032_24.style.display = "none";
}

close_ScoreSheet_FC033_24.onclick = function() {
	candidateScoreSheet_Modal_FC033_24.style.display = "none";
}

close_ScoreSheet_FC034_24.onclick = function() {
	candidateScoreSheet_Modal_FC034_24.style.display = "none";
}

close_ScoreSheet_FC035_24.onclick = function() {
	candidateScoreSheet_Modal_FC035_24.style.display = "none";
}

close_ScoreSheet_FC036_24.onclick = function() {
	candidateScoreSheet_Modal_FC036_24.style.display = "none";
}

close_ScoreSheet_FC037_24.onclick = function() {
	candidateScoreSheet_Modal_FC037_24.style.display = "none";
}

/* When the users clicks onto the Public Service Commission candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL030_24.onclick = function() {
	candidateScoreSheet_Modal_AL030_24.style.display = "none";
}

close_ScoreSheet_AL031_24.onclick = function() {
	candidateScoreSheet_Modal_AL031_24.style.display = "none";
}

close_ScoreSheet_AL032_24.onclick = function() {
	candidateScoreSheet_Modal_AL032_24.style.display = "none";
}

close_ScoreSheet_AL033_24.onclick = function() {
	candidateScoreSheet_Modal_AL033_24.style.display = "none";
}

close_ScoreSheet_AL034_24.onclick = function() {
	candidateScoreSheet_Modal_AL034_24.style.display = "none";
}

close_ScoreSheet_AL035_24.onclick = function() {
	candidateScoreSheet_Modal_AL035_24.style.display = "none";
}

close_ScoreSheet_AL036_24.onclick = function() {
	candidateScoreSheet_Modal_AL036_24.style.display = "none";
}

/* When the users clicks onto the State Board of Education candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL037_24.onclick = function() {
	candidateScoreSheet_Modal_AL037_24.style.display = "none";
}

close_ScoreSheet_AL038_24.onclick = function() {
	candidateScoreSheet_Modal_AL038_24.style.display = "none";
}

close_ScoreSheet_AL039_24.onclick = function() {
	candidateScoreSheet_Modal_AL039_24.style.display = "none";
}

close_ScoreSheet_AL040_24.onclick = function() {
	candidateScoreSheet_Modal_AL040_24.style.display = "none";
}

close_ScoreSheet_AL041_24.onclick = function() {
	candidateScoreSheet_Modal_AL041_24.style.display = "none";
}

close_ScoreSheet_AL042_24.onclick = function() {
	candidateScoreSheet_Modal_AL042_24.style.display = "none";
}

close_ScoreSheet_AL043_24.onclick = function() {
	candidateScoreSheet_Modal_AL043_24.style.display = "none";
}

/* When the users clicks onto the Supreme Court candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_AL044_24.onclick = function() {
	candidateScoreSheet_Modal_AL044_24.style.display = "none";
}

close_ScoreSheet_AL045_24.onclick = function() {
	candidateScoreSheet_Modal_AL045_24.style.display = "none";
}

close_ScoreSheet_AL046_24.onclick = function() {
	candidateScoreSheet_Modal_AL046_24.style.display = "none";
}

close_ScoreSheet_AL047_24.onclick = function() {
	candidateScoreSheet_Modal_AL047_24.style.display = "none";
}

/*
function addToCart() {
	const form = document.getElementById('alabamaSelected_Candidates2024_Form');
	const selectedCandidate = form.querySelector('input[type="radio"]:checked');

	if (!selectedCandidate) {
	  alert("Please select a candidate before adding to the cart.");
	  return;
	}

	const category = selectedCandidate.getAttribute('data-category');
	const candidateText = selectedCandidate.parentElement.textContent.trim();
	const candidateImageSrc = selectedCandidate.parentElement.querySelector('img').src;

	const selectedCandidateData = selectedCandidates[category];

	if (selectedCandidateData !== null) {
	  alert(`A candidate for ${category} is already selected. If you want to update your selected ${category}, go to your shopping cart and remove your selected ${category} than you are able select a new ${category}.`);
	  return;
	}

	selectedCandidates[category] = {
	  candidateText: candidateText,
	  candidateImageSrc: candidateImageSrc,
	};

	const cart = document.getElementById('shoppingCart');
	const listItem = createListItem(candidateText, candidateImageSrc, category);
	cart.appendChild(listItem);

	// Reset the radio buttons for each category after adding to the cart
	const radioButtons = form.querySelectorAll(`input[type="radio"][data-category="${category}"]`);
	for (const radioButton of radioButtons) {
	  radioButton.checked = false;
	}
}


function createListItem(candidateText, candidateImageSrc, category) {
	const listItem = document.createElement('div');
	listItem.setAttribute('data-value', category);
	listItem.innerHTML = `  <!-- The innerHTML is a security issues, and I will need to rewrite this section. -->
	
	<div id="candidate_ShoppingCart_Container">

		<div id="candidate_ShoppingCart_Container_Row">

			<div id="candidate_ShoppingCart_Container_Column">

				<div id="wrap_ShoppingCart_Images">

					<img id="candidate_ShoppingCart_Images" src="${candidateImageSrc}" alt="Candidate Image" >		

					<span id="candidateTexts_Category"> ${category} Candidate: </span> 
					<p id="candidateTexts_Name"> ${candidateText} </p>
				
					<br>
					<button class="trash_Button" type="button" onclick="removeFromCart(this)" data-value="${category}">

						<div class="trash_Container">
				
							<img class="trash_Close_Icon" src="../images/paid_Icon_Finder/2254860_bin_close_empty_trash_dustbin_icon-3 32px.png"/>

							<div class="trash_Open_Overlay">

								<a href="#" class="icon" >

								<img class="trash_Open_Icon" src="../images/paid_Icon_Finder/2254914_bin_full_trash_dustbin_garbage_icon-3 32px.png"/>

								</a>

							</div>
						
						</div>
							
					</button> 

				</div>

			</div>

		</div>

	</div>
	
	`;
	return listItem;
  }  


*/

/*
function removeFromCart(button) {
    const categoryToRemove = button.getAttribute('data-value');


    // Show a confirmation dialog to the user
    const confirmRemove = confirm(`Are you sure you want to remove the candidate from the ${categoryToRemove} shopping cart category?`);
    
    // If the user confirms, proceed with removing the candidate
    if (confirmRemove) {
        selectedCandidates[categoryToRemove] = null;

        const cart = document.getElementById('shoppingCart');
        const listItem = cart.querySelector(`div[data-value="${categoryToRemove}"]`);
        cart.removeChild(listItem);
    }
}
*/



