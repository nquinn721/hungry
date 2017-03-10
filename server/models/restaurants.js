var mongoose = require('mongoose');

module.exports = mongoose.model('Restaurants', {
    userId: String,
    lists: Object
});