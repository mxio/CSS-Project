var signupForm = document.getElementById('signup');
var email = document.getElementById('email');
var firstname = document.getElementById('firstname')

signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validator.isEmpty(firstname.value)) {
        	firstname.className = "fname invalid";
        }

        else if (!validator.isEmailAddress(email.value)) {
             email.className = "email invalid"; 
        }
}, false);

firstname.addEventListener('input', function(event) {
	if (!validator.isEmpty(firstname.value)) {
		signupForm.className = "form-1 valid";
		firstname.className = "fname valid";
	}
}, false);

email.addEventListener('input', function(event) {
    if (validator.isEmailAddress(email.value)) {
        signupForm.className = "form-1 valid";
        email.className = "email valid";
    }
}, false);

