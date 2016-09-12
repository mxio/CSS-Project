var form = document.getElementById('form');
var firstNameShip = document.getElementById('firstname-shipping');
var lastNameShip = document.getElementById('lastname-shipping');
var fnameShipLabel = document.getElementById('fname-1');
var lnameShipLabel = document.getElementById('lname-1');
var addressShip = document.getElementById('address-shipping');
var addressShipLabel = document.getElementById('add-1');
var cityShip = document.getElementById('city-1');
var cityShipLabel = document.getElementById('city-label-1');
var zipShip = document.getElementById('zip-1');
var zipShipLabel = document.getElementById('zip-label-1');


form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (validator.isEmpty(firstNameShip.value) || validator.isLength(firstNameShip.value, 2) || !validator.isTrimmed(firstNameShip.value)) {
		form.className = "invalid";
		firstNameShip.className = "col1 invalid";
		fnameShipLabel.className = "invalid";
	}
	if (validator.isEmpty(lastNameShip.value) || validator.isLength(lastNameShip.value, 2) || !validator.isTrimmed(lastNameShip.value)) {
		form.className = "invalid";
		lastNameShip.className = "col2 invalid";
		lnameShipLabel.className = "invalid";
	}
	if (validator.isEmpty(addressShip.value) || validator.isLength(addressShip.value, 2) || !validator.isTrimmed(addressShip.value)) {
		form.className = "invalid";
		addressShip.className = "full invalid";
		addressShipLabel.className = "invalid";
	}
	if (validator.isEmpty(cityShip.value) || validator.isLength(cityShip.value, 2) || !validator.isTrimmed(cityShip.value)) {
		form.className = "invalid";
		cityShip.className = "full invalid";
		cityShipLabel.className = "invalid";
	}
	if (validator.isEmpty(zipShip.value) || validator.isLength(zipShip.value, 4) || !validator.isTrimmed(zipShip.value)) {
		form.className = "invalid";
		zipShip.className = "full invalid";
		zipShipLabel.className = "invalid";
	}
}, false);


firstNameShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(firstNameShip.value) || validator.isOfLength(firstNameShip.value, 3) || validator.isTrimmed(firstNameShip.value)) {
		form.className = "valid";
		firstNameShip.className = "col1 valid";
		fnameShipLabel.className = "valid";
	}
}, false);

lastNameShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(lastNameShip.value) || !validator.isOfLength(lastNameShip.value, 3) || validator.isTrimmed(lastNameShip.value)) {
		form.className = "valid";
		lastNameShip.className = "col2 valid";
		lnameShipLabel.className = "valid";
	}
}, false);

addressShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(addressShip.value) || validator.isOfLength(addressShip.value, 3) || validator.isTrimmed(addressShip.value)) {
		form.className = "valid";
		addressShip.className = "full valid";
		addressShipLabel.className = "valid";
	}
}, false);

cityShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(cityShip.value) || validator.isOfLength(cityShip.value, 3) || validator.isTrimmed(cityShip.value)) {
		form.className = "valid";
		cityShip.className = "full valid";
		cityShipLabel.className = "valid";
	}
}, false);

zipShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(zipShip.value) || validator.isOfLength(zipShip.value, 5) || validator.isTrimmed(zipShip.value)) {
		form.className = "valid";
		zipShip.className = "full valid";
		zipShipLabel.className = "valid";
	}
}, false);