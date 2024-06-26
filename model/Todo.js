const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {  
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now(),
        required: true
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
        required: true
    }
})

module.exports = mongoose.model('Todo', todoSchema);
