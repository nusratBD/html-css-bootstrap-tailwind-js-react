//01. Function Declaration
function add(num1, num2){
    return num1 + num2;
}
//02: Function Expression
let add2 = function add2(num1, num2){
    return num1 + num2;
}
//03: Function Expression(annonymous)
let add3 = function (num1, num2){
    return num1 + num2;
}
//04: arrow function
let add4 = (num1, num2) =>num1 + num2;
let result1 = add(15, 17);
let result2 = add2(15, 17);
let result3 = add3(15, 17);
let result4 = add(15, 17);
console.log(result1, result2, result3, result4);
// document.getElementById('btn-click').onclick = function(){

// }