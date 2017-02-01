var express = require('express');
var http = require('http');
var https = require('https');
var profil = require('./routes/profil');
var users = require('./routes/users');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
// var passport = require('passport');
var path = require('path');
var mongoose = require('mongoose');
var app = express();

app.use('/routes/profile', profil)
app.use('/routes/users', users);
app.use(express.static('./public/dist'));

app.get('/test', function (req, res) {
    res.send('hello');
});


mongoose.connect('mongodb://127.0.0.1:27017');

http.createServer(app).listen(8080);
module.exports = app;