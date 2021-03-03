const db = require("../models");
const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  // Passport.authenticate middleware
  //  Route for user login
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    const loginUser = {
      email: req.user.email,
      id: req.user.id,
      name: req.user.name
    };
    res.json(loginUser);
  });

  // Route for user signup
  app.post("/api/signup", (req, res) => {
    console.log("body", req.body);
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      gender: req.body.gender,
      diet: req.body.diet
    })
      .then(response => {
        console.log(response);
        res.redirect(301, "/members");
      })
      .catch(err => {
        console.log(err, "this is the err");
      });
  });

  // Route for user logout
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting userData if authenticated and logged in
  app.get("/api/user_data", isAuthenticated, (req, res) => {
    console.log(req.user, " api log");
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back this userData
      res.json({
        name: req.user.name,
        weight: req.user.weight,
        height: req.user.height,
        diet: req.user.diet
      });
    }
  });
};
