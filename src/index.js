const mongoose = require('mongoose');
const {sequelize} = require("./config/mySqlConnection")
const app = require('./app');
const config = require('./config/config');
const logger = require('./config/logger');
const user = require('./models/v2/user.model');
const token = require('./models/v2/token.model')
const tenant = require('./models/v2/tenant.model')
const attendance = require("./models/v2/attendance.model")
const time = require("./models/v2/time.model")

let server;
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info('Connected to MongoDB');
  server = app.listen(config.port,() => {
    logger.info(`Listening to port ${config.port}`);
  });
});
const mySqlConnection = async() =>{
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  // const db = {}
  // db.sequelize = Sequelize
  // db.sequelize = sequelize
  user.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync of users is done")
  }).catch((err)=>{
    console.log(err)
  })
  token.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync of tokens is done")
  }).catch((err)=>{
    console.log(err)
  })
  tenant.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync of tenant is done")
  }).catch((err)=>{
    console.log(err)
  })
  attendance.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync of attendance is done")
  }).catch((err)=>{
    console.log("attendance------->>>>>>",err)
  })
  time.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync of time is done")
  }).catch((err)=>{
    console.log("time------->>>>>>",err)
  })
  sequelize.sync({ alter: { drop: false } }).then(()=>{
    console.log("yes re sync is done")
  }).catch((err)=>{
    console.log(err)
  })
} 
mySqlConnection()
const exitHandler = () => {
  if (server) {
    server.close(() => {
      logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
