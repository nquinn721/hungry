var express = require('express'),
    app = express(),
    fs = require('fs'),
    pug = require('pug'),
    path = require('path'),
    bodyParser = require('body-parser'),
    args = require('./lib/args'),
    port = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, 'client', 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client'));
app.listen(port, function () {
    console.log('LISTENING ON PORT', port);
});

// DB
var prod = args.flag('prod');
require('./lib/db')(prod);
// Models
var models = {};
var modelObjects = fs.readdirSync('./models', 'utf-8');
for(var i = 0; i < modelObjects.length; i++)
    models[modelObjects[i].split('.')[0]] = require('./models/' + modelObjects[i]);



app.get('/', function(req, res){

    res.render('index');
});

app.get('/users', function(req, res){
    models.user.find(0, function(err, users){
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
    models.user.find({id: body.id}, function (err, user) {
        if(!user.length){
            createUser(body);
        }else{
            res.send(user[0].toJSON());
        }
    })
});

app.post('connect', function (req, res) {
    console.log('APP OPEN', req.body);
});
app.post('disconnect', function (req, res) {
    console.log('APP CLOSED', req.body);
});

function createUser(data){
    console.log('creating user');
     new models.user({
        id: data.id,
        deviceInfo: data,
        createdAt: Date.now(),
        updatedAt: Date.now()
    }).save();
}


