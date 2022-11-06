/*Sidebar*/
function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0";
}

function openNav2() {
    document.getElementById("myNav2").style.width = "100%";
}

function closeNav2() {
    document.getElementById("myNav2").style.width = "0";
}

function openNav3() {
    document.getElementById("myNav3").style.width = "100%";
}

function closeNav3() {
    document.getElementById("myNav3").style.width = "0";
}

function openNav4() {
    document.getElementById("myNav4").style.width = "100%";
}

function closeNav4() {
    document.getElementById("myNav4").style.width = "0";
}

function openNav5() {
    document.getElementById("myNav5").style.width = "100%";
}

function closeNav5() {
    document.getElementById("myNav5").style.width = "0";
}

function openNav6() {
    document.getElementById("myNav6").style.width = "100%";
}

function closeNav6() {
    document.getElementById("myNav6").style.width = "0";
}

/*Slider*/
var counter = 0;
var step = 0;
var intervalTime;
var ourImages = [];
ourImages[0] = "img/slider1.jpg";
ourImages[1] = "img/slider2.jpg";
ourImages[2] = "img/slider3.jpg";
ourImages[3] = "img/slider4.jpg";
ourImages[4] = "img/slider5.jpg";
ourImages[5] = "img/slider6.jpg";
ourImages[6] = "img/slider7.jpg";
ourImages[7] = "img/slider8.jpg";

function displayImage() {
    if (counter < 8) {
        document.getElementById("imgId").src = ourImages[counter++];
    } else {
        counter = 0;
        document.getElementById("imgId").src = ourImages[counter++];
    }
}

function changeDynamicImage() {
    intervalTime = setInterval(displayImage, 10000);
}

function ImageBack() {
    if (counter == 0) {
        document.getElementById("imgId").src = ourImages[7];
        counter = 7;
    } else {
        document.getElementById("imgId").src = ourImages[--counter];
    }
}

function ImageNext() {
    if (counter == 7) {
        document.getElementById("imgId").src = ourImages[0];
        counter = 0;
    } else {
        document.getElementById("imgId").src = ourImages[++counter];
    }
}

function displayDetails() {
    document.getElementById("details").style.display = "block";
    document.getElementById("info").style.display = "none";
    document.getElementById("details").style.width = "100%";
    document.getElementById("image2").style.float = "left";
    document.getElementById("image2").style.width = "270px";
    document.getElementById("price").style.display = "none";
    document.getElementById("image").style.width = "210px";
    document.getElementById("image").style.height = "267px";
}

function closeDetails() {
    document.getElementById("details").style.display = "none";
    document.getElementById("info").style.display = "block";
    document.getElementById("price").style.display = "block";
    document.getElementById("image").style.width = "200px";
    document.getElementById("image").style.height = "auto";
}

function displayDetails1() {
    document.getElementById("tea2").style.display = "block";
    document.getElementById("teaInfo").style.display = "none";
    document.getElementById("tea2").style.width = "100%";
    document.getElementById("teaImage2").style.float = "left";
    document.getElementById("teaImage2").style.width = "270px";
    document.getElementById("teaPrice").style.display = "none";
    document.getElementById("teaImage").style.marginTop = "44px";
    document.getElementById("teaImage2").style.height = "267px";
}

function closeDetails1() {
    document.getElementById("tea2").style.display = "none";
    document.getElementById("teaInfo").style.display = "block";
    document.getElementById("teaPrice").style.display = "block";
    document.getElementById("teaImage").style.width = "200px";
    document.getElementById("teaImage").style.height = "auto";
    document.getElementById("teaImage").style.marginTop = "0";
}



/********************************AddToCart****************************************/

const cart = document.querySelector('#cart');
const cartModalOverlay = document.querySelector('.cart-modal-overlay');
cart.addEventListener('click', () => {
    if (cartModalOverlay.style.transform === 'translateX(-200%)') {
        cartModalOverlay.style.transform = 'translateX(0)';
    } else {
        cartModalOverlay.style.transform = 'translateX(-200%)';
    }
})
const closeBtn = document.querySelector('#close-btn');

