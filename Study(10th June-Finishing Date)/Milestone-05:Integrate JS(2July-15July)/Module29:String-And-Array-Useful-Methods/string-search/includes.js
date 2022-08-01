let products = [
    'Dell Laptop',
    'hp laptop',
    'Tesla Laptop',
    'Tesla Motors',
    'SAMSUNG phone',
    'iPhone',
    'Google Smart Watch',
    'Tesla phone',
    'Asus laptop'
];
let search = 'laptop';
let searchValue = [];
for(let product of products){
    if(product.toLowerCase().includes(search.toLowerCase())){
        searchValue.push(product);
    }
}
console.log(searchValue);