// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { getRecipes } = require("../config/spoonacularAPI/spoonacularAPI");
module.exports = function(app) {
  // routing for the signup page
  app.get("/", (req, res) => {
    res.render("signup", {
      style: "signup.css"
    });
  });
  //route to redirect from login to signup page
  app.get("/signup", (req, res) => {
    res.render("signup", {
      style: "signup.css"
    });
  });
  // Routing for the login page
  app.get("/login", (req, res) => {
    res.render("login", {
      style: "signup.css"
    });
  });
  // Routing for the members page
  // Authenticated middleware on this route.
  app.get("/members", isAuthenticated, (req, res) => {
    console.log(isAuthenticated);
    if (isAuthenticated) {
      return res.render("members", {
        style: "members.css",
        UserId: req.user.id,
        user: req.user
      });
    }
    // User not logged in will be redirected to the signup page
    return res.render("signup", {
      style: "signup.css"
    });
  });

  //Routing for graph page
  app.get("/graph", (req, res) => {
    res.render("graph", {
      style: "graph.css",
      user: req.user
    });
  });
  //Routing for recipeInspiration page
  app.get("/recipeInspiration", (req, res) => {
    getRecipes().then(response => {
      console.log(response);
      res.render("recipeInspiration", {
        style: "recipes.css",
        user: req.user,
        recipeTitle: response[0].title,
        recipeImage: response[0].image,
        recipeUrl: response[0].spoonacularSourceUrl,
        recipeNutrientsUnit: response[0].nutrition.nutrients[0].unit,
        recipeNutrientsName: response[0].nutrition.nutrients[0].name,
        recipeNutrientsAmount: response[0].nutrition.nutrients[0].amount
      });
      return response;
    });
    });
    // const fruties = ['apple', 'orange', 'kiwi']

    // let transformed = []
    // for (let index = 0; index < fruiies.length; index++) {
    //   const element = fruiies[index];
    //   transformed.push('a')
    // }
    // const fruit2 = fruities.map((fruit) => {
    //   return 'a'
    // })

    // getRecipes().then(function(response) {

    //   return response.map((item) => {
    //     return {
    //       title: item.title,

    //     }
    //   })
    // getRecipes().then(function(response){
    //   return response.map(item => {
    //     return {
    //       recipeTitle: response.title,
    //       // recipeImage: response.image,
    //       // recipeId: response.id,
    //       // recipeUrl: response.spoonacularSourceUrl,
    //       // recipeNutrientsUnit: response.nutrition.nutrients[0].unit,
    //       // recipeNutrientsName: response.nutrition.nutrients[0].name,
    //       // recipeNutrientsAmount: response.nutrition.nutrients[0].amount,
    //     }
    //   })
    // })
    //   for (let i = 0; i < response.length; i++) {
    //     console.log(response[i].title);d
    //     console.log(response[i].image);
    //     console.log(response[i].id);
    //     console.log(response[i].spoonacularSourceUrl);
    //     console.log(response[i].nutrition.nutrients[0].unit);
    //     console.log(response[i].nutrition.nutrients[0].name);
    //     console.log(response[i].nutrition.nutrients[0].amount);
    //     recipesReturned.push(response);
    //   }
    //   return response;
    // });
  // };
  //Route to update User Goals
};
