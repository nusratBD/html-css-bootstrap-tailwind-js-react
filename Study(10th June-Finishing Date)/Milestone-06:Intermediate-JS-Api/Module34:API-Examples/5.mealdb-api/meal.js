const loadMeal = () =>{
    let searchMealField = document.getElementById('input-meal');
    let searchFood = searchMealField.value;
    searchMealField.value = '';
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFood}`)
    .then(res=>res.json())
    .then(data=>displayFood(data));
}
const displayFood = (data) =>{
    console.log(data);
}