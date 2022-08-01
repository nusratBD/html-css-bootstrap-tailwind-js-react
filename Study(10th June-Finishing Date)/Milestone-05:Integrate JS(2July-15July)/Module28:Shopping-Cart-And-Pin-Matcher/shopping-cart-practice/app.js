function increaseDecrease(product, price,  isIncreasing){
    let productId = document.getElementById(product + '-quantity');
    let caseQuantity = parseInt(productId.value);
    let productPriceId = document.getElementById(product + '-price');
    if(isIncreasing){
        productId.value = caseQuantity + 1;
        productPriceId.innerText = (productId.value)*price;
    }
    else if(caseQuantity>0){
        productId.value = caseQuantity - 1;
        productPriceId.innerText = (productId.value)*price;
        }
        priceCalculation();
    }
function priceCalculation(price){
    let phonePrice = parseInt(document.getElementById('phone-price').innerText);
    let casePice = parseInt(document.getElementById('case-price').innerText);
   let subTotal = phonePrice + casePice;
   let tax = subTotal/10;
   let total = subTotal + tax;
   document.getElementById('sub-total').innerText = subTotal;
   document.getElementById('tax').innerText = tax;
   document.getElementById('total').innerText = total;
}

//case plus
document.getElementById('case-plus').addEventListener('click', function(){
    increaseDecrease('case', 59, true);
})

//case-minus
document.getElementById('case-minus').addEventListener('click', function(){
    increaseDecrease('case', 59, false);
})

//phone plus
document.getElementById('phone-plus').addEventListener('click', function(){
    increaseDecrease('phone', 1219, true);
})

//phone-minus
document.getElementById('phone-minus').addEventListener('click', function(){
    increaseDecrease('phone', 1219, false);
})
