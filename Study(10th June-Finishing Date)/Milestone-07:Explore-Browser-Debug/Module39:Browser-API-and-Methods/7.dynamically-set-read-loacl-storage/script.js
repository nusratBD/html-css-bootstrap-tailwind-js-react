const addCart = () =>{
    const cartInput = document.getElementById('item-input');
    const cartValue = cartInput.value;
    displayCart(cartValue);
    cartInput.value = '';
}
const displayCart = (value) =>{
    const itemArea = document.getElementById('items');
    const ul = document.createElement('ul');
    ul.innerHTML = `
    <li>${value.toUpperCase()}</li>
    `;
    console.log(ul);
    itemArea.appendChild(ul);
    localStorage(value);

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
const cartString = JSON.stringify(cart);
console.log(cartString);
window.localStorage.setItem('cart', cartString);
}