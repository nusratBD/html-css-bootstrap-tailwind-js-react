document.getElementById('submit').addEventListener('click', function(){
    let email = document.getElementById('email');
    let emailValue = email.value;
    let password = document.getElementById('password');
    let passwordValue = password.value;
    if(emailValue == 'nusrat.hurain.nuha@gmail.com' && passwordValue == 'Nusrat1662022'){
        window.location.href = 'banking.html';
    }
    else{
        console.log(alert('Wrong Info'));
    }
})