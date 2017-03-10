var mongoose = require('mongoose');
module.exports = mongoose.model('Settings', {
    userId: String,
    settings: Object
});

