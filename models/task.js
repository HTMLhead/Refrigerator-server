const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    required: true
  },
  limitdate: {
    type: Number
  },
  priority: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Task', taskSchema);
