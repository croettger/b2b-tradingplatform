/**
 * Created by Christoph on 12.01.2017.
 */
var mongoose = require('mongoose');
var Int32 = require('mongoose-int32');

var userSchema = new mongoose.Schema({
    name : String,
    email: String,
    age: Int32
});

module.exports = mongoose.model('users', userSchema);