var orm = require("./config/orm.js");

var burger = {
    selectAll: orm.selectAll('burgers'),
    insertOne: orm.insertOne('burgers','burger_name', 'devoured', name),
    updateOne: orm.updateOne('burger_db.burgers','devoured','true',id)
}


module.exports = burger;