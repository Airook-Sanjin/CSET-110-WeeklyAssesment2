let cartSection = document.getElementById("cart-section");
let addtoCartBtn = document.getElementsByClassName("shop-item-button");
let removeBtn = document.getElementsByClassName("btn-danger");
let purchaseBtn = document.getElementsByClassName("btn-Purchase");
let cartStyle = document.getElementsByClassName("cart-column");
let quantityInputs = document.getElementsByClassName("cart-quantity-input");
var clicked = false;
for (let i= 0; i <quantityInputs.length; i++){
  let input = quantityInputs[i]
  input.addEventListener('change ', quanitiyChanged) //make function
}

for (let i = 0; i < addtoCartBtn.length; i++) {
  var button = addtoCartBtn[i];
  button.addEventListener("click", (event) => {
    addtocartBtnClicked;
  });
}
function addtocartBtnClicked(event) {
  var button = event.target;
  let shopItem = button.parentElement.parentElement;
  var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
  var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
  addCart(title, price)
}
function addCart(title, price) {
  let cartrow = document.createElement("div");
  cartrow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemName = cartItems.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemName.length; i++) {
    if (cartItemName[i].innerText === title) {
      alert("this item is already added to the cart");
      return;
    }
  }
}
