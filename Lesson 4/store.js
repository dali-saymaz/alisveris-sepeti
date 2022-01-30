//-------sayfa yuklenme islemini asyn olarak yapimi
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}


/// bu asamada sepettekini cikartiyoruz fakat total fiyatta guncelleme olmiuyor
//----------------------------start--------------------
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function (event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.remove()
        })
    }
//------------------------------------------------
var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    console.log(removeCartItemButtons)
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}
///------------------------end------------







// totaldeki fiyat cikarma islemi 
//--- start-------------
///--------1 start
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
    console.log(priceElement,quantityElement)
    }

}

//_--------------------1 son

//_--------------------2 start
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = priceElement.innerText
       console.log(price)
    }

}
//_--------------------2 son

//_--------------------3 start
function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100 //kusuratlar cikarsa burayiz
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
//_--------------------3 son
//--------------end--------------