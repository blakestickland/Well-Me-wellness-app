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
  // Routing for the login page
  app.get("/login", (req, res) => {
    res.render("login", {
      style: "signup.css"
    });
  });
  // Routing for the members page
  // Authenticated middleware on this route.
  // User not logged will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    getRecipes().then(function(response) {
      console.log(JSON.stringify(response[0].summary));
    })
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
    //       // recipeUrl: response.url,
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
    console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log(req.user);
      return res.render("members", {
        style: "members.css",
        name: req.user.name,
        four: test
        // sixty: recipes[].title
      });
    }
    return res.render("signup", {
      style: "signup.css"
    });
  });

  //Routing for graph page
  app.get("/graph", (req, res) => {
    res.render("graph", {
      style: "graph.css"
    });
  });
};
