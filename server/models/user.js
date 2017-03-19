var mongoose = require('mongoose');


global.User = mongoose.model('User', {
    id: String,
    username: String,
    password: String,
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
});

