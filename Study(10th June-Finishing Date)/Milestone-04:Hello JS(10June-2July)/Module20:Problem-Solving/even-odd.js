function numberCheck(num){
    if(num%2==0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
let a = 14;
let result = numberCheck(a);
console.log(result);