// Requiring connection module
var connection = require("./connection.js");

// Defining orm object
var orm = {
    // Select all data from table specified.
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        cb(result);
      });
    },
    // Insert row into database with specified data
    insertOne: function(table, col_one,col_two, val_one, val_two) {
      var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
      connection.query(queryString, [table, col_one,col_two, val_one, val_two], function(err, result) {
        if (err) throw err;

        cb(result);
        
      });
    },
    // Update column in row at specified parameter location
    updateOne: function(table,col_one,val_one,col_key,val_key) {
      var queryString =
        "UPDATE ?? SET ?? = ? WHERE ?? = ?";
  
      connection.query(
        queryString,
        [table,col_one,val_one,col_key,val_key],
        function(err, result) {
          if (err) throw err;
          console.log(result);
          cb(result);
      });
    }
};

// Export orm
module.exports = orm;