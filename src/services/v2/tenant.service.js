const httpStatus = require('http-status');
const { Tenant } = require('../../models/v2/index');
const ApiError = require('../../utils/ApiError');
const { response } = require('../../app');

const createTenant = async (userBody,res) => {
    try{
      const tenant = await Tenant.findOne({ where: { domain: userBody.domain } });
      if (tenant === null) {
        return Tenant.create({tanantName:userBody.tanantName, domain:userBody.domain, alias:userBody.alias});
      }else{
        res.status(httpStatus.BAD_REQUEST).send({message:'Domain already taken'});
      }
    }
    catch(err){
      console.log("err----->>>>>>>",err)
      res.send(err)
    }
  };

  module.exports = {createTenant}