var util = require('util');
var os = require('os');
var exec = require('child_process').exec;

var bleno = require('bleno');

var Descriptor = bleno.Descriptor;
var Characteristic = bleno.Characteristic;

var ServoAngleCharacteristic = function() {
  ServoAngleCharacteristic.super_.call(this, {
    uuid: '291F',
    properties: ['write'],
    descriptors: [
      new Descriptor({
        uuid: '2901',
        value: 'Battery level between 0 and 100 percent'
      }),
      new Descriptor({
        uuid: '2904',
        value: new Buffer([0x04, 0x01, 0x27, 0xAD, 0x01, 0x00, 0x00 ]) // maybe 12 0xC unsigned 8 bit
      })
    ]
  });
};

util.inherits(ServoAngleCharacteristic, Characteristic);

/*
ServoAngleCharacteristic.prototype.onReadRequest = function(offset, callback) {
 // return hardcoded value
 callback(this.RESULT_SUCCESS, new Buffer([98]));
};
*/

ServoAngleCharacteristic.prototype.onWriteRequest = function(data, offset, withoutResponse, callback) {
  console.log("characteristic written");
  callback(this.RESULT_SUCCESS);
}

module.exports = ServoAngleCharacteristic;
