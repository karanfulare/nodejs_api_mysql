const mysql = require('mysql');
var connection = mysql.createConnection({
    port:3306,
    host:"localhost",
    user:"root",
    password:"Meher@1122",
    database:"karanstore"
});

connection.connect((err)=>{
    if(!err){
        console.log("conected to db");
    }
    else {
        console.log(err);
    }
});

module.exports=connection;