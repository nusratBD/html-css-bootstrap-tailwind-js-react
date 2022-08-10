const asynAwait = async item =>{
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${item}`;
        const fetchUrl = await fetch(url);
        const data = await fetchUrl.json();
        meal(data);
    
}
asynAwait('fish');

const meal = (food) =>{
    console.log(food);
}