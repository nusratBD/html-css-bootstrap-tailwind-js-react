// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . . 
function fibonacci(value){
    let fibo = [0, 1];
    for(let i = 2; i<=value; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }
    return fibo;
}
let value = 12;
let result = fibonacci(value);
console.log(result);