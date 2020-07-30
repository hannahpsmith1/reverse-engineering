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




*[api-routes](###api-routes)      
*[html-routes](###html-routes)    