function factorial(num){
    let multiplication = 1;
    for(let i=num; i>=1; i--){
        multiplication = multiplication * i;
    }
    return multiplication;
}
let a = 5;
let result = factorial(a);
console.log(result);

function factorialWhile(num){
    let multiplication = 1;
    let j = 1;
    while(j<=num){
        multiplication = multiplication * j;
        j++;
    }
    console.log(multiplication);
}
let b = 6;
let result2 = factorialWhile(b);