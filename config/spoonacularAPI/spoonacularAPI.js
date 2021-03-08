"use strict";

const fetch = require("node-fetch");
require("dotenv").config();
const API_APP_KEY2 = "&apiKey=" + process.env.API_KEY2;
const API_APP_KEY4 = "&apiKey=" + process.env.API_KEY4; // second API key for times when 402 error is returned
const API_PATH = "https://api.spoonacular.com/recipes/random"; // first API call to get random recipes
const API_PATH2 = "https://api.spoonacular.com/recipes/informationBulk"; // second API call to get information about recipes
const apiUrlExtension3 = "&includeNutrition=true";
const apiUrlExtensionRecipes = "?ids=";
// const userDiet = require("../../");

async function getRecipeIds(diet) {
  try {
    const apiUrlExtension = "?tags=" + diet; // this is where we need the result of the diet dropdown entered
    const apiNumberOfResults = "&number=8";
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
    return response;
  } catch (err) {
    console.error(err);
  }
};

module.exports = { getRecipes };
