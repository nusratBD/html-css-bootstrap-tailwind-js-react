//remove child method: 01
let lists = document.getElementsByClassName('list');for(let list of lists){
    list.addEventListener('click', function(){
        // document.getElementById('ul-container').removeChild(list);
    })
}

//remove child method: 02
let lists2 = document.getElementsByClassName('list');
for(let list2 of lists2){
    list2.addEventListener('click', function(event){
        event.target.parentNode.removeChild(list2);
    })
}
