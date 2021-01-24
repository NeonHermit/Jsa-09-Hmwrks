const mongoose = require('mongoose');

const Ships = mongoose.model('Ships', {
    name: {
        type: String,
        required: true
    },
    class: {
        type: String,
        required: true,
    },
    cost: {
        type: Number,
        default: 0,
        validate(value) {
            if (value <= 0) {
                throw new Error('The price cannot be 0');
            }
        }
    }
});

module.exports = Ships;