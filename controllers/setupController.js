var registrations = require('../models/registrationModel');
var uuid = require('uuid');

module.exports = function(app){
    
    app.get('/pi/testdata', function(req,res){
        console.log('Calling API Endpoint');
        //seed DB
        var starterRegistration = [
           {
                message: 'Testing Data 1',
                uuid: uuid.v1()
           },
           {
               username: 'Testing Data 2',
               uuid: uuid.v1()
           }
       ];
        
        registrations.create(starterRegistration,function (err,results) {
            res.send(results);
        });
    });
}