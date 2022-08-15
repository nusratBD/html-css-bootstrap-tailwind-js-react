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
const obj = {
    name: function(){
        console.log(this);//output: full object
        console.log(this.age);//output: obects age property
    },
    age:25
}
obj.name();//output: object

//03. Object(this) is binded to a function: it will convert 'this' window to object
const obj1 = {
    name: 'Nusrat'
}
function test2(){
    console.log(this);
}
test2();//output: window

function test3(){
    console.log(this);//output: object
    console.log(this.name);//output: objects property
}
const bind3 = test3.bind(obj1);
bind3();

//04. Method inside object
const obj2 = {
    name: 'Nusrat',
    study: function(){
        console.log(this.name); //As it is a property of the object, this is also the object here although it is a function
    }
}
obj2.study();

//05. convert object this to window this
const obj3 = {
    name: 'Nusrat',
    study: function(){
        console.log('Hello', this.name);
        const name = this.name;
        const function2 = ()=> {
            console.log('Function: ',name);//function2 is inside of study() function. SO here 'this' is window and it can not access object property with this.name. So, we have to store it in another variable outside of function2 and the access it.
        }
        function2();
        }
    }
const result = obj3.study();

//06. bind this to a function
const obj4 = {
    name: 'Nusrat',
    study: function(){
        console.log('Hello ',this.name);
        const function2 = () =>{
            console.log('Hello ',this.name,' from function2');
        }
        function2.bind(this);
        function2();
    }
}
obj4.study();

