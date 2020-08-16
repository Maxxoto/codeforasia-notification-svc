const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = require('./Attendance');

const notificationSchema = new Schema(
  {
    batch_id: { type: String },
    dateSent: { type: Date, required: true },
    dateSentUnix: { type: Number, required: true },
    title: { type: String, required: true },
    subject: { type: String, required: true },
    body: { type: String, required: true },
    attendances: [attendanceSchema],
    // attendances: {type: Schema.Types.},
    events: { type: [Object], require: true, default: [{ status: 'N/A' }] },
    type: { type: [String], require: true },
  },
  {
    timestamps: true,
  }
);

mongoose.model('notification', notificationSchema);
