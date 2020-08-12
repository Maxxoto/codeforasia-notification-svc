const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = new Schema({
  email: { type: String, required: true },
});

module.exports = attendanceSchema;
