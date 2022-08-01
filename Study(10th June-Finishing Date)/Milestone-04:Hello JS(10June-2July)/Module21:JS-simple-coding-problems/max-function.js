//Make a function to find out the largest number between two numbers

function maxTwo(num1, num2){
    if(num1>num2){
        return num1;
    }
    else{
        return num2;
    }
}
let a = 290;
let b = 456;
let c = 789;
let result = maxTwo(a, b);
console.log(result, "is the largest number");

//Make a function to find the largest numbers among three numbers

function maxThree(num1, num2, num3){
    if(num1>num2 && num1>num3){
        return num1;
    }
    else if(num2>num1 && num2>num3){
        return num2;
    }
    else{
        return num3;
    }
}
let result2 = maxThree(a, b, c);
console.log(result2, "is the largest number");
