//1. One Parameter
let math1 = x => x*x;
let result1 = math1(5);
console.log(result1);

//02. Multi Parameter
let math2 = (x, y, z) => x + y + z;
let result2 = math2(2, 3, 4);
console.log(result2);

//03. No Parameter
let math3 = () => 'Nusrat Hurain';
let result3 = math3();
console.log(result3);

//04. Multi line code
let math4 = (x, y, z) =>{
    let add = x + y;
    let multiply = y * z;
    let output = multiply - add;
    return output;
}
let result4 = math4(2, 3, 4);
console.log(result4);