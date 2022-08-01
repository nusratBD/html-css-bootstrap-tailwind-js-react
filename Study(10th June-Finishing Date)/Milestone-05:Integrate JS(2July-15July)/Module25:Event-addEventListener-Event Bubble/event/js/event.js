function clickRed(){
    document.body.style.backgroundColor = 'red';
}
let blueBtn = document.getElementById('blue-btn');
//set the function, not call
blueBtn.onclick = blueBtnFunction;

function blueBtnFunction(){
    document.body.style. backgroundColor = 'blue';
}
//Green Button
let greenBtn = document.getElementById('green-btn');
greenBtn.onclick = function greenBtnFunction(){
    document.body.style.backgroundColor = 'green';
}
//Orange Button
let orangeBtn = document.getElementById('orange-btn');
orangeBtn.onclick = function (){
    document.body.style.backgroundColor = 'orange';
}