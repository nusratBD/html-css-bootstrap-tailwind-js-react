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

// Check Truthy:
// const y = true; output: Truthy
// const y = 4; output: Truthy
// const y = -4; output: Truthy
// const y = 'Nusrat'; output: Truthy
// const y = '0'; output: Truthy
// const y = ' '; output: Truthy
// const y = []; output:  Truthy
// const y = {}; output: Truthy
if(y){
    console.log('Truthy:',y);
}
else{
    console.log('Falsy:',y);
}

// Check Falsy
// const x = 0; output: Falsy
// const x = false; output: Falsy
// const x = ''; output: Falsy
// let x; output: Falsy: undefined
// const x = undefined; output: Falsy
// // const x = null; output: Falsy
// const x = parseInt('hello'); output: Falsy: NaN
// const x = NaN; output: NaN
/* if(x){
    console.log('Truthy:',x);
}
else{
    console.log('Falsy:',x);
} */