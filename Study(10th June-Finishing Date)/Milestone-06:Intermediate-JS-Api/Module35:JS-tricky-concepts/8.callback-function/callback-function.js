/* 
At the time of calling a function if we pass an annonymous function as a parameter of the calling function, this annonymous function is called callback function.

Example: document.getElementById('my-btn).addEventListener('click', function(){

})
*/
function test(name,print){
    print(name);
}
test('Nusrat',function(name){
    console.log('Hi', name);
})

//Multiple Callback Function
function test2(data, callback1, callback2){
    console.log(data);
    callback1(data);
    callback2(data);
}
test2('Nusrat Hurain: Software Engineer', function(data){
    console.log(data.toUpperCase())
}, function(data){
    console.log(data.toLowerCase())
})