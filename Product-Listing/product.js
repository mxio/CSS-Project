var showCart = document.getElementById('show-cart');
var shoppingCart = document.getElementById('shopping-cart');
var cartOnPage = document.getElementById('cart-on-page');
var quantity = document.getElementById('total-qty');
var cartOnPage = document.getElementById('cart-on-page');
var itemTotal = document.getElementById('item-total');
var shoppingCartTotalQty = document.getElementById('shopping-cart-total');



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



//add items to cart
function add(id) {

	var product = document.getElementById(id);
    var productID = product.id;
    var productQty = parseInt(product.querySelector('.quantity').value);
    var productName = product.querySelector('.name').innerHTML;
    var productPrice = product.querySelector('.price').innerHTML;
    	productPrice = parseFloat(productPrice.substr(1, 5)).toFixed(2);
   	var	index = findIndex(id);

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
    }
    else { //if item exists, remove it because it adds another one, then update quantity
    	document.getElementById("section"+cart.items[index].id).remove();
    	cart.items[index].quantity += productQty;
    	cart.items[index].totalPrice = cart.items[index].price * cart.items[index].quantity;
    }

    totals();
    showCartOne();
    populateShoppingCart(index, id);
}

//find index of item in cart items 
function findIndex(id) {
	var indexOf = -1;

	for (var i = 0; i < cart.items.length; i++) {
		if (id === cart.items[i].id) {
			indexOf = cart.items.indexOf(cart.items[i]);
		}
	}
	return indexOf;
}

//show shopping cart section if there is one or more items in the cart
function showCartOne() {
    if (cart.count > 0) {
		shoppingCart.className = "show";
		showCart.innerHTML = "Hide Cart";
	}
}

//populate shopping cart
function populateShoppingCart(index, id) {
		//index is undefined so need to add the variable here again while passing index and id as parameters
		var index = findIndex(id);

		itemTotal.innerHTML += '<section id="section'+cart.items[index].id+'" class="cart-row"><div class="shopping-cart-img"><img src="#"></div>' + '<div class="col-1">' + cart.items[index].name + "</div>" + " " + '<div class="col-2"><form><input class="box cart-qty-box" value="' + cart.items[index].quantity + '"></input></form><button class="change" itemid="'+cart.items[index].id+'" href="#">Change Quantity</button></div>' + '<div col3id="'+cart.items[index].id+'" class="col-3">$' + cart.items[index].totalPrice + "</div></section>";
			//Adding itemid attribute to button assigns a separate id to the change button and then pass it to changeQuantity function

	changeQty(index, id);
	applyPromo();
	totals();
}

//change quantity in shopping cart
function changeQty(index, id) {
	
	var changeQty = document.querySelectorAll('.change');
	var	index = findIndex(id);
	for (var a = 0; a < changeQty.length; a++) {
		changeQty[a].addEventListener('click', function(event) {
			debugger;
			event.preventDefault();
			changeQuantity(event, index, this.getAttribute("itemid"));//get id of current item's button in cart
		}, false); 
	}

	function changeQuantity(event, index, id) {
		
		var	index = findIndex(id);
		var qtyBoxParent = event.target.parentNode.parentNode;
		var qtyBox = parseInt(qtyBoxParent.querySelector('.cart-qty-box').value);
		
		var cartRowParent = qtyBoxParent.parentNode;
		var child = cartRowParent.querySelector('section');
		
		//targets col-3
		var itemQty = event.target.parentNode.nextSibling;

		if (qtyBox === 0) {
			qtyBoxParent.remove(child);
			//remove item from cart array
			cart.items.splice(index, 1);
		}
		else {
			cart.items[index].quantity = qtyBox;
			cart.items[index].totalPrice = cart.items[index].quantity * cart.items[index].price;
			//updates col-3's totalPrice
			itemQty.innerHTML = "$" + cart.items[index].totalPrice;
		}
		totals();
	}
}

//totals
function totals() {
	//set these to 0 to so they don't store the initial values from the click ie: 2+1 = 3 doesn't become 2+2+1 = 4
	cart.count = 0;
	cart.total = 0;

	for (var j = 0; j < cart.items.length; j++) {
		cart.count += cart.items[j].quantity;
		cart.total += cart.items[j].totalPrice;
	}
	
	quantity.innerHTML = cart.count;
	shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
	cartOnPage.innerHTML = cart.count;
}

function applyPromo() {
	var promo = document.getElementById('promo');

	if (promo.value === "TANKS16") {
  		//push promo to inUse
  		cart.inUse.push(cart.promo[0])
  		//apply discount to tank
  		for (var j = 0; j < cart.items.length; j++) {
  			if (cart.inUse[0].name === "5PERCENT") {
    			shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
    			cart.inUse.pop();
    		}
    		else if (cart.items[j].name === "Tank") {
      			shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total - (cart.items[j].totalPrice * cart.promo[0].percent)).toFixed(2);
    		}
  		}
	}	
	else if (promo.value === "ACCESS16") {
		//it isn't pushing this promo code to the array unless it is the first code being used
  		cart.inUse.push(cart.promo[1]);
  		
  		for (var e = 0; e < cart.items.length; e++) {
  			//sets the cart total when ACCESS16 promo is applied
  			cart.items[e].totalPrice = cart.items[e].totalPrice - (cart.items[e].totalPrice * cart.promo[1].percent);
  			totals();
  			//have to move this variable down here in order to get the new total, not current total from 5PERCENT promo
  			scarvesTotal = cart.total;
  			alert("wrong");
  		
  			//this code is not being run at all
  			if (cart.inUse[0].name === "5PERCENT") {
                if(cart.items[e].name === "Scarf") {
                	cart.inUse.push(cart.promo[1]);
                	//it is not checking scarvesTotal against cart.total
  					if (scarvesTotal < cart.total) {
  						alert("correct promo");
    					cart.inUse.shift(); //remove the first code which is 5 % code
    					cart.total = cart.total + (cart.total * cart.promo[2].percent); //add back the amount from 5%
    					cart.items[e].totalPrice = cart.items[e].totalPrice - (cart.items[e].totalPrice * cart.promo[1].percent); 
    					totals();
      					shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
      				}else{
      					shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
  				    	cart.inUse.pop(); //removes ACCESS16 code 
      				}
      			}
    		}
    		else if (cart.items[e].name === "Scarf") {
    			cart.items[e].totalPrice = cart.items[e].totalPrice - (cart.items[e].totalPrice * cart.promo[1].percent); 
    			totals();
      			shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
    		}
  		}
	}
	else if (promo.value === "5PERCENT") {
		if(cart.inUse.length == 0){
  		cart.inUse.push(cart.promo[2]);
  		//apply discount to total
  		cart.total = cart.total - (cart.total * cart.promo[2].percent);
  		shoppingCartTotalQty.innerHTML = "$" + parseFloat(cart.total).toFixed(2);
  	    }
  	    else{
  	    	alert("Sorry only one promo code allowed.");
  	    }
	}
}


cart = {
	"items": [
		
	],
	"count": 0,
	"total": 0,
	"promo": [
    	{
      		"name": "TANKS16",
      		"percent": .1,
    	},
    	{
      		"name": "ACCESS16",
      		"percent": .15,
    	},
    	{
      		"name": "5PERCENT",
      		"percent": .05,
    	}
  	],
  	"inUse": [

  	]
};

