var express = require('express'),
    app = express(),
    fs = require('fs'),
    pug = require('pug'),
    path = require('path'),
    bodyParser = require('body-parser'),
    args = require('./lib/args'),
    server = require('http').Server(app),
    port = process.env.PORT || 3000;

global.io = require('socket.io')(server);


    app.use(express.static(path.join(__dirname, 'client', 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client'));
server.listen(port, function () {
    console.log('LISTENING ON PORT', port);
});

// DB
var prod = args.flag('prod');
var DB = require('./lib/db')(prod);
// Models
var models = fs.readdirSync('./models', 'utf-8');
for(var i = 0; i < models.length; i++)
    require('./models/' + models[i]);
// Session
require('./lib/session')(app);




app.get('/', function(req, res){
    res.render('index');
});

app.get('/users', function(req, res){
    User.find(0, function(err, users){
        res.send(users);
    });
});
app.get('/user/:userid', function (req, res) {
    var userId = req.params.userid;
    models.user.find(0, function (a, b) {
    })
});

app.use(bodyParser.json());

app.post('/server-dump', function (req, res) {
    var body = req.body;
    console.log('GETTING DATA')
    console.log(JSON.stringify(body));
});
app.post('/login', function(req, res){
    var body = req.body;
    DB.loginOrCreate(req, body);
});

app.post('/connect', function (req, res) {
    console.log('connect');
    console.log('APP OPEN', req.body);
});
app.post('/disconnect', function (req, res) {
    console.log('APP CLOSED', req.body);
});



