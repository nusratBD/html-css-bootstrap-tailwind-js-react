function sum(num1, num2){
    let sum = num1 + num2;
    // console.log(arguments);//array like object
    // console.log(arguments[1]);
    for(let num of arguments){
        //note: It is not possible to push in arguments like array
        console.log(num);
    }
    return sum;
}
let result = sum(13, 23, 50, 100);
// console.log(result);