const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const userService  = require('../../services/v2/user.service');

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser(req.body,res);
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  // const filter = pick(req.query, ['name', 'role']);
  // const options = pick(req.query, ['sortBy', 'limit', 'page']);
  // const result = await userService.queryUsers(filter, options);
  const result = await userService.queryUsers();
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
  const id = JSON.stringify(req.params.userId)
  console.log("if --? ",typeof(req.params.userId.toString()) ,typeof(req.params.userId))
  const user = await userService.updateUserById(req.body,req.params.userId.toString(),);
  console.log("user------> ",user)
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  const user = await userService.deleteUserById(req.params.userId);
  res.send(user);
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};