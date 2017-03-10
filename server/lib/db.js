var mongoose = require('mongoose');

module.exports = function (prod) {
    var url = 'mongodb://localhost:27017/hungry';

    if(prod)
        url = 'mongodb://hungryadmin:admin123@ds123400.mlab.com:23400/heroku_x05bqq53';

    mongoose.connect(url, function(err) {
        err && console.log(err);
    });

}