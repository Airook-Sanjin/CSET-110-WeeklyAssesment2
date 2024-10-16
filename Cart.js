let cartSection = document.getElementById("cart-section");
let addtoCartBtn = document.getElementsByClassName("shop-item-button");
let removeBtn = document.getElementsByClassName("btn-danger");
let purchaseBtn = document.getElementsByClassName("btn-Purchase");
let cartStyle = document.getElementsByClassName("cart-column");
let quantityInputs = document.getElementsByClassName("cart-quantity-input");

for (let i = 0; i < quantityInputs.length; i++) {
  let input = quantityInputs[i];
  input.addEventListener("change", quantityChanged); //make function
}

for (let i = 0; i < addtoCartBtn.length; i++) {
  var button = addtoCartBtn[i];
  button.addEventListener("click", (event) => {
    addtocartBtnClicked;
  });
}
    
  

