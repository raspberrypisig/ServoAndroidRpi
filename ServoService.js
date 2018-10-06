var util = require('util');

var bleno = require('bleno');

var BlenoPrimaryService = bleno.PrimaryService;

var servoAngleCharacteristic = require('./ServoAngleCharacteristic');

function ServoService() {
  ServoService.super_.call(this, {
      uuid: '1818',
      characteristics: [
          servoAngleCharacteristic
      ]
  });
}

util.inherits(ServoService, BlenoPrimaryService);

module.exports = ServoService;
