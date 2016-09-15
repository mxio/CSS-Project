var form = document.getElementById('form');
var cardName = document.getElementById('name');
var cardNum = document.getElementById('card-num');
var csv = document.getElementById('csv');

form.addEventListener('submit', function (event) {
	event.preventDefault();
	if (validator.isEmpty(cardName.value) || validator.isLength(cardName.value, 2)) {
		form.className = "invalid";
		cardName.className = "invalid";
	}
	if (validator.isEmpty(cardNum.value) || !validator.isCreditCard(cardNum.value)) {
		form.className = "invalid";
		cardNum.className = "col-1 invalid";
	}
	if (validator.isEmpty(csv.value) || validator.isLength(csv.value, 2)) {
		form.className = "invalid";
		csv.className = " col-2 invalid";
	}

}, false);


cardName.addEventListener('input', function (event) {
	if (!validator.isEmpty(cardName.value) || validator.isOfLength(cardName.value, 3)) {
		form.className = "valid";
		cardName.className = "valid";
	}
}, false);

cardNum.addEventListener('input', function (event) {
	if (!validator.isEmpty(cardNum.value) || validator.isCreditCard(cardNum.value)) {
		form.className = "valid";
		cardNum.className = "col-1 valid";
	}
}, false);

csv.addEventListener('input', function (event) {
	if (!validator.isEmpty(csv.value) || validator.isLength(csv.value, 2)) {
		form.className = "valid";
		csv.className = " col-2 valid";
	}
}, false);