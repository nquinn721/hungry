var mongoose = require('mongoose');

global.Restaurants = mongoose.model('Restaurants', {
    userId: String,
    lists: Object
});