function bgBlue(){
    document.body.style.backgroundColor='blue';
}
const greenBtn = document.getElementById('green-btn');
//set function name
greenBtn.onclick = btnGreen;
function btnGreen(){
    document.body.style.backgroundColor='green'
}
const grayBtn = document.getElementById('gray-btn');
grayBtn.onclick = function(){
    document.body.style.backgroundColor="gray";
}//add event listener
const orangeBtn = document.getElementById('orange-btn');
orangeBtn.addEventListener('click',orangeBtnn);
function orangeBtnn(){
    document.body.style.backgroundColor = 'orange'
}
const pinkBtn = document.getElementById('pink-btn');
pinkBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = "pink";
});
document.getElementById('golden-btn').addEventListener('click', function(){
    document.body.style.backgroundColor="gold";
});
document.getElementById('update').addEventListener('click', function(){
    const nameField = document.getElementById('name-field');
    const p = document.getElementById('paragraph');
    p.innerText = nameField.value;
    nameField.value="";
})