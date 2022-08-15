/* 
1. this: inside of a function is window
2. this: inside of an object is object
*/

//01. Function
function test1(){
    console.log(this);
}
test1(); //output: window

//02. Object
const obj1 = {
    name: this
}
console.log(obj1);//output: object

//03. Object binded with function
const bind1 = test1.bind(obj1);
bind1();//output: Object

//04.
const obj2 = {
    name: 'Nusrat',
    study: function y(){
        console.log(this);
    }};
const p = obj2.study;
p();//output: window, although the function is inside of an object