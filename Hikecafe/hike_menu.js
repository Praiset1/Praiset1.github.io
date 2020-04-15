/*ensure page loads at start  */
var removeCartItemButtons = document.getElementsByClassName('btn-danger');
  for (var i =0; i < removeCartItemButtons.length; i++){
    var button = removeCartItemButtons[i]
    button.addEventListener('click', removeCartItem)
}

var addToCartButtons = document.getElementsByClassName('menu-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }



    function addToCartClicked(event) {
      var button = event.target
      var shopItem = button.parentElement.parentElement
      var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
      var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
      var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
      addItemToCart(title, price, imageSrc)
      cart_total += shop-item [product].Price;
      cart_total += shop-item [product].Price;
      updateCartTotal()
  }


  function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    
    function removeCartItem(event) {
      var buttonClicked = event.target
      buttonClicked.parentElement.parentElement.remove()
      updateCartTotal()
  }