

function toggle_InputPasswordCheckBox() {
	var passwordInput = document.getElementById("password");
	var toggleButton = document.getElementById("showHide_01");

	if (passwordInput.type === "password") {
	  passwordInput.type = "text";
	  toggleButton.textContent = "Hide";
	} else {
	  passwordInput.type = "password";
	  toggleButton.textContent = "Show";
	}
}

function toggle_InputConfirmPasswordCheckBox() {
	var confirmPasswordInput = document.getElementById("confirmPassword");
	var toggleButton = document.getElementById("showHide_02");

	if (confirmPasswordInput.type === "password") {
	  confirmPasswordInput.type = "text";
	  toggleButton.textContent = "Hide";
	} else {
	  confirmPasswordInput.type = "password";
	  toggleButton.textContent = "Show";
	}
}

const validateHRMCreatePasswordsForm = (e) => {

	const EmployeePassword = document.getElementById('password').value.trim();
	const EmployeeConfirmPassword = document.getElementById('confirmPassword').value.trim();

	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;	
	
	if (EmployeePassword === '' || EmployeePassword == null || EmployeePassword.length <= 7 || !EmployeePassword.match(regExPassword)) {
		document.getElementById('userEmployeePasswordErrorMessage').textContent = 'Error Message: Your iVoteBallot\'s employment Password is a required';	

		setTimeout(function() {
			document.getElementById('userEmployeePasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 			
			
	if (EmployeeConfirmPassword === '' || EmployeeConfirmPassword == null || EmployeeConfirmPassword.length <= 7 || !EmployeePassword.match(regExPassword)) {
		document.getElementById('userEmployeeConfirmPasswordErrorMessage').textContent = 'Error Message: Your iVoteBallot\'s employment Confirm Password is a required.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeConfirmPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 
	
	if (EmployeePassword != EmployeeConfirmPassword) {
		document.getElementById('userEmployeeConfirmPasswordErrorMessage').textContent = 'Error Message: Your iVoteBallot\'s employment password does not match Confirm Password. Both fields are required to match.';

		setTimeout(function() {
			document.getElementById('userEmployeeConfirmPasswordErrorMessage').textContent = '';
		},
		9000)

		return false;

	}	
	
		e.preventDefault();
		form.addEventListener('submit', validateHRMCreatePasswordsForm)

	return true;

}