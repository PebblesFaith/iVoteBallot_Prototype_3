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


	e.target.submit()

	form.addEventListner('submit', printContent, alabamaSelectedCandidates2024Form);
	//return true; 

} 

*/




// Add event listener for the submit button
const submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', userCandidatesVerification_2024);	



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

/*
	Sarai Hannah Ajai have written her JavaScript coded language for which defines a function 
	named `checkAllCategoriesSelected()`. This function is designed to check, if candidates have
	been selected for all categories in an election form. And, the function does this by iterating 
	through an array of categories, and for each category when the callbacks the 
	`isCategorySelected(category)` function. If a category does not have a selected candidate, the 
	function callback displays an alert message indicating that a candidate should be selected for	
	that category and returns `false`. 

	Following the category candidates' checks, the code retrieves and validates an user input fields
	for the first name, middle name, last name, suffix, address, unit type, unit type number, country,
	state, county, city, and zip code. And, the validated input field performs various checks on each
	input fields, such as checking, if the input field is empty, if the input fields matches a regular
	expression pattern, and displays error messages if validation fails. If any of the input fields
	fail validation, the function returns `false`.

	Finally, if all the category candidates are checks and, the input validations pass then function
	returns `true`, indicating that candidates from all categories are selected, and the users can	
	proceed to checkout. Also, Ms. Ajai's JavaScript coded language includes an event listener for a
	checkout button that calls `checkAllCategoriesSelected()` to determine if the checkout can proceed.
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

/* Add the selected candidate to the shopping cart. */
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

	// Add the selected President candidate name to the panel for an users' review.

	const userPresident = selectedCandidate ? selectedCandidate.value.trim() : null;
	
	if (userPresident === '' || userPresident == null) {
		// If no president is selected, inform the user to select one.
		document.getElementById('userPresidentMessage').textContent = 'Please select a U.S. presidential candidate.';

		setTimeout(function() {
			document.getElementById('userPresidentMessage').textContent = '';
		}, 10000); 
	} else {
		// If a president is selected, show the selected president's name.
		document.getElementById('userPresidentMessage').textContent = `Selected U.S. Presidential Candidate: ${userPresident}`;

		setTimeout(function() {
			document.getElementById('userPresidentMessage').textContent = '';
		}, 9000);

		console.log(`Added ${userPresident}} to the cart.`);
	}

	const userGovernor = selectedCandidate ? selectedCandidate.value.trim() : null;

	if (userGovernor === '' || userGovernor == null) {
		// If no president is selected, inform the user to select one.
		document.getElementById('userGovernorMessage').textContent = 'Please select an Alabama State\'s Governor candidate.';

		setTimeout(function() {
			document.getElementById('userGovernorMessage').textContent = '';
		}, 10000); 
	} else {
		// If a president is selected, show the selected president's name.
		document.getElementById('userGovernorMessage').textContent = `Selected Governor State\'s Governor Candidate: ${userGovernor}`;

		setTimeout(function() {
			document.getElementById('userGovernorMessage').textContent = '';
		}, 9000);

		console.log(`Added ${userGovernor} to the cart.`);
	}

	
	



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

