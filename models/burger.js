var orm = require("./config/orm.js");

orm.selectAll('burgers');

orm.insertOne('burgers','burger_name', 'devoured', name);

orm.updateOne('burger_db.burgers','devoured','true',id);


module.exports = //config setup