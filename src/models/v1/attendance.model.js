const mongoose = require('mongoose');
const { toJSON, paginate } = require('../plugins');
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
        default: new Date()
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
      enum: ["Absent", "Present", 'Break', "Day Completed"],
      default: 'Absent',
    }
    
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
attendanceSchema.plugin(toJSON);
attendanceSchema.plugin(paginate)
/**
 * @typedef Attendance
 */
const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;