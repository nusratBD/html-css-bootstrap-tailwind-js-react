/* 
alert(). confirm(), prompt() work with browser not with the JS.
*/
const recentEvent = () =>{
    alert('Picnic event has come.');
}
const details = () =>{
    const response = confirm('Do you want go to picnic');
    if(response === true){
        prompt('bKash 5000 Taka in 01708778173 and send the Trxd bellow.');
    }
    else{
        alert('You are not allowed to see details.');
    }
}