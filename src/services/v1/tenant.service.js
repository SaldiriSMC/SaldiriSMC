const httpStatus = require('http-status');
const { Tenant } = require('../../models/v1/index');
const createTenant = async (userBody,res) => {
    try{
      const tenant = await Tenant.findOne({ domain: userBody.domain });
      if (tenant === null) {
        return Tenant.create({tanantName:userBody.tanantName, domain:userBody.domain});
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