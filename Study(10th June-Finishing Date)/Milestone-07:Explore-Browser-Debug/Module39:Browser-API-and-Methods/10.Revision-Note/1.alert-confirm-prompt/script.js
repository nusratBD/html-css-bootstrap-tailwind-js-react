const confirmRes = confirm('Do You like coffee');
if(confirmRes===true){
    const promtRes = prompt('Hey, write your account number for payment');
    console.log(promtRes);
    if(promtRes !='' && promtRes==true){
        alert('Your Coffee is on processing');
    }
    else{
        alert('You can not buy coffee without money.');
    }
}
else{
    alert('Okay, See you next time');
}