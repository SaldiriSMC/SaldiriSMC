const response = (res, data, messgae, resStatus) =>{
    res.status(resStatus).send({ data: data , message: messgae });
}
module.exports = {response}
