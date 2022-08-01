let products = [
    {name: 'Samsung Galaxy Phone 14', price: 55000},
    {name: 'iPhone 14', price: 70000},
    {name: 'Oppo Phone', price: 23000},
    {name: 'hp Laptop', price: 60000},
    {name: 'Redmi Phone', price: 25000},
    {name: 'Samsung smart Watch', price: 3500},
    {name: 'Dell Laptop', price: 55000},
    {name: 'Asus Laptop', price: 35000},
    {name: 'LG Smart Watch', price: 45000},
    {name: 'Appale Smart Watch', price: 10000}
];
function search(products, search){
    for(let product of products){
        if(product.name.includes(search)){
            console.log(product);
        }
    }
}
search(products, 'Laptop');