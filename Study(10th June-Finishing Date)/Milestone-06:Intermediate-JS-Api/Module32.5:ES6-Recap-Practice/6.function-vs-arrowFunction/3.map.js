//Normal and arrow both can use in map, but arrow is easier.
const numbers = [2, 3, 4, 5];
const result = numbers.map(num => num*2);
// console.log(result);
const result2 = numbers.map(function(num){
    return num*2;
})
console.log(result2);