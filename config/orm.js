var connection = require("./connection.js");

var orm = {
    selectAll: function(table) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [table], function(err, result) {
        if (err) throw err;
        for(var i = 0;i<result.length;i++){
            console.log(result[i].burger_name);

        }
      });
    },
    insertOne: function(table, var_char, boolean, name) {
      var queryString = "INSERT INTO ?? (?,?) VALUES (?,false)";
      connection.query(queryString, [table, var_char, boolean, name], function(err, result) {
        if (err) throw err;
        
      });
    },
    updateOne: function(table,change,value,id) {
        var queryString =
          "UPDATE ?? SET ?? = ? WHERE id = ?";
    
        connection.query(
          queryString,
          [table,change,value,id],
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
      }
  };
  
  module.exports = orm;