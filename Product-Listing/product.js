var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');
var cartOnPage = document.getElementById('cart-on-page');
var quantity = document.getElementById('total-qty');
var cartOnPage = document.getElementById('cart-on-page');
var itemTotal = document.getElementById('item-total');
var shoppingCartTotalQty = document.getElementById('shopping-cart-total');
var addToCartIcons = document.querySelectorAll('.material-icons');

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


//add or update
function add(id) {

	var product = document.getElementById(id);
    var productID = product.id;
    var productQty = parseInt(product.querySelector('.quantity').value);
    var productName = product.querySelector('.name').innerHTML;
    var productPrice = product.querySelector('.price').innerHTML;
    	productPrice = parseFloat(productPrice.substr(1, 5)).toFixed(2);
    	index = findIndex();

	item = {
        "id": productID,
        "name": productName,
        "price": productPrice,
        "quantity": productQty,
        "totalPrice": productPrice * productQty
    }

    //if item's id does not exist, push to cart, else change qty
    if (index === -1) {	
	    cart.items.push(item);
    	cart.count += item.quantity;
    }
    else cart.items[index].quantity += item.quantity; 
    	cart.items[index].totalPrice = cart.items[index].price * cart.items[index].quantity; 
    
    if (cart.count > 0) {
		shoppingCart.className = "show";
		showCart.innerHTML = "Hide Cart";
	}

	//call function to populate shopping cart
	populateShoppingCart();
}

//find index of item in cart items 
function findIndex() {
	var indexOf = -1;

	for (var i = 0; i < cart.items.length; i++) {
		if (item.id === cart.items[i].id) {
			indexOf = cart.items.indexOf(cart.items[i]);
		}
	}
	return indexOf;
}

//populate shopping cart
function populateShoppingCart() {
		itemTotal.innerHTML += '<section class="cart-row"><div class="shopping-cart-img"><img src="#"></div>' + '<div class="col-1">' + cart.items[index].name + "</div>" + " " + '<div class="col-2"><form><input class="box cart-qty-box" value="' + cart.items[index].quantity + '"></input></form><button class="change" href="#">Change Quantity</button></div>' + '<div class="col-3">$' + cart.items[index].totalPrice + "</div></section>";

}

//change quantity in shopping cart

//totals
	//loop for quantity total
	//loop for price total

//add event listener to each icon

var cart = {
	"items": [
		
	],
	"count": 0,
	"total": 0
};

