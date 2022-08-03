function name(fName, lName = 'Hurain'){
    let fullName = fName + ' ' + lName;
    return fullName;
}
let fullName = name('Nusrat', 'Nuha');
let fullName2 = name('Nusrat');
console.log(fullName);
console.log(fullName2);