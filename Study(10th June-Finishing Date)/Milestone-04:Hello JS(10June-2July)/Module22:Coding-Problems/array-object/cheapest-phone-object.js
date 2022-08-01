//Get the cheapest phone from an array of object

let phones = [
    {name : 'phone1', price: 9000, storage: 32},
    {name : 'phone2', price: 15000, storage: 128},
    {name : 'phone3', price: 10000, storage: 64},
    {name : 'phone4', price: 7000, storage: 32}
];
 function cheapestPhone(phones){
     let cheapest = phones[0];
     for(let phone of phones){
         if(phone.price<cheapest.price){
             cheapest = phone;
         }
     }
     return cheapest;
 }
let result = cheapestPhone(phones);
console.log(result);