"use strict";
var Sequelize = require('sequelize');

module.exports = function (sequelize, DataTypes) {
    var Report = sequelize.define("Report", {
        object_id: DataTypes.INTEGER,
        position_x: DataTypes.INTEGER,
        position_y: DataTypes.INTEGER,
        position_z: DataTypes.INTEGER,
    },{
        classMethods: {
            associate: function (models) {
                Report.belongsTo(models.Miner);
            }
        },
        tableName: "reports"
    });
    
    return Report;
};