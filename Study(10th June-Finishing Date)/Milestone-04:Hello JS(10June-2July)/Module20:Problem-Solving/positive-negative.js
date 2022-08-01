//Write a JS Program to check from two given integer whether one is positive and another one is negative

function positiveNegative(num1, num2){
    if((num1>0 && num2>0) || (num1<0 && num2<0)){

    }
    else{
        console.log("One is positive and another is Negative");
        if(num1>0 && num2<0){
            console.log(num1, "is positive and", num2, "is negative");
        }
        else if(num1<0 && num2>0){
            console.log(num1, "is negative and ", num2, "is positive");
        }
    }
}
let x = -10;
let y = -9;

let result = positiveNegative(x, y);