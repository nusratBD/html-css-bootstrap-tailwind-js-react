/*The values of an array those will fulfill the condition will exist in the array
*/
const numbers = [12, 10, 945, 67, 13, 19];
let result1 = numbers.filter(number => number>20);//the numbers that are greater than 20 will exist in the array
console.log(result1);//output: [ 945, 67 ]

/*
If the parameter matches the condition, it will provide the full element(full object) in an array. If it does not match the condition, it will give an empty array.
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
let result2 = shopping.filter(product => product.price>3000);
console.log(result2);
let result3 = shopping.filter(product => product.price == 4000);
console.log(result3);//output: []. Cause it did not fulfill the condition

