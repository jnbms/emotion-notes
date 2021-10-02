'use strict'
module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History',{
        1: DataTypes.STRING,
        2: DataTypes.STRING,
        3: DataTypes.STRING,
        4: DataTypes.STRING,
        5: DataTypes.STRING,
    },{ freezeTableName: true, })
    return History;
}
