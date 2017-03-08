var express = require('express'),
    app = express(),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');

var url = 'mongodb://hungryadmin:admin123@ds123400.mlab.com:23400/heroku_x05bqq53';
mongoose.connect(url, function(err) {
    console.log(err);
});
app.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/server-dump', bodyParser.json(), function (req, res) {
    var body = req.body;
    console.log('GETTING DATA')
    console.log(JSON.stringify(body));
});




// var Cat = mongoose.model('Cat', { name: String });
//
// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log('meow');
//     }
// });