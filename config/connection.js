// Requiring MySQL
var mysql = require("mysql");

// Setting up specific connection
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "burgers_db",
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock'  
});

// Establishing connection. If err, throw error, otherwise, console.log the connected id we are assigned
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;