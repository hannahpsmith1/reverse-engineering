// HS - This is referring to lines 33 and 34 on the members.html page within the public folder.  This allows jQuery to be referenced here rather than in a script tag in the html document (for clarity)
$(document).ready(function() {
  // HS- This function is calling the members.html document using jQuery and executing the fuction of getting the user function
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    // HS - above (line 6) is a get request following the api route /api/user_data and once that is rendered calls the function rendering the member-name on line 28 on members.html 
    $(".member-name").text(data.email);
  });
});
