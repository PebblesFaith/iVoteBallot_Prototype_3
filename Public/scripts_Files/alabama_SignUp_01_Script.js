function toggle_InputPasswordCheckBox() {
	const inputPassword = document.getElementById('passwordSignUp_01');
	const userShowHide = document.getElementById('showHide_01')

		if (userShowHide.innerText === 'Show') {
			inputPassword.setAttribute('type', 'text');
			userShowHide.innerText = ('Hide');
		} else {
			inputPassword.setAttribute('type', 'password');
			userShowHide.innerText = 'Show';
		}
}

function toggle_InputConfirmPasswordCheckBox() {
	const inputConfirmPassword = document.getElementById('confirmPasswordSignUp_01');
	const userShowHide = document.getElementById('showHide_02')

		if (userShowHide.innerText === 'Show') {
			inputConfirmPassword.setAttribute('type', 'text');
			userShowHide.innerText = ('Hide');
		} else {
			inputConfirmPassword.setAttribute('type', 'password');
			userShowHide.innerText = 'Show';
		}
}			

const validateAlabamaSignUpForm = (e) => { 

	const userRegistrationCode = document.getElementById('registrationCodeSignUp_01').value.trim();

	const regExRegistrationCode = /\d{2}[A-Z]{1}\d{1}\-\d{1}[A-Z]{1}\d{1}\-[A-Z]{2}\-\d{3}[A-Z]{2}\d{6}\-\d{2}/;				

	const userIdType = document.getElementById('idTypesSignUp_01').value.trim();

	const userIdTypeNumber = document.getElementById('idTypeNumberSignUp_01').value.trim();
	
	const userConfirmIdTypeNumberSignUp = document.getElementById('confirmIdTypeNumberSignUp_01').value.trim();

	const regExAlabamaId = /(^\d{7}$)|(^\d{8}$)/;

	const userEmail = document.getElementById('emailSignUp_01').value.trim();				

	const userConfirmEmail = document.getElementById('confirmEmailSignUp_01').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;	
	
	const userPassword = document.getElementById('passwordSignUp_01').value.trim();				
	
	const userConfirmPassword = document.getElementById('confirmPasswordSignUp_01').value.trim();

	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;
	
	const userPhoneNumber = document.getElementById('phoneNumberSignUp_01').value.trim();

	const regExPhoneNumber = /^\d{3}\-\d{3}\-\d{4}$/; 

	const userTemporaryPassword = document.getElementById('temporaryPassword').value.trim();

	if (userRegistrationCode === '' || userRegistrationCode == null || !userRegistrationCode.match(regExRegistrationCode)) {                                                               
		document.getElementById('userRegistrationCodeSignUp_01ErrorMessage').textContent = 'Your voter registration code is a required input field or you have entered the correct alphanumeric characters into the required input field.';

		setTimeout(function() {
			document.getElementById('userRegistrationCodeSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;					
						
	} 		
	
	if (userIdType === '' || userIdType == null) {
		document.getElementById('userIdTypesSignUp_01ErrorMessage').textContent = 'Your Alabama\s identification card type is a required select option field and you must select your correct Alabama\s identification card type from the option require field.';

		setTimeout(function() {
			document.getElementById('userIdTypesSignUp_01ErrorMessage').textContent = '';
		},
		9000)    	
	
		return false;  

	}

	if (userIdTypeNumber === '' || userIdTypeNumber == null || !userIdTypeNumber.match(regExAlabamaId))  {                                                               
		document.getElementById('userIdTypeNumberSignUp_01ErrorMessage').textContent =  'Your Alabama numeric identification card characters are a required field or you must enter the correct Alabama numeric identification card characters from your Alabama\s identification card into the required field.';

		setTimeout(function() {
			document.getElementById('userIdTypeNumberSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	} 		
	
	if (userConfirmIdTypeNumberSignUp === '' || userConfirmIdTypeNumberSignUp == null || !userConfirmIdTypeNumberSignUp.match(regExAlabamaId))  {                                                               
		document.getElementById('userConfirmIdTypeNumberSignUp_01ErrorMessage').textContent =  'Your Alabama confirm numeric identification card characters are a required field or you must enter the correct Alabama numeric identification card characters from your Alabama\s identification card into the required field.';

		setTimeout(function() {
			document.getElementById('userConfirmIdTypeNumberSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	} 
	
	if (userIdTypeNumber != userConfirmIdTypeNumberSignUp) {
		document.getElementById('userConfirmIdTypeNumberSignUp_01ErrorMessage').textContent = 'Your Alabama Identification Card Number does not match to your confirm Alabama Identification Card Number which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmIdTypeNumberSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (userEmail === '' || userEmail == null || userEmail.length <= 6 || !userEmail.match(regExEmail)) {
		document.getElementById('userEmailSignUp_01ErrorMessage').textContent = 'Your email address is a required input field and you must enter the correct email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userEmailSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userConfirmEmail === '' || userConfirmEmail == null || userConfirmEmail.length <= 6 || !userConfirmEmail.match(regExEmail)) {
		document.getElementById('userConfirmEmailSignUp_01ErrorMessage').textContent = 'Your confirm email address is a required input field and you must enter the correct confirm email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userConfirmEmailSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
		
	if (userEmail != userConfirmEmail) {
		document.getElementById('userConfirmEmailSignUp_01ErrorMessage').textContent = 'Your email address does not match to your confirm email address which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmEmailSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userPassword === '' || userPassword == null || userPassword.length <= 7 || !userPassword.match(regExPassword)) {
		document.getElementById('userPasswordSignUp_01ErrorMessage').textContent = 'Your password is a required input field and you must enter the correct password format into the require input field.';
	
		setTimeout(function() {
			document.getElementById('userPasswordSignUp_01ErrorMessage').textContent = '';
		},
		9000)
	
		return false;
	
	} 
	
	if (userConfirmPassword === '' || userConfirmPassword == null || userConfirmPassword.length <= 7 || !userConfirmPassword.match(regExPassword)) {
		document.getElementById('userConfirmPasswordSignUp_01ErrorMessage').textContent = 'Your confirm password is a required input field and you must enter the correct confirm password format into the require input field.';
	
		setTimeout(function() {
			document.getElementById('userConfirmPasswordSignUp_01ErrorMessage').textContent = '';
		},
		9000)
	
	return false;
	
	} 

	if (userPassword != userConfirmPassword) {
		document.getElementById('userConfirmPasswordSignUp_01ErrorMessage').textContent = 'Your password does not match to your confirm password which are required input fields.';

		setTimeout(function() {
			document.getElementById('userConfirmPasswordSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (userPhoneNumber === '' || userPhoneNumber == null || userPhoneNumber.length <= 10 || !userPhoneNumber.match(regExPhoneNumber))  {                                                               
		document.getElementById('userPhoneNumberSignUp_01ErrorMessage').textContent = 'Your phone number is a required input field or you must enter exactly twelve number digits into the phone number required input field.';

		setTimeout(function() {
			document.getElementById('userPhoneNumberSignUp_01ErrorMessage').textContent = '';
		},
		9000)

		return false;				

	}		
			
	if (userTemporaryPassword === '' || userTemporaryPassword == null)  {                                                               
					
		return false;				
		
	}		

	e.preventDefault();  
				
	form.addEventListener('submit', validateAlabamaSignUpForm);

	return true;     		

}

const validateLogInForm = (e) => { 

	const userEmail_Login_01 = document.getElementById('emailLogIn_01').value.trim();
	const userPassword_Login_01 = document.getElementById('passwordLogIn_01').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;  
	const regExPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/;


	if (userEmail_Login_01 === '' || userEmail_Login_01 == null || userEmail_Login_01.length <= 6 || !userEmail_Login_01.match(regExEmail)) {
		document.getElementById('userEmailLogIn_01ErrorMessage').textContent = 'Your email address is a required input field and you must enter the correct email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userEmailLogIn_01ErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (userPassword_Login_01 === '' || userPassword_Login_01 == null || userPassword_Login_01.length <= 7 || !userPassword_Login_01.match(regExPassword)) {
		document.getElementById('userPasswordLogIn_01ErrorMessage').textContent = 'Your password is a required input field and you must enter the correct password format into the require input field.';

		setTimeout(function() {
			document.getElementById('userPasswordLogIn_01ErrorMessage').textContent = '';
		},
		9000)

	return false;

	}

	e.preventDefault();  
				
	form.addEventListener('submit', validateLogInForm);

	return true;         

} 

