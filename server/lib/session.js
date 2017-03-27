module.exports = function (app) {
    var session = require("express-session")({
        secret: "my-secret",
        resave: true,
        saveUninitialized: true
    });

    app.use(session);


}