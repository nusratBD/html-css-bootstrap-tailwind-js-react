//01: variable but didn't assign anything
let name;
// console.log(name);


//02: function but no return
const sum = (x,y) =>{
    const sum = x + y;
}
let result = sum(2,3);
// console.log(result);


//03: return but no variable
const add = (a,b) =>{
    const add = a+b;
    return;
}
const result2 = add(2,3);
// console.log(result2);


// 04: Parameter that isn't pass
const sum2 = (p, q) =>{
    const sum = p + q;
    return sum;
}
const result3 = sum(2);
// console.log(result3);


// 05: Property that does not exist in an object
const mySelf = {name: 'Nusrat Hurain', profession: 'Software Engineer'}
// console.log(mySelf.age);


//06: Array index that doesn't exist
const numbers = [2, 3, 4, 5];
// console.log(numbers[4]);


//07: Accessing deleted array element
const numbers2 = [2, 3, 4, 5];
delete numbers2[2];
// console.log(numbers2); //output: [ 2, 3, <1 empty item>, 5 ]
// console.log(numbers2[2]);


//08: explicitly set value to undefined
const data = undefined;
console.log(data);