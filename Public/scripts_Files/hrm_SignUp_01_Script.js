function toggle_InputPasswordCheckBox() {
	var passwordInput = document.getElementById("iVoteBallotIdIdentifierCode");
	var toggleButton = document.getElementById("showHide_01");

	if (passwordInput.type === "password") {
	  passwordInput.type = "text";
	  toggleButton.textContent = "Hide";
	} else {
	  passwordInput.type = "password";
	  toggleButton.textContent = "Show";
	}
}

const  validateHRMSignUpForm = (e) => { 	

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her \'validateAlabamaVotersSignUpForm()\' form has opened up correctly within the HTML webpage.')
	
	const EmployeeEmail = document.getElementById('email').value.trim();
	const EmployeeId = document.getElementById('id').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	
	if (EmployeeEmail === '' || EmployeeEmail == null || EmployeeEmail.length <= 6 || !EmployeeEmail.match(regExEmail)) {
		document.getElementById('userEmployeeEmailErrorMessage').textContent = 'Error Message: Your email address is required. Please enter the email address in the correct format into the required input field.';

		setTimeout(function() {
			document.getElementById('userEmployeeEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (EmployeeId === '' || EmployeeId  == null || !EmployeeId.match(regExPassword)) {                                                               
        document.getElementById('userEmployeeIdErrorMessage').textContent = 'Error Message: Your employment Id code is a required';

        setTimeout(function() {
            document.getElementById('userEmployeeIdErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 	       
	
	e.preventDefault();  
				
	form.addEventListener('submit', validateHRMSignUpForm);

	return true;     		

}