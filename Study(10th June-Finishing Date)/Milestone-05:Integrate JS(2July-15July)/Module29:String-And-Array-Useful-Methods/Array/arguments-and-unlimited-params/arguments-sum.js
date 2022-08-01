function arguments(num1, num2){
    let sum = 0;
    for(let num of arguments){
        sum = sum + num;
    }
    return sum;
}
let result = arguments(12, 13, 25, 100, 125);
console.log(result);