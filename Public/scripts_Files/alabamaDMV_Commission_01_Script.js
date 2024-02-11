

const validateAlabamaDMV_CommissionForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')

	const DMVPhoto = document.getElementById('photo').value.trim(); 
	const DMVFirstName = document.getElementById('firstName').value.trim(); 
	const DMVMiddleName = document.getElementById('middleName').value.trim();  
	const DMVLastName = document.getElementById('lastName').value.trim(); 
	const DMVSuffix = document.getElementById('suffix').value.trim();   
	const DMVDateOfBirth = document.getElementById('dateOfBirth').value.trim();    
	const DMVBirthSex = document.getElementById('birthSex').value.trim();   
	const DMVGenderIdentity = document.getElementById('genderIdentity').value.trim(); 
	const DMVRace = document.getElementById('race').value.trim();  


	const DMVUSResidentStatusSelection = document.getElementById('usResidentStatusSelect').value.trim();
	const DMVUSResidentStatusCategorySelection = document.getElementById('usResidentStatusCategorySelect').value.trim();
	const DMVUSResidentStatusSubjectSelection = document.getElementById('usResidentStatusSubjectSelect').value.trim();

	
	const DMVGradeSchool = document.getElementById('gradeSchool').value.trim();  
	const DMVGradeSchoolSelection = document.getElementById('gradeSchoolSelect').value.trim();
	const DMVGradeSchoolYearSelection = document.getElementById('gradeSchoolYearSelect').value.trim();
	const DMVHighSchool = document.getElementById('highSchool').value.trim();  
	const DMVHighSchoolSelection = document.getElementById('highSchoolSelect').value.trim();
	const DMVHighSchoolYearSelection = document.getElementById('highSchoolYearSelect').value.trim();
	const DMVCollege = document.getElementById('college').value.trim();
	const DMVDegreeSelection = document.getElementById('degreeSelect').value.trim();
	const DMVCategorySelection = document.getElementById('categorySelect').value.trim();
	const DMVSubjectSelection = document.getElementById('subjectSelect').value.trim();
	const DMVCollegeYearSelection = document.getElementById('collegeYearSelect').value.trim();
	const DMVSSN = document.getElementById('ssn').value.trim(); 
	const DMVEmail = document.getElementById('email').value.trim();
	const DMVConfirmEmail = document.getElementById('confirmEmail').value.trim();  
	const DMVPhoneNumber = document.getElementById('phoneNumber').value.trim();	
	const DMVAddress = document.getElementById('address').value.trim();	
	const DMVUnitType = document.getElementById('unitType').value.trim();
	const DMVUnitTypeNumber = document.getElementById('unitTypeNumber').value.trim();
	const DMVCountrySelection = document.getElementById('countrySelect').value.trim();
    const DMVStateSelection = document.getElementById('stateSelect').value.trim();
    const DMVCountySelection = document.getElementById('countySelect').value.trim();
	const DMVCitySelection = document.getElementById('citySelect').value.trim();
	const DMVZipSelection = document.getElementById('zipSelect').value.trim();
    const DMVIdType = document.getElementById('idType').value.trim();
    const DMVIdTypeNumber = document.getElementById('idTypeNumber').value.trim();
    const IvoteBallotIdIdentifierCode = document.getElementById('iVoteBallotIdIdentifierCode').value.trim();
    const ConfirmIvoteBallotIdIdentifierCode = document.getElementById('confirmIvoteBallotIdIdentifierCode').value.trim();
	const Password = document.getElementById('password').value.trim();
	const ConfirmPassword = document.getElementById('confirmPassword').value.trim();
	const Temporary_Password = document.getElementById('temporary_Password').value.trim();	
	
	const regExName = /^[A-Za-z\s]+$/;
	const regExSSN =  /^\d{3}\-\d{2}\-\d{4}$/;  
	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regExPhoneNumber = /^\d{3}\-\d{3}\-\d{4}$/; 	
	//const regExAddress = /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Alley|Anex|Arcade|Boyou|Beach|Bend|Bluffs|Bottom|Branch|Brook|Bridge|Burg|Burgs|Bypass|Camp|Canyon|Cape|Causeway|Parkway|Pkwy|Center|Centers|Circle|Circles|Cliff|Cliffs|Club|Corner|Cove|Creek|Cresent|Crest|Crossing|XING|Dale|Dam|Divide|Estate|Expressway|Expy|Express|Fall|Falls|Ferry|Field|Fields|Forest|Fork|Freeway|Garden|Gardens|Gateway|Glen|Glens|Greens|Grove|Harbor|Harbors|Haven|Heights|Highway|Hill|Hills|Hollow|Inlet|Island|Islands|Isle|Junction|Key|Keys|Quay|Knoll|Knolls|Lake|Lakes|Land|Landing|Lock|Locks|Lodge|Loop|Mall|Manor|Manors|Meadow|Meadows|Mews|Mill|Mills|Mission|Motorway|Mountain|Mountains|Neck|Orchard|Oval|Overpass|Park|Parks|Parkways|Pass|Passage|Path|Pike|Plaza|Port|Ports|Ramp|Ranch|Ridge|River|Route|Row|Run|Shoal|Shore|Shores|Skyway|Springs|Springs|Square|Squares|SQ|Station|Stravenue|STRA|Stream|Summit|SMT|Terrace|TRCE|Throughway|TRWY|Trail|TRL|Tunnel|TUNL|Turnpike|TPKE|Underpass|UPAS|Union|UN|Unions|UNS|Valley|VLY|Viaduct|VIA|Village|View|Views|VW|Ville|Vista|VL|VIS|Walk|Walks|Way|Ways|Well|Wells|WL|WLS|Lane|Road|Boulevard|Drive|Street|Place|Ave|Dr|Rd|Blvd|Ln|St|Cir|South|S|North|N|West|W|East|E|nd|st|rd|th)\.?/;   
	const regExAddress = /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Alley|Anex|Arcade|Boyou|Beach|Bend|Bluffs|Bottom|Branch|Brook|Bridge|Burg|Burgs|Bypass|Camp|Canyon|Cape|Causeway|Parkway|Pkwy|Center|Centers|Circle|Circles|Cliff|Cliffs|Club|Corner|Cove|Creek|Cresent|Crest|Crossing|XING|Dale|Dam|Divide|Estate|Expressway|Expy|Express|Fall|Falls|Ferry|Field|Fields|Forest|Fork|Freeway|Garden|Gardens|Gateway|Glen|Glens|Greens|Grove|Harbor|Harbors|Haven|Heights|Highway|Hill|Hills|Hollow|Inlet|Island|Islands|Isle|Junction|Key|Keys|Quay|Knoll|Knolls|Lake|Lakes|Land|Landing|Lock|Locks|Lodge|Loop|Mall|Manor|Manors|Meadow|Meadows|Mews|Mill|Mills|Mission|Motorway|Mountain|Mountains|Neck|Orchard|Oval|Overpass|Park|Parks|Parkways|Pass|Passage|Path|Pike|Place|Plaza|Port|Ports|Ramp|Ranch|Ridge|River|Route|Row|Run|Shoal|Shore|Shores|Skyway|Springs|Springs|Square|Squares|SQ|Station|Stravenue|STRA|Stream|Summit|SMT|Terrace|TRCE|Throughway|TRWY|Trail|TRL|Tunnel|TUNL|Turnpike|TPKE|Underpass|UPAS|Union|UN|Unions|UNS|Valley|VLY|Viaduct|VIA|Village|View|Views|VW|Ville|Vista|VL|VIS|Walk|Walks|Way|Ways|Well|Wells|WL|WLS|Lane|Road|Boulevard|Drive|Street|Pl|Ave|Dr|Rd|Blvd|Ln|St|Cir|South|S|North|N|West|W|East|E|nd|st|rd|th)(?:[ ]\d+\/\d+)?\.?$/;
	                            
	const regExUnitTypeNumber = /^[0-9a-zA-Z-]+$/;
	const regExUnitIdTypeDetails = /^(House)$/;
    const regExAlabamaId = /(^\d{7}$)|(^\d{8}$)/;
    const regIvoteballotIdIdentifierCode = /\d{2}[A-Z]{1}\d{1}\-\d{1}[A-Z]{1}\d{1}\-[A-Z]{2}\-\d{3}[A-Z]{2}\d{6}\-\d{2}/;
	
	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;

	if (DMVPhoto === '' || DMVPhoto == null) {		
		document.getElementById('userDMVPhotoErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userDMVPhotoErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}
	
	if (DMVFirstName === '' || DMVFirstName == null || DMVFirstName.length <= 2 || !DMVFirstName.match(regExName)) {                                                               
		document.getElementById('userDMVFirstNameErrorMessage').textContent  = 'Error Message: The user first name is a required input field or you must enter more than two characters into the userfirst name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVFirstNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;		

	}

	if (DMVMiddleName === '' || DMVMiddleName == null) {
		document.getElementById('userDMVMiddleNameErrorMessage').textContent = 'Error Message: Do the user have a middle name? If so, please type in the user middle name into the input field or skip the user middle name input field entirety.';
	
		setTimeout(function() {
			document.getElementById('userDMVMiddleNameErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (DMVMiddleName.length <= 2 || !DMVMiddleName.match(regExName)) {
		document.getElementById('userDMVMiddleNameErrorMessage').textContent = 'Error Message: The user middle name is an optional input field; however, you must enter more than two characters into the user middle name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVMiddleNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;  
	
	} 
	
	if (DMVLastName === '' || DMVLastName == null || DMVLastName.length <= 2 || !DMVLastName.match(regExName)) {
		document.getElementById('userDMVLastNameErrorMessage').textContent  = 'Error Message: The user last name is a required input field or you must enter more than two characters into the user last name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVLastNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;
	
	}

	if (DMVSuffix === '' || DMVSuffix == null) {
		document.getElementById('userDMVSuffixErrorMessage').textContent = 'Error Message: Do the user have a suffix name? If so, please type in the user suffix name into the input field or skip the user suffix name input field entirety.';

		setTimeout(function() {
			document.getElementById('userDMVSuffixErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (DMVSuffix.length <= 0 || !DMVSuffix.match(regExName)) {
		document.getElementById('userDMVSuffixErrorMessage').textContent = 'Error Message: The user suffix name is an optional input field; however, you must enter more than one characters into the user suffix name required input field.';

		setTimeout(function() {
			document.getElementById('userDMVSuffixErrorMessage').textContent = '';
		},
		9000)
	
		return false;  

	}

	if (DMVDateOfBirth === '' || DMVDateOfBirth == null) {                                                               
		document.getElementById('userDMVDateOfBirthErrorMessage').textContent  = 'Error Message: The user date of birth is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVDateOfBirthErrorMessage').textContent  = '';
		},
		9000)
	
		return false;		

	}

	if (DMVBirthSex === '' || DMVBirthSex == null) {                                                               
		document.getElementById('userDMVBirthSexErrorMessage').textContent = 'Error Message: The user birth sex is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVBirthSexErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVGenderIdentity === '' || DMVGenderIdentity == null) {                                                               
		document.getElementById('userDMVGenderIdentityErrorMessage').textContent  = 'Error Message: The user gender identity is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVGenderIdentityErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVRace === '' || DMVRace == null) {                                                               
		document.getElementById('userDMVRaceErrorMessage').textContent  = 'Error Message: The user race is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVRaceErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVUSResidentStatusSelection === '' || DMVUSResidentStatusSelection == null) {		
		document.getElementById('userDMVUSResidentStatusSelectionErrorMessage').textContent = 'Error Message: The user\'s US Resident Status is a required select option field and you must select the user correct US Resident Status from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVUSResidentStatusSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVUSResidentStatusCategorySelection === '' || DMVUSResidentStatusCategorySelection == null) {		
		document.getElementById('userDMVUSResidentStatusCategorySelectionErrorMessage').textContent = 'Error Message: The user\'s US Resident Status Category is a required select option field and you must select the user correct US Resident Status Category from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVUSResidentStatusCategorySelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVUSResidentStatusSubjectSelection === '' || DMVUSResidentStatusSubjectSelection == null) {		
		document.getElementById('userDMVUSResidentStatusSubjectSelectionErrorMessage').textContent = 'Error Message: The user\'s US Resident Status Subject is a required select option field and you must select the user correct US Resident Status Subject from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVUSResidentStatusSubjectSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVGradeSchool === '' || DMVGradeSchool == null || DMVGradeSchool.length <= 2 || !DMVGradeSchool.match(regExName)) {                                                               
		document.getElementById('userDMVGradeSchoolErrorMessage').textContent  = 'Error Message: The user grade school is a required input field or you must enter more than two characters into the user\'s Grade School name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVGradeSchoolErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVGradeSchoolSelection=== '' || DMVGradeSchoolSelection == null) {		
		document.getElementById('userDMVGradeSchoolSelectionErrorMessage').textContent = 'Error Message: The user\'s grade school is a required select option field and you must select if the user is a grade school graduate from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVGradeSchoolSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVGradeSchoolYearSelection=== '' || DMVGradeSchoolYearSelection == null) {		
		document.getElementById('userDMVGradeSchoolYearSelectionErrorMessage').textContent = 'Error Message: The user\'s grade school year is a required select option field and you must select the user\'s grade school graduate year from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVGradeSchoolYearSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVHighSchool === '' || DMVHighSchool == null || DMVHighSchool.length <= 2 || !DMVHighSchool.match(regExName)) {                                                               
		document.getElementById('userDMVHighSchoolErrorMessage').textContent  = 'Error Message: The user\'s high school is a required input field or you must enter more than two characters into the user\'s High School name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVHighSchoolErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVHighSchoolSelection=== '' || DMVHighSchoolSelection == null) {		
		document.getElementById('userDMVHighSchoolSelectionErrorMessage').textContent = 'Error Message: The user\'s high school is a required select option field and you must select if the user is a high school graduate from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVHighSchoolSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVHighSchoolYearSelection=== '' || DMVHighSchoolYearSelection == null) {		
		document.getElementById('userDMVHighSchoolYearSelectionErrorMessage').textContent = 'Error Message: The user\'s high school year is a required select option field and you must select the user\'s high school graduate year from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVHighSchoolYearSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVCollege === '' || DMVCollege == null || DMVCollege.length <= 2 || !DMVCollege.match(regExName)) {                                                               
		document.getElementById('userDMVHighSchoolErrorMessage').textContent  = 'Error Message: The user\'s college or university is a required input field or you must enter more than two characters into the user\'s college or university name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVHighSchoolErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVDegreeSelection === '' || DMVDegreeSelection == null) {		
		document.getElementById('userDMVDegreeSelectionErrorMessage').textContent = 'Error Message: The user\'s college or university degree is a required select option field and you must select the user correct college or university degree from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVDegreeSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVCategorySelection === '' || DMVCategorySelection == null) {		
		document.getElementById('userDMVDegreeSelectionErrorMessage').textContent = 'Error Message: The user\'s college or university degree category is a required select option field and you must select the user correct college or university degree category from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVDegreeSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVSubjectSelection === '' || DMVSubjectSelection == null) {		
		document.getElementById('userDMVSubjectSelectionErrorMessage').textContent = 'Error Message: The user\'s college or university degree subject is a required select option field and you must select the user correct college or university subject category from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVSubjectSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVCollegeYearSelection=== '' || DMVCollegeYearSelection == null) {		
		document.getElementById('userDMVCollegeYearSelectionErrorMessage').textContent = 'Error Message: The user\'s degree year is a required select option field and you must select the user\'s degree graduate year from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVCollegeYearSelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (DMVSSN === '' || DMVSSN == null || !DMVSSN.match(regExSSN)) {                                                               
		document.getElementById('userDMVSSNErrorMessage').textContent  = 'Error Message: The user SSN is a required input field or you must enter the user correct SSN into the require input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVSSNErrorMessage').textContent = '';
		},
		9000)
	
		return false;		

	}

	if (DMVEmail === '' || DMVEmail == null || DMVEmail.length <= 6 || !DMVEmail.match(regExEmail)) {
		document.getElementById('userDMVEmailErrorMessage').textContent = 'Error Message: The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (DMVConfirmEmail === '' || DMVConfirmEmail == null || DMVConfirmEmail.length <= 6 || !DMVConfirmEmail.match(regExEmail)) {
		document.getElementById('userDMVConfirmEmailErrorMessage').textContent = 'Error Message: The user\'s confirm email address is a required input field and you must enter the correct user confirm email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (DMVEmail != DMVConfirmEmail) {
		document.getElementById('userDMVConfirmEmailErrorMessage').textContent = 'Error Message: The user\'s email address does not match to his/her confirm email address which are required input fields.';

		setTimeout(function() {
			document.getElementById('userDMVConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (DMVPhoneNumber === '' || DMVPhoneNumber == null || DMVPhoneNumber.length <= 10 || !DMVPhoneNumber.match(regExPhoneNumber))  {                                                               
		document.getElementById('userDMVPhoneNumberErrorMessage').textContent = 'Error Message: The user\'s phone number is a required input field or you must enter exactly the user twelve number digits into the phone number required input field.';

		setTimeout(function() {
			document.getElementById('userDMVPhoneNumberErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}	

	if (DMVAddress === '' || DMVAddress == null || DMVAddress.length <= 6 || !DMVAddress.match(regExAddress))  {                                                               
		document.getElementById('userDMVAddressErrorMessage').textContent = 'Error Message: The user\'s street address is a required field and you must enter the user correct street address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVAddressErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}
	
	if (DMVUnitType === '' || DMVUnitType == null) {
		document.getElementById('userDMVUnitTypeErrorMessage').textContent = 'Error Message: Select the user residential unit type to which he or she lives in, and the user residential unit type is a require field.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeErrorMessage').textContent = '';
		},
		9000)   
	
		return false;  

	}

	if (DMVUnitTypeNumber === '' || DMVUnitTypeNumber == null || DMVUnitTypeNumber.match(regExUnitTypeNumber))  {                                                               
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent =  'Error Message: The user\'s unit type number is a required field unless the user own his or her home or other residential property which does not have an address unit type number.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)               

	} else if (!DMVUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = 'Error Message: The user\'s address unit type number is a required field unless the user own his or her home or other residential property which does not have an address unit type number. Please leave blank, if the user does not have an apartment number or unit number of an alphanumeric characters';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

	} else if (!DMVUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		//document.getElementById('userReviewUnitTypeNumber').textContent = '11. Your Residential Unit Type Number is: ' +  userUnitTypeNumber + '.';
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = 'Error Message: The user\'s address unit type number is a required field unless the user own his or her  home or other residential property which does not have an address unit type number. Please leave blank, if the user does not have an apartment number or unit number of an alphanumeric characters.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

		return false;
	} 

	if (DMVCountrySelection === '' || DMVCountrySelection == null) {		
		document.getElementById('userDMVCountrySelectionErrorMessage').textContent = 'Error Message: The user\'s country is a required select option field and you must select the user correct country from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVCountrySelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

    if (DMVStateSelection === '' || DMVStateSelection == null) {       
        document.getElementById('userDMVStateSelectionErrorMessage').textContent = 'Error Message: The user\'s state is a required select option field and you must select the user correct state from the option require field.';

        setTimeout(function() {
            document.getElementById('userDMVStateSelectionErrorMessage').textContent = '';
        },
        9000)    	

        return false;  

    } 

    if (DMVCountySelection === '' || DMVCountySelection == null) {
		document.getElementById('userDMVCountySelectionErrorMessage').textContent = 'Error Message: The user\'s county is a required select option field and you must select the user correct county from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVCountySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (DMVCitySelection === '' || DMVCitySelection == null) {
		document.getElementById('userDMVCitySelectionErrorMessage').textContent = 'Error Message: The user\'s city is a required select option field and you must select the user correct city from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVCitySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (DMVZipSelection === '' || DMVZipSelection == null) {
		document.getElementById('userDMVZipSelectionErrorMessage').textContent = 'Error Message: The user\'s zip code area is a required select option field and you must select the user correct zip code area from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVZipSelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	} 

    if (DMVIdType === '' || DMVIdType == null) {
        document.getElementById('userDMVIdTypeErrorMessage').textContent = 'Error Message: The user\'s Alabama identification card type is a required option field and you must select the user correct Alabama\'s identification card type from the option require field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeErrorMessage').textContent = '';
        },
        9000)    	
    
        return false;  

    }

    if (DMVIdTypeNumber === '' || DMVIdTypeNumber == null || !DMVIdTypeNumber.match(regExAlabamaId))  {                                                               
        document.getElementById('userDMVIdTypeNumberErrorMessage').textContent =  'Error Message: The user\'s Alabama numeric identification card characters are a required field or you must enter the user correct Alabama numeric identification card characters from his or her Alabama\'s identification card into the required field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeNumberErrorMessage').textContent = '';
        },
        9000)

        return false;

    }  
    
    if (DMVIdTypeNumber === '' || DMVIdTypeNumber == null || !DMVIdTypeNumber.match(regExAlabamaId))  {                                                               
        document.getElementById('userDMVIdTypeNumberErrorMessage').textContent =  'Error Message: The user\'s Alabama numeric identification card characters are a required field or you must enter the user correct Alabama numeric identification card characters from his or her Alabama\'s identification card into the required field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeNumberErrorMessage').textContent = '';
        },
        9000)

        return false;

    } 
    
    if (IvoteBallotIdIdentifierCode  === '' || IvoteBallotIdIdentifierCode  == null || !IvoteBallotIdIdentifierCode.match(regIvoteballotIdIdentifierCode)) {                                                               
        document.getElementById('useriVoteBallotIdIdentifierCodeErrorMessage').textContent = 'Error Message: The user\'s iVoteBallot Id Identifier Code is a required input field and you must enter the user correct alphanumeric characters format into the required input field.';

        setTimeout(function() {
            document.getElementById('useriVoteBallotIdIdentifierCodeErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 

	if (ConfirmIvoteBallotIdIdentifierCode === '' || ConfirmIvoteBallotIdIdentifierCode  == null || !ConfirmIvoteBallotIdIdentifierCode.match(regIvoteballotIdIdentifierCode)) {                                                               
        document.getElementById('userConfirmiVoteBallotIdIdentifierCodeErrorMessage').textContent = 'Error Message: The user\'s iVoteBallot Id Identifier Code is a required input field and you must enter the user correct alphanumeric characters format into the required input field.';

        setTimeout(function() {
            document.getElementById('userConfirmiVoteBallotIdIdentifierCodeErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 	

	if (IvoteBallotIdIdentifierCode  != ConfirmIvoteBallotIdIdentifierCode) {
		document.getElementById('userConfirmiVoteBallotIdIdentifierCodeErrorMessage').textContent = 'Error Message: The user\'s iVoteballot Id Identifier Code does not match to his/her confirm iVoteBallot Id Identifier Code which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmiVoteBallotIdIdentifierCodeErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (Password === '' || Password == null) {
		document.getElementById('userPasswordErrorMessage').textContent = 'Error Message: The user\'s password is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	}   	
			
	if (ConfirmPassword === '' || ConfirmPassword == null) {
		document.getElementById('userConfirmPasswordErrorMessage').textContent = 'Error Message: The user\'s confirm password is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userConfirmPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 
	
	if (Password != ConfirmPassword) {
		document.getElementById('userConfirmPasswordErrorMessage').textContent = 'Error Message: The user\'s password does not match to his/her confirm password which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmPasswordErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (Temporary_Password === '' || Temporary_Password == null) {
		document.getElementById('userTemporary_PasswordErrorMessage').textContent = 'Error Message: The user\'s temporary password is a required input field.';

		setTimeout(function() {
			document.getElementById('userTemporary_PasswordErrorMessage').textContent = '';
		},
		9000)

	return false;

	}     

	
	// Your e event handling code here
	e.preventDefault(); // Prevent default action for e event
	                              
	
	form.addEventListner('submit', validateAlabamaDMV_CommissionForm);
	return true; 	
		
}


	
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

const highEducationData = {
		
	'Associate': {
		'Art & Design': [
			'Art & History', 
			'Graphic Design', 
			'Multimedia Design', 
			'Photography'
		],
		'Business & Management': [
			'Accounting', 
			'Business Administration', 
			'Business Intelligence', 
			'Contract Management', 
			'Entrepreneurship', 
			'Finance', 
			'Hospitality Management', 
			'Hotel & Restaurant Management', 
			'Human Resource', 
			'Management', 
			'Management Information System', 
			'Marketing', 'Non-Profit Management', 
			'Retail & Sales Management', 
			'Small Business', 
			'Sports Management', 
			'Supply Chain & Logistics', 
			'Taxation'
		],
		'Computer & Technology': [
			'Computer Engineering', 
			'Computer Programming',
			'Computer Science',
			'Data Analytics',
			'Database Management',
			'Information Systems Security',
			'Information Technology',
			'Network Administration',
			'Network Security',
			'Software Engineering',
			'Web Development'
		],
		'Criminal Justice & Legal': [
			'Criminal Justice', 
			'Criminology', 
			'Cyber Security',
			'Homeland Security',
			'Law Enforcement',
			'Legal Studies',
			'Paralegal',
			'Public Safety Administration',
		],
		'Education & Teaching': [
			'Early Childhood Education', 
			'Education',
			'Elementary Education'
		],
		'Liberal Arst & Humanities': [
			'Communications', 
			'General Studies',
			'Liberal Arts',
			'Military Studies',
			'Ministry',
			'Social Work',
			'Sociology',
		],
		'Nursing & Healthcare': [
			'Dental Assistance', 
			'Emergency Management',
			'Fitness & Personal Training',
			'Health Informatics',
			'Health Science',
			'Health Services',
			'Healthcare Administration',
			'Healthcare Management',
			'Human Services',
			'Medical Assisting',
			'Medical Coding',
			'Medical Office Administration',
			'Pharmacy',
			'Pre-Nursing (RN Not Required',
			'Public Health'
		],
		'Psychology & Counseling': [
			'Psychology'		
		],
		'Science & Engineering': [
			'Aeronautics/Aviation', 
			'Data Science',
			'Electorial Engineering',
			'Electronics Engineering',
			'Engineering',
			'Industrial Engineering',
			'Mechanical Engineering',
			'Physics'
		],
		'Trades & Career': [
			'Automotive', 
			'Fire Science',
			'Heating/Cooling',
			'Technology',
			'Trades'
		]
	},
	'Bachelor': {
		'Art & Design': [
			'Art & History',
			'Creative/Design',
			'Fashion',
			'Film',
			'Game Design',
			'Graphic Design',
			'Interior Design',
			'Multimedia Design',
			'Photography',
			'Visual Communications',
			'Web Design',
		],
		'Business & Management': [
			'Accounting', 
			'Advertising',
			'Business Administration',
			'Business Intelligence',
			'Business Law',
			'Contract Management',
			'Digital Marketing',
			'E-Business', 
			'Economics',
			'Entertainment Management',
			'Entrepreneurship',
			'Finance',
			'Forensic Accounting',
			'Hospitality Management',
			'Human Resources', 
			'International Business',
			'Logistics',
			'Management',
			'Management Information Systems',
			'Marketing',
			'Negotiation & Conflict Management',
			'Non-Profit Management', 
			'Organizational Leadership',
			'Project Management',
			'Public Relations',
			'Real Estate',
			'Retail & Sales Management',
			'Risk Management',
			'Small Business', 
			'Sports Management',
			'Supply Chain & Logistics',
			'Sustainability',
			'Taxation'	
		],
		'Computers & Technology': [
			'Artificial Intelligence', 
			'Computer Engineering',
			'Computer Forensics', 
			'Computer Programming',
			'Computer Science',
			'Data Analytics',
			'Database Management',
			'Emerging Technology',
			'Information System Security',
			'Information Technology', 
			'Internet Security',
			'Mobile Development',
			'Network Administration',
			'Network Security',
			'Software Engineering',
			'UX/UI',
			'Web Development' 			
		],
		'Criminal Justice & Legal': [
			'Corrections',
			'Crime Scene Investigation', 
			'Criminal Justice',
			'Criminology',
			'Cyber Security',
			'Forensic Science',
			'Homeland Security',
			'Law Enforcement',
			'Legal Studies', 
			'Paralegal',
			'Public Safety Administration',
			'Security'			
		],
		'Education & Teaching': [
			'Adult Education/Learning', 
			'Art Education',
			'Child Development', 
			'Coaching',
			'Curriculum & Instruction',
			'Early Childhood Education',
			'Education',
			'Education Administration',
			'Educational Counseling',
			'Elementary Education', 
			'English Language Learning',
			'K-12 Education',
			'Library Science',
			'Math Education',
			'Science Education',
			'Secondary Education',
			'Social Studies', 
			'Special Education',
			'Teacher Licensure'			
		],
		'Liberal Arts & Humanities': [
			'Anthropology', 
			'Communications',
			'English', 
			'General Studies',
			'Geography',
			'History',
			'Human & Famaily Development',
			'Journalism',
			'Liberal Arts',
			'Media Communications', 
			'Military Studies',
			'Ministry',
			'Music',
			'Philosophy',
			'Political Science',
			'Public Admininstration',
			'Public Policy', 
			'Social Science',
			'Social Work',
			'Sociology',
			'Theology',
			'Writing'			
		],
		'Nursing & Healthcare': [
			'Clinical Research',
			'Emergency Management',
			'Fitness & Personal Training', 
			'Gerontology',
			'Health Education',
			'Health Informatics',
			'Health Science',
			'Health Services',
			'Healthcare Administration',
			'Healthcare Management', 
			'Human Services',
			'Life Care Management',
			'Medical Assisting',
			'Nursing (RN Required)',
			'Nutritional Sciences',
			'Occupational Therapy',
			'Public Health', 
			'RN to BSN (RN Required)',
			'Radiology Technology',
			'Respiratory Therapy',
			'Speech Therapy',
			'Sports Medicine',
			'Sports Medicine/Physical Therapy'			
		],
		'Psychology & Counseling': [
			'Addictions & Recovery',
			'Behavioral Psychology', 
			'Child and Adolescent Psychology',
			'Counseling',
			'Educational Psychology',
			'Family Counseling',
			'Forensic Psychology',
			'Mental Health Counseling',
			'Organizational Psychology', 
			'Psychology'			
		],
		'Science & Engineering': [
			'Aeronautics/Aviation', 
			'Biochemistry', 
			'Biology',
			'Biomedical Engineering', 
			'Chemistry',
			'Civil Engineering',
			'Data Science',
			'Electrical Engineering',
			'Electronics Engineering',
			'Engineering',
			'Engineering Management', 
			'Environmental Science',
			'Industrical Engineering',
			'Mechanical Engineering',
			'Physic'
		],
		'Trades & Careers': [
			'Automative', 
			'Construction Management',
			'Electrical Technician', 
			'Fire Science',
			'Forestry',
			'Technology'			
		],		
	},
	'Master': {
		'Art & Design': [
			'Architecture',
			'Art & Art History', 
			'Creative / Design',
			'Film',
			'Game Design',
			'Graphic Design',
			'Interior Design',
			'Landscape Architecture',
			'Multimedia Design', 
			'Visual Communications',
			'Web Design'			
		],
		'Business & Management': [
			'Accounting', 
			'Advertising',
			'Business Administration',
			'Business Intelligence',
			'Business Law',		
			'Digital Marketing',		
			'Economics',
			'Entertainment Management',
			'Entrepreneurship',
			'Finance',
			'Forensic Accounting',
			'Hospitality Management',
			'Human Resources', 
			'International Business',			
			'Management',
			'Management Information Systems',
			'Marketing',
			'Negotiation & Conflict Management',
			'Non-Profit Management', 
			'Organizational Leadership',
			'Project Management',
			'Public Relations',
			'Real Estate',
			'Risk Management',			
			'Small Business', 
			'Sports Management',
			'Supply Chain & Logistics',
			'Sustainability',
			'Taxation',
			'Training & Development'	
		],
		'Computers & Technology': [
			'Artificial Intelligence', 
			'Computer Engineering',
			'Computer Forensics', 
			'Computer Programming',
			'Computer Science',
			'Data Analytics',
			'Database Management',			
			'Information System Security',
			'Information Technology', 					
			'Network Administration',
			'Network Security',
			'Product Management',
			'Software Engineering',
			'Technology Sales',
			'UX/UI',
			'Web Development' 					
		],
		'Criminal Justice & Legal': [
			'Corrections',
			'Crime Scene Investigation', 
			'Criminal Justice',
			'Criminology',
			'Cyber Security',
			'Forensic Science',
			'Homeland Security',
			'Law Enforcement',
			'Legal Studies', 
			'Paralegal',
			'Public Safety Administration',
			'Security'			
		],
		'Education & Teaching': [
			'Adult Education/Learning', 
			'Art Education',
			'Assessment & Measurement',
			'Child Development', 
			'Coaching',
			'Curriculum & Instruction',
			'Early Childhood Education',
			'Education',
			'Educational Administration',
			'Educational Counseling',
			'Educational leadership',
			'Educational Technology',
			'Elementary Education', 
			'English Language Learning',
			'Gifted & Talented Education',
			'Higher Education',
			'K-12 Education',
			'Library Science',
			'Math Education',
			'Montessori Education',
			'Music Education',
			'Online Teaching',
			'Reading & Literacy',
			'Science Education',
			'Secondary Education',
			'Social Studies', 
			'Special Education',
			'Teacher Licensure'			
		],
		'Liberal Arts & Humanities': [			
			'Communications',
			'English', 
			'General Studies',
			'Geography',
			'History',
			'Human & Famaily Development',
			'Journalism',
			'Liberal Arts',
			'Media Communications', 
			'Military Studies',
			'Ministry',
			'Music',			
			'Political Science',
			'Public Admininstration',
			'Public Policy', 
			'Social Science',
			'Social Work',
			'Sociology',
			'Theology',
			'Writing'			
		],
		'Nursing & Healthcare': [
			'Clinical Research',
			'Emergency Management',
			'Fitness & Personal Training', 
			'Forensic Nursing',
			'Gerontology',
			'Health Education',
			'Health Informatics',
			'Health Science',
			'Health Services',
			'Healthcare Administration',
			'Healthcare Management', 
			'Human Services',
			'Nurse Practitioner (RN Required)',
			'Nursing (RN Required)',
			'Nursing Education (RN Required)',				
			'Nutritional Sciences',
			'Occupational Therapy',
			'Pharmacy',
			'Pre-Nursing (RN Not Required)',
			'Public Health', 
			'Registered Nursing (RN)',				
			'Speech Therapy',
			'Sports Medicine',
			'Sports Medicine/Physical Therapy',
			'Veterinary'	
		],
		'Psychology & Counseling': [
			'Addictions & Recovery',
			'Behavioral Psychology', 
			'Child and Adolescent Psychology',
			'Counseling',
			'Educational Psychology',
			'Family Counseling',
			'Forensic Psychology',
			'Mental Health Counseling',
			'Organizational Psychology', 
			'Psychology'			
		],
		'Science & Engineering': [
			'Aeronautics/Aviation', 
			'Biochemistry', 
			'Biology',
			'Biomedical Engineering', 
			'Biotechnology',			
			'Civil Engineering',
			'Data Science',
			'Electrical Engineering',
			'Electronics Engineering',
			'Engineering',
			'Engineering Management', 
			'Environmental Management',
			'Environmental Science',
			'Industrical Engineering',
			'Lab Science',
			'Mechanical Engineering',
			'Physics'
		],
		'Trades & Careers': [			
			'Construction Management',			
			'Fire Science',		
			'Technology'
		],

	},
	'Doctorate': {		
		'Business & Management': [
			'Accounting', 			
			'Business Administration',
			'Business Intelligence',			
			'Entrepreneurship',
			'Finance',			
			'Human Resources', 
			'International Business',			
			'Management',
			'Management Information Systems',
			'Marketing',
			'Negotiation & Conflict Management',
			'Non-Profit Management', 
			'Organizational Leadership',
			'Project Management',			
			'Real Estate',			
			'Sports Management',
			'Supply Chain & Logistics',
			'Sustainability',		
			'Training & Development'	
		],
		'Computers & Technology': [			
			'Computer Science',			
			'Information Technology'	
		],
		'Criminal Justice & Legal': [			
			'Criminal Justice',
			'Criminology',
			'Cyber Security',		
			'Homeland Security',
			'Juris Doctorate',
			'Law Enforcement',
			'Legal Studies', 		
		],
		'Education & Teaching': [
			'Adult Education/Learning', 			
			'Assessment & Measurement',		
			'Coaching',
			'Curriculum & Instruction',
			'Early Childhood Education',
			'Education',
			'Educational Administration',
			'Educational Counseling',
			'Educational leadership',
			'Educational Technology',
			'Elementary Education', 
			'English Language Learning',			
			'Higher Education',
			'K-12 Education',			
			'Math Education',			
			'Reading & Literacy',
			'Science Education',
			'Secondary Education',			
			'Special Education'					
		],
		'Liberal Arts & Humanities': [	
			'Media Communications', 			
			'Ministry',			
			'Public Admininstration',
			'Public Policy', 
			'Social Science',
			'Social Work',
			'Sociology',
			'Theology'				
		],
		'Nursing & Healthcare': [
			'Clinical Research',			
			'Gerontology',
			'Health Education',			
			'Health Science',
			'Health Services',
			'Healthcare Administration',
			'Healthcare Management', 
			'Human Services',
			'Nurse Practitioner (RN Required)',
			'Nursing (RN Required)',
			'Nursing Education (RN Required)',	
			'Occupational Therapy',
			'Pharmacy',		
			'Public Health', 
			'Registered Nursing (RN)',	
			'Sports Medicine/Physical Therapy'				
		],
		'Psychology & Counseling': [
			'Addictions & Recovery',
			'Behavioral Psychology', 
			'Child and Adolescent Psychology',
			'Counseling',
			'Educational Psychology',
			'Family Counseling',			
			'Mental Health Counseling',
			'Organizational Psychology', 
			'Psychology'			
		],
		'Science & Engineering': [			
			'Data Science',
		],	

	},
	'Certificate/Diploma': {
		'Allgood': ['35013', '35121'],
		'Blountsville': ['35031'],
		'Cleveland': ['35049','35121'],
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
	'Graduate Certification': {
		'Midway': ['36053'],
		'Union Springs': ['36089']
	},
	'Bootcamps': {
		'Georgiana': ['36033'],
		'Greenville': ['36037'],
		'McKenzie': ['36456']
	},

};	





const usResidentStatusData = {

	'U.S. Citizen': {
		'U.S. Citizenship': [

			'U.S. Citizenship',
			'Permanent Resident'

		],
	},
	'U.S. Resident Alien': {
		'Green Card': [ 

			'I - 130 | Alien Relative', 
			'I - 140 | Alien Worker', 
			'I - 360 | Amerasian, Widow(er) or Speical Immigrant', 	
			'I - 526 | Alien Entrepreneur', 		
			'I - 589 | Asylum & for Withholding of Removal', 
			'I - 730 | Refugee/Asylee Relative', 		
			'I - 918 | U NonImmigrant Status', 
			'I - 929 | Qualifying Family Member of a U-1 NonImmigrant'			
				
		],
	},	

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

	window.onload = function() {
		document.getElementById('firstName').value = (''); 
		document.getElementById('middleName').value =('');  
		document.getElementById('lastName').value = (''); 
		document.getElementById('suffix').value = ('');   
		document.getElementById('dateOfBirth').value = ('');    
		document.getElementById('birthSex').value = ('');   
		document.getElementById('genderIdentity').value = ('');  
		document.getElementById('race').value = (''); 
		document.getElementById('ssn').value = (''); 
		document.getElementById('email').value = ('');
		document.getElementById('confirmEmail').value = ('');  
		document.getElementById('phoneNumber').value = ('');	
		document.getElementById('address').value = ('');	
		document.getElementById('unitType').value = ('');
		document.getElementById('unitTypeNumber').value = ('');
		document.getElementById('countrySelect').value = ('');
		document.getElementById('stateSelect').value = ('');
		document.getElementById('countySelect').value = ('');
		document.getElementById('citySelect').value = ('');
		document.getElementById('zipSelect').value = ('');
		document.getElementById('idType').value = ('');
		document.getElementById('idTypeNumber').value = ('');
		document.getElementById('iVoteBallotIdIdentifierCode').value = ('');
		document.getElementById('iVoteBallotIdCodeHidden_Bcryptic').value = ('');
	
	}

	//Get user html DOM elements.
	var userDegreeSelection = document.getElementById("degreeSelect");
	var userCategorySelection = document.getElementById("categorySelect");    
	var userSubjectSelection = document.getElementById("subjectSelect");  
		
	
	//Load user country.
	
	for (var degreeType in highEducationData) {    
		userDegreeSelection.options[userDegreeSelection.options.length] = new Option(degreeType, degreeType);
		
	}   	
		
	userDegreeSelection.onchange = function () {
		
		userCategorySelection.length = 1; // remove all options bar first
		userSubjectSelection.length = 1; // remove all options bar first
		
		
		if (this.selectedIndex < 1)
				return true; // done
			
			for (var categoryType in highEducationData[this.value]) {
				userCategorySelection.options[userCategorySelection.options.length] = new Option(categoryType, categoryType);
			}
								
		}       
	
	userCategorySelection.onchange = function () {
		userSubjectSelection.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1)
			return; // done
		
		var subjectType = highEducationData[userDegreeSelection.value][this.value];
		for (var i = 0; i < subjectType.length; i++) {
			userSubjectSelection.options[userSubjectSelection.options.length] = new Option(subjectType[i], subjectType[i]);
		}
	
	}  	

	//Get user html DOM elements.
	var userUSResidentStatusSelection = document.getElementById("usResidentStatusSelect");
	var userUSResidentStatusCategorySelection = document.getElementById("usResidentStatusCategorySelect");
	var userUSResidentStatusSubjectSelection = document.getElementById("usResidentStatusSubjectSelect"); 

	//Load user US Resident Status.	
	for (var residentStatusType in usResidentStatusData) {    
		userUSResidentStatusSelection.options[userUSResidentStatusSelection.options.length] = new Option(residentStatusType, residentStatusType);
		
	}   

	userUSResidentStatusSelection.onchange = function () {
		
		userUSResidentStatusCategorySelection.length = 1; // remove all options bar first
		
		if (this.selectedIndex < 1)
				return true; // done
			
			for (var categoryType in usResidentStatusData[this.value]) {
				userUSResidentStatusCategorySelection.options[userUSResidentStatusCategorySelection.options.length] = new Option(categoryType, categoryType);
			}
								
		}  		
		
 		/* 
        Create function to allow users to change his/her city and zip code area. 
    	*/	
		userUSResidentStatusCategorySelection.onchange = function () {
			userUSResidentStatusSubjectSelection.length = 1; // remove all options bar first
			
			if (this.selectedIndex < 1)
				return; // done
			
			var status = usResidentStatusData[userUSResidentStatusSelection.value][this.value];
			for (var i = 0; i < status.length; i++) {
				userUSResidentStatusSubjectSelection.options[userUSResidentStatusSubjectSelection.options.length] = new Option(status[i], status[i]);
			}
		
		} 

}




	














