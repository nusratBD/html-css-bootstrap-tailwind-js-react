//product decrement function
function decrement(product){
    let productQuantityField = document.getElementById(product+'-quantity');
    let productQuantity = parseInt(productQuantityField.value);
    if(productQuantity>0){
        productQuantityField.value = productQuantity - 1;
    }
    else{
        productQuantityField.value = productQuantity;
    }
    individualPrice(product);
}
//Product increment function
function increment(product){
    let productQuantityField = document.getElementById(product+'-quantity');
    let productQuantity = parseInt(productQuantityField.value); 
    productQuantityField.value = productQuantity + 1; 
    let productPrice = document.getElementById(product+'-price');
    individualPrice(product);
}
//Price Calculation Function
function individualPrice(product){
    let productPrice = document.getElementById(product+'-price');
    let productQuantityField = document.getElementById(product+'-quantity');
    if(product == 'phone'){
        productPrice.innerText =  (productQuantityField.value ) * 1219;
    }
    if(product == 'case'){
        productPrice.innerText =  (productQuantityField.value ) * 59;
    }
}
//Phone decrement
document.getElementById('phone-decrement-btn').addEventListener('click', function(){
 decrement('phone');   
})
//Phone increment
document.getElementById('phone-increment-btn').addEventListener('click', function(){
    increment('phone'); 
})
//Case decrement
document.getElementById('case-decrement-btn').addEventListener('click', function(){
    decrement('case');   
   })
//Case increment
   document.getElementById('case-increment-btn').addEventListener('click', function(){
       increment('case'); 
   })