'use strict'
module.exports = (sequelize, DataTypes) => {
    const History = sequelize.define('History',{
        text1: DataTypes.STRING,
        text2: DataTypes.STRING,
        text3: DataTypes.STRING,
        text4: DataTypes.STRING,
        text5: DataTypes.STRING,
        textSize: DataTypes.INTEGER,
        spaceSize: DataTypes.INTEGER,
    },{ freezeTableName: true, })
    return History;
}
