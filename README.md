# Reverse Engineering


## Project Description 
using an existing codebase, comment on the code to explain what's going on. 

## Code Repo Link
[Github Link](https://github.com/hannahpsmith1/reverse-engineering)


## Structure of Code 
*[config](##config)     
*[models](##models)  
*[public](##public)  
*[routes](##routes)  
*[package.json](##package.json)  
*[server.js](##server.js)  


## config
*[Middleware](##middleware)         
    *[isAuthenticated](###isAuthenticated.js)     
    * module.exports is exporting the function for other files to be used.        
    conditional statment that has 2 routes, if the request user object is not null it will execute the if statment       
    * if the object returns null or none they will be redirected to the home page



## models
*[index.js](##index)     
*[user.js](##user.js) 

    *Several comments inline from HS 1-6 describing dependencies , and a conditional statment.  Best option to view within document. 
    *Eventually a read, dir, sync, which in code is readdirSync, which shows reading the db, writing, and syncing to it via fs.    
    *  Please also see lines 38-39 of code

## public   
*[js](##js)     
*[stylesheet](##stylesheets) 

* login.js
* members.js
* signup.js
 ** In Case I don't get back to these three to reiterate, All of these are thouroughly detailed in those sheets before understsanding the assingment wasn't to recomment but to aggregate.  




## routes        
*[api.routes](####api.routes.js)
*[html.routes](####html.routes.js)       

words words words     
words words words      


*[package.json](###package.json)  
Users are not allowed to comment on .json files, but this json is looking for the dependencies to be run (express, mysql2, passport, and my sql to name a few)



*[server.js](###server.js)  

*  To be fair, this whole excersize I started by expecting I was editing comments on every page instead of doing this.  So i'm pretty late to the game, much of this will refer to specific documents with very helpful comments, before midnight tonight and then migrating them over to be helpful as a readme this week.  
