const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const attendanceRoute = require("./attendance.route")
const departmentRoute = require("./department.route")
const designationRoute = require("./designation.route")
const emailTemplateRoute = require("./emailTemplate.route")
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
    path: '/email-templates',
    route: emailTemplateRoute,
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
