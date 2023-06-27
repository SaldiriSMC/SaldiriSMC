const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v1');
const {Tenant, User} = require("../../models/v1/index")

const getAttendance = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['name', 'role']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await attendanceService.queryAttendance(filter, options);
    res.send(result);
});

module.exports = { getAttendance }