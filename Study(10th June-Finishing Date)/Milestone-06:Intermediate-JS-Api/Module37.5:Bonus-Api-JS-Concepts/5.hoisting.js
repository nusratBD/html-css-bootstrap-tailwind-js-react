/* 
1. js hoists simple regular function on the top.(not arrow function, not function in variable)
2. js hosts only the name of var variable on the top. But does not hoist the value.
3. js does not hoist let and const on the top.
4. If we keep a function to a variale as a data, this function won't be hoisted. */


test2();//output: Function without variable for hoist checking

console.log(test3);//output: undefined
test3();//output: error: test3 is not a function


console.log(test);//output: undefined
test();//output: error; test is not a function
/* The inner content of test is a function. But test at its own is a variable.
JS hoists only the variable name not the value. So it is seeing the type of variable name but can not seeing the type of its inner text.
*/

var test = function(){
    console.log('Function in variable for hoist checking');
}
function test2(){
    console.log('Function without variable for hoist checking');
}

var test3 = () =>{
    console.log('Arrow function is for hoist checking.');
}