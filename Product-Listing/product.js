var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');
var addToCartIcons = document.querySelectorAll('.material-icons');
var cartOnPage = document.getElementById('cart-on-page');
var shoppingCartTotalQty = document.getElementById('shopping-cart-total');
var totalPrice = document.getElementById('shopping-cart-total-price');
var itemTotal = document.getElementById('item-total');
var quantity = document.getElementById('total-qty');

showCart.addEventListener('click', function(event) {
	event.preventDefault();

	if (showCart.innerHTML === "Show Cart") {
		shoppingCart.className = "show";
		showCart.innerHTML = "Hide Cart";
	}
	else if (showCart.innerHTML === "Hide Cart") {
		shoppingCart.className = "hide";
		showCart.innerHTML = "Show Cart";
		
	}
}, false);


for (var i = 0; i < addToCartIcons.length; i++) {
	addToCartIcons[i].addEventListener('click', function(event) {
		event.preventDefault();
		addToCart(event);
	}, false); 
}

function addToCart(event) {
	var product = event.target.parentNode.parentNode.parentNode.parentNode;
	var productID = product.id;
	var productQty = product.querySelector('.quantity').value;

	var qtyValueToNum = parseInt(productQty);
	cart.count += qtyValueToNum;
	cartOnPage.innerHTML = cart.count;


	itemTotal.innerHTML += '<div class="col-1">' + cart.items[productID].name + "</div>" + " " + '<div class="col-2">' + productQty + "</div>" + '<div class="col-3">$' + (productQty * cart.items[productID].price) + "</div>";
	
	//Price Total
	priceTotal.push(productQty * cart.items[productID].price);

	var total = 0;

	for (var e = 0; e < priceTotal.length; e++) {
    	total += priceTotal[e];
	}
	
	shoppingCartTotalQty.innerHTML = "$" + parseFloat(total).toFixed(2);

	//Qty Total
	qtyTotal.push(qtyValueToNum);
	var totalQty = 0;

	for (var j = 0; j < qtyTotal.length; j++) {
		totalQty += qtyTotal[j];
	}

	quantity.innerHTML = totalQty;
}

var priceTotal = [];
var qtyTotal = [];

var cart = {
	"items": [
		{
			"id": "01",
			"name": "Tee",
			"price": 14.99,
			"count": 1
		},
		{
			"id": "02",
			"name": "Tank",
			"price": 10.99,
			"count": 1
		},
		{
			"id": "03",
			"name": "Sweater",
			"price": 19.99,
			"count": 1
		},
		{
			"id": "04",
			"name": "Skirt",
			"price": 16.99,
			"count": 1
		},
		{
			"id": "05",
			"name": "Jean",
			"price": 24.99,
			"count": 1
		},
		{
			"id": "06",
			"name": "Pant",
			"price": 27.99,
			"count": 1
		},
		{
			"id": "07",
			"name": "Dress",
			"price": 45.00,
			"count": 1
		},
		{
			"id": "08",
			"name": "Shoe",
			"price": 15.99,
			"count": 1
		},
		{
			"id": "Scarf",
			"name": "Loose T-shirt",
			"price": 8.99,
			"count": 1
		},
		{
			"id": "010",
			"name": "Blouse",
			"price": 29.99,
			"count": 1
		},
		{
			"id": "11",
			"name": "Purse",
			"price": 34.99,
			"count": 1
		},
		{
			"id": "12",
			"name": "Sunglass",
			"price": 8.99,
			"count": 1
		}
	],
	"count": 0
};