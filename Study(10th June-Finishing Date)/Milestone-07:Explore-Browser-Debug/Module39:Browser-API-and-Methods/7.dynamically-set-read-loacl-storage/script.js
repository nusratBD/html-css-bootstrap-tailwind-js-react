const addCart = () =>{
    const cartInput = document.getElementById('item-input');
    const cartValue = cartInput.value;
    localStorage(cartValue);
    cartInput.value = '';
}
const displayCart = (value) =>{
    console.log(value);
    const itemArea = document.getElementById('items');
    for(const product in value){
        const ul = document.createElement('ul');
    ul.innerHTML = `
    <li>${product}: ${value[product]}</li>
    `;
    console.log(ul);
    itemArea.appendChild(ul);
    }
}
const localStorage = (value) =>{
    // console.log(value);
let cart = window.localStorage.getItem('cart');

let test = {
}
if(cart){
    cart = JSON.parse(cart);
}
else{
    cart = test;
}

cart[value] =1;
displayCart(cart);
const cartString = JSON.stringify(cart);
console.log(cartString);
window.localStorage.setItem('cart', cartString);
}