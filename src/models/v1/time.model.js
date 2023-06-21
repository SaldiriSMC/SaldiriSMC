// const mongoose = require('mongoose');
// const { toJSON } = require('../plugins');

// const timeSchema = mongoose.Schema(
//   {
//     attendanceId: {
//         type: mongoose.SchemaTypes.ObjectId,
//         ref: 'Attendance',
//         required: true,
//     },
//     timeIn:{
//         type: Time, 
//     },
//     timeOut:{
//         type: Time,
//     },
    
//   },
//   {
//     timestamps: true,
//   }
// );

// // add plugin that converts mongoose to json
// timeSchema.plugin(toJSON);

// /**
//  * @typedef timeSchema
//  */
// const Time = mongoose.model('Time', timeSchema);

// module.exports = Time;