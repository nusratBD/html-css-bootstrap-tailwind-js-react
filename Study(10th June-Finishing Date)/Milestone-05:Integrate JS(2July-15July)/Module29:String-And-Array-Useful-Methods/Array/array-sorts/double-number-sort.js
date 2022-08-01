let numbers = [67, 89, 147, 33, 270];
// let numbersSorted = numbers.sort();
// console.log(numbersSorted);
numbers.sort(function(a, b){
    return a - b;
})
console.log(numbers);