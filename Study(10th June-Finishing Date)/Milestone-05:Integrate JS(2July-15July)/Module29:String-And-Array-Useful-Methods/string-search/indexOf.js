let products = [
    'Dell Laptop',
    'hp laptop',
    'SAMSUNG phone',
    'iPhone',
    'Google Smart Watch',
    'Tesla phone',
    'Asus laptop'
]
let search = 'laptop';
let searchValue = [];
for(let product of products){
    if(product.toLowerCase().indexOf(search.toLowerCase())!= -1){
    searchValue.push(product);
    }
}
console.log(searchValue);