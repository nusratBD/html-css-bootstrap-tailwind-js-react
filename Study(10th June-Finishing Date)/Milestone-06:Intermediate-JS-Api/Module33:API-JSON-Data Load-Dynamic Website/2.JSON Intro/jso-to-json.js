//--------------------------------------------------JSO to JSON-----------------------------------------
//01
//JSO: Javascript Object
let user = {
    id: 170515,
    name: 'Nusrat Hurain',
    home: 'Lakshmipur'
}
console.log(user);//output: { id: 170515, name: 'Nusrat Hurain', home: 'Lakshmipur' }
//JSON: Javascript Object Notation
let jsonUser = JSON.stringify(user);
console.log(jsonUser);//output: {"id":170515,"name":"Nusrat Hurain","home":"Lakshmipur"}

//02
//JSO
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
/* 
output: {
  name: 'Nusrat Electronics Accessories',
  address: 'New Market',
  profit: 15000,
  products: [ 'laptop', 'mobile', 'watch', 'car' ],
  isExpensive: false
}
*/
//JSON
const shopStringify = JSON.stringify(shop);
console.log(shopStringify);
/* 
{"name":"Nusrat Electronics Accessories","address":"New Market","profit":15000,"products":["laptop","mobile","watch","car"],"isExpensive":false,"owner":{"name":"Nusrat Hurain","profession":"Software Engineer"}}

Note: 
1. very close to string
2. can not expand like object
3. no change in number and boolean
*/
