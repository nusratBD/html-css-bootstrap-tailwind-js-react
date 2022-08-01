let cart = [
    {name : 'Laptop', price : 55000, brand : 'hp', quantity : 1},
    {name : 'Anndroid', price : 20000, brand : 'Redmi', quantity : 2},
    {name : 'Watch', price : 5000, brand : 'Silicon', quantity : 3},
    {name : 'Dress', price : 4500, brand : 'Onjon', quantity : 3},
];

function cartPrice(cart){
    let totalPrice = 0;
    for(let product of cart){
        totalPrice = totalPrice + (product.price * product.quantity);
    }
    return totalPrice;
}
let result = cartPrice(cart);
console.log(result);