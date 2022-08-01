//Find out all the odd numbers of an array
let array = [2, 5, 9, 6, 45, 78];
function odd(array){
    let arrayOdd = [];
    for(let i = 0; i<array.length; i++){
        if(array[i] % 2 != 0){
            arrayOdd.push(array[i]);
        }
    }
    return arrayOdd;
}
let result = odd(array);
console.log(result);