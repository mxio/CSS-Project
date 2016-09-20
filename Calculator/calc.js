
function clickButton (value) {
	if (value === "clear") {
		document.getElementById('screen').value = "";
		return;
	}
	else document.getElementById('screen').value += value;
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