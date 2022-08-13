/* 
Closure: If we use or return a function inside of a function and this returned function accesses any value outside of it, it creates an encapsulation/closure/private variable of its own. 
*/

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}
const clock1 = stopWatch();
console.log(clock1); //output: [Function]
console.log(clock1());//output: 1
console.log(clock1());//output: 2