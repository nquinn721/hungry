var express = require('express'),
    app = express(),
    fs = require('fs'),
    pug = require('pug'),
    path = require('path'),
    bodyParser = require('body-parser'),
    args = require('./lib/args');


app.use(express.static(path.join(__dirname, 'client', 'public')));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'client'));
app.listen(process.env.PORT || 3000);

// DB
var prod = args.flag('prod');
require('./lib/db')(prod);
// Models
var models = {};
var modelObjects = fs.readdirSync('./models', 'utf-8');
for(var i = 0; i < modelObjects.length; i++)
    models[modelObjects[i].split('.')[0]] = require('./models/' + modelObjects[i]);

// var admin = new models.user({
//     id: '1234,123-0134912031-59gfj2430g',
//     username: 'admin',
//     password: 'password123',
//     firstName: 'Nate',
//     lastName: 'Quinn',
//     race: 'White',
//     sex: 'Male',
//     age: 31,
//     deviceInfo: {platform: 'android', uuid: '1234,123-0134912031-59gfj2430g'},
//     createdBy: 'Facebook',
//     createdAt: Date.now(),
//     updatedAt: Date.now()
// });
admin.save();

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

app.post('/server-dump', bodyParser.json(), function (req, res) {
    var body = req.body;
    console.log('GETTING DATA')
    console.log(JSON.stringify(body));
});


