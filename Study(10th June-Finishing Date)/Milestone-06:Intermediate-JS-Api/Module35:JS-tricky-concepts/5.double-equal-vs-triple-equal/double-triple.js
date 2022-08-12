/* 
Double Equal vs Triple Equal:
-----------------------------------------------------------------------
double equal: double equal only checks the value, not the type
triple equal: triple equal checks both the type and value
*/

//Case 01
const num1 = 2;
const num2 = 2;
if(num1 == num2){
    console.log('Double Equal: True');
}
else{
    console.log('Double Equal: False');
}

//Case 02
const x = 2;
const y = '2';
if(x==y){
    console.log('Double Equal: True');
}
else{
    console.log('Double Equal: False');
}

//Case 03
if(x===y){
    console.log('Triple Equal: True');
}
else{
    console.log('Triple Equal: False')
}