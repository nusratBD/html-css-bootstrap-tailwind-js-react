function one(){
    console.log('First Code');
}
setTimeout(one, 3000);
setTimeout(function(){
    console.log('Fourth Code');
},1000);
setTimeout(()=>console.log('Fifth code'),2000);
console.log('Second Code');
console.log('Third Code');