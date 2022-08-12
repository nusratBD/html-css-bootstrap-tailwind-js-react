/* 
Truthy:
-----------------------------------------------------------------------------------------------
1.true
2.any Numbers(Postive or Negative) exept 0
3.any string including space string ' '
4.[]
5.{}

Falsy:
------------------------------------------------------------------------------------------------
1.false
2.''
3.0
4.undefined
5.null
6.NaN
*/
// const x = 0; output: Falsy
if(x){
    console.log('Truthy:',x);
}
else{
    console.log('Falsy:',x);
}