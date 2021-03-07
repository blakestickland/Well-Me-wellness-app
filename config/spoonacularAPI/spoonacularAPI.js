"use strict";

const fetch = require("node-fetch");
const API_APP_KEY2 = "&apiKey=74f87b20cfd04c5aa17c1f09d672b5fa";
const API_APP_KEY4 = "&apiKey=12379bbb78244c0189010a85deb6a8e3"; // second API key for times when 402 error is returned
const API_PATH = "https://api.spoonacular.com/recipes/random"; // first API call to get random recipes
const API_PATH2 = "https://api.spoonacular.com/recipes/informationBulk"; // second API call to get information about recipes
const apiUrlExtension3 = "&includeNutrition=true";
const apiUrlExtensionRecipes = "?ids=";

async function getRecipeIds() {
  try {
    const apiUrlExtension = "?tags=" + "vegan"; // this is where we need the result of the diet dropdown entered
    const apiNumberOfResults = "&number=10";
    const apiUrl = API_PATH + apiUrlExtension + apiNumberOfResults + API_APP_KEY2;  
    const data = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response = await data.json();
    let recipeIds = "";
    for (let i = 0; i < response.recipes.length; i++) {
      const id = response.recipes[i].id;
      if (i < response.recipes.length - 1) {
        recipeIds += `${id},`;
      } else {
        recipeIds += `${id}`;
      }
    }
    return recipeIds;
  } catch (err) {
    console.error(err);
  }
}

const getRecipes = async () => {
  try {
    const recipeIds = await getRecipeIds();
    const apiUrl2 =
      API_PATH2 +
      apiUrlExtensionRecipes +
      recipeIds +
      apiUrlExtension3 +
      API_APP_KEY4;
    const data = await fetch(apiUrl2, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    });
    const response = await data.json();
    // recipesReturned = response;
    // for (let i = 0; i < response.length; i++) {
    // console.log(response[i].title);
    // console.log(response[i].image);
    // console.log(response[i].id);
    // console.log(response[i].spoonacularSourceUrl);
    // console.log(response[i].nutrition.nutrients[0].name);
    // console.log(response[i].nutrition.nutrients[0].amount);
    // console.log(response[i].nutrition.nutrients[0].unit);
    // recipesReturned.push(response[i]);
    // }
    console.log(
    "This is the logged response: " + response
    );
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getRecipes };
