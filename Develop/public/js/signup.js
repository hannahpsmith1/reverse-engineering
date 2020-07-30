// HS - using jQuery to get the document.  Once it is loaded it would execute this function
$(document).ready(function() {
  // HS - Below there are 3 variables defined which are specific to signup.html
  // Getting references to our form and input
  // HS - signupForm is using jquery to get information from signup.html.  It is getting the semantic html element form with the class (. in jQuery) signup.
  var signUpForm = $("form.signup");
  // HS - the emailInput is using jQuery to get the semantic html element input, with the class (# in jQuery) email-input (line 28 on signup.html)
  var emailInput = $("input#email-input");
  // HS - the emailInput is using jQuery to get the semantic html element input, with the class (#) of password-input (line 32 on signup.html)
  var passwordInput = $("input#password-input");

// HS - lines 14-28 are conditions for an event listener (in jQuery format) of clicking on the submit button 
  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", function(event) {
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
    // HS - if the user has input an email and password execute the signUpUser Function (starts on line 34)
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    // This would put the input values given by the user and assigning them to emailInput and PasswordInput respectively which are defined as user and password above on lines 18-19
    emailInput.val("");
    passwordInput.val("");
  });

  // HS - If user inputs were valid this signUpUser function is called.  
  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    // HS - this is a Post call that would push the email and password object into our database from the api route api/signup
    $.post("/api/signup", {
      email: email,
      password: password
    })
    // HS - after and only after the post was successful THEN we can execute the function to redirect (window.location.replace) to redirect to /members
      .then(function(data) {
        window.location.replace("/members");
        // HS - if an error occurs with the redirect, you would use the built in method catch, and that would execute the function handleLoginErr (defined on lines 511-55)
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }
// HS - if there is an error you would alert on the page 2 different messages.  
  function handleLoginErr(err) {
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
