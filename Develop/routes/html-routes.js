// HS - Requiring the npm package path is part of nodejs and allows us to work with the file structure. 
// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// HS - this is creating the variable isAuthenticated as a shorted version of all of the code found on the isAuthenticated page in the config file. 
// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

// HS - module.exports is used for defining what a module exports and makes available through require()
// In this case it will be the 3 routes hit if you hit the root route /, the /login route, or the /members route
module.exports = function(app) {
// HS - for the route route /, if the user is already a member, redirect them to the /members page, if not, send them to the signuphtml route
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  // if a user goes to the html /login and has an account, redirect to members, if not redirect them to the login page see line 27
  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Lines 34 is using the isAuthenticated variable/code from line 7 to determine whether a user will have access to this route, if they don't they are then redirected to the login page
  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

};
