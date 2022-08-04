/*
String Interpolation: To set the value of a variable with the name of a variable in the string is called interpolation.
*/
//quote('') System:
let count = 5;
   let friend1 = '<h1 class="friend">Friend-'+ count +'</h1>'
console.log(friend1);

//caret(``) System:
let friend2 = `<h1 class="friend">Friend-${count}</h1>`;
console.log(friend2);
