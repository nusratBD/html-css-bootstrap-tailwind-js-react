let cartArea = document.getElementById('items');
const addCart = () =>{
    const cartInput = document.getElementById('item-input');
    const cartValue = cartInput.value;
    const caseCart = cartValue.toLowerCase();
    localStorage(caseCart);
    cartInput.value = '';
}
const localStorage = (value) =>{
    let cart = window.localStorage.getItem('cart');
    let obj = {};
    if(cart){
        cart = JSON.parse(cart);
        if(cart[value]){
            cart[value] = cart[value] + 1;
        }
        else{
            cart[value] = 1;
        }
    }
    else{
        cart = obj;
        cart[value] = 1;
    }
    const stringCart = JSON.stringify(cart);
    window.localStorage.setItem('cart', stringCart);
    console.log(stringCart);
    cartArea.textContent = '';
    displayCart();
}
const displayCart = () =>{
    let cart = window.localStorage.getItem('cart');
    cart = JSON.parse(cart);
    for(item in cart){
    const ul = document.createElement('ul');
    ul.innerHTML = `
    <li>${item}: ${cart[item]}</li>
    `;
    cartArea.appendChild(ul);
}
}
displayCart();

const remove = () =>{
    window.localStorage.removeItem('cart');
    cartArea.textContent = '';
}