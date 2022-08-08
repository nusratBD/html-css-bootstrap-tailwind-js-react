//জাভাস্ক্রিপ্ট এর var, let, const এর মধ্যে প্রার্থক্য কি? 
/* 
Keyword	    Can be reassigned	    Can be redeclared	    scope	            hoisting
-------------------------------------------------------------------------------------------------
var	        Yes	                    Yes	                    Function Scope	    Yes
let	        Yes	                    No	                    Block Scope	            No
const	        No	                    No	                    Block Scope	        No
*/
//Block Scope and Function Scope
//01. let const: block scope: scope works only inside of a block
function x(){
    if(true){
        let name = 'Nusrat Hurain';
    }
    console.log(name);
}
x();//output: error. because let and const are block scoped. That means if it is used in a block, we can not use it outside of block although the block exixts in a function

//02. var: function scope: scope works inside both the block and function
function y(){
    if(true){
        var name = 'Nusrat Hurain';
    }
    console.log(name);
}
y();//output: Nusrat Hurain. As var is a function scoped variable, it accessed in the function although it is used inside of a block