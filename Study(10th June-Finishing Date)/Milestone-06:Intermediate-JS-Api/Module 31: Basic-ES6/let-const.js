/*We can not reassign to a const. But we can push a new value and replace it with another data in the case of array and object */
const numbers = [23, 56, 78, 90, 34, 96];
// numbers = [56, 78, 34, 23];// It will provide error because it is not possible to reassign in a const variable.
const numbers2 = [23, 56, 78, 90, 34, 96];
numbers2.push(100);
numbers2[3] = 656;
console.log(numbers2);

for(let i=0; i<=numbers2.length; i++){
    const number2 = numbers2[i];//In this case, reassign is not occured. In every loop, the variable is declared newly and is destroyed after the loop.
    console.log(numbers2);
}