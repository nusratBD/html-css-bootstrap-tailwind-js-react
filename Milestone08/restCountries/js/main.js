const restCountries = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>displayCountries(data));
}
const displayCountries = countries =>{
    console.log(countries[0]);
    const countriesHTML = countries.map(country=>getCountries(country));
    document.getElementById('country').innerHTML = countriesHTML.join(' ');
}
// const getCountries = country =>{
//     option: 01
//     return `
//     <div class="country"><h2>${country.name.common}</h2>
//     <h3>Capital: ${country.capital}</h3>
//     <img src="${country.flags.png}">
//     </div>
//     `
//     option: 02
//     const {name, capital, flags} = country;
//     return `
//     <div class="country"><h2>${name.common}</h2>
//     <h3>Capital: ${capital}</h3>
//     <img src="${flags.png}">
//     </div>
//     `
// }
// option 03
const getCountries = ({name, capital, flags}) =>{
    return `
    <div class="country"><h2>${name.common}</h2>
    <h3>Capital: ${capital}</h3>
    <img src="${flags.png}">
    </div>
    `
    
}
restCountries();