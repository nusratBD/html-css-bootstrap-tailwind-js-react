const loadQuote = () =>{
    fetch('https://api.kanye.rest/')
    .then(res=>res.json())
    .then(data=>displaYQuote(data));
}

const displaYQuote = (quote) =>{
    let quoteContainer = document.getElementById('quote');
    quoteContainer.innerText = `${quote.quote}`
}