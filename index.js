// run this
// sudo setcap cap_net_raw+eip $(eval readlink -f `which node`)
// to run this as non-root user

var bleno = require('bleno');
//var blenoPrimaryService = bleno.PrimaryService;
var ServoService = require('./ServoService');

var servoService = new ServoService();


bleno.on('stateChange', function(state) {
  console.log('on -> stateChange: ' + state);

  if (state === "poweredOn") {
    var serviceName = 'Servo';
    bleno.startAdvertising(serviceName, [servoService.uuid]);
  }

});

bleno.on('advertisingStart', function(error) {
  bleno.setServices([servoService]);
});



