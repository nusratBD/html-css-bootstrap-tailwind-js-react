//--------------------------------------------------JSO to JSON-----------------------------------------
//JSO to JSON
const shop = {
    name:'Nusrat Electronics Accessories',
    address: 'New Market',
    profit: 15000,
    products: ['laptop', 'mobile', 'watch', 'car'],
    isExpensive: false,
    owner: {
        name: 'Nusrat Hurain',
        profession: 'Software Engineer'
    }
}
console.log(shop);
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);

//JSON to JSO
const shopParse = JSON.parse(shopStringify);
console.log(shopParse);