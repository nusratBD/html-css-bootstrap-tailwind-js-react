//জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
/* 
Keyword	    Can be reassigned	    Can be redeclared	    scope	            hoisting
-------------------------------------------------------------------------------------------------
var	        Yes	                    Yes	                    Function Scope	    Yes
let	        Yes	                    No	                    Block Scope	            No
const	        No	                    No	                    Block Scope	        No
*/

//Hoisting: Hoisting is a JS default behaviour where variables and function declarations are moved to the top of their scope before code execution

//01: function: hoisting: true
x();//output: Hello(initializes with proper value)
function x(){
    console.log('Hello');
}

//02. var: hoisting = true;(initializes with undefined)
console.log(product);//(initializes with undefined)
var product = 'car';//output: undefined. As the variable initialized after accessing it, it will initialize with undefined at the accessing place

//03. let const
console.log(item);//output: ReferenceError: Cannot access 'item' before initialization
let item = 'car';

