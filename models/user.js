"use strict";
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        api_key: DataTypes.STRING,
        
    }, {
        classMethods: {
            associate: function (models) {
                User.hasMany(models.Miner);
            }
        },
        tableName: "users"
    });
    
    return User;
};