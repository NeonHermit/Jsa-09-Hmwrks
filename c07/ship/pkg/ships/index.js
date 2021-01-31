const mongoose = require('mongoose');

const Ships = mongoose.model(
    'ships',
    {
        name: {
            type: String
        },
        class: {
            type: String
        },
        cost: {
            type: Number,
            validate(value) {
                if (value <= 0) {
                    throw new Error('The Price Cannot Be )')
                }
            }
        }
    }
);

module.exports = Ships;