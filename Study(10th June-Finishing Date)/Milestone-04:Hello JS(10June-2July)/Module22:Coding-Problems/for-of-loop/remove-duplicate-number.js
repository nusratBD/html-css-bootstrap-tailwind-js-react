//Keep all the value once and remove others from an array
let array = [2, 6, 4, 2, 3, 4, 5, 7, 9, 2, 4, 5];
function duplicate(array){
let unique = [];
for(element of array){
    if(unique.indexOf(element) == -1){
        unique.push(element);
    }
}
return unique;
}
let result = duplicate(array);
console.log(result);