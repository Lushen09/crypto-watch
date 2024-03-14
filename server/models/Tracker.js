const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    userID: {
        type: String,
        required: [true, 'Please enter a user ID']
    },
    trackedCoins: {
        type: [String],
        maxlength: [4, 'Maximum of 4 coins can be tracked'],
        default: []
    }
});

module.exports = mongoose.model('Tracker', trackerSchema);