document.getElementById('update').addEventListener('click', function(){
    let text = document.getElementById('input-field').value;
    document.getElementById('text').innerText = text;
    text = '';
})