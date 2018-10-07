var bleno = require('bleno');
const spawn = require("child_process").spawn;


var ServoAngleCharacteristic = new bleno.Characteristic({
    uuid: '291F',
    value: null,
    properties: ['writeWithoutResponse'],
    onWriteRequest: function(data, offset, withoutResponse, callback) {
     console.log("characteristic written");
     //console.log(data);
     //console.log(data.readInt32LE(0));
     //console.log(offset);
     var servoLevel = data.readInt32LE(0);
     const pythonprocess = spawn('python', ['turntable2.py', servoLevel]); 
     callback(bleno.Characteristic.RESULT_SUCCESS);
    }
});

module.exports = ServoAngleCharacteristic;
