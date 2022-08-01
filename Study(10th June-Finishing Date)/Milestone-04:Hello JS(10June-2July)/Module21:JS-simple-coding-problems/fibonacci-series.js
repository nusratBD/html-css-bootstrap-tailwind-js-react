//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
function fibonacci(num){
    let fibo = [0, 1];
    if(typeof num != "number"){
        return "Please enter a number.";
    }
    if(num<2){
        return "Please enter a number greater than 2.";
    }
    for(let i = 2; i<=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
  }
    return fibo;
}
let num = 9;
let result = fibonacci(num);
console.log(result);
