var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');

showCart.addEventListener('click', function(event) {
	event.preventDefault();
	shoppingCart.className = "show";
}, false);

shoppingCart.addEventListener('click', function(event) {
	shoppingCart.className = "hide";
}, false);