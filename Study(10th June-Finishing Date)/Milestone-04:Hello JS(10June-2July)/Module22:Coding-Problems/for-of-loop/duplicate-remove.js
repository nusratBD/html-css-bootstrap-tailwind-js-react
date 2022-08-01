let array = [2, 3, 4, 2, 7, 4, 6, 5, 5, 8, 5, 3, 3];
function removeDuplicate(array){
    let unique = [];
    for(let element of array){
        if(unique.indexOf(element)==-1){
            unique.push(element);
        }
    }
    return unique;
}
let result = removeDuplicate(array);
console.log(result);