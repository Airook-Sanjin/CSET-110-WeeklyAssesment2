let cartSection = document.getElementById("cart-section");
let cartHeader = document.getElementById("cart-header");
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

function addtocartBtnClicked(){
if(!clicked){
    cartSection.style.display = "block";
    click = true;
}
}
function addCart(){
    
}
for (i = 0; i < addtoCartBtn.length; i++) {
addtoCartBtn[i].addEventListener("click", function(){
 addtocartBtnClicked();
})}

