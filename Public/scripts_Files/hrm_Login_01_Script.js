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

const validateHRMLogIn_01Form = (e) => { 	

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her \'validateAlabamaVotersSignUpForm()\' form has opened up correctly within the HTML webpage.')
	
	const DMVEmail = document.getElementById('email').value.trim();
	const Password = document.getElementById('password').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	
	if (DMVEmail === '' || DMVEmail == null || DMVEmail.length <= 6 || !DMVEmail.match(regExEmail)) {
		document.getElementById('userDMVEmailErrorMessage').textContent = 'The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (Password === '' || Password == null || Password.length <= 7 || !Password.match(regExPassword)) {
		document.getElementById('userPasswordErrorMessage').textContent = 'Your password is a required input field.';

		setTimeout(function() {
			document.getElementById('userPasswordErrorMessage').textContent = '';
		},
		9000)
	
		return false;
	
	}     

	e.preventDefault();  
				
	form.addEventListener('submit', validateHRMLogIn_01Form);

	return true;     		

}

