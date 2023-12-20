

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

const validateCreatePasswordsForm = (e) => {

	const Password = document.getElementById('password').value.trim();
	const ConfirmPassword = document.getElementById('confirmPassword').value.trim();

	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;	
	
	if (Password === '' || Password == null || Password.length <= 7 || !Password.match(regExPassword)) {
		document.getElementById('userPasswordErrorMessage').textContent = 'Your password is a required input field.';	

		setTimeout(function() {
			document.getElementById('userPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 			
			
	if (ConfirmPassword === '' || ConfirmPassword == null || ConfirmPassword.length <= 7 || !ConfirmPassword.match(regExPassword)) {
		document.getElementById('userConfirmPasswordErrorMessage').textContent = 'Your confirm password is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userConfirmPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 
	
	if (Password != ConfirmPassword) {
		document.getElementById('userConfirmPasswordErrorMessage').textContent = 'Your password does not match to your confirm password which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmPasswordErrorMessage').textContent = '';
		},
		9000)

		return false;

	}	
	
		e.preventDefault();
		form.addEventListener('submit', validateCreatePasswordsForm)

	return true;

}