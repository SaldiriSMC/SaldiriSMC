const { Tenant } = require('../../models/v1/index');
const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');

const tenant = () => async (req, res, next) => {
  return new Promise(async (resolve, reject) => {
    const key = req.get('X-Tenent-Key');
    if (key) {
      const tenantKey = await Tenant.findOne({ key: key });
      console.log('tenantKey----->>>>>',tenantKey)
      if (tenantKey) {
        if(tenantKey.isActive){
          resolve();
        }else{
          return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Your account is deactivated please contact to support for futher information.'));
        }
      } else {
        return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please Provide Correct Tenant Key'));
      }
    } else {
      return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please Provide Tenant Key'));
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
module.exports = tenant;
