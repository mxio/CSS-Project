
function clickButton (value) {
	if (value === "CLEAR") {
		document.getElementById('screen').value = "";
	}
	else if (value === "DEL") {
		var length = document.getElementById('screen').value.length;
		var deletedStr = document.getElementById('screen').value.substr(0, length - 1);
		document.getElementById('screen').value = deletedStr;
	}
	else if (value === "settings") {
		document.getElementById('screen').value = "";
	}
	else document.getElementById('screen').value += value;
	return;
}

function plus () {
	document.getElementById('screen').value += '+';
}

function minus () {
	document.getElementById('screen').value += '-';
}

function multiply () {
	document.getElementById('screen').value += '*';
}

function divide () {
	document.getElementById('screen').value += '/';
}

function and () {
	document.getElementById('screen').value += '&';
}

function openPara () {
	document.getElementById('screen').value += '(';
}

function closePara () {
	document.getElementById('screen').value += ')';
}

function decimal () {
	document.getElementById('screen').value += '.';
}

function calc () {
	var calc = eval(document.getElementById('screen').value);

	document.getElementById('screen').value = calc;
}