var mysql = require('mysql');


function connecttodatabase(){

 
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "coderanker"
});

con.connect(function(err) {
  if (err) {
    return console.error('error: ' + err.message);
  }

  console.log('Connected to the MySQL server.');
  
});
}


module.exports=connecttodatabase;