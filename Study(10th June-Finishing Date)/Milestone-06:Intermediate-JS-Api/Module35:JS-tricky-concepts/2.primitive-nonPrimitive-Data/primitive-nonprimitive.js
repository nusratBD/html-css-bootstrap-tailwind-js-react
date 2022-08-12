/* 
Data Types:

a)Primitive: Only one value, immutable
1)Number
2)String
3)Boolean
4)undefined
5)null
6)symbol

b)non-primitive: More than one value, mutable
1)object
*/

//Primitive
let a = 'hello';
let b = a;
console.log(a,b);//output: hello hello
a = 'gello';//If you change one's value others will not change because of reference
console.log(a, b);//output: gello hello

//Non-primitive
let x = {job: 'Software Developer'};
let y = {job: 'Frontend Developer'};
x = y;
console.log(x, y);//output: { job: 'Frontend Developer' } { job: 'Frontend Developer' }
x.job = 'React Developer';//If you change ones value others will change automatically
console.log(x, y);//output: { job: 'React Developer' } { job: 'React Developer' }