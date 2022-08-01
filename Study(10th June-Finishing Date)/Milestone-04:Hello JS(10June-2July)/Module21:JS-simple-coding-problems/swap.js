//swap:

//1. Method 01: temp variable
let first = 5;
let second = 7;
console.log(first, second);
// let temp = first;
// first = second;
// second = temp;
// console.log(first, second);

//Method 02: Destructuring:
[first, second] = [second, first];
console.log(first, second);