let cart = window.localStorage.getItem('cart');
const addToLocalStorage = () =>{
    const productField = document.getElementById('product');
    const product = productField.value.toLowerCase();
    const priceFiled = document.getElementById('price');
    const price = parseInt(priceFiled.value);
    productField.value = '';
    priceFiled.value = '';
    
    if(cart){
        cart = JSON.parse(cart);
        console.log(cart);
        let test = [];
        for(let item of cart){
            test.push(item.product);
            if(item.product === product){
                item.quantity = item.quantity + 1;
                item.total = item.total + price;
                break;
            }
        }
        if(test.indexOf(product) ===-1){
            cart.push({product: product, quantity: 1, total: price});
        };
    }

    else{
        cart = [];
        cart.push({product: product, quantity: 1, total: price});
        // console.log(cart);
    }
    const stringCart = JSON.stringify(cart);
    console.log(stringCart);
    window.localStorage.setItem('cart', stringCart);
    document.getElementById('cart').textContent = '';
    dispalyLocalStorage();


}

const dispalyLocalStorage = () =>{
    
    let cart = window.localStorage.getItem('cart')
    cart = JSON.parse(cart);;
    let cartArea = document.getElementById('cart');
    cart.forEach(c=>{
    const ul = document.createElement('ul');
    cartArea.appendChild(ul);
    ul.innerHTML = `<li>${c.product}: ${c.quantity} total: ${c.total}</li>`;
})

}
dispalyLocalStorage();
    
