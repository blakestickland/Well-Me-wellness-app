"use strict";

// Use the dotenv file to store security related data such as API keys and passwords.
require("dotenv").config();

const API_APP_KEY2 = "&apiKey=" + process.env.API_KEY2;
const API_APP_KEY4 = "&apiKey=" + process.env.API_KEY4; // another API key for times when 402 error is returned

const API_PATH = "https://api.spoonacular.com/recipes/complexSearch";
const API_PATH2 = "https://api.spoonacular.com/recipes/";
// eslint-disable-next-line no-unused-vars
// const recipesReturned = [];

// Gets a bunch of recipes matching the keyword searched.
let apiUrl = API_PATH;
const apiUrlExtension = "?diet=" + "vegan"; // this is where we need the result of the diet dropdown entered
const apiNumberOfResults = "&number=4";
apiUrl += apiUrlExtension + apiNumberOfResults + API_APP_KEY2;

const apiUrl2 = API_PATH2;
let id;
const apiUrlExtension2 = "/information";
const apiUrlExtension3 = "?includeNutrition=true";

$.ajax({
  url: apiUrl,
  method: "GET"
}).then(response => {
  console.log(apiUrl);
  console.log(response);
  console.log(response.results.length);
  for (let i = 0; i < response.results.length; i++) {
    id = response.results[i].id;
    console.log(id);
    const query =
      apiUrl2 + id + apiUrlExtension2 + apiUrlExtension3 + API_APP_KEY4;
    console.log(query);
    $.ajax({
      url: query,
      method: "GET"
    }).then(response => {
      console.log(response.title);
      console.log(response.image);
      console.log(response.spoonacularSourceUrl);
      recipesReturned = response;
    });
  }
});
// -------
// to do change responses to objects to be called instead of console logged.
