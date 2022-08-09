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
        <h3 class="title">Flag: </h3> <img src="${country.flags.png}">
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