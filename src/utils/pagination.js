const pick = require('./pick');
const { Op } = require('sequelize');
const pagination = async (req, tenantId, Modal, from) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'srchtxt','dtstart','dtend']);
  let whereClause = {}
  for(let key of Object.keys(Modal.attributes)){
    console.log("key ------ ",key)
    if(key.includes('createdAt') ){
      if(options.dtstart && options.dtend){
        // find date range between dtstart and dtend
        whereClause[key] = {[Op.between]: [`${options.dtstart}`,`${options.dtend}`]}
      } else if(options.dtstart && !options.dtend){
        // find date where greater than equal to dtstart
        whereClause[key] = {[Op.gte]: `${options.dtstart}`}      
      } else if(!options.dtstart && options.dtend){
        // find date where less than equal to dtend
        whereClause[key] = {[Op.lte]: `${options.dtend}`}
      }
    }
    else{
      whereClause[key] = {[Op.like]: `%${options.srchtxt}%`}
    }
  }
  console.log("whereClause------->>>>>", whereClause)
  if(!options?.limit){
    options.limit = 10
  }
  if(!options?.page){
    options.page = 1;
  }
  let data;
  if (from === 'statuses') {
    if (req.query.Module_Id) {
      req.query.sortBy ? 
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,    
        order:[["createdAt", req.query.sortBy]],
        where: { moduleId: req.query.Module_Id, tenantId: tenantId },
      }) : 
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,    
        order:[["createdAt", "DESC"]],
        where: { moduleId: req.query.Module_Id, tenantId: tenantId },
      });
    } else {
      req.query.sortBy ? 
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,
        order:[["createdAt", req.query.sortBy]],
        where: { tenantId: tenantId },
      }) :
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,
        order:[["createdAt", "DESC"]],
        where: { tenantId: tenantId },
      })
    }
  } else {
    req.query.sortBy ?
    data = await Modal.findAndCountAll({
      limit: parseInt(options.limit),
      offset: (options.page - 1) * options.limit,
      order:[["createdAt", req.query.sortBy]],
      where: { [Op.or]: [{ tenantId: tenantId }, { tenantId: null }] },
    }) : 
    data = await Modal.findAndCountAll({
      limit: parseInt(options.limit),
      offset: (options.page - 1) * options.limit,
      order:[["createdAt", "DESC"]],
      where: {[Op.or]: [{ tenantId: tenantId }, { tenantId: null }], ...whereClause},
    });
  }
  const totalResults = data.count;
  const totalPages = Math.ceil(totalResults / options.limit);
  return {
    results: data.rows,
    page: options.page,
    limit: options.limit,
    totalPages: totalPages,
    totalResults: totalResults,
  };
};

module.exports = { pagination };
