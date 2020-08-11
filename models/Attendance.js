const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = new Schema(
  {
    email: String,
  },
  {
    timestamps: true,
  }
);

module.exports = attendanceSchema;
