/*
find: find will only provide the first value that matches the condition
*/
const shopping = [
    {name: 'laptop', price: '50000'},
    {name: 'phone', price: '12000'},
    {name: 'Samrt Watch', price: '3000'},
    {name: 'Books', price: '1500'},
    {name: 'Diary', price: '300'},
    {name: 'Mug', price: '150'},
    {name: 'Water Bottle', price: '220'}
];
let result = shopping.find(product => product.price>4000);
console.log(result);//output: { name: 'laptop', price: '50000' }
let result2 = shopping.find(product => product.price==4000);
console.log(result2);//output: undefined
/*
In the case of find, if the condition is fulfilled, it will directly provide the first data, not in array. If the condition is not fulfilled, it will give undefined.

On the other hand, in the case of filter, if the condition is fulfilled, it will give the output in an array. And, if the condition is not fulfilled, it will give an empty array([]).
*/