var signupForm = document.getElementById('signup');
var email = document.getElementById('email');
var firstName = document.getElementById('firstName');
var lastName

signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validator.isEmpty(firstName.value) || validator.isLength(firstName.value, 2)) {
        	signupForm.className = "form-1 invalid";
        	firstName.className = "fname invalid";
        }
        if (validator.isEmpty(email.value) || !validator.isEmailAddress(email.value)) {
             email.className = "email invalid"; 
        }
}, false);

firstName.addEventListener('input', function(event) {
	if (!validator.isEmpty(firstName.value) || validator.isOfLength(firstName.value, 3)) {
		signupForm.className = "form-1 valid";
		firstName.className = "fname valid";
	}
}, false);

email.addEventListener('input', function(event) {
    if (!validator.isEmpty(email.value) ||validator.isEmailAddress(email.value)) {
        signupForm.className = "form-1 valid";
        email.className = "email valid";
    }
}, false);

