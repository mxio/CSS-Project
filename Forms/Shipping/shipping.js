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
var countryShip = document.getElementById('country-1');
var countryShipLabel = document.getElementById('country-label-1');

var firstNameBill = document.getElementById('firstname-billing');
var lastNameBill = document.getElementById('lastname-billing');
var fnameBillLabel = document.getElementById('fname-2');
var lnameBillLabel = document.getElementById('lname-2');
var addressBill = document.getElementById('address-billing');
var addressBillLabel = document.getElementById('add-2');
var cityBill = document.getElementById('city-2');
var cityBillLabel = document.getElementById('city-label-2');
var zipBill = document.getElementById('zip-2');
var zipBillLabel = document.getElementById('zip-label-2');
var countryBill = document.getElementById('country-2');
var countryBillLabel = document.getElementById('country-label-2');

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
	if (validator.isEmpty(countryShip.value) || validator.isLength(countryShip.value, 2) || !validator.isTrimmed(countryShip.value)) {
		form.className = "invalid";
		countryShip.className = "full invalid";
		countryShipLabel.className = "invalid";
	}



	if (validator.isEmpty(firstNameBill.value) || validator.isLength(firstNameBill.value, 2) || !validator.isTrimmed(firstNameBill.value)) {
		form.className = "invalid";
		firstNameBill.className = "col1 invalid";
		fnameBillLabel.className = "invalid";
	}
	if (validator.isEmpty(lastNameBill.value) || validator.isLength(lastNameBill.value, 2) || !validator.isTrimmed(lastNameBill.value)) {
		form.className = "invalid";
		lastNameBill.className = "col2 invalid";
		lnameBillLabel.className = "invalid";
	}
	if (validator.isEmpty(addressBill.value) || validator.isLength(addressBill.value, 2) || !validator.isTrimmed(addressBill.value)) {
		form.className = "invalid";
		addressBill.className = "full invalid";
		addressBillLabel.className = "invalid";
	}
	if (validator.isEmpty(cityBill.value) || validator.isLength(cityBill.value, 2) || !validator.isTrimmed(cityBill.value)) {
		form.className = "invalid";
		cityBill.className = "full invalid";
		cityBillLabel.className = "invalid";
	}
	if (validator.isEmpty(zipBill.value) || validator.isLength(zipBill.value, 4) || !validator.isTrimmed(zipBill.value)) {
		form.className = "invalid";
		zipBill.className = "full-2 invalid";
		zipBillLabel.className = "invalid";
	}
	if (validator.isEmpty(countryBill.value) || validator.isLength(countryBill.value, 2) || !validator.isTrimmed(countryBill.value)) {
		form.className = "invalid";
		countryBill.className = "full invalid";
		countryBillLabel.className = "invalid";
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

countryShip.addEventListener('input', function (event) {
	if (!validator.isEmpty(countryShip.value) || validator.isOfLength(countryShip.value, 3) || validator.isTrimmed(countryShip.value)) {
		form.className = "valid";
		countryShip.className = "full valid";
		countryShipLabel.className = "valid";
	}
}, false);


firstNameBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(firstNameBill.value) || validator.isOfLength(firstNameBill.value, 3) || validator.isTrimmed(firstNameBill.value)) {
		form.className = "valid";
		firstNameBill.className = "col1 valid";
		fnameBillLabel.className = "valid";
	}
}, false);

lastNameBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(lastNameBill.value) || !validator.isOfLength(lastNameBill.value, 3) || validator.isTrimmed(lastNameBill.value)) {
		form.className = "valid";
		lastNameBill.className = "col2 valid";
		lnameBillLabel.className = "valid";
	}
}, false);

addressBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(addressBill.value) || validator.isOfLength(addressBill.value, 3) || validator.isTrimmed(addressBill.value)) {
		form.className = "valid";
		addressBill.className = "full valid";
		addressBillLabel.className = "valid";
	}
}, false);

cityBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(cityBill.value) || validator.isOfLength(cityBill.value, 3) || validator.isTrimmed(cityBill.value)) {
		form.className = "valid";
		cityBill.className = "full valid";
		cityBillLabel.className = "valid";
	}
}, false);

zipBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(zipBill.value) || validator.isOfLength(zipBill.value, 5) || validator.isTrimmed(zipBill.value)) {
		form.className = "valid";
		zipBill.className = "full-2 valid";
		zipBillLabel.className = "valid";
	}
}, false);

countryBill.addEventListener('input', function (event) {
	if (!validator.isEmpty(countryBill.value) || validator.isLength(countryBill.value, 2) || validator.isTrimmed(countryBill.value)) {
		form.className = "valid";
		countryBill.className = "full valid";
		countryBillLabel.className = "valid";
	}
}, false);