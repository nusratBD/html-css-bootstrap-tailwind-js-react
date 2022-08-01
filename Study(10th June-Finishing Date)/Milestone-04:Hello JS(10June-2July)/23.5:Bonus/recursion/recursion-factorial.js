function factorialRecursion(i){
    if(i==1){
        return 1;
    }
    return i * factorialRecursion(--i);
}
let result = factorialRecursion(5);
console.log(result);