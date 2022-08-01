const array = [20, 6, 45, 78, 98, 34, 56];
const result = Math.max(...array);
console.log(result);
array.push(67);
console.log(array);
const array2 = array;
// console.log(array2);
const array3 = [27,...array, 84];
console.log(array3);