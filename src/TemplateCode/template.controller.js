const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { userService } = require('../services/v2');
const { User, Tenant } = require('../models/v2/index');
const { response } = require('../utils/response');

const createUser = catchAsync(async (req, res) => {
  try {
    const isEmail = await User.findOne({ where: { email: req.body.email } });
    if (isEmail === null) {
      const key = req.get('X-Tenent-Key');
      const tenant = await Tenant.findOne({ where: { key: key } });
      const user = await userService.createUser(req.body, tenant.id);
      if (user) {
        response(res, { user }, 'User created succesfully', httpStatus.CREATED);
      }
    } else {
      response(res, '', 'Email already taken', httpStatus.BAD_REQUEST);
    }
  } catch (err) {
    console.log(err);
  }
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(req.query, filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
}); 

const updateUser = catchAsync(async (req, res) => {
  await userService.updateUserById(req.body, req.params.userId.toString());
  response(res, '', 'user updated successfully', 200);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.deleteUserById(req.params.userId);
  response(res, '', 'user deleted successfully', 200);
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