closeBtn.addEventListener('click', () => {
    cartModalOverlay.style.transform = 'translateX(-200%)';
});

cartModalOverlay.addEventListener('click', (e) => {
    if (e.target.classList.contains('cart-modal-overlay')) {
        cartModalOverlay.style.transform = 'translateX(-200%)'
    }
})

const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (var i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}

function addToCartClicked(event) {
    debugger;
    button = event.target;
    var cartItem = button.parentElement;
    var price = cartItem.getElementsByClassName('itemPrice')[0].innerText;
    var imageSrc = cartItem.getElementsByClassName('itemImage')[0].src;
    addItemToCart(price, imageSrc);
    updateCartPrice()

    localStorage.myImage = imageSrc;
    localStorage.myPrice = price;
}

function addItemToCart(price, imageSrc) {
    var productRow = document.createElement('div');
    productRow.classList.add('product-row');
    var productRows = document.getElementsByClassName('product-rows')[0];
    var cartImage = document.getElementsByClassName('cart-image');

    for (var i = 0; i < cartImage.length; i++) {
        if (cartImage[i].src == imageSrc) {
            alert('This item has already been added to the cart')
            return;
        }
    }

    var cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${imageSrc}">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
    productRow.innerHTML = cartRowItems;
    productRows.append(productRow);
    productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
    productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
    updateCartPrice();
}

// end of add products to cart

// Remove products from cart
const removeBtn = document.getElementsByClassName('remove-btn');
for (var i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i]
    button.addEventListener('click', removeItem)
}

function removeItem(event) {
    btnClicked = event.target;
    btnClicked.parentElement.parentElement.remove();
    updateCartPrice();
    localStorage.removeItem("myImage");
    localStorage.removeItem("myPrice");
}

// update quantity input
var quantityInput = document.getElementsByClassName('product-quantity')[0];

for (var i = 0; i < quantityInput; i++) {
    input = quantityInput[i]
    input.addEventListener('change', changeQuantity)
}

function changeQuantity(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartPrice()
}
// end of update quantity input

// update total price
function updateCartPrice() {
    var total = 0
    for (var i = 0; i < productRow.length; i += 2) {
        cartRow = productRow[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)

    }
    document.getElementsByClassName('total-price')[0].innerText = total + ' egp'

    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}
// end of update total price

// purchase items
const purchaseBtn = document.querySelector('.purchase-btn');

const closeCartModal = document.querySelector('.cart-modal');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

function purchaseBtnClicked() {
    alert('Thank you for your purchase');
    cartModalOverlay.style.transform = 'translateX(-100%)'
    var cartItems = document.getElementsByClassName('product-rows')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)

    }
    updateCartPrice()
}




fetch("./Grocery22.json").then(function(response){
    return response.json();
}).then(function(data) {
    // this is for menu of products
     console.log(data.links.length); 
     var menudiv = document.getElementById("menu");
     for(let i =0 ; i<data.menu.length;i++){
         var sectiondiv = document.createElement("div");
         sectiondiv.className="product-content";
         var sectionimg = document.createElement("img");
         var myspan = document.createElement("div");
         myspan.appendChild(sectionimg);
         var namep = document.createElement("p")

         var descriptionp = document.createElement("p")
         var pricep = document.createElement("p")
         pricep.setAttribute("style","cursor:pointer;font-weight:bold")
         var offrep = document.createElement("p")
         var offernum = document.createElement("a");
         sectionimg.setAttribute("src",data.menu[i].image)
         namep.innerHTML = data.menu[i].name;
         descriptionp.innerHTML = data.menu[i].description;
         pricep.innerHTML = data.menu[i].price;
         offrep.innerHTML = data.menu[i].offer;
         offernum.setAttribute("href","#");
         offernum.innerHTML = data.menu[i].offernumber;
         var productRate= document.createElement("a");
         productRate.innerHTML=data.menu[i].ratting;
         sectiondiv.append(myspan,namep,pricep,descriptionp,productRate,offrep,offernum)
         menudiv.appendChild(sectiondiv);
     }
     // **************end of  menu ****************
})