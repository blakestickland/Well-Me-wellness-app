// Requiring path to so we can use relative routes to our HTML files
// const path = require("path");
const isAuthenticated = require("../config/middleware/isAuthenticated");

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
    console.log(isAuthenticated);
    if (isAuthenticated) {
      console.log(req.user);
      return res.render("members", {
        style: "members.css",
        user: req.user
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
