var signupForm = document.getElementById('signup');
var email = document.getElementById('email');
var firstname = document.getElementById('firstname')

signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validator.isEmpty(firstname.value) || validator.isLength(firstname.value, 2)) {
        	signupForm.className = "form-1 invalid";
        	firstname.className = "fname invalid";
        }
        if (validator.isEmpty(email.value) || !validator.isEmailAddress(email.value)) {
             email.className = "email invalid"; 
        }
}, false);

firstname.addEventListener('input', function(event) {
	if (!validator.isEmpty(firstname.value) || validator.isOfLength(firstname.value, 3)) {
		signupForm.className = "form-1 valid";
		firstname.className = "fname valid";
	}
}, false);

email.addEventListener('input', function(event) {
    if (!validator.isEmpty(email.value) ||validator.isEmailAddress(email.value)) {
        signupForm.className = "form-1 valid";
        email.className = "email valid";
    }
}, false);

