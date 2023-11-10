


const validateAlabamaDMV_CommissionForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')
	
	const userDMV_FirstName = document.getElementById('firstName').value.trim(); 
	const userDMV_MiddleName = document.getElementById('middleName').value.trim();  
	const userDMV_LastName = document.getElementById('lastName').value.trim();               
	             
	                                
	
	const regExName = /^[A-Za-z\s]+$/;
	//const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;                                           
									   
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




                     
																
				                                                                  
	
	e.preventDefault();                                      
	
		form.addEventListner('submit', validateAlabamaDMV_CommissionForm);
		return true; 
		
	}