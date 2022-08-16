const displayArea = document.getElementById('search-result');
const singleDrinks = document.getElementById('single-drinks');
const spinner = document.getElementById('spinner');
const notFound = document.getElementById('not-found');
document.getElementById('search-btn').addEventListener('click', function(){
    const searchField = document.getElementById('search-item');
    const searchValue = searchField.value;
    searchField.value= '';
    singleDrinks.textContent ='';
    notFound.textContent = '';
    displayArea.textContent='';
    if(!searchValue){

    }
    else{
     spinner.style ="display:block";
     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchValue}`)
    .then(res=>res.json())
    .then(data=>displayDrinks(data));
    }
})
    
const displayDrinks = (data) =>{
    const drinks = data.drinks;
    console.log(drinks);
    if(drinks !==null){
        for(const drink of drinks){
            const div = document.createElement('div');
            div.classList.add('card');
            div.innerHTML = `
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="..." onclick={singleDrink(${drink.idDrink})}>
            `;
            displayArea.appendChild(div);
            spinner.style ="display:none";
        }
    }
    else{
            const div = document.createElement('div');
            div.classList.add('not-found');
            div.innerHTML = `
            <h1>Sorry, Data Not Found.</h1>
            `;
            notFound.appendChild(div);
            spinner.style ="display:none";

    }

}
const singleDrink = (id) =>{
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
    .then(res=>res.json())
    .then(data=>singleDrinkDisplay(data.drinks[0]));
}
const singleDrinkDisplay = (drinks) =>{
    console.log(drinks);
    singleDrinks.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${drinks.strDrinkThumb}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${drinks.strDrink}</h5>
      <hp>Type: <span>${drinks.strAlcoholic}</span></p>
      <p>Category: <span>${drinks.strCategory}</span></p>
      <p class="card-text">Instruction: ${drinks.strInstructions}</p>
    </div>
    <div class="card-footer">
      <button class="btn btn-danger" href="${drinks.strVideo}">Go Youtube</button>
    </div>
    `;
    singleDrinks.appendChild(div);
}