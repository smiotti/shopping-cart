const cartBeerList = [`test`];
let display = 'false';

const beerList = [
    {
        name: 'Two Hearted Ale',
        type: 'typeAle',
        uniq: 'twoHearted'
    },

    {
        name: 'Lake Erie Monster',
        type: 'typeAle',
        uniq: 'lakeErie'
    },

    {
        name: '12 Dogs of Christmas Ale',
        type: 'typeAle',
        uniq: 'christmasAle'
    },

    {
        name: 'Double Dead Guy Ale',
        type: 'typeAle',
        uniq: 'doubleDead'
    },

    {
        name: 'Elliot Ness',
        type: 'typeLager',
        uniq: 'eliotNess'
    },

    {
        name: 'Dortmunder Gold',
        type: 'typeLager',
        uniq: 'dortmunder'
    },

    {
        name: 'Guinness Draught',
        type: 'typeStout',
        uniq: 'guiness'
    },

    {
        name: 'Moment of Clarity',
        type: 'typeStout',
        uniq: 'momentOfClarity'
    },

    {
        name: 'Coconut Porter',
        type: 'typePorter',
        uniq: 'cocoPorter'
    },

];


const generateButton = function (obj) {
    return `<button id="${obj.uniq}" class="btn btn-primary btn-lg btn-block ${obj.type}" data-name="${obj.name}" data-type="${obj.type}">${obj.name}</button>`;
}

const render = function () {
    let html = '';
    for (let i = 0; i < beerList.length; i++) {
        html += generateButton(beerList[i]);
    }

    $('#primary-list').append(html);
}

render();




// const generateCartButton = function(obj) {
//     return `<button id="${obj.uniq}" class="btn btn-primary btn-lg btn-block ${obj.type}" data-name="${obj.name}" data-type="${obj.type}">${obj.name}</button>`;
// }


// $('#cart-list').on('click', addCart(beerList.uniq));
// var beerType = "#"+this.getAttribute("id");




// Listening for user to add beer to Cart and calling the addCart funtion to do so
$('#twoHearted').on('click', addCart);
$('#lakeErie').on('click', addCart);
$('#christmasAle').on('click', addCart);
$('#doubleDead').on('click', addCart);
$('#eliotNess').on('click', addCart);
$('#dortmunder').on('click', addCart);
$('#guiness').on('click', addCart);
$('#momentOfClarity').on('click', addCart);
$('#cocoPorter').on('click', addCart);


// // Listening for user to remove beer from Cart and calling the removeCart funtion to do so
// $('#twoHearted').on('click', removeCart);
// $('#lakeErie').on('click', removeCart);
// $('#christmasAle').on('click', removeCart);
// $('#doubleDead').on('click', removeCart);
// $('#eliotNess').on('click', removeCart);
// $('#dortmunder').on('click', removeCart);
// $('#guiness').on('click', removeCart);
// $('#momentOfClarity').on('click', removeCart);
// $('#cocoPorter').on('click', removeCart);




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




// Funtion adds item to the shopping cart
function addCart() {
    
    const x = ($(this).attr("data-name"));
    const beerInCart = $('<button>').addClass('btn-sm btn-block');
    beerInCart.text($(this).attr("data-name"));
    beerInCart.attr('id', $(this).attr("id") + "_crt");


    //checking if beer in already in the list.


    for (let i = 0; i < cartBeerList.length; i++) {
        if (cartBeerList[i] === x) {
            console.log('already in the cart!');
            display = false;
            break
        } 
        
        if (cartBeerList[i] !== x) {
            cartBeerList.push(x);
            display = true;
            break
        }
    }

    if (display === true) {
        $('#cart-list').append(beerInCart);
        console.log('beer added to cart!');
    }






    // const removeName = function () {
    //     let onEmployeetList = false;
    //     // Gathering user input.
    //     const nameVal = $('#nameInp').val();

    //     // If selected employee name is in the list, delete the employee record.
    //     for (let i = 0; i < employeeList.length; i++) {
    //         if (employeeList[i].name === nameVal) {
    //           employeeList.splice(i, 1);
    //           onEmployeetList = true;  
    //         }    
    //     }   

    //     // Alert user of action status.
    //     $('#scroll').html(nameVal.fontcolor("DarkBlue").bold() + ' removed from Directory');

    //     // If selected employee name not in the list, alert user.
    //     if (onEmployeetList == false) {
    //         $('#scroll').html(nameVal.fontcolor("DarkRed").bold() + ' not in the employee list');
    //         }









    // btn.setAttribute('id', 'button' + ctr);
    // <button id="${obj.uniq}"


    // $('#primary-list').on('click', '.col-4', addCart)








    // var beerType = beer.getAttribute("data-name");
    // var beerId = "#"+beer.getAttribute("id");

    // $('#show-cart').html(beerType.fontcolor("DarkBlue").bold());
    // $('#show-cart').append(beerType.fontcolor("DarkBlue").bold());

    // use this one
    // $('.content').append(beerType.fontcolor("DarkBlue").bold()+'<br/>'); 

    // const projBtn = $('<button>');
    // projBtn.addClass('btn-sm btn-block'); 
    // // projBtn.attr('data-name', beerType+`_cart`);
    // projBtn.attr('id', beerId +`_cart`);
    // projBtn.text(beerType);
    // $('#buttons').append(projBtn);


}



// Funtion removes item from the shopping cart
function removeCart(beer) {
    var beerInCart = beer.getAttribute("id");



    // $('#buttons').remove(beerInCart);

    // $('#eliotNess_cart').remove();
    // vs in Console
    ('#buttons').remove();




    // $("button").on("click", function(){
    //     $(this).parent().remove();
    // });





    // https://stackoverflow.com/questions/8133768/dynamically-adding-and-removing-buttons-with-jquery

}







//  Need to add some similar functionality for shopping list add.  When clicked (btn btn-primary), at the beer to the cart array, add a hfref attribute,  and display in cart.
// for (let i = 0; i < beerList.length; i++) {
//     const newDiv = $('<div>');
//     newDiv.text(`${beerList[i]}`);
//     $('#drink-options').append(newDiv);
// };




// const appendTask = function() {
//     const task = $('<div>').addClass('proj task-color');
//     task.text($(this).attr("data-proj"));
//     $('#display').append(task);
//     $('#buttons').on('click', '.proj-button', appendTask)
// }



// Function hides the beer from being displayed once it's been added to the cart.
function hideBeer(beer) {
    var beerType = "#" + this.getAttribute("id");
    $(beerType).hide();
    // $(`#guinessButton`).hide();

}

// Funtion empties the shopping cart.
function clearCart() {
    $('.content').html("");
    // $('.content').text("");
    showAll();

    // $('content').empty();
    // $('#buttons').remove();


}



/* When the user clicks on the Filter button,
toggle between hiding and showing the dropdown content of beer types */
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
// console.log("slecting Ales");
$(`#filterAll`).on(`click`, showAll);
$(`#filterAle`).on(`click`, showAle);
$(`#filterLager`).on(`click`, showLager);
$(`#filterPorter`).on(`click`, showPorter);
$(`#filterStout`).on(`click`, showStout);


// $(`#eliotNess_cart`).on(`click`, removeCart(this));






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








