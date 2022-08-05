let numbers = [23, 17, 56, 15, 27, 11, 99];
console.log(numbers);
console.log(...numbers);//spread operator

//Benefits of Spread Operator
//01.UseCase: Find the maximum value from an array by using Math.max
let values = [45, 12, 78, 34, 90, 73, 84, 88];
let result1 = Math.max(values);
console.log(result1);//Output: NaN; Because Math.max can not handle an array.
let result2 = Math.max(...values);
console.log(result2);//Output: 90

//02.Reference and Copy Array
let numbers1 = [23,  67, 56, 45];
let numbers2 = numbers1;
numbers1.push(81);
console.log(numbers2);//Output: [23,  67, 56, 45, 81]; 81 is here with the reference of numbers1

//Copy Array:
let numbers3 = [...numbers1];
numbers1.push(96);
console.log(numbers3);//Output: [ 23, 67, 56, 45, 81 ]; 96 is absent here because it just copied numbers1 before pushing 96 and there is no reference;
let numbers4 = [22, ...numbers1, 87];
console.log(numbers4);//Output: [22, 23, 67, 56, 45, 81, 96, 87]; At the time of coping, we can push according to our wish

/*Note: Benefits of the Spread Operator
1. We can get out the value of an array
2. We can copy an array
3. We can avoid the reference effece
4. We can push element to copied array according to our wish
*/
