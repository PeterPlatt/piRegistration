var piRegistration = require('../models/registrationModel');

var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extend:true}));
    
    app.get('/pi/uuid/:id',function(req,res){
        //Get By UUID
        console.log('Calling /pi/uuid/'+req.params.id);
        piRegistration.findOne({ 'uuid': req.params.id },        
            function(err,registrations){
                if (err) throw err;
                
                res.send(registrations);
            }
        );
    });
    
    app.get('/pi/message/:message',function(req,res){
        //Get By Message
        console.log('Calling /pi/message/'+req.params.message);
        piRegistration.findOne({ 'message': req.params.message },        
            function(err,registrations){
                if (err) throw err;
                
                res.send(registrations);
            }
        );
    });
    
    app.post('/pi/register', function(req,res){
        //New
        var newDeviceReg = piRegistration({
            message: req.body.message,
            uuid: req.body.uuid
        });
        
        newDeviceReg.save(function(err){
            if (err) throw err;
            res.send("{'UUID':'"+req.body.uuid+"'}");
        });

    });  
};