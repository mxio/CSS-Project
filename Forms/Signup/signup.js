var signupForm = document.getElementById('signup');
var email = document.getElementById('email');
var firstName = document.getElementById('firstname');
var lastName = document.getElementById('lastname');
var password = document.getElementById('password');
var bday = document.getElementById('bday');

signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validator.isEmpty(firstName.value) || validator.isLength(firstName.value, 2) || !validator.isTrimmed(firstName.value)) {
        	signupForm.className = "form-1 invalid";
        	firstName.className = "fname invalid";
        }
        if (validator.isEmpty(lastName.value) || validator.isLength(lastName.value, 2) || !validator.isTrimmed(lastName.value)) {
        	signupForm.className = "form-1 invalid";
        	lastName.className = "lname invalid";
        }
        if (!validator.isDate(bday.value) || !validator.isTrimmed(bday.value)) {
        	signupForm.className = "form-1 invalid";
        	bday.className = "dob invalid";
        }
        if (validator.isEmpty(email.value) || !validator.isEmailAddress(email.value) || !validator.isTrimmed(email.value)) {
        	signupForm.className = "form-1 invalid";
            email.className = "email invalid"; 
        }

        if (!validator.isOfLength(password.value, 6) || !validator.isLength(password.value, 8) || !validator.isTrimmed(password.value)) {
        	signupForm.className = "form-1 invalid";
        	password.className = "password invalid";
        }
}, false);

firstName.addEventListener('input', function (event) {
	if (!validator.isEmpty(firstName.value) || validator.isOfLength(firstName.value, 3) || validator.isTrimmed(firstName.value)) {
		signupForm.className = "form-1 valid";
		firstName.className = "fname valid";
	}
}, false);

lastName.addEventListener('input', function(event) {
	if (!validator.isEmpty(lastName.value) || validator.isOfLength(lastName.value, 3) || validator.isTrimmed(lastName.value)) {
		signupForm.className = "form-1 valid";
		lastName.className = "lname valid";
	}
}, false);

bday.addEventListener('input', function(event) {
	if (validator.isDate(bday.value) || validator.isTrimmed(bday.value)) {
		signupForm.className = "form-1 valid";
		bday.className = "dob valid";
	}
}, false);

email.addEventListener('input', function(event) {
    if (!validator.isEmpty(email.value) || validator.isEmailAddress(email.value) || validator.isTrimmed(email.value)) {
        signupForm.className = "form-1 valid";
        email.className = "email valid";
    }
}, false);

password.addEventListener('input', function(event) {
	if (validator.isOfLength(password.value, 6) || validator.isLength(password.value, 8) || validator.isTrimmed(password.value)) {
		signupForm.className = "form-1 valid";
		password.className = "password valid";
	}
}, false);