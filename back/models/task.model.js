const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    completed: { type: Boolean, default: false }
});

// Create the Mongoose model
const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
