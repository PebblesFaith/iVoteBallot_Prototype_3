
const validateHRMEmployees_RegistrationForm = (e) => {    

	console.log('Sarai Hannah Ajai is testing her written JavaScript programmatic codes; in order to validate her contact us form has opened up correctly within the HTML webpage.')

	const EmployeePDF = document.getElementById('pdf').value.trim(); 	

	if (EmployeePDF === '' || EmployeePDF == null) {		
		document.getElementById('userEmployeePDFErrorMessage').textContent = 'Error Message: The user\'s employee PDF files are a required select field and you must upload the user correct PDF from the files selection require field.';
		setTimeout(function() {
			document.getElementById('userEmployeePDFErrorMessage').textContent = '';
		},
		9000)    	

		return false;  
	
	}
	
	
	
	// Your e event handling code here
	e.preventDefault(); // Prevent default action for e event
	                              
	
	form.addEventListner('submit', validateHRMEmployees_RegistrationForm);

	return true; 	
		
}