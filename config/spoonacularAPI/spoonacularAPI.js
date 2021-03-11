"use strict";

require("dotenv").config();
const API_APP_KEY2 = "&apiKey=" + process.env.API_KEY2; // API keys for Spoonacular; limited to 150 points a day.
const API_APP_KEY4 = "&apiKey=" + process.env.API_KEY4; // second API key to not overload the first one with hits.
const API_PATH = "https://api.spoonacular.com/recipes/random"; // first API call to get random recipes
const API_PATH2 = "https://api.spoonacular.com/recipes/informationBulk"; // second API call to get information about recipes
const apiUrlExtension = "?tags="; // this is where we need the result of the diet dropdown entered
const apiNumberOfResults = "&number=8";
const apiUrlExtensionIds = "?ids=";
const apiUrlExtension3 = "&includeNutrition=true";

// Place API config data into an object and send to recipesLogic file.
const spoonacularConfig = {
  API_APP_KEY2,
  API_APP_KEY4,
  API_PATH,
  API_PATH2,
  apiUrlExtension,
  apiNumberOfResults,
  apiUrlExtensionIds,
  apiUrlExtension3
};

module.exports = { spoonacularConfig };
