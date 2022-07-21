const mysql = require('mysql');
var connection = mysql.createConnection({
    port:3306,
    host:"localhost",                   // host currently local
    user:"root",
    password:"Meher@1122",              
    database:"karanstore"                // do change database name
});

connection.connect((err)=>{             // making connection with database
    if(!err){
        console.log("conected to db");
    }
    else {
        console.log(err);
    }
});

module.exports=connection;