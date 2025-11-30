const searchBtn = () => {
    const searchInput = document.getElementById('searchInput').value;
    const searchDiv = document.getElementById('searchDiv');
    
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
    .then(res => res.json())
    .then(data => {
        const recipes = data.meals; 
        console.log(recipes);
        
        if (recipes) {
            
                for(const recipe of recipes){
                
                const recipeDiv = document.createElement('div');
                recipeDiv.innerHTML = `
                  <h2>${recipe.strMeal}</h2>
                  <img src=${recipe.strMealThumb} width="100%">
                  <p>${recipe.strInstructions}</p>
                `;
                searchDiv.appendChild(recipeDiv);

            }
        }
        else{
          searchDiv.innerHTML = '<p> No recipes found </p>';
    }
    })
    
}