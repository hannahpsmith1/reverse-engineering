'use strict';
// HS - below are listed dependencies - fs to read/write files, path as also seen on the html-routes.js sequelize, as seen on server.js.
// HS - for var basename - The path.basename() method returns the last portion of a path,
// HS - env refers to the environment that the app will run, those are specified in the .json (package.json) but those files cannot be commented on individually
// HS - config, the __ in dirname tells you the absolute path of the directory containing the currently executing file, in this case it will be the config.json
// HS - var db is instantiating an empty opject to populate
var fs        = require('fs');
var path      = require('path');
var Sequelize = require('sequelize');
var basename  = path.basename(module.filename);
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
var db        = {};

// HS - conditional.  If the config environment variable (config.json in config folder)
if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
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

// HS - Sequelize (capital) references the standard library, while sequelize (lowercase) references the connection to the DB.
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// HS - exports the connection for other files to use
module.exports = db;
