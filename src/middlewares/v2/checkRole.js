const { User, Token } = require('../../models/v2/index');
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');

const checkRoles = (roles) => async (req, res, next) => {
    return new Promise(async (resolve, reject) => {
      const authToken = req.headers.authorization.split(' ')[1];
      const token = await Token.findOne({ where: { token: authToken } });
      const user = await User.findOne({ where: { id: token?.user } });
      if (roles.length && !roles.includes(user.role)) {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Sorry you do not have access to this route.'));
      } else {
        resolve();
      }
    })
      .then((res) => {
        console.log(res);
        next();
      })
      .catch((err) => {
        console.log(err);
        next(err);
      });
  };
  
module.exports = checkRoles
