function name(fName, lName){
let fullName = fName + ' ' + lName;
return fullName;
}
let result = name('Nusrat', 'Hurain');
// console.log(result);

function name2(fName, lName){
    let fullName = '';
    for(let part of arguments){
        fullName = fullName + part + ' ';
    }
    return fullName;
}
let result2 = name2('Eng.', 'Fast Coder', 'Nusrat', 'Hurain', 'Nuha');
console.log(result2);