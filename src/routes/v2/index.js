const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const attendanceRoute = require("./attendance.route")
const departmentRoute = require("./department.route")
const designationRoute = require("./designation.route")
const StatusRoute = require("./status.route")
const ModuleRoute = require("./module.route")
const emailTemplateRoute = require("./emailTemplate.route")
const tableRoute = require("./table.route")
const clientRoute = require("./Client.route")
const docsRoute = require('./docs.route');
const config = require('../../config/config');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/attendance',
    route: attendanceRoute,
  },
  {
    path: '/department',
    route: departmentRoute,
  },
  {
    path: '/designation',
    route: designationRoute,
  },
  {
    path: '/status',
    route: StatusRoute,
  },
  {
    path: '/modules',
    route: ModuleRoute,
  },
  {
    path: '/email-templates',
    route: emailTemplateRoute,
  },
  {
    path: '/table',
    route: tableRoute,
  },
  {
    path: '/clients',
    route: clientRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {  
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
