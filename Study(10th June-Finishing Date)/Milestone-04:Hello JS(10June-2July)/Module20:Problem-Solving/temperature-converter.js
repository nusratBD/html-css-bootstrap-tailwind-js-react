//create a temperature converter

//1. Farenhite to Celcius:
function farToCel(temp){
    let celcius = (5*(temp - 32))/9;
    return celcius;
}

let temp = 56;
let result = farToCel(temp);
console.log(result);

//2. Celcius to farenhite:
function celToFar(temp2){
    let farenhite = (9*temp2 + (32*5))/5;
    return farenhite;
}
let temp2 = 30;
let result2 = celToFar(temp2);
console.log(result2);