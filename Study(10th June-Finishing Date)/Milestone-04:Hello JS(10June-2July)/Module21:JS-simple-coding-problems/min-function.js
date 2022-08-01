//Make a function to find out the smallest number amomg three numbers

let a = 29;
let b = 7;
let c = -90;

function minThree(num1, num2, num3){
    if(a<b && a<c){
        return a;
    }
    else if(b<a && b<c){
        return b;
    }
    else {
        return c;
    }
}
let result = minThree(a, b, c);
console.log(result, "is the smallest value");