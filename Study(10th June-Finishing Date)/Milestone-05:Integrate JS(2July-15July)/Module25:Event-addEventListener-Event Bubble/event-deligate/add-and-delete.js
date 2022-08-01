//Add New Item
document.getElementById('add-btn').addEventListener('click', function(){
    let li = document.createElement('li');
    li.innerText = 'New Item';
    document.getElementById('ul').appendChild(li);
})

//Delete Item
document.getElementById('ul').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})