document.getElementById('full-border').addEventListener('click', function(){
    let friends = document.getElementById('friends');
    console.log(friends);
    friends.style.border = '2px solid lightgreen';
    friends.style.borderRadius = '10px';
    friends.style.margin = '10px';
    friends.style.padding = '10px';
})
function background(){
    let friends = document.getElementsByClassName('friend');
    for(let friend of friends){
        friend.style.backgroundColor = "aquamarine";
    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    let friends = document.getElementById('friends');
    let div = document.createElement('div');
    div.classList.add('friend');
    div.innerHTML = `
    <h3>Friend-$</h3>
        <p>lorem2</p>`;
        friends.appendChild(div);
})
function friendBorder(){
    let friends = document.getElementsByClassName('friend');

    for(let friend of friends){
        friend.style.border = '1px solid salmon';
        friend.style.borderRadius = '5px';
        friend.style.margin = '5px';
        friend.style.padding = '5px';
    }
}