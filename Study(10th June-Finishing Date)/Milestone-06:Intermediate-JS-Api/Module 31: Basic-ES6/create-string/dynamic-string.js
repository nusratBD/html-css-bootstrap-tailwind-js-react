/*
String Interpolation: To set the value of a variable with the name of a variable in the string is called interpolation.
*/
//quote('') System:
let count = 5;
   let friend1 = '<h1 class="friend">Friend-'+ count +'</h1>'
// console.log(friend1);

//caret(``) System:
let friend2 = `<h1 class="friend">Friend-${count}</h1>`;
// console.log(friend2);

//More use of caret: Caret is called template literals
//01
let fName = 'Nusrat';
let lName = 'Hurain';
let fullName = `${fName} ${lName}`;
// console.log(fullName);
//02
let names = ['Abul', 'Babul', 'Kabul', 'Cabul', 'Jabul'];
let nameLength = `<h1 class="friend">Friend Quantity-${names.length}</h1>`;//Except variable, we can use any valid JS expression within the string literals
// console.log(nameLength);
//03
let city = 'Dhaka';
let mySelf = `My names is ${fullName}. I live in ${city}. My friend quantity is ${names.length}.`;
console.log(mySelf);

