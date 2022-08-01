//1. Declaration:
var vowels = ['a', 'e', 'i', 'o', 'u'];
console.log(vowels);

//2. array length:
// console.log(vowels.length);

//3. index:
var index = vowels.indexOf('i');
// console.log(index);

//4. -1 index:
// console.log(vowels.indexOf('q'));

//5. value according to index:
// console.log(vowels[3]);

//6. index of absent value in the array
// console.log(vowels[10]);

//7. change the value of an index:
vowels[3]='f';
// console.log(vowels);

//8. push:
// vowels.push('X');
// console.log(vowels);

//9. pop:
// var pop = vowels.pop();
// console.log(vowels);
// console.log(pop);

//10. add item to the beginning:
vowels.unshift('Lemon', 'Komola Sundori');
console.log(vowels);

//11.remove item from the beginning:
var shift = vowels.shift();
console.log(vowels);
console.log(shift);
