const { Sequelize } = require('sequelize');
exports.sequelize = new Sequelize('techteam', 'techteam', '123456', {
    host: 'host.docker.internal',
    port: 3306,
    user: 'techteam',
    password: '123456',
    database: 'techteam',
    dialect: "mysql",
  });