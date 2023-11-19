const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    last_name: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255
    },
    domain: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    gender: {
        type: String,
        required: true,
        min: 2,
        max: 255
    },
    avatar: {
        type: String,
        required: true,
        max: 255
    },
    available: {
        type: Boolean,
        required: true,
        default: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Contact', contactSchema);