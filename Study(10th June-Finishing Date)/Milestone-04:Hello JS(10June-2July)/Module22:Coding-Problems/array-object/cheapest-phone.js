//Get the cheapest price of a phone
let phone = [
    {name : 'phone1', price : 9000 },
    {name : 'phone2', price : 7000 },    
    {name : 'phone3', price : 11000 },    
    {name : 'phone2', price : 8000 },
];

let cheapest = phone[0].price;
for(let i = 0; i<phone.length; i++){
    if(phone[i].price<cheapest){
        cheapest = phone[i].price;
    }
}
console.log(cheapest);