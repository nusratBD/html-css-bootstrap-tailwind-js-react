//section container event handler
document.getElementById('section-container').addEventListener('click', function(){
    console.log('Section Clicked');
})

//ul event handler
document.getElementById('ul-container').addEventListener('click', function(){
    console.log('ul clicked');
})

//li event handler
document.getElementById('second-list').addEventListener('click', function(){
    // console.log('second li clicked');
})

//stop propagation
document.getElementById('second-list').addEventListener('click', function(event){
    // console.log('second li clicked');
    // event.stopPropagation();
})

//stop immediate propagation
let list2 = document.getElementById('second-list');
list2.addEventListener('click', function(event){
    console.log('Clicked 1');
    // event.stopPropagation();
    event.stopImmediatePropagation();
})
list2.addEventListener('click', function(event){
    console.log('Clicked 2');
})
list2.addEventListener('click', function(event){
    console.log('Clicked 3');
})
list2.addEventListener('click', function(event){
    console.log('Clicked 4');
})