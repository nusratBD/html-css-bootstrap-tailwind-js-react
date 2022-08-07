/* 
১. কখন const আর কখন let দিয়ে ভেরিয়েবল ডিক্লেয়ার করতে হয় সেটা তোমাকে জানতেই হবে। তুমি নিজে নিজে একটা const দিয়ে আরেকটা let দিয়ে ভেরিয়েবল ডিক্লেয়ার করে ফেলো।
*/
//let: when we can reassign to a variable, we use let
let age = 25;
console.log(age);
age = 26;
console.log(age);

//const: When we can not reassign to a variable, we use const. If we try to reassign to a const variable, it will provide error
const name = 'Nusrat Hurain';
console.log(name);
name ='Nuha';// not possible