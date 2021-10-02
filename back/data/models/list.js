'use strict'
module.exports = (sequelize, DataTypes) => {
    const List = sequelize.define('List',{
        title: DataTypes.STRING,
        subtitle: DataTypes.STRING,
    },{ freezeTableName: true, })
    List.associate = (models) => {};
    return List;
}
