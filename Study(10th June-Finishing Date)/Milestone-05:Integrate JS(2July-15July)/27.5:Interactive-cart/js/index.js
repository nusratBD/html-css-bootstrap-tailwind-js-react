document.getElementById('submit').addEventListener('click', function(){
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let emailValue = email.value;
    let passwordValue = password.value;
    if(emailValue=='nusrat.hurain.nuha@gmail.com' && passwordValue=='Nusrat16062022'){
    window.location.href = "banking.html";
    }
    else{
        console.log(alert('Please provide valid credentials!'));
    }
})