const httpStatus = require('http-status');
const { User } = require('../models/v2/index');
const ApiError = require('../utils/ApiError');

const createUser = async (userBody,tenantId, user) => {
  if(user === "user"){
    return User.create({...userBody, tenantId: tenantId, role:"employee"});
  }else{
    return User.create({...userBody, tenantId: tenantId, designationId:5, departmentId:4});
  }
};

const queryUsers = async (filter, options) => {
  let condition = {}
  if(filter.name){
    condition.name = filter.name
  }
  if(filter.role){
    condition.role = filter.role
  }
  const users = await User.findAndCountAll({limit:filter.limit, offset:((filter.page - 1 ) * filter.limit),where:condition});
  const totalResults = users.count
  const totalPages = Math.ceil(totalResults / filter.limit);
  if(filter.sortBy === "desc"){
    return {results:users.rows.reverse(), page:filter.page, limit:filter.limit, totalPages: totalPages, totalResults:totalResults};
  }
  return {results:users.rows, page:filter.page, limit:filter.limit, totalPages: totalPages, totalResults:totalResults};
};

const getUserById = async (id) => {
  return User.findByPk(id);
};

const getUserByEmail = async (email) => {
  const user = await User.findOne({where:{ email:email }});
  return user
};

const updateUserById = async (updateBody,userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  if(updateBody?.designationId === 1 ){
    const user_ = await User.update({...updateBody, role:"hr"},{where:{id:userId}})
  }else{
    const user_ = await User.update(updateBody,{where:{id:userId}})
  }
};

const deleteUserById = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.destroy();
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
