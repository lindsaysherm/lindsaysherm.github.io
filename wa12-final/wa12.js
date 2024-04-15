document.querySelector("#js-new-cocktail").addEventListener('click', getRandomCocktail);
document.querySelector("#js-list-cocktails").addEventListener('click', listAllCocktails);

async function fetchAPI(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch data:", error);
    }
}

async function getRandomCocktail() {
    const data = await fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    clearCocktailList();
    if (data && data.drinks) {
        displayCocktail(data.drinks[0]);
    }
}

async function listAllCocktails() {
    clearCocktailDetails();
    const listElement = document.getElementById("js-cocktail-list");
    listElement.innerHTML = '';  
    const data = await fetchAPI('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    if (data && data.drinks) {
        data.drinks.forEach(cocktail => {
            const item = document.createElement("div");
            item.textContent = cocktail.strDrink;
            listElement.appendChild(item);
        });
    }
}

function displayCocktail(cocktail) {
    const cocktailName = document.getElementById("js-cocktail-name");
    const cocktailDetails = document.getElementById("js-cocktail-details");
    cocktailName.textContent = cocktail.strDrink;
    cocktailDetails.innerHTML = `
        <strong>Instructions:</strong> ${cocktail.strInstructions}<br>
        <strong>Category:</strong> ${cocktail.strCategory}<br>
        <strong>Glass Type:</strong> ${cocktail.strGlass}<br>
        <strong>Ingredients:</strong> ${listIngredients(cocktail)}
    `;
}

function listIngredients(cocktail) {
    let ingredients = '';
    for (let i = 1; i <= 15; i++) {
        if (cocktail[`strIngredient${i}`]) {
            ingredients += `${cocktail[`strIngredient${i}`]} - ${cocktail[`strMeasure${i}`] || ''}<br>`;
        }
    }
    return ingredients;
}

function displayCocktailList(cocktails) {
    const listElement = document.getElementById("js-cocktail-list");
    listElement.innerHTML = '';
    cocktails.forEach(cocktail => {
        const item = document.createElement("div");
        item.textContent = cocktail.strDrink;
        listElement.appendChild(item);
    });
}

function clearCocktailList() {
    document.getElementById("js-cocktail-list").innerHTML = '';
}

function clearCocktailDetails() {
    document.getElementById("js-cocktail-name").textContent = '';
    document.getElementById("js-cocktail-details").textContent = '';
}
