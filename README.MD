# nodejs_api_mysql
A Restapi made with Nodejs and MySql database

## Following are the files and there function:

- config.js : file contains code for connection to mysql database 
- index.js  : file contains code for starting the server
- route > mystore.js : file contains code for various routes (/create,/read,/delete,....) and controllers 
- package.json : file contains project details and dependencies 
- table.sql : sql command to create table 

## Following are the routes , please use proper req types [GET,POST,DELETE,PATCH] :-

1. GET all the stores   :- http://localhost:8000/store/read 
2. GET a paticular store:- http://localhost:8000/store/read/{store id}
3. CREATE a store       :- http://localhost:8000/store/create                   
4. UPDATE a store       :- http://localhost:8000/store/update/{store id}
5. DELETE a store       :- http://localhost:8000/store/delete/{store id}
