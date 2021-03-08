// const db = require("../models");
// const passport = require("../config/passport");
const { response } = require("express");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { getRecipes } = require("../config/spoonacularAPI/spoonacularAPI");

module.exports = function(app) {
  //Route recipe page to get DIET DATA from DB
  app.get("/api/recipeInspiration", isAuthenticated, (req, res) => {
    res
      .json({
        diet: req.user.diet,
        UserId: req.user.id
      })
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  });
  const diet = res.diet;
  console.log("this may be the diet 1" + diet);
  console.log("this may be the diet 2" + response.diet);
  console.log("this may be the diet 3" + req.user.diet);

  // // Run getRecipes() which will return
  // // Spoonacular API calls with specified number of recipes.
  // getRecipes(diet).then(response => {
  //   // Reduce the amount of data in Spoonacular response to data we will use.
  //   response.map(item => {
  //     const reducedRecipesData = {
  //       title: item.title,
  //       image: item.image,
  //       url: item.spoonacularSourceUrl,
  //       nutrientsUnit: item.nutrition.nutrients[0].unit,
  //       nutrientsName: item.nutrition.nutrients[0].name,
  //       nutrientsAmount: item.nutrition.nutrients[0].amount
  //     };
  //     console.log("This is reducedRecipesData: " + reducedRecipesData);
  //     return res.json(reducedRecipesData);
  //   });
  //   // console.log(" reducedRecipesData is: " + reducedRecipesData);
  // });
};
