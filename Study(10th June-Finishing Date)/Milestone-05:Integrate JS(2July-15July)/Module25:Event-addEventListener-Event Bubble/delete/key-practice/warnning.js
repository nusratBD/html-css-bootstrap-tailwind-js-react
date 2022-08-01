//Delete the text By clicking delete button
let deleteBtn = document.getElementById('delete-btn');
deleteBtn.addEventListener('click', function(){
    document.getElementById('p').style.display = 'none';
    inputField.value = '';
})

//focus style
let inputField = document.getElementById('input-field');
inputField.addEventListener('focus', function(){
    document.body.style.backgroundColor = 'red';
})

//blur style
inputField.addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})

//keyup
inputField.addEventListener('keyup', function(event){
    if(event.target.value =='delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})