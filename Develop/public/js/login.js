// HS - this is using jQuery code from login.html to get certain inputs 
$(document).ready(function() {
  // HS - Below there are 3 variables defined which are specific to login.html
  // Getting references to our form and inputs
  // HS - signupForm is using jquery to get information from signup.html.  It is getting the html element form with the class (. in jQuery) login.
  var loginForm = $("form.login");
  // HS - the emailInput is using jQuery to get the html element input, with the class (# in jQuery) email-input (line 31 on login.html)
  var emailInput = $("input#email-input");
  // HS - the passworInput is using jQuery to get the html element input, with the class (#) of password-input (line 35 on login.html)
  var passwordInput = $("input#password-input");

  // HS - lines 14-29 are conditions for an event listener (in jQuery format) of clicking on the submit button 
  // When the form is submitted, we validate there's an email and password entered
  loginForm.on("submit", function(event) {
    event.preventDefault();
    // HS - the object userData is getting the emailInput value, and passwordInput value and associating them with the keys email and password respectively
    var userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };
// HS - Here is a conditional where if either there is no (!) email and password given return;
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password we run the loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val("");
    passwordInput.val("");
  });

  // HS - If user inputs were valid this loginUser function is called.
  // loginUser does a post to our "api/login" route and if successful, redirects us the the members page
  function loginUser(email, password) {
    // HS - this is a Post call that would push the email and password object into our database from the api route api/login
    $.post("/api/login", {
      email: email,
      password: password
    })
    // HS - after and ONLY after the post request was successful THEN we can execute the function to redirect (window.location.replace) to redirect to /members
      .then(function() {
        window.location.replace("/members");
        // HS - if there is an error you would alert on lines 46-38. 
        // If there's an error, log the error
      })
      .catch(function(err) {
        console.log(err);
      });
  }
});
