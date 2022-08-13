/* 
Closure: When we access a variable in a function from outside, it creates a private variable inside of it according to the outside variable that it uses in every calling and this private variable is called closure or encapsulation.
*/

let name = 'Nusrat';
let count = 0;
function test(){
    count++;
    console.log(name, count);
}
test();
test();
test();
