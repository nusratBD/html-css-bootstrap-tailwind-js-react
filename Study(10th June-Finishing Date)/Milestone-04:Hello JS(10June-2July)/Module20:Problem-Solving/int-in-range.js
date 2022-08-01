//Write a JS program to check whether a given integer within 0 to 50

//Write a JS program to check whether a given integer within 20 to 100

function checkInt(num){
    if(num>=0 && num<=50){
        return num;
    }
    else{
        return "Number is not in 0-50 range";
    }
}
let x = 51;
let result = checkInt(x);
console.log(result, "is in 0 to 50 range");