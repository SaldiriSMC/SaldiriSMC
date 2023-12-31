const pick = require('./pick');
const { Op } = require('sequelize');
const pagination = async (req, tenantId, Modal, from) => {
  const options = pick(req.query, ['sortBy', 'limit', 'page', 'columnName']);
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
        order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
        where: { moduleId: req.query.Module_Id, tenantId: tenantId },
      }) : 
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,    
        order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
        where: { moduleId: req.query.Module_Id, tenantId: tenantId },
      });
    } else {
      req.query.sortBy ? 
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,
        order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
        where: { tenantId: tenantId },
      }) :
      data = await Modal.findAndCountAll({
        limit: parseInt(options.limit),
        offset: (options.page - 1) * options.limit,
        order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
        where: { tenantId: tenantId },
      })
    }
  } else {
    req.query.sortBy ?
    data = await Modal.findAndCountAll({
      limit: parseInt(options.limit),
      offset: (options.page - 1) * options.limit,
      order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
      where: { [Op.or]: [{ tenantId: tenantId }, { tenantId: null }] },
    }) : 
    data = await Modal.findAndCountAll({
      limit: parseInt(options.limit),
      offset: (options.page - 1) * options.limit,
      order:[[ options.columnName ? options.columnName : "createdAt", options.sortBy ? options.sortBy : "desc"]],
      where: { [Op.or]: [{ tenantId: tenantId }, { tenantId: null }] },
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
