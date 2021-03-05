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
    const test2 = getRecipes();
    console.log(test2);
    // console.log(test2.firstName);
    // console.log(test2.lastName);
    // console.log(test2.age);
    // console.log(test2.eyeColor);
    // console.log(test2.beard);
    // console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log(req.user);
      return res.render("members", {
        style: "members.css",
        name: req.user.name,
        four: test
        // sixty: test2.beard
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
