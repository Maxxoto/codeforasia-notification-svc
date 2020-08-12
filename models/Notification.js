const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = require('./Attendance');

const notificationSchema = new Schema(
  {
    sendgridId: { type: String, required: true },
    dateSent: { type: Date, required: true },
    dateSentUnix: { type: Number, required: true },
    title: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    attendances: [attendanceSchema],
    events: { type: [Object], require: true, default: [{ status: 'N/A' }] },
  },
  {
    timestamps: true,
  }
);

mongoose.model('notification', notificationSchema);
