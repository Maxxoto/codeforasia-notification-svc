const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = require('./Attendance');

const notificationSchema = new Schema(
  {
    date: Date,
    time: String,
    title: String,
    subject: String,
    body: String,
    recipients: [attendanceSchema],
  },
  {
    timestamps: true,
  }
);

mongoose.model('notification', notificationSchema);
