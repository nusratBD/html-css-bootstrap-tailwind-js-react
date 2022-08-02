document.getElementById('top-players').style.color = 'orange';
document.getElementById('top-blogs').style.color = "salmon";
const players = document.getElementsByClassName('player');

for(const player of players){
    player.style.backgroundColor = 'rgb(225, 247, 244)';
}
function addNew(){
    const ul = document.getElementById('add-new');
    let li = document.createElement('li');
    li.innerText = 'New Item Added';
    ul.appendChild(li);
}
document.getElementById('increment').addEventListener('click', function(){
    let inputField = document.getElementById('increment-value');
    let inputValue = parseInt(inputField.value) + 1;
    if(inputValue<=5){
        inputField.value = inputValue;
    }
    else{
        document.getElementById('increment').setAttribute('disabled', true);   
    }
})