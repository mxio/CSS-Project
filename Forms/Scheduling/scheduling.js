var form = document.getElementById('form');
var date = document.getElementById('date');
var time = document.getElementById('time');
var phone = document.getElementById('phone');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (validator.isEmpty(date.value) || !validator.isDate(date.value) || !validator.isAfterToday(date.value)) {
		form.className = "invalid";
		date.className = "col-1 invalid";
	}
	if (validator.isEmpty(time.value)) {
		form.className = "invalid";
		time.className = "col-2 invalid";
	}
	if (validator.isEmpty(phone.value) || !validator.isPhoneNumber(phone.value)) {
		form.className = "invalid";
		phone.className = "invalid";
	}
}, false);

date.addEventListener('input', function (event) {
	if (!validator.isEmpty(date.value) || validator.isDate(date.value) || validator.isAfterToday(date.value)) {
		form.className = "valid";
		date.className = "col-1 valid";
	}
}, false);

time.addEventListener('input', function (event) {
	if (!validator.isEmpty(time.value)) {
		form.className = "valid";
		time.className = "col-2 valid";
	}
}, false);

phone.addEventListener('input', function (event) {
	if (!validator.isEmpty(phone.value) || validator.isPhoneNumber(phone.value)) {
		form.className = "valid";
		phone.className = "valid";
	}
}, false);