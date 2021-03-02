// Requiring path to so we can use relative routes to our HTML files

const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    res.render("signup", {
      style: "signup.css",
    });
  });
  app.get("/login", (req, res) => {
    res.render("login", {
      style: "signup.css",
    });
  });
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      console.log(req.user)
      return res.render("members", {
        style: "members.css",
        name: req.user.email
      });
    }
    return res.render("signup", {
      style: "signup.css",
    });
  });

  //Routing for graph page
  app.get("/graph", (req, res) => {
    res.render("graph", {
      style: "graph.css",
    });
  });
};
