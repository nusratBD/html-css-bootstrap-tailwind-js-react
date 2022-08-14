/* 
If two objects are same to look, but still they are not equal. Because for the non-primitive data, they compare referencial place(memory place), not the data.
*/

//01: 
const first = {a: 10};
const second = {a: 10};
if(first===second){
    console.log('Object are same');
}
else{
    console.log('Object are different');
}
//output: Object are different

//02: 
const third = first;
if(first==third){
    console.log('Object are same');
}
else{
    console.log('Object are different');
}
//output: Object are Same