var radioForm = document.getElementById('form');
var radio = document.getElementsByName('radio');
var valid = false;

form.addEventListener('submit', function (event) {
	event.preventDefault();
	for (var i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			valid = true;
		}
		else if (!valid) {
			valid = false;
		} 
	}

	if (!valid) {
		radioForm.className = "invalid";
	}
	else radioForm.className = "valid";
	
}, false);
