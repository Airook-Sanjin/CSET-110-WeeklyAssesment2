
let cartSection = document.getElementById("cart-section");

let addtoCartBtn = document.getElementsByClassName("shop-item-button");
let removeBtn = document.getElementsByClassName("btn-danger");
let purchaseBtn = document.getElementsByClassName("btn-Purchase");
let price = document.getElementsByClassName("shop-item-price");
let total = document.getElementsByClassName("");
let cartStyle = document.getElementsByClassName("cart-column");
let cartItem = document.getElementsByClassName("cart-item");
let cartImage = document.getElementsByClassName("cart-item-image");
let cartTitle = document.getElementsByClassName("cart-item-title");
let cartPrice = document.getElementsByClassName("cart-price");
var clicked = false;

function addtocartBtnClicked() {
  if (!clicked) {
    cartSection.style.display = "block";
    clicked = true;
  }
}
function addCart(title, price) {
  let cartrow = document.createElement('div')
  
}

for (i = 0; i < addtoCartBtn.length; i++) {
  addtoCartBtn[i].addEventListener("click", function () {
    addtocartBtnClicked();

    // addCart(item)
  });
}
for(let i = 0;i<addtoCartBtn.length; i++) {
    addtoCartBtn[i].addEventListener('click' , (event) => {
        alert(`you pressed"${i}"`)
        let button = evt.target
        let shopitem = button.parentElement.parentElement
        let title = shopitem.getElementsByClassName('shop-item-title')[0].innerText
        let price = shopitem.getElementsByClassName('shop-item-price')[0].innerText
        
    })
}

