
const  validateAlabamaVotersSignUpForm = (e) => { 	

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her \'validateAlabamaVotersSignUpForm()\' form has opened up correctly within the HTML webpage.')
	
	const DMVEmail = document.getElementById('email').value.trim();
	const IvoteBallotIdIdentifierCode = document.getElementById('iVoteBallotIdIdentifierCode').value.trim();

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	const regIvoteballotIdIdentifierCode = /\d{2}[A-Z]{1}\d{1}\-\d{1}[A-Z]{1}\d{1}\-[A-Z]{2}\-\d{3}[A-Z]{2}\d{6}\-\d{2}/;
	
	if (DMVEmail === '' || DMVEmail == null || DMVEmail.length <= 6 || !DMVEmail.match(regExEmail)) {
		document.getElementById('userDMVEmailErrorMessage').textContent = 'The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userDMVEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (IvoteBallotIdIdentifierCode === '' || IvoteBallotIdIdentifierCode  == null || !IvoteBallotIdIdentifierCode.match(regIvoteballotIdIdentifierCode)) {                                                               
        document.getElementById('useriVoteBallotIdIdentifierCodeErrorMessage').textContent = 'The user\'s iVoteBallot Id Identifier is a required input field and you must enter the user correct alphanumeric characters format into the required input field.';

        setTimeout(function() {
            document.getElementById('useriVoteBallotIdIdentifierCodeErrorMessage').textContent = '';
        },
        9000)

        return false;					
                            
    } 	       
	
	e.preventDefault();  
				
	form.addEventListener('submit', validateAlabamaVotersSignUpForm);

	return true;     		

}

