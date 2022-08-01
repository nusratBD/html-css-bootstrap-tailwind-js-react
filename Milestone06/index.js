document.getElementById('border').addEventListener('click', function(){
    const border = document.getElementById('addBorder');
    border.style.border = "5px solid green";
});
function addBackground(){
    const friends = document.getElementsByClassName('friend');
    for(const friend of friends){
        friend.style.backgroundColor = "pink";
    }
}
document.getElementById('add-friend').addEventListener('click', function(){
    const newFriend = document.getElementById('addBorder');
    const addFriend = document.createElement('div');
    addFriend.classList.add('friend');
    addFriend.innerHTML=`<h4>New Friend</h4>
    <p>Lorem2</p>`;
    newFriend.appendChild(addFriend);
});