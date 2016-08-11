var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var registrationSchema = new Schema({
    message: String,
    uuid: String,
    time: { type: Date, default: Date.now }
});


var registration = mongoose.model('registration', registrationSchema);

module.exports = registration;