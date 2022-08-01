let deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', function(){
    document.getElementById('p').style.display = 'none';
})

let inputField = document.getElementById('input-field');
inputField.addEventListener('keyup', function(event){
    if(event.target.value == 'delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})