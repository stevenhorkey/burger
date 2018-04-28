var orm = require("./config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll('burgers', function(res){
            cb(res)
        })
    },
    insertOne: function(val_one, val_two,cb){
        orm.insertOne('burgers', 'burger_name','devoured', val_one, val_two, function(res){
            cb(res)
        })
    },
    updateOne: function(val_one, val_key,cb){
        orm.updateOne('burgers','devoured',val_one,'id',val_key, function(res){
            cb(res)
        })
    }
}

module.exports = burger;