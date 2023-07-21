const {response} = require("../utils/response")
const { sequelize } = require('./mySqlConnection');
const { QueryTypes } = require('sequelize');
const callDBRoutine = async (SpName, params, res) =>{
    let strPassingParams ="";
    const keys = Object.keys(params)
    keys.map((prop)=> {
        strPassingParams += ":" + prop + ","
    })
    strPassingParams = strPassingParams.slice(0, strPassingParams.length - 1);
    let spText = "call " + SpName +"(" + strPassingParams + ")";
    let results = await sequelize.query(spText, {replacements: params,type: QueryTypes.SELECT,
    });
    results = results[0]
    const data = Object.values(results)
    if(res){
        response(res, data, "Record found succesfully", 200)
    }
    else{
        return data;
    }
    

}

module.exports = {callDBRoutine}