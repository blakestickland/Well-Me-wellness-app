/* eslint-disable indent */
/* eslint-disable prettier/prettier */
const db = require("../models");

// Routes
module.exports = (app) => {
    app.get("/api/user", (req, res) => {
      const query = {};
      if (req.query.user_id) {
        query.AuthorId = req.query.user_id;
      }
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Author
      db.Dailylog.findAll({
        where: query,
        include: [db.User],
      }).then((results) => res.json(results));
    });
  
    // // Get route for retrieving a single post
    // app.get("/api/user/:id", (req, res) => {
    //   // Here we add an "include" property to our options in our findOne query
    //   // We set the value to an array of the models we want to include in a left outer join
    //   // In this case, just db.Author
    //   db.Post.findOne({
    //     where: {
    //       id: req.params.id,
    //     },
    //     include: [db.User],
    //   }).then((dbPost) => res.json(dbPost));
    // });
  
    // POST route for saving a new post
    app.post("/api/dailylog", (req, res) => {
      db.Dailylog.create({
          calories: req.body.calories,
          excercise: req.body.excercise,
          // eslint-disable-next-line camelcase
          water_intake: req.body.water_intake,
          sleep: req.body.sleep,
          // eslint-disable-next-line camelcase
          daily_score: req.body.daily_score
      }).then((results) => res.json(results));
    });
  
    
    // // DELETE route for deleting posts
    // app.delete("/api/dailylog/:id", (req, res) => {
    //   db.Dailylog.destroy({
    //     where: {
    //       id: req.params.id,
    //     },
    //   }).then((results) => res.json(results));
    // });
    
  

    // // PUT route for updating posts
    // app.put("/api/dailylog", (req, res) => {
    //   db.Dailylog.update(req.body, {
    //     where: {
    //       id: req.body.id,
    //     },
    //   }).then((results) => res.json(results));
    // });
  };