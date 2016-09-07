var color = document.getElementById('color');

color.addEventListener('input', function (event) {
	if (!validator.isRGB(color.value)) {
		color.className = "invalid";
	}
	else if (validator.isRGB(color.value)) {
		color.className = "valid";
	}
}, false);