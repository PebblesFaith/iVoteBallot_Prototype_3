function countCharacters(textMessage) {
	const userCountTextMessage = document.getElementById('textMessage').value.length;

	console.log(userCountTextMessage);
	if (userCountTextMessage > 0 || userCountTextMessage <= 4000 - 1 ) {
		document.getElementById('textareaRemainingCharacters').innerHTML = 4000 - userCountTextMessage + ' Out of 4000 Remaining Characters';
	}
	if (userCountTextMessage > 4000 - 1) {
		document.getElementById('textareaRemainingCharacters').innerHTML = "Maximum characters reached!";
	}
}                   

const validateContactUsForm = (e) => {    

console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')

const userFirstName = document.getElementById('firstName').value;                
const userMiddleName = document.getElementById('middleName').value;                
const userLastName = document.getElementById('lastName').value;                
const userEmail = document.getElementById('email').value;
const userConfirmEmail = document.getElementById('confirmEmail').value;
const userQuestion = document.getElementById('question').value;
const userConcern = document.getElementById('concern').value;
const userTextMessage = document.getElementById('textMessage').value;   
const userRandomAlphaNumeric = document.getElementById('randomAlphaNumeric');                                   

const regExName = /^[A-Za-z\s]+$/;
const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;                                           
								   
if (userFirstName === '' || userFirstName == null || userFirstName.length <= 2 || !userFirstName.match(regExName)) {                                                               
	document.getElementById('userFirstNameErrorMessage').innerHTML = 'Your first name is a required input field or you must enter more than two characters into the first name required input field.';

	setTimeout(function() {
		document.getElementById('userFirstNameErrorMessage').innerHTML = '';
	},
	9000)

	return false;
						
}

if (userMiddleName === '' || userMiddleName == null) {
	document.getElementById('userMiddleNameErrorMessage').innerHTML = 'Do you have a middle name? If so, please type in your middle name into the input field or skip the middle name input field.';

	setTimeout(function() {
		document.getElementById('userMiddleNameErrorMessage').innerHTML = '';
	},
	9000)                                           
						
	} else if (userMiddleName.length <= 2 || !userMiddleName.match(regExName)) {
	document.getElementById('userMiddleNameErrorMessage').innerHTML = 'Your middle name is an optional input field; however, you must enter more than two characters into the middle name required input field.';

	setTimeout(function() {
		document.getElementById('userMiddleNameErrorMessage').innerHTML = '';
	},
	9000)

	return false;  

}                                  

if (userLastName === '' || userLastName == null || userLastName.length <= 2 || !userLastName.match(regExName)) {
	document.getElementById('userLastNameErrorMessage').innerHTML = 'Your last name is a required input field or you must enter more than two characters into the last name required input field.';

	setTimeout(function() {
		document.getElementById('userLastNameErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userEmail === '' || userEmail == null || userEmail.length <= 6 || !userEmail.match(regExEmail)) {
	document.getElementById('userEmailErrorMessage').innerHTML = 'Your email address is a required input field and you must enter the correct email address format into the require input field.';

	setTimeout(function() {
		document.getElementById('userEmailErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userConfirmEmail === '' || userConfirmEmail == null || userConfirmEmail.length <= 6 || !userConfirmEmail.match(regExEmail)) {
	document.getElementById('userConfirmEmailErrorMessage').innerHTML = 'Your confirm email address is a required input field and you must enter the correct confirm email address format into the require input field.';

	setTimeout(function() {
		document.getElementById('userConfirmEmailErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userEmail != userConfirmEmail) {
	document.getElementById('userConfirmEmailErrorMessage').innerHTML = 'Your email address does not match to your confirm email address which are required input fields.';

	setTimeout(function() {
		document.getElementById('userConfirmEmailErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userQuestion === '' || userQuestion == null) {
	document.getElementById('userQuestionErrorMessage').innerHTML = 'You must select a yes or no answer which is a selection required field.';

	setTimeout(function() {
		document.getElementById('userQuestionErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userConcern === '' || userConcern == null) {
	document.getElementById('userConcernErrorMessage').innerHTML = 'You must select your topic concern status which is a selection required field.';

	setTimeout(function() {
		document.getElementById('userConcernErrorMessage').innerHTML = '';
	},
	9000)

	return false;

}

if (userTextMessage === '' || userTextMessage == null || userTextMessage.length <= 25) {
	document.getElementById('userTextErrorMessage').innerHTML = 'Your text message is a require input field and you must enter more than twenty-five characters into the input required field.';

	setTimeout(function() {
		document.getElementById('userTextErrorMessage').innerHTML = '';
	},
	9000)

	return false;                                       

}                                      
															
if (userRandomAlphaNumeric === '' || userRandomAlphaNumeric == null) {
	//do nothing for now

	return false;
} 

function randomAlphaNumeric(length) {
	var randomAlphaNumeric;
	var number = '';

	for(var count = 0; count < length; count++) {
		randomAlphaNumeric = Math.floor(Math.random() * 10);
		number += randomAlphaNumeric.toString();
	}
	return number;
}			

userRandomAlphaNumeric.value = randomAlphaNumeric(12);

console.log(userRandomAlphaNumeric);			                                                                  

e.preventDefault();                                      

	form.addEventListner('submit',randomAlphaNumeric, validateContactUsForm);
	return true; 
	
}