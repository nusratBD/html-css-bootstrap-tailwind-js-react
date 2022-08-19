//01:
const value1 = '1111111111111111111111111';
const value2 = () => {console.log('222222222222222222222222')};
const value3 = '3333333333333333333333333333333';
console.log(value1);
setTimeout(value2);
console.log(value3);

/* 
output: 
1111111111111111111111111
3333333333333333333333333333333
222222222222222222222222
*/

//02
const data1 = 'xxxxxxxxxxxxxx';
const data2 = () => console.log('YYYYYYYYYYYYY');
const data3 = 'ZZZZZZZZZZZZZZZZ';
console.log(data1);
setTimeout(data2, 1000);
console.log(data3);

/* 
output:
1111111111111111111111111
3333333333333333333333333333333
xxxxxxxxxxxxxx
ZZZZZZZZZZZZZZZZ
222222222222222222222222
YYYYYYYYYYYYY
*/

//03
console.log('PPPPPPPP');
setTimeout(function(){
    console.log('QQQQQQQQQ');
},1500)
setTimeout(()=>{console.log('RRRRRRRR')},700);
