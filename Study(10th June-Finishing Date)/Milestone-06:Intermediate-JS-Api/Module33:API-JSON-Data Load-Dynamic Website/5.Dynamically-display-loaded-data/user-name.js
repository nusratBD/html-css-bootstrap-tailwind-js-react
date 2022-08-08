function loadUser(){
 fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users => displayUsername(users));
}
function displayUsername(users){
    for(const user of users){
        const ul = document.getElementById('name');
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}