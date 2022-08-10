const loadMeal = () =>{
    let searchMealField = document.getElementById('input-meal');
    let searchFood = searchMealField.value;
    searchMealField.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    .then(res=>res.json())
    .then(data=>displayFood(data));
}
const displayFood = (data) =>{
    console.log(data.meals);
    const foods = data.meals;
    const cardContainer = document.getElementById('cards');
    foods.forEach(food=>{
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
        <div class="card h-100">
            <img src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${food.strMeal}</h5>
              <p class="card-text">${food.strInstructions.slice(0, 200)}</p>
            </div>
            <div class="card-footer bg-danger text-center">
              <small class="text-white fw-bold">Order Now</small>
            </div>
          </div>
        `;
        cardContainer.appendChild(card);
    })
}