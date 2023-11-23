

const validateAlabamaDMV_CommissionForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')
	
	const userDMVFirstName = document.getElementById('firstName').value.trim(); 
	const userDMVMiddleName = document.getElementById('middleName').value.trim();  
	const userDMVLastName = document.getElementById('lastName').value.trim(); 
	const userDMVSuffix = document.getElementById('suffix').value.trim();   
	const userDMVDateOfBirth = document.getElementById('dateOfBirth').value.trim();    
	const userDMVBirthSex = document.getElementById('birthSex').value.trim();   
	const userDMVGenderIdentity = document.getElementById('genderIdentity').value.trim();  
	const userDMVRace = document.getElementById('race').value.trim();  
	const userDMVSSN = document.getElementById('ssn').value.trim(); 
	const userDMVEmail = document.getElementById('email').value.trim();
	const userDMVConfirmEmail = document.getElementById('confirmEmail').value.trim();  
	const userDMVPhoneNumber = document.getElementById('phoneNumber').value.trim();	
	const userDMVAddress = document.getElementById('address').value.trim();	
	const userDMVUnitType = document.getElementById('unitType').value.trim();
	const userDMVUnitTypeNumber = document.getElementById('unitTypeNumber').value.trim();
	const userDMVCountrySelection = document.getElementById('countrySelect').value.trim();
    const userDMVStateSelection = document.getElementById('stateSelect').value.trim();
    const userDMVCountySelection = document.getElementById('countySelect').value.trim();
	const userDMVCitySelection = document.getElementById('citySelect').value.trim();
	const userDMVZipSelection = document.getElementById('zipSelect').value.trim();
    const userDMVIdType = document.getElementById('idType').value.trim();
    const userDMVIdTypeNumber = document.getElementById('idTypeNumber').value.trim();
    const userCommissionIvoteBallotIdIdentifierCode = document.getElementById('iVoteBallotIdIdentifierCode').value.trim();
    const userCommissionIvoteBallotIdCodeBcryptic = document.getElementById('iVoteBallotIdCodeHidden_Bcryptic').value.trim();
	
	
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
	
	if (userDMVFirstName === '' || userDMVFirstName == null || userDMVFirstName.length <= 2 || !userDMVFirstName.match(regExName)) {                                                               
		document.getElementById('userDMVFirstNameErrorMessage').innerHTML = 'The user first name is a required input field or you must enter more than two characters into the userfirst name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVFirstNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVMiddleName === '' || userDMVMiddleName == null) {
		document.getElementById('userDMVMiddleNameErrorMessage').innerHTML = 'Do the user have a middle name? If so, please type in the user middle name into the input field or skip the user middle name input field entirety.';
	
		setTimeout(function() {
			document.getElementById('userDMVMiddleNameErrorMessage').innerHTML = '';
		},
		9000)                                           
							
		} else if (userDMVMiddleName.length <= 2 || !userDMVMiddleName.match(regExName)) {
		document.getElementById('userDMVMiddleNameErrorMessage').innerHTML = 'The user middle name is an optional input field; however, you must enter more than two characters into the user middle name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVMiddleNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;  
	
	} 
	
	if (userDMVLastName === '' || userDMVLastName == null || userDMVLastName.length <= 2 || !userDMVLastName.match(regExName)) {
		document.getElementById('userDMVLastNameErrorMessage').innerHTML = 'The user last name is a required input field or you must enter more than two characters into the user last name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVLastNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;
	
	}

	if (userDMVSuffix === '' || userDMVSuffix == null) {
		document.getElementById('userDMVSuffixErrorMessage').textContent = 'Do the user have a suffix name? If so, please type in the user suffix name into the input field or skip the user suffix name input field entirety.';

		setTimeout(function() {
			document.getElementById('userDMVSuffixErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (userDMVSuffix.length <= 0 || !userDMVSuffix.match(regExName)) {
		document.getElementById('userDMVSuffixErrorMessage').textContent = 'The user suffix name is an optional input field; however, you must enter more than one characters into the user suffix name required input field.';

		setTimeout(function() {
			document.getElementById('userDMVSuffixErrorMessage').textContent = '';
		},
		9000)
	
		return false;  

	}

	if (userDMVDateOfBirth === '' || userDMVDateOfBirth == null) {                                                               
		document.getElementById('userDMVDateOfBirthErrorMessage').innerHTML = 'The user date of birth is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVDateOfBirthErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVBirthSex === '' || userDMVBirthSex == null) {                                                               
		document.getElementById('userDMVBirthSexErrorMessage').innerHTML = 'The user birth sex is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVBirthSexErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVGenderIdentity === '' || userDMVGenderIdentity == null) {                                                               
		document.getElementById('userDMVGenderIdentityErrorMessage').innerHTML = 'The user gender identity is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVGenderIdentityErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVRace === '' || userDMVRace == null) {                                                               
		document.getElementById('userDMVRaceErrorMessage').innerHTML = 'The user race is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVRaceErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVSSN === '' || userDMVSSN == null || !userDMVSSN.match(regExSSN)) {                                                               
		document.getElementById('userDMVSSNErrorMessage').innerHTML = 'The user SSN is a required input field or you must enter the user correct SSN into the require input field.';
	
		setTimeout(function() {
			document.getElementById('userDMVSSNErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;		

	}

	if (userDMVEmail === '' || userDMVEmail == null || userDMVEmail.length <= 6 || !userDMVEmail.match(regExEmail)) {
		document.getElementById('userDMVEmailErrorMessage').textContent = 'The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userDMVConfirmEmail === '' || userDMVConfirmEmail == null || userDMVConfirmEmail.length <= 6 || !userDMVConfirmEmail.match(regExEmail)) {
		document.getElementById('userDMVConfirmEmailErrorMessage').textContent = 'The user\'s confirm email address is a required input field and you must enter the correct user confirm email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (userDMVEmail != userDMVConfirmEmail) {
		document.getElementById('userDMVConfirmEmailErrorMessage').textContent = 'The user\'s email address does not match to his/her confirm email address which are required input fields.';

		setTimeout(function() {
			document.getElementById('userDMVConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userDMVPhoneNumber === '' || userDMVPhoneNumber == null || userDMVPhoneNumber.length <= 10 || !userDMVPhoneNumber.match(regExPhoneNumber))  {                                                               
		document.getElementById('userDMVPhoneNumberErrorMessage').textContent = 'The user\'s phone number is a required input field or you must enter exactly the user twelve number digits into the phone number required input field.';

		setTimeout(function() {
			document.getElementById('userDMVPhoneNumberErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}	

	if (userDMVAddress === '' || userDMVAddress == null || userDMVAddress.length <= 6 || !userDMVAddress.match(regExAddress))  {                                                               
		document.getElementById('userDMVAddressErrorMessage').textContent = 'The user\'s street address is a required field and you must enter the user correct street address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVAddressErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}
	
	if (userDMVUnitType === '' || userDMVUnitType == null) {
		document.getElementById('userDMVUnitTypeErrorMessage').textContent = 'Select the user residential unit type to which he or she lives in, and the user residential unit type is a require field.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeErrorMessage').textContent = '';
		},
		9000)   
	
		return false;  

	}

	if (userDMVUnitTypeNumber === '' || userDMVUnitTypeNumber == null || userDMVUnitTypeNumber.match(regExUnitTypeNumber))  {                                                               
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent =  'The user\'s unit type number is a required field unless the user own his or her home or other residential property which does not have an address unit type number.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)               

	} else if (!userDMVUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = 'The user\'s address unit type number is a required field unless the user own his or her home or other residential property which does not have an address unit type number. Please leave blank, if the user does not have an apartment number or unit number of an alphanumeric characters';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

	} else if (!userDMVUnitTypeNumber.match(regExUnitIdTypeDetails)) {
		//document.getElementById('userReviewUnitTypeNumber').textContent = '11. Your Residential Unit Type Number is: ' +  userUnitTypeNumber + '.';
		document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = 'Error Message: The user\'s address unit type number is a required field unless the user own his or her  home or other residential property which does not have an address unit type number. Please leave blank, if the user does not have an apartment number or unit number of an alphanumeric characters.';

		setTimeout(function() {
			document.getElementById('userDMVUnitTypeNumberErrorMessage').textContent = '';
		},
		9000)

		return false;
	} 

	if (userDMVCountrySelection === '' || userDMVCountrySelection == null) {		
		document.getElementById('userDMVCountrySelectionErrorMessage').textContent = 'Error Message: The user\'s country is a required select option field and you must select the user correct country from the option require field.';
		setTimeout(function() {
			document.getElementById('userDMVCountrySelectionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

    if (userDMVStateSelection === '' || userDMVStateSelection == null) {       
        document.getElementById('userDMVStateSelectionErrorMessage').textContent = 'Error Message: The user\'s state is a required select option field and you must select the user correct state from the option require field.';

        setTimeout(function() {
            document.getElementById('userDMVStateSelectionErrorMessage').textContent = '';
        },
        9000)    	

        return false;  

    } 

    if (userDMVCountySelection === '' || userDMVCountySelection == null) {
		document.getElementById('userDMVCountySelectionErrorMessage').textContent = 'Error Message: The user\'s county is a required select option field and you must select the user correct county from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVCountySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userDMVCitySelection === '' || userDMVCitySelection == null) {
		document.getElementById('userDMVCitySelectionErrorMessage').textContent = 'Error Message: The user\'s city is a required select option field and you must select the user correct city from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVCitySelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userDMVZipSelection === '' || userDMVZipSelection == null) {
		document.getElementById('userDMVZipSelectionErrorMessage').textContent = 'Error Message: The user\'s zip code area is a required select option field and you must select the user correct zip code area from the option require field.';

		setTimeout(function() {
			document.getElementById('userDMVZipSelectionErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	} 

    if (userDMVIdType === '' || userDMVIdType == null) {
        document.getElementById('userDMVIdTypeErrorMessage').textContent = 'The user\'s Alabama identification card type is a required option field and you must select the user correct Alabama\'s identification card type from the option require field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeErrorMessage').textContent = '';
        },
        9000)    	
    
        return false;  

    }

    if (userDMVIdTypeNumber === '' || userDMVIdTypeNumber == null || !userDMVIdTypeNumber.match(regExAlabamaId))  {                                                               
        document.getElementById('userDMVIdTypeNumberErrorMessage').textContent =  'The user\'s Alabama numeric identification card characters are a required field or you must enter the user correct Alabama numeric identification card characters from his or her Alabama\'s identification card into the required field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeNumberErrorMessage').textContent = '';
        },
        9000)

        return false;

    }  
    
    if (userDMVIdTypeNumber === '' || userDMVIdTypeNumber == null || !userDMVIdTypeNumber.match(regExAlabamaId))  {                                                               
        document.getElementById('userDMVIdTypeNumberErrorMessage').textContent =  'The user\'s Alabama numeric identification card characters are a required field or you must enter the user correct Alabama numeric identification card characters from his or her Alabama\'s identification card into the required field.';

        setTimeout(function() {
            document.getElementById('userDMVIdTypeNumberErrorMessage').textContent = '';
        },
        9000)

        return false;

    } 
    
    if (userCommissionIvoteBallotIdIdentifierCode  === '' || userCommissionIvoteBallotIdIdentifierCode  == null || !userCommissionIvoteBallotIdIdentifierCode.match(regIvoteballotIdIdentifierCode)) {                                                               
        document.getElementById('userCommissioniVoteBallotIdIdentifierCodeErrorMessage').textContent = 'The user\'s iVoteBallot Id Identifier is a required input field and you must enter the user correct alphanumeric characters format into the required input field.';

        setTimeout(function() {
            document.getElementById('userCommissioniVoteBallotIdIdentifierCodeErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 

	if ( userCommissionIvoteBallotIdCodeBcryptic === '' || userCommissionIvoteBallotIdCodeBcryptic  == null || !userCommissionIvoteBallotIdCodeBcryptic.match(regIvoteballotIdIdentifierCode)) {                                                               
        document.getElementById('userCommissionIvoteBallotIdCodeBcrypticErrorMessage').textContent = 'The user\'s iVoteBallot Id Identifier is a required input field and you must enter the user correct alphanumeric characters format into the required input field.';

        setTimeout(function() {
            document.getElementById('userCommissionIvoteBallotIdCodeBcrypticErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 	                                                                  
	
	e.preventDefault();                                      
	
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
		document.getElementsByClassName('form_AlabamaDMV_Commission').value = '';
	}

}




