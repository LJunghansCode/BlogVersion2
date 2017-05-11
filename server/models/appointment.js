var mongoose = require('mongoose');

var appointmentSchema = new mongoose.Schema({
    time: {type:Date},
    firstName: {type:String},
    lastName: {type:String},
    typeOfService: {type:String},
    clientInformation: {type:String},


});
mongoose.model('appointment', appointmentSchema, 'appointment');