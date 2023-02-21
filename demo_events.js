var fs = require('fs');
var rs  =fs.createReadStream('./demofile.txt');
rs.on('open',function(){
    console.log('The file is open');
});


var events = require('events');
var eventEmiter = new events.EventEmitter();


// Create an event handler
var myEventHandler  = function(){
    console.log('I hear a scream!');
}

//Assign the event handler to an event:
eventEmiter.on('scream',myEventHandler);

//Fire the 'scream' event:
eventEmiter.emit('scream');