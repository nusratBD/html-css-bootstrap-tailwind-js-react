//Remove all the duplicate value of an array
let array = ['Nusrat', 'Hurain', 'Tithi', 'Dipti', 'Koly', 'Sweety', 'Nuha', 'Nusrat', 'Hurain','Tithi', 'Dipti', 'Koly', 'Sweety', 'Nuha'];

function duplicate(array){
    let unique = [];
    for(let element of array){
        if(unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
let result = duplicate(array);
console.log(result);