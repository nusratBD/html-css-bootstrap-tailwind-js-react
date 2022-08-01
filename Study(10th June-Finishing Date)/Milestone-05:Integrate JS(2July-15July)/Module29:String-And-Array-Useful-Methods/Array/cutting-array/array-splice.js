let num = [1, 2, 3, 4, 5, 6, 7, 8, 9,11, 22, 33, 44, 55, 66, 77];
// let splice = num.splice(4, 2);
let splice = num.splice(4, 2, 99, 100, 107);//(x, y, ittems....); x: starting index, y: deleted amount, items: new replacing amount in the place of deleted amount, it can be added according to our wish
// console.log(splice);
// console.log(num);//After doing the splice, the splice portion will be deleted from the main array

let num2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let splice2 = num2.splice(3, 0, 90, 100);//0 deleted, but injected new items
console.log(splice2);
console.log(num2);