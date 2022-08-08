/* 
https://medium.com/geekculture/regular-vs-arrow-function-1f8140fbcece
*/
function normal(x, x, x){
    return x + x + x;
}
let result = normal(2, 3, 4);
console.log(result);// It works although it only takes the last parameter for the code

let arrow = (x, x, x) => x+x+x;
let result2 = arrow(2, 3, 4);
console.log(result2);//error