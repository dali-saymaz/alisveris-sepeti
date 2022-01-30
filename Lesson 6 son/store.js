  let deleteButton = document.getElementsByClassName("btn-danger");
  for (let index = 0; index < deleteButton.length; index++) {
    let button = deleteButton[index];
    button.addEventListener("click", removeBoxItem);
  }

  let addToBoxButton = document.getElementsByClassName("shop-item-button");
  for (let index = 0; index < addToBoxButton.length; index++) {
    let button = addToBoxButton[index];
    button.addEventListener("click", addToBoxProduct);
  }

  var quantityInputs = document.getElementsByClassName('cart-quantity-input')
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i]
    input.addEventListener('change', quantityChanged)
  }

  document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)


function purchaseClicked() {
  alert('Thank you for your purchase')
  var cartItems = document.getElementsByClassName('cart-items')[0]
  while (cartItems.hasChildNodes()) {
    cartItems.removeChild(cartItems.firstChild)
  }
  totalBoxUpdate()
}

function addToBoxProduct(pevent) {
  let button = pevent.target;
  let shopItem = button.parentElement.parentElement; //iki defa parent.Elemant yazarak üstteki baba koda ulastik
  let title = shopItem.getElementsByClassName("shop-item-title")[0].innerText; //default degeri atadik
  let imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src; //resmin text i olmaz uzantisi olur, bu yüzden src yazdik
  let price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
  addItemToBox(title, imageSrc, price);
  totalBoxUpdate();
}

function addItemToBox(title, imageSrc, price) {
  let cartRow = document.createElement("div"); //burada yeni bir div elemani olusturduk
  cartRow.classList.add("cart-row"); //olusturdugumuz div elemanina class.List ile class ismi verdik
  let sentCartItems = document.getElementsByClassName("cart-items")[0];
  let itemNames = sentCartItems.getElementsByClassName("cart-item-title");
  for (let index = 0; index < itemNames.length; index++) {
    if ((itemNames[index].innerText == title)) {
      alert("Bu ürünü zaten sectiniz!");
      return;
    }
  }
  let cartRowContent = ` <div class="cart-item cart-column">  
    <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
      </div>
      <span class="cart-price cart-column">${price}</span>
      <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
      </div>
  `;
  cartRow.innerHTML = cartRowContent; //olusturdugumuz kod blogunu inner.html ile cartRow a ekledik.
  sentCartItems.append(cartRow); //append ile sentCartItems in icine cartRow dan gelen bilgiyi ekledik.$

  ////////////////bu kisim eklendi//////////////
  cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeBoxItem)
  cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)

}

function removeBoxItem(event) {
  let buttonClick = event.target;
  buttonClick.parentElement.parentElement.remove();
  totalBoxUpdate();
}

function totalBoxUpdate() {
  let cartItemContainer = document.getElementsByClassName("cart-items")[0];
  let cartRows = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let index = 0; index < cartRows.length; index++) {
    let cartRow = cartRows[index];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName("cart-quantity-input")[0];
    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100
  document.getElementsByClassName("cart-total-price")[0].innerText = '$' + total;
}

function quantityChanged(event) {
  var input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  }
  totalBoxUpdate()
}