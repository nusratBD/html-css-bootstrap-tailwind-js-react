//Pink Button
let pinkBtn = document.getElementById('pink-btn');
pinkBtn.addEventListener('click', pinkBtnFunction);
function pinkBtnFunction(){
    document.body.style.backgroundColor = 'pink';
}

//Salmon Button
document.getElementById('salmon-btn').addEventListener('click', function(){document.body.style.backgroundColor="salmon"});