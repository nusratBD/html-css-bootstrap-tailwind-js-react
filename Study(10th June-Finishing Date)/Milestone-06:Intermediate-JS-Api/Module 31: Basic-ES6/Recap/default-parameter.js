function max(data = []){
    let output = Math.max(...data);
    return output;
}
let result1 = max([34, 67, 23, 44]);
console.log(result1);//output: 67
let result2 = max();
console.log(result2);//-Infinity. Because default array is empty