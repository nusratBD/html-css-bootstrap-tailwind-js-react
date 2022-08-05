let numbers = [23, 17, 56, 15, 27, 11, 99];
console.log(numbers);
console.log(...numbers);//spread operator

//Benefits of Spread Operator
//UseCase: Find the maximum value from an array by using Math.max
let values = [45, 12, 78, 34, 90, 73, 84, 88];
let result1 = Math.max(values);
console.log(result1);//Output: NaN; Because Math.max can not handle an array.
let result2 = Math.max(...values);
console.log(result2);//Output: 90