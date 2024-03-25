
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

document.getElementById("country").addEventListener("change", function() {
    var country = this.value;
    var divisionSelect = document.getElementById("division");
    var departmentSelect = document.getElementById("department");

    divisionSelect.innerHTML = '<option value="" disabled selected hidden>Regional Location</option>';
    departmentSelect.innerHTML = '<option value="" disabled selected hidden>Divisional Department</option>';

    if (country === "USA") {
        // Populate divisions for USA
        var divisions = {
            
			'AL': 'Alabama', 
			'AK': 'Alaska', 
			'AS': 'American Samoa', 
			'AZ': 'Arizona', 
			'AR': 'Arkansas', 
			'CA': 'California', 
			'CO': 'Colorado', 
			'CT': 'Connecticut', 
			'DE': 'Delaware', 
			'DC': 'District of Columbia', 
			'FL': 'Florida', 
			'GA': 'Georgia', 
			'GU': 'Guam',			
			'HI': 'Hawaii', 
			'ID': 'Idaho', 
			'IL': 'Illinois', 
			'IN': 'Indiana', 
			'IA': 'Iowa', 
			'KS': 'Kansas',
			'KY': 'Kentucky', 
			'LA': 'Louisiana', 
			'ME': 'Maine', 
			'MD': 'Maryland', 
			'MA': 'Massachusetts', 
			'MI': 'Michigan', 
			'MN': 'Minnesota',
			'MS': 'Mississippi', 
			'MO': 'Missouri', 
			'MT': 'Montana', 
			'NE': 'Nebraska',
			'NV': 'Nevada', 
			'NH': 'New Hamsphire', 
			'NJ': 'New Jersey', 
			'NM': 'New Mexico', 
			'NY': 'New York',
			'NC': 'North Carolina', 
			'ND': 'North Dakota', 
			'MP': 'Northern Maraiana Islands', 
			'OH': 'Ohio', 
			'OK': 'Oklahoma', 
			'OR': 'Oregon', 
			'PA': 'Pennsylvania', 
			'PR': 'Puerto Rico',
			'RI': 'Rhode Island', 
			'SC': 'South Carolina', 
			'SD': 'South Dakota', 
			'TN': 'Tennessee',
			'TX': 'Texas',
			'UM': 'United States Minor Outlying Islands',
			'UT': 'Utah',
			'VT': 'Vermont', 
			'VI': 'Virgin Islands U.S.', 
			'VA': 'Virginia', 
			'WA': 'Washington', 
			'WV': 'West Virginia',
			'WI': 'Wisconsin', 
			'WY': 'Wyoming', 	
		            
        };
        for (var code in divisions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = divisions[code];
            divisionSelect.appendChild(option);
			
        }

	} else if (country === "CAN") {
        // Populate provinces for Canada
        var provinces = {
            "AB": "Alberta",
            "BC": "British Columbia",
            "MB": "Manitoba",
            "NB": "New Brunswick",
            "NL": "Newfoundland and Labrador",
            "NS": "Nova Scotia",
            "ON": "Ontario",
            "PE": "Prince Edward Island",
            "QC": "Quebec",
            "SK": "Saskatchewan"
           
        };
        for (var code in provinces) {
            var option = document.createElement("option");
            option.value = code;
            option.text = provinces[code];
            divisionSelect.appendChild(option);
        }
		
	} else if (country === "DEU") {
        // Populate states for Germany
        var states = {
            "BW": "Baden-Württemberg",
            "BY": "Bavaria",
            "BE": "Berlin",
            "BB": "Brandenburg",
            "HB": "Bremen",
            "HH": "Hamburg",
            "HE": "Hesse",
            "MV": "Mecklenburg-Vorpommern",
            "NI": "Lower Saxony",
            "NW": "North Rhine-Westphalia",
            "RP": "Rhineland-Palatinate",
            "SL": "Saarland",
            "SN": "Saxony",
            "ST": "Saxony-Anhalt",
            "SH": "Schleswig-Holstein",
            "TH": "Thuringia"
          
        };
        for (var code in states) {
            var option = document.createElement("option");
            option.value = code;
            option.text = states[code];
            divisionSelect.appendChild(option);
        }

    } else if (country === "IRL") {
        // Populate divisions for Ireland
        var divisions = {
            "DB": "Dublin",
            "CC": "Cork",
            "GA": "Galway"
          
        };
        for (var code in divisions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = divisions[code];
            divisionSelect.appendChild(option);
        }    

	} else if (country === "ISR") {
        // Populate divisions for Israel
        var divisions = {
            "TA": "Tel Aviv",
            "JR": "Jerusalem",
            "HA": "Haifa"
           
        };
        for (var code in divisions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = divisions[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "ITA") {
        // Populate regions for Italy
        var regions = {
            "LZ": "Lazio",
            "LM": "Lombardy",
            "CM": "Campania"
           
        };
        for (var code in regions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = regions[code];
            divisionSelect.appendChild(option);
        }  
    
	} else if (country === "JPN") {
        // Populate divisions for Japan
        var divisions = {
            "TK": "Tokyo",
            "OS": "Osaka",
            "NK": "Nagoya"
           
        };
        for (var code in divisions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = divisions[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "MEX") {
        // Populate states for Mexico
        var states = {
            "AGU": "Aguascalientes",
            "BCN": "Baja California",
            "BCS": "Baja California Sur",
            "CAM": "Campeche",
            "CHP": "Chiapas",
            "CHH": "Chihuahua",
            "COA": "Coahuila",
            "COL": "Colima",
            "DUR": "Durango",
            "GUA": "Guanajuato",
            "GRO": "Guerrero",
            "HID": "Hidalgo",
            "JAL": "Jalisco",
            "MEX": "México",
            "MIC": "Michoacán",
            "MOR": "Morelos",
            "NAY": "Nayarit",
            "NLE": "Nuevo León",
            "OAX": "Oaxaca",
            "PUE": "Puebla",
            "QUE": "Querétaro",
            "ROO": "Quintana Roo",
            "SLP": "San Luis Potosí",
            "SIN": "Sinaloa",
            "SON": "Sonora",
            "TAB": "Tabasco",
            "TAM": "Tamaulipas",
            "TLA": "Tlaxcala",
            "VER": "Veracruz",
            "YUC": "Yucatán",
            "ZAC": "Zacatecas"
           
        };
        for (var code in states) {
            var option = document.createElement("option");
            option.value = code;
            option.text = states[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "QAT") {
        // Populate regions for Qatar
        var regions = {
            "DOH": "Doha",
            "WD": "Al Wakrah",
            "MS": "Mesaieed"
           
        };
        for (var code in regions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = regions[code];
            divisionSelect.appendChild(option);
        }
    
	} else if (country === "SWE") {
        // Populate counties for Sweden
        var counties = {
            "ST": "Stockholm",
            "GB": "Gothenburg",
            "MH": "Malmö"
           
        };
        for (var code in counties) {
            var option = document.createElement("option");
            option.value = code;
            option.text = counties[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "SWZ") {
        // Populate provinces for Switzerland
        var cantons = {
            "ZH": "Zürich",
            "BE": "Bern",
            "VD": "Vaud"
            // Add more cantons as needed
        };
        for (var code in cantons) {
            var option = document.createElement("option");
            option.value = code;
            option.text = cantons[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "THA") {
        // Populate provinces for Thailand
        var provinces = {
            "BKK": "Bangkok",
            "CMI": "Chiang Mai",
            "PHU": "Phuket"
            
        };
        for (var code in provinces) {
            var option = document.createElement("option");
            option.value = code;
            option.text = provinces[code];
            divisionSelect.appendChild(option);
        }

	} else if (country === "GBR") {
        // Populate regions for UK
        var regions = {
            "ENG": "England",
            "SCO": "Scotland",
            "WAL": "Wales",
            "NIR": "Northern Ireland"
           
        };
        for (var code in regions) {
            var option = document.createElement("option");
            option.value = code;
            option.text = regions[code];
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

            'El-Emp': 'Election Assures Expert',
            'Ex-Emp': 'Executive Officer Administrator',
            'Ex-Off': 'Executive Officer',
			'Fi-Dir': 'Finance Director',
			'Fi-Emp': 'Finance Employee',
			'Fi-Mgr': 'Finance Manager',
			'HR-Dir': 'Human Resources Director',
			'HR-Emp': 'Human Resources Employee',
			'HR-Mgr': 'Human Resources Manager', 
			'IT-Dir': 'Information Technology Director',
			'IT-Emp': 'Information Technology Employee',
			'IT-Mgr': 'Information Technology Manager',  
			'MA-Dir': 'Marketing Director',
			'MA-Emp': 'Marketing Employee',
			'MA-Mgr': 'Marketing Manager',
			'OP-Dir': 'Operations Director',
			'OP-Emp': 'Operations Employee',
			'OP-Mgr': 'Operations Manager',
			'OP-Sr': 'Operation Senior',     
			
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
