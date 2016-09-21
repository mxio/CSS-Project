var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');

showCart.addEventListener('click', function(event) {
	shoppingCart.className = "show";
}, false);