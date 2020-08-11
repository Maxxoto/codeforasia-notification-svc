const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = require('./Attendance');

const notificationSchema = new Schema(
  {
    dateSent: Date,
    dateSentUnix: Number,
    time: String,
    title: String,
    subject: String,
    body: String,
    attendances: [attendanceSchema],
  },
  {
    timestamps: true,
  }
);

mongoose.model('notification', notificationSchema);
