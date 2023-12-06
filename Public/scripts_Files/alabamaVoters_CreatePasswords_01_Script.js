





const validateCreatePasswordsForm = (e) => {

	const userPassword = document.getElementById('password').value.trim();
	const userConfirmPassword = document.getElementById('confirmPassword').value.trim();

	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	
	
	if (userPassword === '' || userPassword == null || userPassword.length <= 7 || !userPassword.match(regExPassword)) {
		document.getElementById('userPasswordErrorMessage').textContent = 'Your password is a required input field.';	

		setTimeout(function() {
			document.getElementById('userPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 			
			
	if (userConfirmPassword === '' || userConfirmPassword == null || userConfirmPassword.length <= 7 || !userConfirmPassword.match(regExPassword)) {
		document.getElementById('userConfirmPasswordErrorMessage').textContent = 'Your confirm password is a required input field.';
	
		setTimeout(function() {
			document.getElementById('userConfirmPasswordErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 
	
	if (userPassword != userConfirmPassword) {
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