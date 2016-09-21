var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');

showCart.addEventListener('click', function(event) {
	event.preventDefault();
	
	if (showCart.innerHTML === "Show Cart") {
		showCart.onclick = function () {
			shoppingCart.className = "show";
			showCart.innerHTML = "Hide Cart";
		}
	}
	else if (showCart.innerHTML === "Hide Cart") {
		showCart.onclick = function () {
			shoppingCart.className = "hide";
			showCart.innerHTML = "Show Cart";
		}
	}
}, false);
