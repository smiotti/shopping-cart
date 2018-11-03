// show funtions used by the Filter funtion to display correct beer buttons, by beer type.
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
function addCart(beer) {
    // gathering button attributes and assingn to variables based on user beer slections
    var beerType = beer.getAttribute("data-name");
    var beerId = beer.getAttribute("id");

    // Dynamically build and display the shopping cart buttons in the DOM, based on user selection
    const projBtn = $('<button>');
    projBtn.addClass('btn-sm btn-block');
    projBtn.attr('id', beerId + `_cart`);
    projBtn.attr('data-name', beerId);
    projBtn.text(beerType);
    $('#buttons').append(projBtn);

}


// Function hides beer button from being displayed once it's been added to the cart.
function hideBeer(beer) {
    var beerType = "#" + beer.getAttribute("id");
    $(beerType).hide();

}

// Funtion empties the shopping cart.
function clearCart() {
    $('#buttons').html("");
    showAll();

}



//  Filter button logic.  when user clicks on the Filter button, toggle between hiding 
// and showing the dropdown content of beer types 
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


// Listening for user to click Filter button slections, then call the 
// corresponding show funtion to display beer of that types. 
$(`#filterAll`).on(`click`, showAll);
$(`#filterAle`).on(`click`, showAle);
$(`#filterLager`).on(`click`, showLager);
$(`#filterPorter`).on(`click`, showPorter);
$(`#filterStout`).on(`click`, showStout);



// listing for user click to remove the assoicated beer item from the shopping cart
$("#buttons").click(function () {
    // gathering button ID and data-name attrute to determine correct items 
    // to remove from cart and add back to the beer selection list
    var beerId = this.firstChild.id;
    var temp = "#" + this.attributes.id.ownerElement.firstChild.attributes["data-name"].value;
    // removes item from cart based on button id
    $('#' + beerId).remove();
    // adds button back to selection list based on button data-name attribute.
    $(temp).show();

});



