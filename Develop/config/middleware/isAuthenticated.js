// HS - module.exports is exporting the function for other files to be used 
// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // HS - conditional statment that has 2 routes, if the request user object is not null it will execute the if statment
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    return next();
  }
// HS - if the object returns null or none they will be redirected to the home page
  // If the user isn't logged in, redirect them to the login page
  return res.redirect("/");
};
