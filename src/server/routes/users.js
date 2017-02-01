/**
 * Created by Christoph on 12.01.2017.
 */
var express = require('express');
var router = express.Router();
var UserData  = require('./../model/users');


//Gibt alle User zurück
router.get('/', function (req, res, next) {
    UserData.find(function (err, users) {
        if (err) return console.error(err);
        console.log(users);

        res.send(users);
    })
});

//Nach bestimmten User suchen
router.get('/:name', function (req, res, next) {
    // Find all movies that have a credit cookie.
    UserData.find({'name': req.params.name}, function (err, users) {
        if (err) return console.error('Error:' + err);
        console.log(users);

        res.send(users);
    })
});

//Neuen Benutzer anlegen
router.post('/newuser', function (req, res, next){
    // var name = req.query.name;
    // var newUser = new User({
    //     name: name
    //     , email: 'pg@bla.de'
    //     , age: '27'  // Notice the use of a String rather than a Number - Mongoose will automatically convert this for us.
    //
    // });
    // newUser.save(function(err, user) {
    //     if (err) return console.error(err);
    //     console.log(user);
    // });
    console.log('Hallo');
});

module.exports = router;
