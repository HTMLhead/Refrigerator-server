const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    required: true
  }
});
// title,  description, state, limitdate, priority

module.exports = mongoose.model('Task', taskSchema);
