const { Sequelize } = require('sequelize');
exports.sequelize = new Sequelize('techteam', 'techteam', '123456', {
    host: '127.0.0.1',
    dialect: "mysql"
  });

