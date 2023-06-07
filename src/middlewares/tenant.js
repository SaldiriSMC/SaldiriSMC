const {Tenant} = require('../models/v2/index')
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');

const tenant = () => async (req, res, next) => {
    return new Promise(async (resolve, reject) =>{
        const key = req.get("X-Tenent-Key")
        if(key){
            const tenantKey = await Tenant.findOne({where:{key:key}})
            if(tenantKey){
                resolve()
            }else{
                return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please Provide Correct Tenant Key'));
            }
        }else{
            return reject(new ApiError(httpStatus.UNAUTHORIZED, 'Please Provide Tenant Key'));
        }
       
    }).then((res)=>{
        console.log(res)
        next()
    }).catch((err)=>{
        console.log(err)
        next(err)
    })
  };
module.exports = tenant;