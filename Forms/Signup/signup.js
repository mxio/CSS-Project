var signupForm = document.getElementById('signup');
var email = document.getElementById('email');
var firstmame = document.getElementById('firstmame');

signupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        if (!validator.isEmailAddress(email.value)) {
             signupForm.className = "invalid";
             email.className = "invalid"; 
        }

}, false);

email.addEventListener('input', function(event) {
    if (validator.isEmailAddress(email.value)) {
        signupForm.className = "valid";
        email.className = "valid";
    }
}, false);
