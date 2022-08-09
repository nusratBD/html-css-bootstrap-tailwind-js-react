const loadCountry = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data =>displayCuntry(data));
}
loadCountry();

const displayCuntry = (data) =>{
    let countryArea = document.getElementById('countries');
    data.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('country');
        div.innerHTML = `<h3 class = "title">Official Name: <small class = "data">${country.name.official}</small></h3>
        <h3 class="title">Common Name: <small class="data">${country.name.common}</small></h3>
        <button onclick="countryDetail('${country.name.common}')">Details</button>
        `;
        countryArea.appendChild(div);
        // console.log(country.name.nativeName);
    })
}

/* const displayCuntry = data =>{
    const countryContainer = document.getElementById('countries');
    data.forEach(country=>{
        const div = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = `Country Name:${country.name.official}`;
        div.appendChild(h3);
        countryContainer.appendChild(div);
        console.log(country);
    })
} */

const countryDetail = (name) =>{
    // console.log(name);
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res=>res.json())
    .then(data=>showDetail(data));
}

const showDetail = (data) =>{
    console.log(data[0]);
    const descriptionContainer = document.getElementById('description');
    const div = document.createElement('div');
    div.innerHTML = `
    <h1>Description of <span class="country-description">${data[0].name.official}</span></h1>
    <h3>Capital: <span class="description-data">${data[0].capital}</span></h3>
    <h3>Region: <span class="description-data">${data[0].region}</span></h3>
    <h3>Population: <span class="description-data">${data[0].population}</span></h3>
    <img src="${data[0].flags.png}">
    `;
    descriptionContainer.appendChild(div);
}