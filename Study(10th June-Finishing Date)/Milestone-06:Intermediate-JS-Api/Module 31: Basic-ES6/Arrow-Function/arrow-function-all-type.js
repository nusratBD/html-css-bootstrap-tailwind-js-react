//01: Two Parameters Arrow Function
let add = (num1, num2) => num1 + num2;//Implicit Return
let result1 = add(15, 17);
console.log(result1);
//02: Three Parameters Arrow Function
let multiply = (num1, num2, num3) => num1*num2*num3;//Implicit Return
let result2 = multiply(3, 4, 12);
//03: One Parameter with bracket Arrow Function
let oneParameter1 = (num1) => num1*5;//Implicit Return
let result3 = oneParameter1(5);
console.log(result3);
//04: One Parameter without bracket Arrow Function
let oneParameter2 = num1 => num1 * 10;//Implicit Return
let result4 = oneParameter2(5);
console.log(result4);
//05: No Parameter Arrow Function
let noParam = () => 'Nusrat Hurain';//Implicit Return
let result5 = noParam();
console.log(result5);
//06: Multiline Arrow Function
let multi = (x, y) =>{
    let add = x + y;
    let diff = x - y;
    let result = add * diff;
    let output = result * 5;
    return output; //Explicit Return
}
let result6 = multi(5, 7);
console.log(result6);
//07: Arrow Function in DOM
// document.getElementById('my-btn').addEventListener('click', event=>{

// })