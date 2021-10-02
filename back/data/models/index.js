const Sequelize = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname,"../database/data.db"),
});

const db = {};
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.list = require('./list')(sequelize,Sequelize);
db.history = require('./history')(sequelize,Sequelize);
module.exports = db;

