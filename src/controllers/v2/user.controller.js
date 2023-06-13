const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const userService  = require('../../services/v2/user.service');
const { User,Tenant } = require('../../models/v2/index');
const createUser = catchAsync(async (req, res) => {
  try{
    const isEmail = await User.findOne({ where: { email: req.body.email } })
    if(isEmail === null){
      const key = req.get('X-Tenent-Key');
      const tenant = await Tenant.findOne({ key: key });
        const user = await userService.createUser(req.body,tenant.id);
        if(user){
          res.status(httpStatus.CREATED).send({ user });
        }
      }else{
      res.status(httpStatus.BAD_REQUEST).send({message:'Email already taken'});
    }
  }
  catch(err){
    console.log(err)
    res.send(err)
  }
});

const getUsers = catchAsync(async (req, res) => {
  console.log('req.query',req.query)
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await userService.queryUsers(req.query,filter, options);
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
