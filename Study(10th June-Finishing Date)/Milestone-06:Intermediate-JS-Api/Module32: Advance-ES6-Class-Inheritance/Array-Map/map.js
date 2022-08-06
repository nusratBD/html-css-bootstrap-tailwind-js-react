//Take the value from an existing array and double them and then creat a new array with the double values.

//Solution Method 01: Just for of loop
/* let array1 = [2, 4, 6, 8];
let array2 = [];
for(const value of array1){
    array2.push(value*2);
}
console.log(array2); */

//Solution Method 02: Funtion Old Method
/*let array1 = [2, 4, 6, 8];
let array2 = [];
function oldFunction(value){
    return value*2;
}
for(const value of array1){
    array2.push(oldFunction(value));
}
console.log(array2);
*/
//Solution Method 03: Arrow Function
/* let array1 = [2, 4, 6, 8];
let arrowFunction = value => value*2;
let array2 = [];
for(const value of array1){
    array2.push(arrowFunction(value));
}
console.log(array2); */
//Solution Method 04: map
let array1 = [2, 4, 6, 8];
let arrowFunction = value => value*2;
let result = array1.map(arrowFunction);
console.log(result);
//Solution Method 05: alternative system of map
let result2 = array1.map(number => number*2); //here number is the variable which is gotten from for loop. It is just the arrow the function.
console.log(result2);
//What does happen in map
/* 
1.loop(for of)
2.Pass the parameter getting from the loop by default/do the operation that we want to do
3.Push the output in an array
*/
//Example 03:
const numbers = [2, 3, 4, 5];
let result3 = numbers.map(num=>num*num);
console.log(result3);