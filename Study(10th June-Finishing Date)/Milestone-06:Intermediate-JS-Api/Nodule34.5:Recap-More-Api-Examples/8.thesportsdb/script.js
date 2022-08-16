function loadCountryData(){
    fetch('https://www.thesportsdb.com/api/v1/json/2/all_countries.php')
    .then(res=>res.json())
    .then(data=>displayCountryData(data));
}
loadCountryData();

function displayCountryData(data){
    const countries = data.countries;
    const countryContainer = document.getElementById('countries');
    for(const country of countries){
        const div = document.createElement('div');
        div.classList.add('country');
        div.setAttribute('id',`${country.name_en}`);
        div.innerHTML = `
        <h3>${country.name_en}</h3>
        <button onclick="leagues('${country.name_en}')">Leagues</button>
        `;
        countryContainer.appendChild(div);
    }
}
function leagues(country){
    console.log(country);
    fetch(`https://www.thesportsdb.com/api/v1/json/2/search_all_leagues.php?c=${country}`)
    .then(res=>res.json())
    .then(data=>displayLeagues(data, country));
}
function displayLeagues(data,country){
    const datas = data.countries;
    console.log(datas);
    const leagueContainer = document.getElementById('leagues');
    leagueContainer.textContent='';
    for(const data of datas){
        console.log(data);
        const div2 = document.createElement('div');
        const div = document.createElement('div');
        div.classList.add('league');
        div.innerHTML = `
        <h1>${country} League: ${data.idLeague}</h1>
        <img src="${data.strBadge}">
        <h1>Name: ${data.strLeague}</h1>
        <h1>First Event: ${data.dateFirstEvent}</h1>
        <h1>Type: ${data.strSport}</h1>
        <h1>Gender: ${data.strGender}</h1>
        <h1>Description: <small>${data.strDescriptionEN.slice(0,100)}</small></h1>
        `;
        leagueContainer.appendChild(div);

    }
    
}