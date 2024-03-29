const validateHRMEmailVerificationForm = (e) => { 			
						
	const EmployeeEmail = document.getElementById('email').value.trim();
	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;  
			
	if (EmployeeEmail === '' || EmployeeEmail == null || EmployeeEmail.length <= 6 || !EmployeeEmail.match(regExEmail)) {
		document.getElementById('userEmployeeEmailErrorMessage').textContent = 'Error Message: Your employment email address is required. Please enter your employment email address in the correct format into the required input field.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeEmailErrorMessage').textContent = '';
		},
		9000)
	
		return false;
	
	}				
	
	e.preventDefault();  
		
	form.addEventListener('submit', validateHRMEmailVerificationForm);
	return true;    
	
	} 			