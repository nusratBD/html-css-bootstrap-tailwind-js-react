const first = {a: 10, b: 20};
const second = {a: 10, b: 20};
if(JSON.stringify(first)===JSON.stringify(second)){
    console.log('Object are same');
}
else{
    console.log('Object are not same');
}
//output: Object are same

/* 
Problems of stringfy Object Compare:
1. postion problem
*/

//1. postion problem
const first2 = {a: 10, b: 20};
const second2 = {b: 20, a: 10};
if(JSON.stringify(first2)===JSON.stringify(second2)){
    console.log('Object are same');
}
else{
    console.log('Object are not same');
}
//output: Object are not same