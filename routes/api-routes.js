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
    db.User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      weight: req.body.weight,
      height: req.body.height,
      age: req.body.age,
      gender: req.body.gender,
      diet: req.body.diet,
      activity: req.body.activity,
      goal: req.body.goal
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
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user data
      res.json({
        name: req.user.name,
        weight: req.user.weight,
        height: req.user.height,
        diet: req.user.diet,
        UserId: req.user.id
      });
    }
  });
  //Route to log daily results
  app.post("/api/members", isAuthenticated, (req, res) => {
    console.log("body", req.body);
    db.Dailylog.create({
      UserId: req.user.id,
      calories: req.body.calories,
      exercise: req.body.exercise,
      // eslint-disable-next-line camelcase
      water_intake: req.body.water_intake,
      sleep: req.body.sleep,
      // eslint-disable-next-line camelcase
      daily_score: req.body.daily_score
    })
      .then(response => {
        console.log(response);
        res.json({ message: "Success entering daily log", result: true });
      })
      .catch(err => {
        res.json({ message: "Unsuccessful entering daily log", result: false });
        console.error(err, "this is the err");
      });
  });
  //Route recipe page
  app.get("/api/recipeInspiration", isAuthenticated, (req, res) => {
    res
      .json({
        name: req.user.name,
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
  //Route to update user Weight goal
  app.patch("/api/members", isAuthenticated, (req, res) => {
    db.User.update(
      {
        weight: req.body.weight,
        activity: req.body.activity,
        goal: req.body.goal
      },
      {
        where: {
          id: req.user.id
        }
      }
    )
      .then(() => {
        res.redirect(302, "/members");
      })
      .catch(err => {
        console.log(err, "this is the err");
      });
  });
};
