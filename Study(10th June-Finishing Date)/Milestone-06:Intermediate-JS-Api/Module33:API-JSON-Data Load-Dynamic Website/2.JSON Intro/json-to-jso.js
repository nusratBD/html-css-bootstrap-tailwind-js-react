//--------------------------------------------------JSON to JSO-----------------------------------------
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
console.log(shopStringify.name);//output: undefined. Because json is not a object. So we can not access it as like an object 

//JSON to JSO
const shopParse = JSON.parse(shopStringify);
console.log(shopParse);
console.log(shopParse.name);//output: Nusrat Electronics Accessories. It conveterd into JSO, so we can access it like an object.