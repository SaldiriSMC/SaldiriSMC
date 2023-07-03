const httpStatus = require('http-status');
const { User } = require('../../models/v2/index');
const ApiError = require('../../utils/ApiError');
const paginate = require("../../models/plugins/v2/paginate.plugin")
/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promise<User>}
 */
const createUser = async (userBody,tenantId, user) => {
  if(user){
    if( userBody.designation === "hr"){
      return User.create({...userBody, tenantId: tenantId, role:"hr"});
    }else{
      return User.create({...userBody, tenantId: tenantId, role:"employee"});
    }
  }else{
    return User.create({...userBody, tenantId: tenantId
    });
  }
  
   
};

/**
 * Query for users
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */

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
/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findByPk(id);
};

/**
 * Get user by email
 * @param {string} email
 * @returns {Promise<User>}
 */
const getUserByEmail = async (email) => {
  return User.findOne({where:{ email:email }});
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (updateBody,userId) => {
  const user = await getUserById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  const emialTaken = await getUserByEmail(updateBody?.email)
  console.log("taken email----->>>>>",emialTaken)
  if (updateBody.email && emialTaken) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  const user_ = await User.update(updateBody,{where:{id:userId}})
  return {message:"user updated successfully"};
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  const user = await User.findByPk(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  await user.destroy();
  return {message:"user deleted successfully"};
};

module.exports = {
  createUser,
  queryUsers,
  getUserById,
  getUserByEmail,
  updateUserById,
  deleteUserById,
};
