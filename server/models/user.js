var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    id: String,
    username: String,
    password: String,
    connected: Boolean,
    firstName: String,
    lastName: String,
    race: String,
    sex: String,
    age: Number,
    deviceInfo: Object,
    createdBy: String,
    createdAt: Date,
    updatedAt: Date,
    deletedAt: Date
}).pre('save', function (next) {
    if(!this.createdAt)this.createdAt = Date.now();
    this.updatedAt = Date.now();
    next();
});

global.User = mongoose.model('User', schema);

