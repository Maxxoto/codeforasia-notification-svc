const mongoose = require('mongoose');

const { Schema } = mongoose;
const attendanceSchema = new Schema({
  email: { type: String, required: true },
  phone: { type: Number, default: 0 },
});

// mongoose.model('attendance', attendanceSchema);

module.exports = attendanceSchema;
