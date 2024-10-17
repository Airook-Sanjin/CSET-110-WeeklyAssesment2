if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  let removeCartItemBtn = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItemBtn.length; i++) {
    let button = removeCartItemBtn[i];
    button.addEventListener("click", removeCartItem {
      
    });
  }
}
function removeCartItem(event){
  let buttonClicked = event.target;
      buttonClicked.parentElement.parentElement.remove();
      updateCartTotal();
}
function updateCartTotal() {
  let cartItemContainer = document.getElementsByClassName("cart-item")[0];
  let cartRow = cartItemContainer.getElementsByClassName("cart-row");
  let total = 0;
  for (let i = 0; i < cartRow.length; i++) {
    let cartRow = cartRow[i];
    let priceElement = cartRow.getElementsByClassName("cart-price")[0];
    let quantityElement = cartRow.getElementsByClassName(
      "cart-quantity-input"
    )[0];
    let price = parseFloat(priceElement.innerHTML.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "$" + total;
}
