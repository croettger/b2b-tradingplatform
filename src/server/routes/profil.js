/**
 * Created by Christoph on 12.01.2017.
 */
var mongoose = require('mongoose');
var express = require('express');
var router = express();
var ProfilData  = require('./../model/profilSchema');


//Gibt alle Profile zurück
router.get('/', function (req, res) {
    ProfilData.find(function (err, profil) {
        if (err) return console.error(err);
        console.log("Ausgabe:" + profil);
        res.send(profil);
    })
});

//Nach bestimmten Benutzer-Profil suchen
router.get('/:firma', function (req, res, next) {
    // Find all movies that have a credit cookie.
    ProfilData.findOne({'firma': req.params.firma}, function (err, profil) {
        if (err) return console.error('Error:' + err);
        console.log(profil);
        res.send(profil);
    })
});
module.exports = router;
