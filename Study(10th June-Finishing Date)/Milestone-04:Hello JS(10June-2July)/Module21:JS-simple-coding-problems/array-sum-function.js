//Make a function to calculate the sum of all elements of an array

let array = [10, 9, 87, 45, 23, 56];
 function arraySum(value){
     let sum = 0;
     for(let i = 0; i<value.length; i++){
        sum = sum + value[i];
     }
     return sum;
 }
 let result = arraySum(array);
 console.log("The sum is: ", result);