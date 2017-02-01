/**
 * Created by Christoph on 12.01.2017.
 */
var mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

var profilSchema = new mongoose.Schema({
    firma : String,
    strasse : String,
    stadt : String,
    land : String
});

module.exports = mongoose.model('profil2', profilSchema);/**
 * Created by Christoph on 21.01.2017.
 */
