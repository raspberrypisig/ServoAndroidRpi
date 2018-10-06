var bleno = require('bleno');

var ServoAngleCharacteristic = new bleno.Characteristic({
    uuid: '291F',
    value: null,
    properties: ['writeWithoutResponse'],
    onWriteRequest: function(data, offset, withoutResponse, callback) {
     console.log("characteristic written");
     console.log(data);
     console.log(offset);
     callback(bleno.Characteristic.RESULT_SUCCESS);
    }
});

module.exports = ServoAngleCharacteristic;
