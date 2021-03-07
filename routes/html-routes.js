// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { getRecipes } = require("../config/spoonacularAPI/spoonacularAPI");
const { myFunc } = require("../config/spoonacularAPI/test");
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
    const test = myFunc();
    // getRecipes();
    async function waitForRecipes() {
      try {
        const response = await getRecipes();
        console.log("This is the html-routes test2 response: " + response);
        // responseTitle;
        return response;
      } catch (err) {
        console.error(err);
      }
    }
    waitForRecipes();
    console.log("This is the html-routes test response: " + test);
    // for (let i = 0; i < test2.response.length; i++) {
    //   console.log(test2[i].title);
    //   console.log(response[i].image);
    //   console.log(response[i].id);
    //   console.log(response[i].spoonacularSourceUrl);
    //   console.log(response[i].nutrition.nutrients[0].unit);
    //   console.log(response[i].nutrition.nutrients[0].name);
    //   console.log(response[i].nutrition.nutrients[0].amount);
    //   // recipesReturned.push(response);
    // }
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
