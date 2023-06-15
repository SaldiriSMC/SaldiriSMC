const { version } = require('../../package.json');
const config = require('../config/config');

const swaggerDef = {
  openapi: '3.0.0',
  validatorUrl:false,
  info: {
    title: 'Saldir SMC Backend',
    version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE',
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
    {
      url: `http://localhost:${config.port}/v2`,
    },
  ],
};

module.exports = swaggerDef;
