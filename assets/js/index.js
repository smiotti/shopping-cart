const showAll = function () {
    $(`.typeAle`).show();
    $(`.typeStout`).show();
    $(`.typePorter`).show();
    $(`.typeLager`).show();
    $(`.typeIpa`).show();
}


const showAle = function () {
    $(`.typeAle`).show();
    $(`.typeStout`).hide(350);
    $(`.typePorter`).hide(350);
    $(`.typeLager`).hide(350);
    $(`.typeIpa`).hide(350);
};


const showPorter = function () {
    $(`.typePorter`).show();
    $(`.typeAle`).hide(350);
    $(`.typeStout`).hide(350);
    $(`.typeLager`).hide(350);
    $(`.typeIpa`).hide(350);
}

const showLager = function () {
    $(`.typeLager`).show();
    $(`.typeAle`).hide(350);
    $(`.typeStout`).hide(350);
    $(`.typePorter`).hide(350);
    $(`.typeIpa`).hide(350);
}

const showStout = function () {
    $(`.typeStout`).show();
    $(`.typeAle`).hide(350);
    $(`.typePorter`).hide(350);
    $(`.typeLager`).hide(350);
    $(`.typeIpa`).hide(350);
}



function addCart(beer) {
    var beerType = beer.getAttribute("data-name");
    // $('#show-cart').html(beerType.fontcolor("DarkBlue").bold());
    // $('#show-cart').append(beerType.fontcolor("DarkBlue").bold());
    $('.content').append(beerType.fontcolor("DarkBlue").bold());
  
    
}

function hideBeer(beer) {
    var beerType = "#"+beer.getAttribute("id");
    $(beerType).hide();
    // $(`#guinessButton`).hide();

}


function clearCart() {
    $('.content').html("");
    showAll();


}



/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
   
}



// $('.content').html(nameVal.fontcolor("DarkBlue").bold() + ' removed from Directory');
// $(`#filterAll`).on(`click`, showAll);




// Listening for user to click their beer selection 
console.log("slecting Ales");
$(`#filterAll`).on(`click`, showAll);
$(`#filterAle`).on(`click`, showAle);
$(`#filterLager`).on(`click`, showLager);
$(`#filterPorter`).on(`click`, showPorter);
$(`#filterStout`).on(`click`, showStout);






// $('#updateButton').on('click', updateName);

































// $(".add-to-cart").click(function(event){
//     event.preventDefault();
//     var name = $(this).attr("data-name");
//     var price = Number($(this).attr("data-type"));
//     shoppingCart.addItemToCart(name, price, 1);
//     displayCart();
// });
// $("#clear-cart").click(function(event){
//     shoppingCart.clearCart();
//     displayCart();
// });
// function displayCart() {
//     var cartArray = shoppingCart.listCart();
//     console.log(cartArray);
//     var output = "";
//     for (var i in cartArray) {
//         output += "<li>"
//             +cartArray[i].name
//             +" <input class='item-count' type='number' data-name='"
//             +cartArray[i].name
//             +"' value='"+cartArray[i].count+"' >"
//             +" x "+cartArray[i].price
//             +" = "+cartArray[i].total
//             +" <button class='plus-item' data-name='"
//             +cartArray[i].name+"'>+</button>"
//             +" <button class='subtract-item' data-name='"
//             +cartArray[i].name+"'>-</button>"
//             +" <button class='delete-item' data-name='"
//             +cartArray[i].name+"'>X</button>"
//             +"</li>";
//     }
//     $("#show-cart").html(output);
//     $("#count-cart").html( shoppingCart.countCart() );
//     $("#total-cart").html( shoppingCart.totalCart() );
// }
// $("#show-cart").on("click", ".delete-item", function(event){
//     var name = $(this).attr("data-name");
//     shoppingCart.removeItemFromCartAll(name);
//     displayCart();
// });
// $("#show-cart").on("click", ".subtract-item", function(event){
//     var name = $(this).attr("data-name");
//     shoppingCart.removeItemFromCart(name);
//     displayCart();
// });
// $("#show-cart").on("click", ".plus-item", function(event){
//     var name = $(this).attr("data-name");
//     shoppingCart.addItemToCart(name, 0, 1);
//     displayCart();
// });
// $("#show-cart").on("change", ".item-count", function(event){
//     var name = $(this).attr("data-name");
//     var count = Number($(this).val());
//     shoppingCart.setCountForItem(name, count);
//     displayCart();
// });
// displayCart(); 
 
 
//  // Shopping Cart functions

// var shoppingCart = (function () {
//     // Private methods and properties
//     var cart = [];

//     function Item(name, price, count) {
//         this.name = name
//         this.price = price
//         this.count = count
//     }

//     function saveCart() {
//         localStorage.setItem("shoppingCart", JSON.stringify(cart));
//     }

//     function loadCart() {
//         cart = JSON.parse(localStorage.getItem("shoppingCart"));
//         if (cart === null) {
//             cart = []
//         }
//     }

//     loadCart();
 
//  // Public methods and properties
//  var obj = {};

//  obj.addItemToCart = function (name, price, count) {
//      for (var i in cart) {
//          if (cart[i].name === name) {
//              cart[i].count += count;
//              saveCart();
//              return;
//          }
//      }

//      console.log("addItemToCart:", name, price, count);

//      var item = new Item(name, price, count);
//      cart.push(item);
//      saveCart();
//  };

//  obj.setCountForItem = function (name, count) {
//      for (var i in cart) {
//          if (cart[i].name === name) {
//              cart[i].count = count;
//              break;
//          }
//      }
//      saveCart();
//  };








