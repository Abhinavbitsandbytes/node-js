const mongoose = require('mongoose');
const Task = mongoose.model('Task', {
    description: {
    type: String,
    required: true,
    trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // it should be exact as last line of user model i.e module.exports = User
    },
})
module.exports = Task