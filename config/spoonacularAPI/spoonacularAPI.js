"use strict";

const fetch = require("node-fetch");
require("dotenv").config();
const API_APP_KEY2 = "&apiKey=" + process.env.API_KEY3; // API keys for Spoonacular; limited to 150 points a day.
const API_APP_KEY4 = "&apiKey=" + process.env.API_KEY3; // second API key to not overload the first one with hits.
const API_PATH = "https://api.spoonacular.com/recipes/random"; // first API call to get random recipes
const API_PATH2 = "https://api.spoonacular.com/recipes/informationBulk"; // second API call to get information about recipes
const apiUrlExtension3 = "&includeNutrition=true";
const apiUrlExtensionRecipes = "?ids=";

// Function to retrieve specified number of recipe IDs from Spoonacular API
async function getRecipeIds(diet) {
  try {
    const apiUrlExtension = "?tags=" + diet; // this is where we need the result of the diet dropdown entered
    const apiNumberOfResults = "&number=4";
    const apiUrl =
      API_PATH + apiUrlExtension + apiNumberOfResults + API_APP_KEY2;
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

// Function to get detailed information about the recipes.
const getRecipes = async diet => {
  try {
    const recipeIds = await getRecipeIds(diet);
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
    // Reduce the amount of data in Spoonacular response to data we will use.
    // We want recipe title, image, Spoonacular URL, caloric data.
    const reducedRecipesData = response.map(item => {
      return {
        title: item.title,
        image: item.image,
        url: item.spoonacularSourceUrl.title,
        nutrientsUnit: item.nutrition.nutrients[0].unit,
        nutrientsName: item.nutrition.nutrients[0].name,
        nutrientsAmount: item.nutrition.nutrients[0].amount
      };
    });
    // Return the result so it can be used in html-routes to then populate recipes.handlebars with data.
    return reducedRecipesData;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getRecipes };
