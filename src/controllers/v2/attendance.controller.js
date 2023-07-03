const httpStatus = require('http-status');
const pick = require('../../utils/pick');
const ApiError = require('../../utils/ApiError');
const catchAsync = require('../../utils/catchAsync');
const { attendanceService } = require('../../services/v2');
const {response} = require("../../utils/response")

const getAttendance = catchAsync(async (req, res) => {
    const filter = pick(req.query, ['employeeName']);
    const options = pick(req.query, ['sortBy', 'limit', 'page']);
    const result = await attendanceService.queryAttendance(req.query, filter, options);
    res.send(result);
});

module.exports = { getAttendance }