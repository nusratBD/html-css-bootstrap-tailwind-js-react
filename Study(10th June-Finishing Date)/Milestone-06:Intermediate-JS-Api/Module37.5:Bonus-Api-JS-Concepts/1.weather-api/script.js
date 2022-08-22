const loadData = () =>{
    const input = document.getElementById('city');
    const city = input.value;
    input.value = '';
    const spinner = document.getElementById('spinner');
    spinner.style = 'display: inline';
    const API_key = 'fe30f5d875b6dc8b5cec90587871f86d';
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
    .then(res=>res.json())
    .then(data=>displayData(data));
}
const displayData = (data) =>{
    if(data.message){
    innerText('city-name', data.message);
    innerText('temp', '');
    innerText('weather', '');
    let icon = document.getElementById('icon');
    icon.setAttribute('src', `` );
    document.getElementById('temp-icon').style = 'display: none';
    }
    else{
    innerText('city-name', data.name);
    innerText('temp', data.main.temp);
    innerText('weather', data.weather[0].main);
    let icon = document.getElementById('icon');
    icon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png` );
    document.getElementById('temp-icon').style = 'display: inline';
    }
    spinner.style = 'display: none';
}
const innerText = (id, data) => {
    let text = document.getElementById(id);
    text.innerText = data;
}