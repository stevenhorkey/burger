var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, colToSearch, valOfCol) {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
        if (err) throw err;
        for(var i = 0;i<result.length;i++){
            console.log(result[i].party_name);

        }
      });
    },
    insertOne: function(whatToSelect, table) {
      var queryString = "SELECT ?? FROM ??";
    //   console.log(queryString);
      connection.query(queryString, [whatToSelect, table], function(err, result) {
          console.log(whatToSelect)
        if (err) throw err;
        for(var i = 0;i<result.length;i++){
            console.log(result[i][whatToSelect]);

        }
      });
    },
    updateOne: function(tableOneCol, tableTwoForeignKey, tableOne, tableTwo) {
        var queryString =
          "SELECT ??, COUNT(??) AS count FROM ?? LEFT JOIN ?? ON ??.??= ??.id GROUP BY ?? ORDER BY count DESC LIMIT 1";
    
        connection.query(
          queryString,
          [tableOneCol, tableOneCol, tableOne, tableTwo, tableTwo, tableTwoForeignKey, tableOne, tableOneCol],
          function(err, result) {
            if (err) throw err;
            console.log(result);
          }
        );
      }
  };
  
  module.exports = orm;