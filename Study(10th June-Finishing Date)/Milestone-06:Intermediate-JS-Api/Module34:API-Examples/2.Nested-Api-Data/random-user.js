const loadUsers = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayUsers(data));
}
loadUsers();

const displayUsers = (data) =>{
    let users = data.results;
    let userContainer = document.getElementById('users');
    for(const user of users){
        console.log(user.name);
        const p = document.createElement('p');
        console.log(p);
        p.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`;
        userContainer.appendChild(p);
    }
}