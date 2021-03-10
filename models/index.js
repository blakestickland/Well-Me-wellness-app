'use strict';

var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

require('dotenv').config();
const API_APP_KEY2 = "&apiKey=" + process.env.API_KEY2;


// console.log("API_KEY2 is: " + process.env.API_KEY2);
// console.log("API_APP_KEY2 is: " + API_APP_KEY2);
// console.log(process.env);
console.log(process.env);
console.log(config.use_env_variable);

// If Else to select the environment config
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
  console.log("Using the Production environment to connect to database");
} else {
  // var sequelize = new Sequelize(config.database, config.username, config.password, config);
  var sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    config
    );
  console.log("Using the Development environment to connect to database");
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
