/* Dynamic data types are dynamic in nature and don't require initialization at the time of declaration. It also means that a dynamic type does not have a predefined type and can be used to store any type of data. JS is a dynamicaly typed variable. Because its type defines on its rigth side's value. */

// const a = 25;
// const a = 'Nusrat Hurain';
const a = true;
console.log(typeof a);
const numbers = [2, 3, 4, 5, 6];
/* 
1. Except primitive data type all are a kind of object in js, such as- array, function etc
2. type of null is object although it a primitive data.
*/
console.log(typeof numbers); //output: object. array is a type of object in js
function triple(x, y, z){

}
console.log(triple); //output: Function
console.log(triple.length);//output: 3
const x = null;
console.log(typeof x);