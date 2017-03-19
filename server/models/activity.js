var mongoose = require('mongoose');

global.Activity = mongoose.model('Activity', {
    userId: String,
    activity: Object
});