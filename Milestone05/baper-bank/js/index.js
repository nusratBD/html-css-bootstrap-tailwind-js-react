document.getElementById('login-btn').addEventListener('click', function(){
    //get user email
    const email = document.getElementById('email');
    const userEmail = email.value;
    //get user password
    const password = document.getElementById('password');
    const userPassword = password.value;
    if(userEmail=='nusrat@gmail.com' && userPassword=="secret"){
        window.location.href="hotel.html"
    }
})