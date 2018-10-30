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

























