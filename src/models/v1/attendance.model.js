const mongoose = require('mongoose');
const { toJSON } = require('../plugins');
const {currentDate} = require('../../utils/currentDate')
const timeSchema = mongoose.Schema({ 
  timeIn: {
    type:Date,
  },
  timeOut:{
    type:Date
  }
});
const attendanceSchema = mongoose.Schema(
  {
    userId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    serialNo: {
        type: mongoose.Schema.Types.ObjectId,
        default: mongoose.Types.ObjectId,
        unique: true,
        required: true, 
    },
    Date:{
        type:Date,
        default:currentDate()
    },
    time:{
      type:[timeSchema]
    },
    employeeName:{
        type:String,
        required:true,
    },
    workedHours:{
        type:Number,
        default: 0,
        require:true
    },
    status:{
      type: String,
      enum: ["Break", 'Day Completed'],
      default: 'Break',
    }
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
attendanceSchema.plugin(toJSON);

/**
 * @typedef Attendance
 */
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;