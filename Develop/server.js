// HS - lines 3 and 4 are defining variables that require the npm packages express, and express-session.  This will allow these to be called using only the variable names going forward. 
// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// HS - passport is an npm package for authentication middleware, see also passport.js in the config folder
// Requiring passport as we've configured it
var passport = require("./config/passport");


// HS - defining the port and requiring the models folders where the sequelize files are
// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
var db = require("./models");
// HS - line 13 is creating links to the index.js and user.js which is where our sequelize is 

// **HS- by creating the variable app, we are able to call express as a function, then we use the express function to .use to get things like the urlencoded, json objects, and to defualt to the public folder  
// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// **HS - This is setting up our middleware
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// HS - This is requiring both the html routes and api routes, both of which are needed.  HTML to indicate what happens at each url and API to do CRUD actions to the db
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// HS - This is connecting to the database, then and only then does it show in the console the port number that you are on. 
// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
