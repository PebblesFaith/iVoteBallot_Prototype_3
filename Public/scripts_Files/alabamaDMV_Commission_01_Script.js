

const validateAlabamaDMV_CommissionForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')
	
	const userDMV_FirstName = document.getElementById('firstName').value.trim(); 
	const userDMV_MiddleName = document.getElementById('middleName').value.trim();  
	const userDMV_LastName = document.getElementById('lastName').value.trim(); 
	const userDMV_Suffix = document.getElementById('suffix').value.trim();   
	const userDMV_DateOfBirth = document.getElementById('dateOfBirth').value.trim();    
	const userDMV_BirthSex = document.getElementById('birthSex').value.trim();   
	const userDMV_GenderIdentity = document.getElementById('genderIdentity').value.trim();  
	const userDMV_Race = document.getElementById('race').value.trim();  
	const userDMV_SSN = document.getElementById('ssn').value.trim(); 
	const userDMV_Email = document.getElementById('email').value.trim();
	const userDMV_ConfirmEmail = document.getElementById('confirmEmail').value.trim();  
	const userDMV_PhoneNumber = document.getElementById('phoneNumber').value.trim();	
	const userDMV_Address = document.getElementById('address').value.trim();	
	
	const regExName = /^[A-Za-z\s]+$/;
	const regExSSN =  /^\d{3}\-\d{2}\-\d{4}$/;  
	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regExPhoneNumber = /^\d{3}\-\d{3}\-\d{4}$/;  
	//const regExAddress = /^\d+\s[\d\w]+\s(.*)$/;  
	const regExAddress = /^\d+[ ](?:[A-Za-z0-9.-]+[ ]?)+(?:Avenue|Alley|Anex|Arcade|Boyou|Beach|Bend|Bluffs|Bottom|Branch|Brook|Bridge|Burg|Burgs|Bypass|Camp|Canyon|Cape|Causeway|Parkway|Pkwy|Center|Centers|Circle|Circles|Cliff|Cliffs|Club|Corner|Cove|Creek|Cresent|Crest|Crossing|XING|Dale|Dam|Divide|Estate|Expressway|Expy|Express|Fall|Falls|Ferry|Field|Fields|Forest|Fork|Freeway|Garden|Gardens|Gateway|Glen|Glens|Greens|Grove|Harbor|Harbors|Haven|Heights|Highway|Hill|Hills|Hollow|Inlet|Island|Islands|Isle|Junction|Key|Keys|Quay|Knoll|Knolls|Lake|Lakes|Land|Landing|Lock|Locks|Lodge|Loop|Mall|Manor|Manors|Meadow|Meadows|Mews|Mill|Mills|Mission|Motorway|Mountain|Mountains|Neck|Orchard|Oval|Overpass|Park|Parks|Parkways|Pass|Passage|Path|Pike|Plaza|Port|Ports|Ramp|Ranch|Ridge|River|Route|Row|Run|Shoal|Shore|Shores|Skyway|Springs|Springs|Square|Squares|SQ|Station|Stravenue|STRA|Stream|Summit|SMT|Terrace|TRCE|Throughway|TRWY|Trail|TRL|Tunnel|TUNL|Turnpike|TPKE|Underpass|UPAS|Union|UN|Unions|UNS|Valley|VLY|Viaduct|VIA|Village|View|Views|VW|Ville|Vista|VL|VIS|Walk|Walks|Way|Ways|Well|Wells|WL|WLS|Lane|Road|Boulevard|Drive|Street|Place|Ave|Dr|Rd|Blvd|Ln|St|Cir|South|S|North|N|West|W|East|E)\.?/;                                
									   
	if (userDMV_FirstName === '' || userDMV_FirstName == null || userDMV_FirstName.length <= 2 || !userDMV_FirstName.match(regExName)) {                                                               
		document.getElementById('userDMV_FirstNameErrorMessage').innerHTML = 'The user first name is a required input field or you must enter more than two characters into the userfirst name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_FirstNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_MiddleName === '' || userDMV_MiddleName == null) {
		document.getElementById('userDMV_MiddleNameErrorMessage').innerHTML = 'Do the user have a middle name? If so, please type in the user middle name into the input field or skip the user middle name input field entirety.';
	
		setTimeout(function() {
			document.getElementById('userDMV_MiddleNameErrorMessage').innerHTML = '';
		},
		9000)                                           
							
		} else if (userDMV_MiddleName.length <= 2 || !userDMV_MiddleName.match(regExName)) {
		document.getElementById('userDMV_MiddleNameErrorMessage').innerHTML = 'The user middle name is an optional input field; however, you must enter more than two characters into the user middle name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_MiddleNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;  
	
	} 
	
	if (userDMV_LastName === '' || userDMV_LastName == null || userDMV_LastName.length <= 2 || !userDMV_LastName.match(regExName)) {
		document.getElementById('userDMV_LastNameErrorMessage').innerHTML = 'The user last name is a required input field or you must enter more than two characters into the user last name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_LastNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;
	
	}

	if (userDMV_Suffix === '' || userDMV_Suffix == null) {
		document.getElementById('userDMV_SuffixErrorMessage').textContent = 'Do the user have a suffix name? If so, please type in the user suffix name into the input field or skip the user suffix name input field entirety.';

		setTimeout(function() {
			document.getElementById('userDMV_SuffixErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (userDMV_Suffix.length <= 0 || !userDMV_Suffix.match(regExName)) {
		document.getElementById('userDMV_SuffixErrorMessage').textContent = 'The user suffix name is an optional input field; however, you must enter more than one characters into the user suffix name required input field.';

		setTimeout(function() {
			document.getElementById('userDMV_SuffixErrorMessage').textContent = '';
		},
		9000)
	
		return false;  

	}

	if (userDMV_DateOfBirth === '' || userDMV_DateOfBirth == null) {                                                               
		document.getElementById('userDMV_DateOfBirthErrorMessage').innerHTML = 'The user date of birth is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_DateOfBirthErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_BirthSex === '' || userDMV_BirthSex == null) {                                                               
		document.getElementById('userDMV_BirthSexErrorMessage').innerHTML = 'The user birth sex is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_BirthSexErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_GenderIdentity === '' || userDMV_GenderIdentity == null) {                                                               
		document.getElementById('userDMV_GenderIdentityErrorMessage').innerHTML = 'The user gender identity is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_GenderIdentityErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_Race === '' || userDMV_Race == null) {                                                               
		document.getElementById('userDMV_RaceErrorMessage').innerHTML = 'The user race is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_RaceErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_SSN === '' || userDMV_SSN == null || !userDMV_SSN.match(regExSSN)) {                                                               
		document.getElementById('userDMV_SSNErrorMessage').innerHTML = 'The user SSN is a required input field or you must enter more than two characters into the userfirst name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_SSNErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMV_Email === '' || userDMV_Email == null || userDMV_Email.length <= 6 || !userDMV_Email.match(regExEmail)) {
		document.getElementById('userDMV_EmailErrorMessage').textContent = 'The user\s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMV_EmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userDMV_ConfirmEmail === '' || userDMV_ConfirmEmail == null || userDMV_ConfirmEmail.length <= 6 || !userDMV_ConfirmEmail.match(regExEmail)) {
		document.getElementById('userDMV_ConfirmEmailErrorMessage').textContent = 'The user\s confirm email address is a required input field and you must enter the correct user\s confirm email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMV_ConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (userDMV_Email != userDMV_ConfirmEmail) {
		document.getElementById('userDMV_ConfirmEmailErrorMessage').textContent = 'The user\s email address does not match to his/her confirm email address which are required input fields.';

		setTimeout(function() {
			document.getElementById('userDMV_ConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userDMV_PhoneNumber === '' || userDMV_PhoneNumber == null || userDMV_PhoneNumber.length <= 10 || !userDMV_PhoneNumber.match(regExPhoneNumber))  {                                                               
		document.getElementById('userDMV_PhoneNumberErrorMessage').textContent = 'Your phone number is a required input field or you must enter exactly twelve number digits into the phone number required input field.';

		setTimeout(function() {
			document.getElementById('userDMV_PhoneNumberErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}	

	if (userDMV_Address === '' || userDMV_Address == null || userDMV_Address.length <= 6 || !userDMV_Address.match(regExAddress))  {                                                               
		document.getElementById('userDMV_AddressErrorMessage').textContent = 'The user\s street address is a required field and you must enter the user correct street address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMV_AddressErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}	








                     
																
				                                                                  
	
	e.preventDefault();                                      
	
		form.addEventListner('submit', validateAlabamaDMV_CommissionForm);
		return true; 
		
	}