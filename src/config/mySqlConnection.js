const { Sequelize } = require('sequelize');
exports.sequelize = new Sequelize('firstdb', 'techteam', '123456', {
    host: '127.0.0.1',
    dialect: "mysql"
  });