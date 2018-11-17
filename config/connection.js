// setting up mysql connection
var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL)
{
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    port: '3306',
    host: 'z12itfj4c1vgopf8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'damqsd175apwd4t7',
    password: 'nloflvhmb4bmer6n',
    database: 'g93ao3nc9l66s777'
  });
};

// connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "",  // please provide your own password here
//   database: "burgers_db"
// });

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
