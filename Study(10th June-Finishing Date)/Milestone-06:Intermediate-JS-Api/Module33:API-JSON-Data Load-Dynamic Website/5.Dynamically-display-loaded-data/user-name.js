function loadUser(){
 fetch('https://jsonplaceholder.typicode.com/users')
.then(res=>res.json())
.then(users => {
    const ul = document.getElementById('name');
    for(const user of users){
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
});
}
