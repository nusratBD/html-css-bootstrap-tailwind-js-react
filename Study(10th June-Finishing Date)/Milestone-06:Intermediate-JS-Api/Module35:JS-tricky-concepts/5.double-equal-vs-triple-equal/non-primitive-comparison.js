
/* 
Double Equal and Triple equal can not compare non-primitive data.
*/
//Object: double-equal
const person1 = {name: 'Nusrat'};
const person2 = {name: 'Nusrat'};
if(person1 == person2){
    console.log('Same');
}
else{
    console.log('False');
}
//output: False
//Object: triple-equal
if(person1 === person2){
    console.log('Same');
}
else{
    console.log('False');
}
//output: False


//Array: double-equal
const num1 = [2, 3, 4];
const num2 = [2, 3, 4];
if(num1 == num2){
    console.log('Same');
}
else{
    console.log('False');
}
//output: False
//Array: triple-equal
if(num1 === num2){
    console.log('Same');
}
else{
    console.log('False');
}
//output: False