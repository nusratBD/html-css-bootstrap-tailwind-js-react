//Function Button
function functionBtn(){
    let funBtn = document.getElementById('click-text');
    funBtn.innerText="Clicked Function Button";
    funBtn.style.color = "green";
}

//Listener Button
let listenerBtn = document.getElementById('listener-btn');
listenerBtn.addEventListener('click', function(){
    let text = document.getElementById('click-text');
    text.innerText = "Listener Button Clicked";
    text.style.color = "red";
})