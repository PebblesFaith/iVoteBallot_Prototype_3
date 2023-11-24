
const  validateAlabamaVotersSignUpForm = (e) => { 	

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her \'validateAlabamaVotersSignUpForm()\' form has opened up correctly within the HTML webpage.')
	
	const userDMVEmail = document.getElementById('email').value.trim();
	const userCommissionIvoteBallotIdCodeBcryptic = document.getElementById('iVoteBallotIdCodeHidden_Bcryptic').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regIvoteballotIdIdentifierCode = /\d{2}[A-Z]{1}\d{1}\-\d{1}[A-Z]{1}\d{1}\-[A-Z]{2}\-\d{3}[A-Z]{2}\d{6}\-\d{2}/;
	
	if (userDMVEmail === '' || userDMVEmail == null || userDMVEmail.length <= 6 || !userDMVEmail.match(regExEmail)) {
		document.getElementById('userDMVEmailErrorMessage').textContent = 'The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVEmailErrorMessage').textContent = '';
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
				
	form.addEventListener('submit', validateAlabamaVotersSignUpForm);

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



