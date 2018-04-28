var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        for(var i = 0;i<result.length;i++){
          console.log(result[i].burger_name);
        }
        cb(result);
      });
    },
    insertOne: function(table, col_one,col_two, val_one, val_two) {
      var queryString = "INSERT INTO ?? (??,??) VALUES (?,?)";
      connection.query(queryString, [table, col_one,col_two, val_one, val_two], function(err, result) {
        if (err) throw err;

        cb(result);
        
      });
    },
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
          }
        );
      }
  };
  
  module.exports = orm;