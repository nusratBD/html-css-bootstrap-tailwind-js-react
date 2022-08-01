const sum = (num1,num2)=>num1+num2;
const value = sum(5, 7);
console.log(value);
const name = () =>'Nusrat Hurain';
const data = name();
console.log(data);
const doMath = (x, y)=>{
    const sum = x+y;
    const diff = x-y;
    const multiply = sum*diff;
    return multiply;
}
const input = doMath(11, 7);
console.log(input);