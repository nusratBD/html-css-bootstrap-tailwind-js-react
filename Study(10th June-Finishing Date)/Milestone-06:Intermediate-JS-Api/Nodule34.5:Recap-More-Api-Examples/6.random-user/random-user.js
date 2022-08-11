const userContainer = document.getElementById('user');
const loadUser = () =>{
    fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(data=>displayUser(data));
}
loadUser();
const displayUser = (data) =>{
    const user = data.results[0];
    console.log(user);
    const div = document.createElement('div');
    div.classList.add('user-data');
    div.innerHTML = `
    <img src="${user.picture.large}">
    <h3>Name: <span>${user.name.title}${user.name.first}${user.name.last}</span></h3>
    <h3>Gender: <span>${user.gender}</span></h3>
    <h3>Email: <span>${user.email}</span></h3>
    <h3>Cell: <span>${user.cell}</span></h3>
    <h3>Location: <span>${user.location.street.number},${user.location.city},${user.location.street.name},${user.location.city},${user.location.state}-${user.location.postcode},${user.location.country}</span></h3>
    <h3>Time Zone: <span>${user.location.timezone.offset} ${user.location.timezone.description}</span></h3>
    `
    userContainer.appendChild(div);
}