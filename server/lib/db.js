var mongoose = require('mongoose');

module.exports = function (prod) {
    var url = 'mongodb://localhost:27017/hungry';

    if(prod)
        url = 'mongodb://hungryadmin:admin123@ds123400.mlab.com:23400/heroku_x05bqq53';

    mongoose.connect(url, function(err) {
        err && console.log(err);
    });


    return {
        login: (req, id) =>  {req.session.user = id; io.sockets.emit('login', id)},
        loginOrCreate: function(req, user) {
            this.getUser(user.id, user => {
                if (user) this.login(req, user.id);
                else this.createUser(body, user => DB.login(req, user.id));
            })
        },
        getUser: (id, cb) => User.findOne({id}, (e, u) => cb && cb(u)),
        createUser: (userData, cb) => new User({id: userData.id, deviceInfo: userData}).save(cb || function(){})
    }

}

