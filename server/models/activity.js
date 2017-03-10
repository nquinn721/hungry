var mongoose = require('mongoose');

module.exports = mongoose.model('Activity', {
    userId: String,
    activity: Object
});