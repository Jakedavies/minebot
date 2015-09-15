"use strict";
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Miner = sequelize.define("Miner", {
        name: DataTypes.STRING
    },{
        classMethods: {
            associate: function (models) {
                Miner.hasMany(models.Report);
                Miner.belongsTo(models.User);
            }
        },
        tableName: "miners"
    });
    return Miner;
};