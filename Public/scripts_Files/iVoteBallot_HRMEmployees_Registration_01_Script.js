
const validateHRMEmployees_RegistrationForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')
	
	
	const EmployeeDivision = document.getElementById('division').value.trim();
	const EmployeeDepartment = document.getElementById('department').value.trim();	
	const EmployeeCountry = document.getElementById('country').value.trim();
	const EmployeePDF = document.getElementById('pdf').value.trim(); 	
	const EmployeePhoto = document.getElementById('photo').value.trim(); 
	const EmployeeFirstName = document.getElementById('firstName').value.trim(); 
	const EmployeeMiddleName = document.getElementById('middleName').value.trim();  
	const EmployeeLastName = document.getElementById('lastName').value.trim(); 

	const EmployeeEmail = document.getElementById('email').value.trim();
	const EmployeeConfirmEmail = document.getElementById('confirmEmail').value.trim();  

	const regExName = /^[A-Za-z\s]+$/;

	const regExEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;      
	
	
	if (EmployeeDivision === '' || EmployeeDivision == null) {		
		document.getElementById('userEmployeeDivisionErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeeDivisionErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}	
	
	if (EmployeeDepartment === '' || EmployeeDepartment == null) {		
		document.getElementById('userEmployeeDepartmentErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeeDepartmentErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}
	
	if (EmployeeCountry === '' || EmployeeCountry == null) {		
		document.getElementById('userEmployeeCountryErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeeCountryErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}	
	
	if (EmployeePDF === '' || EmployeePDF == null) {		
		document.getElementById('userEmployeePDFErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeePDFErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}

	if (EmployeePhoto === '' || EmployeePhoto == null) {		
		document.getElementById('userEmployeePhotoErrorMessage').textContent = 'Error Message: The user\'s photograph is a required select field and you must upload the user correct photograph from the photo selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeePhotoErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}
	
	if (EmployeeFirstName === '' || EmployeeFirstName == null || EmployeeFirstName.length <= 2 || !EmployeeFirstName.match(regExName)) {                                                               
		document.getElementById('userEmployeeFirstNameErrorMessage').textContent  = 'Error Message: The user first name is a required input field or you must enter more than two characters into the userfirst name required input field.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeFirstNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;		

	}

	if (EmployeeMiddleName === '' || EmployeeMiddleName == null) {
		document.getElementById('userEmployeeMiddleNameErrorMessage').textContent = 'Error Message: Do the user have a middle name? If so, please type in the user middle name into the input field or skip the user middle name input field entirety.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeMiddleNameErrorMessage').textContent = '';
		},
		9000)                                           
							
		} else if (EmployeeMiddleName.length <= 2 || !EmployeeMiddleName.match(regExName)) {
		document.getElementById('userEmployeeMiddleNameErrorMessage').textContent = 'Error Message: The user middle name is an optional input field; however, you must enter more than two characters into the user middle name required input field.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeMiddleNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;  
	
	} 
	
	if (EmployeeLastName === '' || EmployeeLastName == null || EmployeeLastName.length <= 2 || !EmployeeLastName.match(regExName)) {
		document.getElementById('userEmployeeLastNameErrorMessage').textContent  = 'Error Message: The user last name is a required input field or you must enter more than two characters into the user last name required input field.';
	
		setTimeout(function() {
			document.getElementById('userEmployeeLastNameErrorMessage').textContent  = '';
		},
		9000)
	
		return false;
	
	}

	if (EmployeeEmail === '' || EmployeeEmail == null || EmployeeEmail.length <= 6 || !EmployeeEmail.match(regExEmail)) {
		document.getElementById('userEmployeeEmailErrorMessage').textContent = 'Error Message: The user\'s email address is a required input field and you must enter the correct user\s email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userEmployeeEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}

	if (EmployeeConfirmEmail === '' || EmployeeConfirmEmail == null || EmployeeConfirmEmail.length <= 6 || !EmployeeConfirmEmail.match(regExEmail)) {
		document.getElementById('userEmployeeConfirmEmailErrorMessage').textContent = 'Error Message: The user\'s confirm email address is a required input field and you must enter the correct user confirm email address format into the require input field.';

		setTimeout(function() {
			document.getElementById('userEmployeeConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}
	
	if (EmployeeEmail != EmployeeConfirmEmail) {
		document.getElementById('userEmployeeConfirmEmailErrorMessage').textContent = 'Error Message: The user\'s email address does not match to his/her confirm email address which are required input fields.';

		setTimeout(function() {
			document.getElementById('userEmployeeConfirmEmailErrorMessage').textContent = '';
		},
		9000)

		return false;

	}



	
	
	// Your e event handling code here
	e.preventDefault(); // Prevent default action for e event
	                              
	
	form.addEventListner('submit', validateHRMEmployees_RegistrationForm);

	return true; 	
		
}

/*
const internationalState = {

    'Alabama': 'AL',
    'Alaska': 'AK',
    'American Samoa': 'AS',
    'Arizona': 'AZ',
    'Arkansas': 'AR',
    'California': 'CA',
    'Colorado': 'CO',
    'Connecticut': 'CT',
    'Delaware': 'DE',
    'District of Columbia': 'DC',
	'Florida': 'FL',
	'Georgia': 'GA',
	'Guam': 'GU',
	'Hawaii': 'HI',
	'Idaho': 'ID',
	'Illinois': 'IL',
	'Indiana': 'IN',
	'Iowa': 'IA',
	'Kansas': 'KS',
	'Kentucky': 'KY',
	'Louisiana': 'LA',
	'Maine': 'ME',
	'Maryland': 'MD',
	'Massachusetts': 'MA',
	'Michigan': 'MI',
	'Minnesota': 'MN',
	'Mississippi': 'MS',
	'Missouri': 'MO',
	'Montana': 'MT',
	'Nebraska': 'NE',
	'Nevada': 'NV',
	'New Hamsphire': 'NH',
	'New Jersey': 'NJ',
	'New Mexico': 'NM',
	'New York': 'NY',
	'North Carolina': 'NC',
	'North Dakota': 'ND',
	'Northern Maraiana Islands': 'MP',
	'Ohio': 'OH',
	'Oklahoma': 'OK',
	'Oregon': 'OR',
	'Pennsylvania': 'PA',
	'Puerto Rico': 'PR',
	'Rhode Island': 'RI',
	'South Carolina': 'SC',
	'South Dakota': 'SD',
	'Tennessee': 'TN',
	'Texas': 'TX',
	'United States Minor Outlying Islands': 'UM',
	'Utah': 'UT',
	'Vermont': 'VT',
	'Virgin Islands U.S.': 'VI',
	'Virginia': 'VA',
	'Washington': 'WA',
	'West Virginia': 'WV',
	'Wisconsin': 'WI',
	'Wyoming': 'WY'

};



window.onload = function () {
    const division = document.getElementById('division');
    const department = document.getElementById('department');

    // Populate division dropdown
    for (var state in internationalState) {
        division.options[division.options.length] = new Option(state, internationalState[state]);
    }

	division.onchange = function () {
        
        department.length = 1; // remove all options bar first
       
        
        if (this.selectedIndex < 1)
                return true; // done
            
            for (var departmentDiv in internationalState[this.value]) {
                department.options[department.options.length] = new Option(departmentDiv, departmentDiv);
            }
                                
        } 
            

};

*/


document.getElementById("country").addEventListener("change", function() {
    var country = this.value;
    var divisionSelect = document.getElementById("division");
    var departmentSelect = document.getElementById("department");

    divisionSelect.innerHTML = '<option value="" disabled selected hidden>Regional Location</option>';
    departmentSelect.innerHTML = '<option value="" disabled selected hidden>Divisional Department</option>';

    if (country === "USA") {
        // Populate divisions for USA
        var divisions = {
            "AL": "Alabama",
            "CA": "California",
            "NY": "New York"
            // Add more divisions as needed
        };
        for (var code in divisions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = divisions[code];
            divisionSelect.appendChild(option);
        }
    }

    divisionSelect.disabled = false;
    departmentSelect.disabled = true; // Disable department dropdown until a division is selected
});

document.getElementById("division").addEventListener("change", function() {
    var division = this.value;
    var departmentSelect = document.getElementById("department");

    departmentSelect.innerHTML = '<option value="" disabled selected hidden>Divisional Department</option>';

    if (division) {
        // Populate departments based on division selection
        var departments = {
            "El-Emp": "Election Assures Expert",
            "Ex-Emp": "Executive Officer Administrator",
            "Ex-Pre": "Executive Officer",
            // Add more departments as needed
        };
        for (var code in departments) {
            var option = document.createElement("option");
            option.value = code;
            option.text = departments[code];
            departmentSelect.appendChild(option);
        }
    }

    departmentSelect.disabled = false;
});