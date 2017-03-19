var mongoose = require('mongoose');

global.Session = mongoose.model('Session', {
    userId: String,
    loggedIn: Boolean,
    appOpen: Boolean
});