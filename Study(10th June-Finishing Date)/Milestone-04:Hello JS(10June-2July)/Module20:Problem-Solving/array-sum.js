//Calculate the sum of numbers within an array

function arraySum(numbers){
    let sum = 0;
    for(let i = 0; i<numbers.length; i++){
        sum = sum+numbers[i];
    }
    return sum;

};
let numbers = [29, 31, 47, 43, 89, 46, 11];
let result = arraySum(numbers);
console.log(result);