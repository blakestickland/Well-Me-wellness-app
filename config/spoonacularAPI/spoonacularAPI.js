"use strict";

const getRecipes = () => {
  // const recipesReturned = {
  //   firstName: "John",
  //   lastName: "Doe",
  //   age: 50,
  //   eyeColor: "blue",
  //   beard: "YESSSSIRRRREE"
  // };

  const fetch = require("node-fetch");

  const API_APP_KEY2 = "&apiKey=74f87b20cfd04c5aa17c1f09d672b5fa";
  const API_APP_KEY4 = "&apiKey=12379bbb78244c0189010a85deb6a8e3"; // second API key for times when 402 error is returned
  const API_PATH = "https://api.spoonacular.com/recipes/complexSearch";
  const API_PATH2 = "https://api.spoonacular.com/recipes/informationBulk";
  // eslint-disable-next-line no-unused-vars
  // const recipesReturned = [];
  // Gets a bunch of recipes matching the keyword searched.
  const apiUrlExtension = "?diet=" + "vegan"; // this is where we need the result of the diet dropdown entered
  const apiNumberOfResults = "&number=4";
  const apiUrl = API_PATH + apiUrlExtension + apiNumberOfResults + API_APP_KEY2;
  let id;
  let recipesReturned;
  // const apiUrlExtension2 = "/information";
  const apiUrlExtension3 = "&includeNutrition=true";
  let recipeIds = "";
  const apiUrlExtensionRecipes = "?ids=";

  fetch(apiUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(data => data.json())
    .then(response => {
      for (let i = 0; i < response.results.length; i++) {
        id = response.results[i].id;
        if (i < response.results.length - 1) {
          recipeIds += `${id},`;
        } else {
          recipeIds += `${id}`;
        }
      }
      bulkRecipeQuery();
    })
    .catch(err => console.error(err));

  const bulkRecipeQuery = () => {
    const apiUrl2 =
      API_PATH2 +
      apiUrlExtensionRecipes +
      recipeIds +
      apiUrlExtension3 +
      API_APP_KEY4;

    fetch(apiUrl2, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(data => data.json())
      .then(response => {
        recipesReturned = response;
        for (let i = 0; i < response.length; i++) {
          console.log(response[i].title);
          console.log(response[i].image);
          console.log(response[i].id);
          console.log(response[i].spoonacularSourceUrl);
          console.log(response[i].nutrition.nutrients[0].name);
          console.log(response[i].nutrition.nutrients[0].amount);
          console.log(response[i].nutrition.nutrients[0].unit);
          // recipesReturned.push(response);
        }
      })
      .catch(err => console.error(err));
    return recipesReturned;
  };
};

module.exports = { getRecipes };
