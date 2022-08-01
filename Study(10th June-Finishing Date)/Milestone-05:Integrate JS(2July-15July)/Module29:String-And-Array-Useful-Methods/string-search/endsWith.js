let products = [
    'Dell Laptop',
    'hp laptop',
    'Tesla Laptop',
    'tesla Motors',
    'SAMSUNG phone',
    'iPhone',
    'Tesla Rocket',
    'Tesla Smart Watch',
    'Google Smart Watch',
    'Tesla phone',
    'Asus laptop'
];
let search = 'laptop';
let searchValue = [];
for(let product of products){
    if(product.toLowerCase().endsWith(search.toLowerCase())){
        searchValue.push(product);
    }
}
console.log(searchValue);