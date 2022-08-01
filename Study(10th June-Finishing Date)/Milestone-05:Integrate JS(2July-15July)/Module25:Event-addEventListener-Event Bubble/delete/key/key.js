document.getElementById('delete-btn').addEventListener('click', function(){
    document.getElementById('delete-text').style.display = 'none';
})

//input-field: focus
document.getElementById('input-field').addEventListener('focus', function(){
    document.body.style.backgroundColor = 'red';
})

//input-field: blur
document.getElementById('input-field').addEventListener('blur', function(){
    document.body.style.backgroundColor = 'white';
})

//keydown
let inputField = document.getElementById('input-field');
inputField.addEventListener('keydown', function(){
    // console.log(inputField.value);
})

//Keypress
inputField.addEventListener('keypress', function(){
    // console.log(inputField.value);
})

//keyup
inputField.addEventListener('keyup', function(){
    console.log(inputField.value);
})

//change
inputField.addEventListener('change', function(){
    // console.log(inputField.value);
})

//event
inputField.addEventListener('keyup', function(event){
    let deleteBtn = document.getElementById('delete-btn');
    if(event.target.value=='delete'){
        deleteBtn.removeAttribute('disabled');
    }
    else{
        deleteBtn.setAttribute('disabled', true);
    }
})