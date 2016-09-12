var form = document.getElementById('form');
var firstName = document.getElementById('firstname-shipping');
var lastName = document.getElementById('lastname-shipping');
var fnameShipLabel = document.getElementById('fname-1');
var lnameShipLabel = document.getElementById('lname-1');
var address = document.getElementById('address-shipping');
var addressLabel = document.getElementById('add-1');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (validator.isEmpty(firstName.value) || validator.isLength(firstName.value, 2) || !validator.isTrimmed(firstName.value)) {
		form.className = "invalid";
		firstName.className = "col1 invalid";
		fnameShipLabel.className = "invalid";
	}
	if (validator.isEmpty(lastName.value) || validator.isLength(lastName.value, 2) || !validator.isTrimmed(lastName.value)) {
		form.className = "invalid";
		lastName.className = "col2 invalid";
		lnameShipLabel.className = "invalid";
	}
	if (validator.isEmpty(address.value) || validator.isLength(address.value, 2) || !validator.isTrimmed(address.value)) {
		form.className = "invalid";
		address.className = "full invalid";
		addressLabel.className = "invalid";
	}
}, false);


firstName.addEventListener('input', function (event) {
	if (!validator.isEmpty(firstName.value) || validator.isOfLength(firstName.value, 3) || validator.isTrimmed(firstName.value)) {
		form.className = "valid";
		firstName.className = "col1 valid";
		fnameShipLabel.className = "valid";
	}
}, false);

lastName.addEventListener('input', function (event) {
	if (!validator.isEmpty(lastName.value) || !validator.isOfLength(lastName.value, 3) || validator.isTrimmed(lastName.value)) {
		form.className = "valid";
		lastName.className = "col2 valid";
		lnameShipLabel.className = "valid";
	}
}, false);

address.addEventListener('input', function (event) {
	if (!validator.isEmpty(address.value) || validator.isOfLength(address.value, 3) || validator.isTrimmed(address.value)) {
		form.className = "valid";
		address.className = "full valid";
		addressLabel.className = "valid";
	}
}, false);