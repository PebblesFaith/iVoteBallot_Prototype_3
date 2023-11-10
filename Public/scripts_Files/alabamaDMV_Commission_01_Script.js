


const validateAlabamaDMV_CommissionForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')
	
	const userDMV_FirstName = document.getElementById('firstName').value.trim();                
	             
	                                
	
	const regExName = /^[A-Za-z\s]+$/;
	//const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;                                           
									   
	if (userDMV_FirstName === '' || userDMV_FirstName == null || userDMV_FirstName.length <= 2 || !userDMV_FirstName.match(regExName)) {                                                               
		document.getElementById('userDMV_FirstNameErrorMessage').innerHTML = 'The user first name is a required input field or you must enter more than two characters into the first name required input field.';
	
		setTimeout(function() {
			document.getElementById('userDMV_FirstNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;
							
	}
	/*
	if (userMiddleName === '' || userMiddleName == null) {
		document.getElementById('userMiddleNameErrorMessage').innerHTML = 'Do you have a middle name? If so, please type in your middle name into the input field or skip the middle name input field.';
	
		setTimeout(function() {
			document.getElementById('userMiddleNameErrorMessage').innerHTML = '';
		},
		9000)                                           
							
		} else if (userMiddleName.length <= 2 || !userMiddleName.match(regExName)) {
		document.getElementById('userMiddleNameErrorMessage').innerHTML = 'Your middle name is an optional input field; however, you must enter more than two characters into the middle name required input field.';
	
		setTimeout(function() {
			document.getElementById('userMiddleNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;  
	
	}                                  
	
	if (userLastName === '' || userLastName == null || userLastName.length <= 2 || !userLastName.match(regExName)) {
		document.getElementById('userLastNameErrorMessage').innerHTML = 'Your last name is a required input field or you must enter more than two characters into the last name required input field.';
	
		setTimeout(function() {
			document.getElementById('userLastNameErrorMessage').innerHTML = '';
		},
		9000)
	
		return false;
	
	}
	
	   */                       
																
				                                                                  
	
	e.preventDefault();                                      
	
		form.addEventListner('submit', validateAlabamaDMV_CommissionForm);
		return true; 
		
	}