function checkAllCategoriesSelected() {
	const categories = [
	  "President",
	  "Governor",
	  "Lieutenant Governor",
	  "Attorney General",
	  "Secretary of State",
	  "State Treasurer",
	  "State Auditor",
	  "Agriculture",
	  "Senator",
	  "U.S. 1st Congressional District",
	  "U.S. 2nd Congressional District",
	  "U.S. 3rd Congressional District",
	  "U.S. 4th Congressional District",
	  "U.S. 5th Congressional District",
	  "U.S. 6th Congressional District",
	  "U.S. 7th Congressional District",
	  "Public Service Commission - Place 1",
	  "Public Service Commission - Place 2",
	  "State Board of Education - Place 2",
	  "State Board of Education - Place 4",
	  "State Board of Education - Place 6",
	  "State Board of Education - Place 8",
	  "Supreme Court - Place 5",
	  "Supreme Court - Place 6",
	];
  
	for (const category of categories) {
	  if (!isCategorySelected(category)) {
		alert(`Please select a candidate for the ${category} category.`);
		return false;
	  }
	}

	const userFirstName = document.getElementById('firstName').value.trim();
	const userMiddleName = document.getElementById('middleName').value.trim();
	const userLastName = document.getElementById('lastName').value.trim();
	const userSuffix = document.getElementById('suffix').value.trim();
	const userAddress = document.getElementById('address').value.trim();
	const userUnitType = document.getElementById('unitType').value.trim();
	const userUnitTypeNumber = document.getElementById('unitTypeNumber').value.trim();
	const userCountrySelection = document.getElementById('countrySelect').value.trim();
	const userStateSelection = document.getElementById('stateSelect').value.trim();
	const userCountySelection = document.getElementById('countySelect').value.trim();
	const userCitySelection = document.getElementById('citySelect').value.trim();
	const userZipSelection = document.getElementById('zipSelect').value.trim();
	const userPresident = document.getElementById('president').value.trim();
                    
	const regExName = /^[A-Za-z\s]+$/;
	const regExAddress = /^\d+\s[\d\w]+\s(.*)$/;
	const regExUnitTypeNumber = /^[0-9a-zA-Z-]+$/;
	const regExUnitIdTypeDetails = /^(House)$/;

	if (userFirstName === '' || userFirstName == null || userFirstName.length <= 2 || !userFirstName.match(regExName))  {                                                               
		document.getElementById('userFirstNameErrorMessage').textContent = 'Your first name is a required input field or you must enter more than two characters into the first name required input field.';

		setTimeout(function() {
			document.getElementById('userFirstNameErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}									
						
	if (userMiddleName === '' || userMiddleName == null) {
		document.getElementById('userMiddleNameErrorMessage').textContent = 'Do you have a middle name? If so, please type in your middle name into the input field or skip the middle name input field.';

		setTimeout(function() {
			document.getElementById('userMiddleNameErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (userMiddleName.length <= 2 || !userMiddleName.match(regExName)) {
		document.getElementById('userMiddleNameErrorMessage').textContent = 'Your middle name is an optional input field; however, you must enter more than two characters into the middle name required input field.';

		setTimeout(function() {
			document.getElementById('userMiddleNameErrorMessage').textContent = '';
		},
		9000)
	
		return false;  

	}                                  

	if (userLastName === '' || userLastName == null || userLastName.length <= 2 || !userLastName.match(regExName)) {
		document.getElementById('userLastNameErrorMessage').textContent = 'Your last name is a required input field or you must enter more than two characters into the last name required input field.';

		setTimeout(function() {
			document.getElementById('userLastNameErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userSuffix === '' || userSuffix == null) {
		document.getElementById('userSuffixErrorMessage').textContent = 'Do you have a sufix name? If so, please type in your suffix name into the input field or skip the suffix name input field.';

		setTimeout(function() {
			document.getElementById('userSuffixErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (userSuffix.length <= 0 || !userSuffix.match(regExName)) {
		document.getElementById('userSuffixErrorMessage').textContent = 'Your suffix name is an optional input field; however, you must enter more than one characters into the suffix name required input field.';

		setTimeout(function() {
			document.getElementById('userSuffixErrorMessage').textContent = '';
		},
		9000)
	
		return false;  

	}

	if (userAddress === '' || userAddress == null || userAddress.length <= 6 || !userAddress.match(regExAddress))  {                                                               
		document.getElementById('userAddressErrorMessage').textContent = 'Your street address is a required field and you must enter your correct street address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userAddressErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}	
	
	if (userUnitType === '' || userUnitType == null) {
		document.getElementById('userUnitTypeErrorMessage').textContent = 'Select your residential unit type you live in, and your residential unit type is a require field.';

		setTimeout(function() {
			document.getElementById('userUnitTypeErrorMessage').textContent = '';
		},
		9000)   
	
		return false;  

	}

	if (userUnitTypeNumber === '' || userUnitTypeNumber == null || userUnitTypeNumber.match(regExUnitTypeNumber))  {                                                               
		document.getElementById('userUnitTypeNumberErrorMessage').textContent =  'Your address unit type number is a required field unless you own your home or other residential property which does not have an address unit type number.';

		setTimeout(function() {
			document.getElementById('userUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)               

	} else if (!userUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		document.getElementById('userUnitTypeNumberErrorMessage').textContent = 'Your address unit type number is a required field unless you own your home or other residential property which does not have an address unit type number.';

		setTimeout(function() {
			document.getElementById('userUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

	} else if (!userUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		document.getElementById('userReviewUnitTypeNumber').textContent = '11. Your Residential Unit Type Number is: ' +  userUnitTypeNumber + '.';
		document.getElementById('userUnitTypeNumberErrorMessage').textContent = 'Error Message:  Your address unit type number is a required field unless you own your home or other residential property which does not have an address unit type number.';

		setTimeout(function() {
			document.getElementById('userUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

		return false;
	}

	if (userCountrySelection === '' || userCountrySelection == null) {
		document.getElementById('userCountrySelectionErrorMessage').textContent = 'Your country is a required select option field and you must select your correct country from the option require field.';

		setTimeout(function() {
			document.getElementById('userCountrySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userStateSelection === '' || userStateSelection == null) {
		document.getElementById('userStateSelectionErrorMessage').textContent = 'Your state is a required select option field and you must select your correct state from the option require field.';

		setTimeout(function() {
			document.getElementById('userStateSelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userCountySelection === '' || userCountySelection == null) {
		document.getElementById('userCountySelectionErrorMessage').textContent = 'Your county is a required select option field and you must select your correct county from the option require field.';

		setTimeout(function() {
			document.getElementById('userCountySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userCitySelection === '' || userCitySelection == null) {
		document.getElementById('userCitySelectionErrorMessage').textContent = 'Your city is a required select option field and you must select your correct city from the option require field.';

		setTimeout(function() {
			document.getElementById('userCitySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userZipSelection === '' || userZipSelection == null) {
		document.getElementById('userZipSelectionErrorMessage').textContent = 'Your zip code area is a required select option field and you must select your correct zip code area from the option require field.';

		setTimeout(function() {
			document.getElementById('userZipSelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	} 	
	
	if (userPresident === '' || userPresident == null) {

			// do nothing
			document.getElementById('userPresidentMessage').textContent = '';
	
		}

		return false;

  
	// If candidates from all categories are selected, allow checkout.
	return true;

  }
  
  function isCategorySelected(category) {
	const selectedCandidate = selectedCandidates[category];
	return selectedCandidate !== null && selectedCandidate !== undefined;
  }
  
  // Example usage:
  document.getElementById('checkoutButton').addEventListener('click', function() {
	if (checkAllCategoriesSelected()) {
	  // Proceed to checkout.
	}
  });  

/* 
	Sarai Hannah Ajai have written her JavaScript coded languages in order to define a hierarchical
	data structure that organizes information related to the United States, specifically, states,
	counties, cities, and associated ZIP codes. It creates an extensive nested object, with each level
	representing a deeper geographical classification. Starting with the USA, it further breaks down
	into states such as Alabama, and within each state, it drills down to counties, cities, and ZIP
	codes. This data structure allows for efficient data retrieval and management, making it a valuable
	resource for various applications, especially those requiring location-based information.
*/        
const countryStateCountyCityZipData = {
	'USA': {
		'Alabama': {
			'Autauga': {
				'Autaugaville': ['36003'],
				'Billingsley': ['36006'],
				'Marbury': ['36022', '36051'],
				'Pine Level': ['36066', '36067', '36022'],
				'Prattville': ['36066', '36067']
			},
			'Baldwin': {
				'Bay Minette': ['36507'],
				'Bon Secour': ['36511', '36535'],
				'Daphne': ['36527', '36526'],
				'Elberta': ['36530'],
				'Fairhope': ['36532', '36559'],
				'Foley': ['36535', '36580'],
				'Gulf Shores': ['36542', '36547'],
				'Lillian': ['36549'],
				'Loxley': ['36551', '36527', '36578'],
				'Magnolia Springs': ['36535', '36555'],
				'Orange Beach': ['36561', '36530'],
				'Perdido': ['36562'],
				'Perdido Beach': ['36530'],
				'Point Clear': ['36564', '36532'],
				'Robertsdale': ['36567'],
				'Silverhill': ['36576'],
				'Spanish Fort': ['36507', '36527'],
				'Stapleton': ['36527', '36578'],
				'Stockton': ['36507', '36579'],
				'Summerdale': ['36535', '36580']
			},
			'Barbour': {
				'Bakerhill': ['36027'],
				'Blue Springs': ['36374', '36017'],
				'Clayton': ['36016'],
				'Clio': ['36017'],
				'Eufaula': ['36027'],
				'Louisville': ['36048']
			},
			'Bibb': {
				'Brent': ['35042', '35034'],
				'Centreville': ['35042'],
				'West Blocton': ['35184'],
				'Woodstock': ['35188', '35111']
			},
			'Blount': {
				'Allgood': ['35013', '35121'],
				'Blountsville': ['35031'],
				'Cleveland': ['35049', '35121'],
				'County Line': ['35172'],
				'Hayden': ['35180', '35079'],
				'Highland Lake': ['35121'],
				'Locust Fork': ['35133', '35097'],
				'Nectar': ['35079', '35049'],
				'Oneonta': ['35121'],
				'Remlap': ['35133'],
				'Rosa': ['35031', '35121'],
				'Smoke Rise': ['35180'],
				'Snead': ['35952'],
				'Susan Moore': ['35952', '35031', '35121']
			},
			'Bullock': {
				'Midway': ['36053'],
				'Union Springs': ['36089']
			},
			'Butler': {
				'Georgiana': ['36033'],
				'Greenville': ['36037'],
				'McKenzie': ['36456']
			},
			'Calhoun': {
				'Alexandria': ['36265', '36250'],
				'Anniston': ['36201', '36206', '36207', '36205'],
				'Choccolocco': ['36207'],
				'Hobson City': ['36203', '36201'],
				'Jacksonville': ['36265'],
				'Nances Creek': ['36265', '36272'],
				'Ohatchee': ['36271'],
				'Oxford': ['36260', '36203'],
				'Piedmont': ['36272'],
				'Saks': ['36201', '36206'],
				'Weaver': ['36277'],
				'West End-Cobb Town': ['36201'],
				'White Plains': ['36207']
			},
			'Chambers': {
				'Abanda': ['36276'],
				'Cusseta': ['36852'],
				'Five Points': ['36855'],
				'Fredonia': ['36855', '36863'],
				'Huguley': ['36863'],
				'La Fayette': ['36862'],
				'Lanett': ['36863'],
				'Penton': ['36862'],
				'Standing Rock': ['36855'],
				'Valley': ['36854'],
				'Waverly': ['36879'],
			},
			'Cherokee': {
				'Broomtown': ['35973'],
				'Cedar Bluff': ['35959'],
				'Centre': ['35960'],
				'Gaylesville': ['35973'],
				'Leesburg': ['35983'],
				'Sand Rock': ['35983'],
				'Spring Garden': ['36272']
			},
			'Chilton': {
				'Clanton': ['35045', '35046'],
				'Jemison': ['35085'],
				'Maplesville': ['36750'],
				'Thorsby': ['35171']
			},
			'Choctaw': {
				'Butler': ['36904'],
				'Cullomburg': ['36919'],
				'Gilbertown': ['36908'],
				'Lisman': ['36912'],
				'Needham': ['36915'],
				'Pennington': ['36916'],
				'Silas': ['36919'],
				'Toxey': ['36921']
			},
			'Clarke': {
				'Carlton': ['36545'],
				'Coffeeville': ['36524'],
				'Fulton': ['36446', '36451'],
				'Grove Hill': ['36451'],
				'Jackson': ['36545'],
				'Rockville': ['36545'],
				'Thomasville': ['36784'],
				'Whatley': ['36482']
			},
			'Clay': {
				'Ashland': ['36251'],
				'Delta': ['36258'],
				'Hollins': ['35072'],
				'Lineville': ['36266'],
				'Millerville': ['35072', '36267', '36251']
			},
			'Cleburne': {
				'Edwardsville': ['36262', '36272'],
				'Fruithurst': ['36262'],
				'Heflin': ['36264'],
				'Hollis Crossroads': ['36264', '36258'],
				'Ranburne': ['36273']
			},
			'Coffee': {
				'Elba': ['36323'],
				'Enterprise': ['36330'],
				'Kinston': ['36467', '36453'],
				'New Brockton': ['36351']
			},
			'Colbert': {
				'Cherokee': ['35616'],
				'Leighton': ['35646'],
				'Littleville': ['35674', '35654'],
				'Muscle Shoals': ['35674', '35661'],
				'Sheffield': ['35660'],
				'Tuscumbia': ['35674']
			},
			'Conecuh': {
				'Castleberry': ['36432'],
				'Evergreen': ['36401'],
				'Repton': ['36475'] 
			},
			'Coosa': {
				'Equality': ['36026'],
				'Goodwater': ['35072'],
				'Hanover': ['35072', '35136'],
				'Hissop': ['35136', '35089'],
				'Kellyton': ['35089'],
				'Nixburg': ['35010', '35089'],
				'Ray': ['35010'],
				'Rockford': ['35136'],
				'Stewartville': ['35151', '35183'],
				'Weogufka': ['35151', '35183']
			},
			'Covington': {
				'Andalusia': ['36420', '36421'],
				'Babbie': ['36467', '36421'],
				'Carolina': ['36420'],
				'Florala': ['36442'],
				'Gantt': ['36038', '36421'],
				'Heath': ['36421'],
				'Horn Hill': ['36467'],
				'Libertyville': ['36420'],
				'Lockhart': ['36442', '36455'],
				'Onycha': ['36467'],
				'Opp': ['36467'],
				'Red Level': ['36474'],
				'River Falls': ['36474', '36476', '36421'],
				'Sanford': ['36420', '36421']
			},
			'Crenshaw': {
				'Brantley': ['36009'],
				'Dozier': ['36028'],                            
				'Glenwood': ['36035', '36034'],
				'Luverne': ['36049'],                           
				'Petrey': ['36049'],
				'Rutledge': ['36049'] 
			},
			'Cullman': {
				'Baileyton': ['35019'],
				'Berlin': ['35058', '35055'],
				'Colony': ['35077'],
				'Cullman': ['35058', '35057', '35055'],
				'Dodge City': ['35057', '35077'],
				'East Point': ['35055'],
				'Fairview': ['35058'],
				'Garden City': ['35077', '35070'],
				'Good Hope': ['35057', '35055', '35077'],
				'Hanceville': ['35077'],
				'Holly Pond': ['35055', '35083'],
				'Joppa': ['35016', '35087'],
				'South Vinemont': ['35058', '35179'],
				'West Point': ['35057', '35179']
			},
			'Dale': {
				'Ariton': ['36311'],
				'Clayhatchee': ['36322'],
				'Daleville': ['36322'],
				'Fort Rucker': ['36362'],
				'Grimes': ['36303', '36350'],
				'Level Plains': ['36330', '36322'],
				'Midland City': ['36350'],
				'Napier Field': ['36303'],
				'Newton': ['36350', '36352', '36360'],
				'Ozark': ['36360'],
				'Pinckard': ['36371', '36350']
			},
			'Dallas': {
				'Orrville': ['36767'],
				'Selma': ['36703', '36701'],
				'Selmont-West Selmont': ['36703', '36701'],
				'Valley Grande': ['36703', '36701']
			},
			'DeKalb': {
				'Collinsville': ['35961'],
				'Crossville': ['35962'],
				'Fort Payne': ['35967', '35968'],
				'Fyffe': ['35971'],
				'Geraldine': ['35974'],
				'Hammondville': ['35989'],
				'Henagar': ['35978'],
				'Ider': ['35981', '35978'],
				'Mentone': ['35984'],
				'Pine Ridge': ['35968'],
				'Powell': ['35986', '35971'],
				'Rainsville': ['35986'],
				'Shiloh': ['35986', '35971'],
				'Sylvania': ['35988', '35968'],
				'Valley Head': ['35989']
			},
			'Elmore': {
				'Blue Ridge': ['36093'],    
				'Coosada': ['36020'],   
				'Deatsville': ['36022'],                                
				'Eclectic': ['36024'],  
				'Elmore': ['36022', '36025'],   
				'Emerald Mountain': ['36093', '36078'], 
				'Holtville': ['36092', '36022'],    
				'Millbrook': ['36054', '36022'],    
				'Redland': ['36093'],   
				'Tallassee': ['36078'], 
				'Wetumpka': ['36093', '36092']  
			},
			'Escambia': {
				'Atmore': ['36503', '36502'],
				'Brewton': ['36426'],
				'East Brewton': ['36426'],
				'Flomaton': ['36441'],
				'Pollard': ['36441'],
				'Riverview': ['36426']
			},
			'Etowah': {
				'Altoona': ['35952'],
				'Attalla': ['35954'],
				'Ballplay': ['35903', '36272'],
				'Bristow Cove': ['35956'],
				'Carlisle-Rockledge': ['35956', '35954'],
				'Coats Bend': ['35901'],
				'Egypt': ['35952', '35956'],
				'Gadsden': ['35901', '35903', '35904'],
				'Gallant': ['35972'],
				'Glencoe': ['35903', '35905'],
				'Hokes Bluff': ['35903', '35905'],
				'Ivalee': ['35954'],
				'Lookout Mountain': ['35904'],
				'New Union': ['35956'],
				'Rainbow City': ['35906'],
				'Reece City': ['35954'],
				'Ridgeville': ['35954'],
				'Sardis City': ['35956'],
				'Southside': ['35907'],
				'Tidmore Bend': ['35901'],
				'Walnut Grove': ['35952', '35990'],
				'Whitesboro': ['35956']
			},
			'Fayette': {
				'Belk': ['35545', '35555'],
				'Berry': ['35546'],
				'Fayette': ['35555'],
				'Glen Allen': ['35559', '35594', '35554']
			},
			'Franklin': {
				'Belgreen': ['35653'],
				'Hodges': ['35571'],
				'Phil Campbell': ['35581'],
				'Red Bay': ['35582'],
				'Russellville': ['35654', '35653'],
				'Spruce Pine': ['35585', '35581'],
				'Vina': ['35593']
			},
			'Geneva': {
				'Black': ['36314'],
				'Coffee Springs': ['36318'],
				'Eunola': ['36340'],
				'Geneva': ['36340'],
				'Hartford': ['36344'],
				'Malvern': ['36375', '36301', '36305'],
				'Samson': ['36477'],
				'Slocomb': ['36375']
			},
			'Greene': {
				'Boligee': ['35443'],
				'Eutaw': ['35462'],
				'Forkland': ['36740'],
				'Union': ['35462']
			},  
			'Hale': {
				'Akron': ['35441'],
				'Greensboro': ['36744'],
				'Moundville': ['35474'],                            
				'Newbern': ['36765']
			},  
			'Henry': {
				'Abbeville': ['36310'],
				'Haleburg': ['36319'],
				'Headland': ['36345'],
				'Newville': ['36353']
			},
			'Houston': {
				'Ashford': ['36312'],
				'Avon': ['36312'],
				'Columbia': ['36319'],
				'Cottonwood': ['36320'],
				'Cowarts': ['36303', '36321'],
				'Dothan': ['36303', '36301', '36305', '36321'],
				'Gordon': ['36343'],
				'Kinsey': ['36303', '36345'],
				'Madrid': ['36375', '36320'],
				'Rehobeth': ['36301'],
				'Taylor': ['36301', '36305'],
				'Webb': ['36376']
			},  
			'Jackson': {
				'Bridgeport': ['35740'],
				'Dutton': ['35744'],
				'Hollywood': ['35769', '35752'],
				'Hytop': ['35768'],
				'Langston': ['35755'],
				'Paint Rock': ['35764'],
				'Pisgah': ['35765'],
				'Pleasant Groves': ['35776'],
				'Scottsboro': ['35768', '35769'],
				'Section': ['35771'],
				'Skyline': ['35768', '35776'],
				'Stevenson': ['35772'],
				'Woodville': ['35776']
			},  
			'Jefferson': {
				'Adamsville': ['35224', '35060', '35073', '35005'], 
				'Bessemer': ['35022', '35020'], 
				'Birmingham': ['35218', '35214', '35215', '35217', '35210', '35211', '35212', '35213', '35224', '35221', '35222', '35203', '35207', '35206', '35205', '35204', '35209', '35208', '35094', '35254', '35068', '35061', '35228', '35234', '35235', '35233', '35243', '35242', '35249'],    
				'Brighton': ['35020'],  
				'Brookside': ['35214', '35117', '35073', '35036'],  
				'Cardiff': ['35073'],   
				'Center Point': ['35215'],  
				'Clay': ['35173', '35126'], 
				'Concord': ['35023'],   
				'Edgewater': ['35224'], 
				'Fairfield': ['35064'], 
				'Forestdale': ['35214', '35005'],   
				'Fultondale': ['35217', '35119', '35068'],  
				'Gardendale': ['35071', '35119'],   
				'Grayson Valley': ['35235'],    
				'Graysville': ['35117', '35073'],   
				'Homewood': ['35229', '35209'], 
				'Hoover': ['35216', '35226', '35244', '35242'], 
				'Hueytown': ['35023'],  
				'Irondale': ['35210'],  
				'Kimberly': ['35071', '35091', '35116'],    
				'Leeds': ['35094', '35173'],    
				'Lipscomb': ['35020'],  
				'Maytown': ['35224', '35118', '35005'], 
				'McCalla': ['35022', '35111'],  
				'McDonald Chapel': ['35224'],   
				'Midfield': ['35221', '35228'], 
				'Minor': ['35224'],
				'Morris': ['35071', '35116'],   
				'Mount Olive': ['35117'],   
				'Mountain Brook': ['35213', '35223', '35243'],  
				'Mulga': ['35118', '35005'],    
				'North Johns': ['35006'],   
				'Pinson': ['35215', '35126'],
				'Pleasant Grove': ['35127'],    
				'Rock Creek': ['35023'],    
				'Sylvan Springs': ['35118'],    
				'Tarrant': ['35217'],   
				'Trafford': ['35180', '35172'], 
				'Trussville': ['35235', '35173'],
				'Vestavia Hills': ['35216', '35243', '35242'],  
				'Warrior': ['35180'],   
				'West Jefferson': ['35130', '35062']    
			},
			'Lamar': {
				'Beaverton': ['35544'],
				'Detroit': ['35552'],
				'Kennedy': ['35574'],
				'Millport': ['35576'],
				'Sulligent': ['35586'],
				'Vernon': ['35592']
			},
			'Lauderdale': {
				'Anderson': ['35610'],
				'Florence': ['35632', '35633', '35630'],
				'Killen': ['35645'],
				'Lexington': ['35648'],
				'Rogersville': ['35652'],
				'St. Florian': ['35634'],
				'Underwood-Petersville': ['35633'],
				'Waterloo':  ['35677']
			},
			'Lawrence': {
				'Courtland': ['35618'],
				'Hatton': ['35672'],
				'Hillsboro': ['35643'],
				'Moulton': ['35650'],
				'North Courtland': ['35618'],
				'Town Creek': ['35672']
			},
			'Lee': {
				'Auburn': ['36849', '36832', '36830'],
				'Loachapoka': ['36832', '36865'],
				'Opelika': ['36801', '36804'],
				'Smiths Station': ['36877']
			},
			'Limestone': {
				'Ardmore': ['35739'],
				'Athens': ['35611', '35613'],
				'Elkmont': ['35620'],
				'Lester': ['35647'],
				'Mooresville': ['35649']
			},
			'Lowndes': {
				'Benton': ['36785'],
				'Fort Deposit': ['36032'],
				'Gordonville': ['36040'],
				'Hayneville': ['36040'],
				'Lowndesboro': ['36752'],
				'Mosses': ['36040'],
				'White Hall': ['36785', '36752', '36040']
			},
			'Macon': {
				'Franklin': ['36083'],
				'Notasulga': ['36866'],
				'Shorter': ['36075'],
				'Tuskegee': ['36083', '36088']
			},
			'Madison': {
				'Gurley': ['35748'],
				'Harvest': ['35749'],
				'Hazel Green': ['35761', '35750'],
				'Huntsville': ['35801', '35803', '35802', '35805', '35806', '35741', '35824', '35763', '35757', '35756', '35810', '35811', '35816', '35896'],
				'Madison': ['35756', '35758'],
				'Meridianville': ['35773', '35750', '35759'],
				'Moores Mill': ['35759', '35810', '35811'],
				'New Hope': ['35760'],
				'New Market': ['35761'],
				'Owens Cross Roads': ['35763'],
				'Redstone Arsenal': ['35808'],
				'Triana': ['35756']
			},
			'Marengo': {
				'Dayton': ['36738', '36748'],
				'Demopolis': ['36732', '36742'],
				'Faunsdale': ['36738'],
				'Linden': ['36748'],
				'Myrtlewood': ['36763'],
				'Nanafalia': ['36782', '36764'],
				'Providence': ['36748', '36742'],
				'Putnam': ['36784'],
				'Sweet Water': ['36782'],
				'Thomaston': ['36783']
			},
			'Marion': {
				'Bear Creek': ['35581', '35543'],
				'Brilliant': ['35594', '35548'],
				'Gu-Win': ['35563', '35594'],
				'Guin': ['35563'],
				'Hackleburg': ['35564'],
				'Hamilton': ['35570'],
				'Twin': ['35563'],
				'Winfield': ['35594']
			},
			'Marshall': {
				'Albertville': ['35951', '35950'],
				'Arab': ['35016'],
				'Boaz': ['35957', '35956'],
				'Douglas': ['35957', '35980'],
				'Grant': ['35747'],
				'Guntersville': ['35976'],
				'Union Grove': ['35175']
			},
			'Mobile': {
				'Axis': ['36505'],
				'Bayou La Batre': ['36544', '36509'],
				'Belle Fontaine': ['36582'],
				'Bucks': ['36512', '36560'],
				'Chickasaw': ['36611'],
				'Chunchula': ['36521'],
				'Citronelle': ['36522'],
				'Creola': ['36525'],
				'Dauphin Island': ['36528'],
				'Grand Bay': ['36541'],
				'Gulfcrest': ['36521'],
				'Mobile': ['36652', '36606', '36607', '36604', '36605', '36602', '36603', '36608', '36609', '36688', '36582', '36615', '36617', '36611', '36610', '36619', '36618', '36695', '36693'],
				'Mount Vernon': ['36560'],
				'Movico': ['36560'],
				'Prichard': ['36663', '36610', '36613', '36612'],
				'Saraland': ['36571'],
				'Satsuma': ['36572'],
				'Semmes': ['36613', '36575'],
				'Theodore': ['36582'],
				'Tillmans Corner': ['36582', '36619']
			},
			'Monroe': {
				'Beatrice': ['36425'],
				'Excel': ['36460', '36445', '36439'],
				'Frisco City': ['36445'],
				'Megargel': ['36445'],
				'Monroeville': ['36460'],
				'Peterman': ['36471'],
				'Uriah': ['36480'],
				'Vredenburgh': ['36425', '36481']
			},
			'Montgomery': {
				'Montgomery': ['36112', '36113', '36110', '36111', '36116', '36114', '36115', '36109', '36130', '36117', '36101', '36105', '36104', '36107', '36106', '36057', '36108'],
				'Pike Road': ['36064', '36013']
			},
			'Morgan': {
				'Decatur': ['35603', '35601'],
				'Eva': ['35621'],
				'Falkville': ['35622'],
				'Hartselle': ['35640'],
				'Priceville': ['35603'],
				'Somerville': ['35670'],
				'Trinity': ['35673'] 
			},
			'Perry': {
				'Marion': ['36756'],
				'Uniontown': ['36786']
			},  
			'Pickens': {
				'Aliceville': ['35442'],
				'Carrollton': ['35447'],
				'Ethelsville': ['35461'],
				'Gordo': ['35466'],
				'Macedonia': ['35461'],
				'McMullen': ['35442'],
				'Memphis': ['35442'],
				'Pickensville': ['35447'],
				'Reform': ['35481']
			},
			'Pike': {
				'Banks': ['36005'],
				'Brundidge': ['36010'],
				'Goshen': ['36035'],
				'Troy': ['36079', '36081', '36082']
			},
			'Randolph': {
				'Graham': ['36263'],
				'Morrison Crossroads': ['36280'],
				'Roanoke': ['36274'],
				'Rock Mills': ['36274'],
				'Wadley': ['36276'],
				'Wedowee': ['36278'],
				'Woodland': ['36280']
			},
			'Russell': {
				'Hurtsboro': ['36860'],
				'Ladonia': ['36870', '36869'],
				'Phenix City': ['36869', '36867']
			},  
			'Shelby': {
				'Alabaster': ['35114', '35007'],
				'Brantleyville': ['35114'],
				'Brook Highland': ['35242'],
				'Calera': ['35040'],
				'Chelsea': ['35051', '35043'],
				'Columbiana': ['35051'],                        
				'Dunnavant': ['35094'],
				'Eagle Point': ['35242'],
				'Harpersville': ['35078'],
				'Helena': ['35022', '35080'],
				'Highland Lakes': ['35242'],
				'Indian Springs Village': ['35242', '35124'],
				'Meadowbrook': ['35242'],
				'Montevallo': ['35115'],
				'Pea Ridge': ['35115'],
				'Pelham': ['35124'],
				'Shelby': ['35051', '35143'],
				'Shoal Creek': ['35242'],
				'Sterrett': ['35147', '35178'],
				'Vandiver': ['35147', '35176'],
				'Vincent': ['35178'],
				'Westover': ['35147', '35078'],
				'Wilsonville': ['35186'],
				'Wilton': ['35115']                     
			},
			'St. Clair': {
				'Argo': ['35173', '35120'],
				'Ashville': ['35953', '35987'],
				'Margaret': ['35112', '35120'],
				'Moody': ['35094', '35173', '35004', '35120'],
				'Odenville': ['35146', '35120'],
				'Pell City': ['35125', '35128'],
				'Ragland': ['35131'],
				'Riverside': ['35135', '35125'],
				'Springville': ['35146'],
				'Steele': ['35987']
			},
			'Sumter': {
				'Bellamy': ['35470', '36901'],
				'Cuba': ['36907'],
				'Emelle': ['35459'],
				'Epes': ['35460'],
				'Gainesville': ['35464'],
				'Geiger': ['35459'],
				'Livingston': ['35470'],
				'Panola': ['35477'],
				'York': ['36925']
			},
			'Talladega': {
				'Bon Air': ['35150', '35044', '35032'],
				'Childersburg': ['35044'],
				'Fayetteville': ['35151', '35044'],
				'Lincoln': ['35160', '35096'],
				'Mignon': ['35150'],
				'Munford': ['36268'],
				'Oak Grove': ['35151', '35150'],
				'Sylacauga': ['35151', '35150'],
				'Talladega': ['35160'],
				'Talladega Springs': ['35151'],
				'Waldo': ['35160']
			},
			'Tallapoosa': {
				'Alexander City': ['35010'],
				'Camp Hill': ['36850'],
				'Dadeville': ['36853'],
				'Daviston': ['36256'],
				'Goldville': ['36255', '36256'],
				'Hackneyville': ['35072', '35010'],
				'Jacksons': ['36861'],
				'New Site': ['36256'],
				'Our Town': ['35010'],
				'Reeltown': ['36078', '36866'],
				'Brookwood': ['35444'],
				'Coaling': ['35453'],
				'Coker': ['35452'],
				'Cottondale': ['35404', '35453'],
				'Holt': ['35404'],
				'Lake View': ['35111'],
				'Northport': ['35473', '35475', '35476', '35452'],
				'Tuscaloosa': ['35475', '35476', '35405', '35404', '35406', '35401', '35487'],
				'Vance': ['35188', '35490']
			},
			'Walker': {
				'Carbon Hill': ['35549'],
				'Cordova': ['35550'],
				'Dora': ['35130', '35062'],
				'Eldridge': ['35554'],
				'Jasper': ['35503', '35504', '35501'],
				'Kansas': ['35549', '35573'],
				'Nauvoo': ['35578'],
				'Oakman': ['35579'],
				'Parrish': ['35580'],
				'Sipsey': ['35584', '35063'],
				'Sumiton': ['35062', '35148']
			},
			'Washington': {
				'Calvert': ['36513', '36560'],
				'Chatom': ['36518'],
				'Deer Park': ['36529'],
				'Fairford': ['36553'],
				'Fruitdale': ['36539'],
				'Hobson': ['36518'],
				'Leroy': ['36548'],
				'Malcolm': ['36553', '36556'],
				'McIntosh': ['36553'],
				'Millry': ['36558'],
				'St. Stephens': ['36569'],
				'Tibbie': ['36583', '36529'],
				'Vinegar Bend': ['36584']
			},
			'Wilcox': {
				'Boykin': ['36723'],
				'Camden': ['36726'],
				'Oak Hill': ['36768', '36766'],
				'Pine Apple': ['36768'],
				'Pine Hill': ['36769'],
				'Yellow Bluff': ['36769']
			},
			'Winston': {
				'Addison': ['35540'],
				'Arley': ['35541'],
				'Double Springs': ['35553'],
				'Haleyville': ['35565'],
				'Lynn': ['35565', '35575'],
				'Natural Bridge': ['35575', '35577']
			},
		},                          
	}
};				
		
	window.onload = function (e) {
		
	//Get user html DOM elements.
	var userCountrySelection = document.getElementById("countrySelect");
	var userStateSelection = document.getElementById("stateSelect");    
	var userCountySelection = document.getElementById("countySelect");  
	var userCitySelection = document.getElementById("citySelect");  
	var userZipSelection = document.getElementById("zipSelect");                    
	
	//Load user country.
	
	for (var country in countryStateCountyCityZipData) {    
		userCountrySelection.options[userCountrySelection.options.length] = new Option(country, country);
		
	}   
		
/* 
	Create function to allow user to change his/her state. 
*/
	
userCountrySelection.onchange = function () {
	
	userStateSelection.length = 1; // remove all options bar first
	userCountySelection.length = 1; // remove all options bar first
	userCitySelection.length = 1; // remove all options bar first
	userZipSelection.length = 1; // remove all options bar first
	
	if (this.selectedIndex < 1)
			return true; // done
		
		for (var state in countryStateCountyCityZipData[this.value]) {
			userStateSelection.options[userStateSelection.options.length] = new Option(state, state);
		}
							
	} 
		
	/*
		Create function to allow user to change his/her county. 
	*/
	userStateSelection.onchange = function () {                     

		userCountySelection.length = 1; // remove all options bar first
		userCitySelection.length = 1; // remove all options bar first
		userZipSelection.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1) 
			return; // done
		
			for (var county in countryStateCountyCityZipData[userCountrySelection.value][this.value]) {
				userCountySelection.options[userCountySelection.options.length] = new Option(county, county);   
			} 

		}
              
		
	/* 
		Create function to allow user to change his/her city. 
	*/	
	userCountySelection.onchange = function () {         
			
		userCitySelection.length = 1; // remove all options bar first
		userZipSelection.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1)
			return; // done
		
		for (var city in countryStateCountyCityZipData[userCountrySelection.value][userStateSelection.value][this.value]) {
			userCitySelection.options[userCitySelection.options.length] = new Option(city, city);
		}
		
	}

	/* 
		Create function to allow users to change his/her city and zip code area. 
	*/	
	userCitySelection.onchange = function () {
		userZipSelection.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1)
			return; // done
		
		var zips = countryStateCountyCityZipData[userCountrySelection.value][userStateSelection.value][userCountySelection.value][this.value];
			for (var i = 0; i < zips.length; i++) {
				userZipSelection.options[userZipSelection.options.length] = new Option(zips[i], zips[i]);
			}
		
		}                   

}


/* Get Presidential Candidates ScoreSheet Modals. */
const candidateScoreSheet_Modal_FC001_24 = document.getElementById('candidateScoreSheet_Modal_FC001_24');
const candidateScoreSheet_Modal_FC002_24 = document.getElementById('candidateScoreSheet_Modal_FC002_24');
const candidateScoreSheet_Modal_FC003_24 = document.getElementById('candidateScoreSheet_Modal_FC003_24');
const candidateScoreSheet_Modal_FC004_24 = document.getElementById('candidateScoreSheet_Modal_FC004_24');
const candidateScoreSheet_Modal_FC005_24 = document.getElementById('candidateScoreSheet_Modal_FC005_24');
const candidateScoreSheet_Modal_FC006_24 = document.getElementById('candidateScoreSheet_Modal_FC006_24');
const candidateScoreSheet_Modal_FC007_24 = document.getElementById('candidateScoreSheet_Modal_FC007_24');
const candidateScoreSheet_Modal_FC008_24 = document.getElementById('candidateScoreSheet_Modal_FC008_24');
const candidateScoreSheet_Modal_FC009_24 = document.getElementById('candidateScoreSheet_Modal_FC009_24');
const candidateScoreSheet_Modal_FC010_24 = document.getElementById('candidateScoreSheet_Modal_FC010_24');
const candidateScoreSheet_Modal_FC011_24 = document.getElementById('candidateScoreSheet_Modal_FC011_24');
const candidateScoreSheet_Modal_FC012_24 = document.getElementById('candidateScoreSheet_Modal_FC012_24');
const candidateScoreSheet_Modal_FC013_24 = document.getElementById('candidateScoreSheet_Modal_FC013_24');
const candidateScoreSheet_Modal_FC014_24 = document.getElementById('candidateScoreSheet_Modal_FC014_24');

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
const candidateScoreSheet_Modal_FC015_24 = document.getElementById('candidateScoreSheet_Modal_FC015_24');
const candidateScoreSheet_Modal_FC016_24 = document.getElementById('candidateScoreSheet_Modal_FC016_24');
const candidateScoreSheet_Modal_FC038_24 = document.getElementById('candidateScoreSheet_Modal_FC038_24');
const candidateScoreSheet_Modal_FC039_24 = document.getElementById('candidateScoreSheet_Modal_FC039_24');
const candidateScoreSheet_Modal_FC040_24 = document.getElementById('candidateScoreSheet_Modal_FC040_24');
const candidateScoreSheet_Modal_FC041_24 = document.getElementById('candidateScoreSheet_Modal_FC041_24');
const candidateScoreSheet_Modal_FC042_24 = document.getElementById('candidateScoreSheet_Modal_FC042_24');
const candidateScoreSheet_Modal_FC043_24 = document.getElementById('candidateScoreSheet_Modal_FC043_24');
const candidateScoreSheet_Modal_FC044_24 = document.getElementById('candidateScoreSheet_Modal_FC044_24');

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
const candidateButton_FC004_24 = document.getElementById('candidateButton_FC004_24');
const candidateButton_FC005_24 = document.getElementById('candidateButton_FC005_24');
const candidateButton_FC006_24 = document.getElementById('candidateButton_FC006_24');
const candidateButton_FC007_24 = document.getElementById('candidateButton_FC007_24');
const candidateButton_FC008_24 = document.getElementById('candidateButton_FC008_24');
const candidateButton_FC009_24 = document.getElementById('candidateButton_FC009_24');
const candidateButton_FC010_24 = document.getElementById('candidateButton_FC010_24');
const candidateButton_FC011_24 = document.getElementById('candidateButton_FC011_24');
const candidateButton_FC012_24 = document.getElementById('candidateButton_FC012_24');
const candidateButton_FC013_24 = document.getElementById('candidateButton_FC013_24');
const candidateButton_FC014_24 = document.getElementById('candidateButton_FC014_24');

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
const candidateButton_FC015_24 = document.getElementById('candidateButton_FC015_24');
const candidateButton_FC016_24 = document.getElementById('candidateButton_FC016_24');
const candidateButton_FC038_24 = document.getElementById('candidateButton_FC038_24');
const candidateButton_FC039_24 = document.getElementById('candidateButton_FC039_24');
const candidateButton_FC040_24 = document.getElementById('candidateButton_FC040_24');
const candidateButton_FC041_24 = document.getElementById('candidateButton_FC041_24');
const candidateButton_FC042_24 = document.getElementById('candidateButton_FC042_24');
const candidateButton_FC043_24 = document.getElementById('candidateButton_FC043_24');
const candidateButton_FC044_24 = document.getElementById('candidateButton_FC044_24');

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
const close_ScoreSheet_FC004_24 = document.getElementsByClassName('close_ScoreSheet_FC004_24')[0];
const close_ScoreSheet_FC005_24 = document.getElementsByClassName('close_ScoreSheet_FC005_24')[0];
const close_ScoreSheet_FC006_24 = document.getElementsByClassName('close_ScoreSheet_FC006_24')[0];
const close_ScoreSheet_FC007_24 = document.getElementsByClassName('close_ScoreSheet_FC007_24')[0];
const close_ScoreSheet_FC008_24 = document.getElementsByClassName('close_ScoreSheet_FC008_24')[0];
const close_ScoreSheet_FC009_24 = document.getElementsByClassName('close_ScoreSheet_FC009_24')[0];
const close_ScoreSheet_FC010_24 = document.getElementsByClassName('close_ScoreSheet_FC010_24')[0];
const close_ScoreSheet_FC011_24 = document.getElementsByClassName('close_ScoreSheet_FC011_24')[0];
const close_ScoreSheet_FC012_24 = document.getElementsByClassName('close_ScoreSheet_FC012_24')[0];
const close_ScoreSheet_FC013_24 = document.getElementsByClassName('close_ScoreSheet_FC013_24')[0];
const close_ScoreSheet_FC014_24 = document.getElementsByClassName('close_ScoreSheet_FC014_24')[0];

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
const close_ScoreSheet_FC015_24 = document.getElementsByClassName('close_ScoreSheet_FC015_24')[0];
const close_ScoreSheet_FC016_24 = document.getElementsByClassName('close_ScoreSheet_FC016_24')[0];
const close_ScoreSheet_FC038_24 = document.getElementsByClassName('close_ScoreSheet_FC038_24')[0];
const close_ScoreSheet_FC039_24 = document.getElementsByClassName('close_ScoreSheet_FC039_24')[0];
const close_ScoreSheet_FC040_24 = document.getElementsByClassName('close_ScoreSheet_FC040_24')[0];
const close_ScoreSheet_FC041_24 = document.getElementsByClassName('close_ScoreSheet_FC041_24')[0];
const close_ScoreSheet_FC042_24 = document.getElementsByClassName('close_ScoreSheet_FC042_24')[0];
const close_ScoreSheet_FC043_24 = document.getElementsByClassName('close_ScoreSheet_FC043_24')[0];
const close_ScoreSheet_FC044_24 = document.getElementsByClassName('close_ScoreSheet_FC044_24')[0];

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

candidateButton_FC004_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC004_24.style.display = "block";
}

candidateButton_FC005_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC005_24.style.display = "block";
}

candidateButton_FC006_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC006_24.style.display = "block";
}

candidateButton_FC007_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC007_24.style.display = "block";
}

candidateButton_FC008_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC008_24.style.display = "block";
}

candidateButton_FC009_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC009_24.style.display = "block";
}

candidateButton_FC010_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC010_24.style.display = "block";
}

candidateButton_FC011_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC011_24.style.display = "block";
}

candidateButton_FC012_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC012_24.style.display = "block";
}

candidateButton_FC013_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC013_24.style.display = "block";
}

candidateButton_FC014_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC014_24.style.display = "block";
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

/* When the users clicks onto the Senator candidates' buttons than their modals will pop up. */
candidateButton_FC015_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC015_24.style.display = "block";
}

candidateButton_FC016_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC016_24.style.display = "block";
}

candidateButton_FC038_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC038_24.style.display = "block";
}

candidateButton_FC039_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC039_24.style.display = "block";
}

candidateButton_FC040_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC040_24.style.display = "block";
}

candidateButton_FC041_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC041_24.style.display = "block";
}

candidateButton_FC042_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC042_24.style.display = "block";
}

candidateButton_FC043_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC043_24.style.display = "block";
}

candidateButton_FC044_24.onclick = function(event){
	event.preventDefault();  
	candidateScoreSheet_Modal_FC044_24.style.display = "block";
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

close_ScoreSheet_FC004_24.onclick = function() {
	candidateScoreSheet_Modal_FC004_24.style.display = "none";
}

close_ScoreSheet_FC005_24.onclick = function() {
	candidateScoreSheet_Modal_FC005_24.style.display = "none";
}

close_ScoreSheet_FC006_24.onclick = function() {
	candidateScoreSheet_Modal_FC006_24.style.display = "none";
}

close_ScoreSheet_FC007_24.onclick = function() {
	candidateScoreSheet_Modal_FC007_24.style.display = "none";
}

close_ScoreSheet_FC008_24.onclick = function() {
	candidateScoreSheet_Modal_FC008_24.style.display = "none";
}

close_ScoreSheet_FC009_24.onclick = function() {
	candidateScoreSheet_Modal_FC009_24.style.display = "none";
}

close_ScoreSheet_FC010_24.onclick = function() {
	candidateScoreSheet_Modal_FC010_24.style.display = "none";
}

close_ScoreSheet_FC011_24.onclick = function() {
	candidateScoreSheet_Modal_FC011_24.style.display = "none";
}

close_ScoreSheet_FC012_24.onclick = function() {
	candidateScoreSheet_Modal_FC012_24.style.display = "none";
}

close_ScoreSheet_FC013_24.onclick = function() {
	candidateScoreSheet_Modal_FC013_24.style.display = "none";
}

close_ScoreSheet_FC014_24.onclick = function() {
	candidateScoreSheet_Modal_FC014_24.style.display = "none";
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

/* When the users clicks onto the Senator candidates <span> element "X" than their modals will close the candidates' ScoreSheets. */
close_ScoreSheet_FC015_24.onclick = function() {
	candidateScoreSheet_Modal_FC015_24.style.display = "none";
}

close_ScoreSheet_FC016_24.onclick = function() {
	candidateScoreSheet_Modal_FC016_24.style.display = "none";
}

close_ScoreSheet_FC038_24.onclick = function() {
	candidateScoreSheet_Modal_FC038_24.style.display = "none";
}

close_ScoreSheet_FC039_24.onclick = function() {
	candidateScoreSheet_Modal_FC039_24.style.display = "none";
}

close_ScoreSheet_FC040_24.onclick = function() {
	candidateScoreSheet_Modal_FC040_24.style.display = "none";
}

close_ScoreSheet_FC041_24.onclick = function() {
	candidateScoreSheet_Modal_FC041_24.style.display = "none";
}

close_ScoreSheet_FC042_24.onclick = function() {
	candidateScoreSheet_Modal_FC042_24.style.display = "none";
}

close_ScoreSheet_FC043_24.onclick = function() {
	candidateScoreSheet_Modal_FC043_24.style.display = "none";
}

close_ScoreSheet_FC044_24.onclick = function() {
	candidateScoreSheet_Modal_FC044_24.style.display = "none";
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

close_ScoreSheet_AL044_24.onclick = function() {
	candidateScoreSheet_Modal_AL044_24.style.display = "none";
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

