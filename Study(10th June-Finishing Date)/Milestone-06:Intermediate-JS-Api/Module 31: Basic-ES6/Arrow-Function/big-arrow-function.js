//01: Two Parameters
let add = (num1, num2) => num1 + num2;
let result1 = add(15, 17);
// console.log(result1);
//02: Three Parameters
let multiply = (num1, num2, num3) => num1*num2*num3;
let result2 = multiply(3, 4, 12);
// console.log(result2);
//03: One Parameter with bracket
let oneParameter1 = (num1) => num1*5;
let result3 = oneParameter1(5);
// console.log(result3);
//04: One Parameter without bracket
let oneParameter2 = num1 => num1 * 10;
let result4 = oneParameter2(5);
console.log(result4);