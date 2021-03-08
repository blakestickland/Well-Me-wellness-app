document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM loaded");

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
  };
});
