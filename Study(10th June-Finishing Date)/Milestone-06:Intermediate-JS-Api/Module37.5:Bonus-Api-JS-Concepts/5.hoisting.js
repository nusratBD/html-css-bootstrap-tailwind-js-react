/* 
1. js hoist function on the top.
2. js host only the name of var variable on the top. But does not hoist the value.
3. js does not hoist let and const on the top.
4. If we keep a function to a variale as a data, this function won't be hoisted.
*/

console.log(test);//output: undefined
test();//output: error; test is not a function
var test = function(){
    console.log('Function in variable for hoist checking');
}