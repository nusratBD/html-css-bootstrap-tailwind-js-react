//Find all the even numbers of an array:
let array = [2, 3, 6, 8, -6, 34, 21];
function even(array){
    let evenArray = [];
    for(let i = 0; i<array.length; i++){
        if(array[i]%2==0){
            evenArray.push(array[i]);
        }
    }
    return evenArray;
    }
let result = even(array);
console.log(result);
