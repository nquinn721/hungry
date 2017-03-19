var mongoose = require('mongoose');

global.Settings = mongoose.model('Settings', {
    userId: String,
    settings: Object
});

