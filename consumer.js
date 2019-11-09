var NATS = require('nats');
var nc = NATS.connect({json: true});
nc.on('connect', function () {

  nc.on('error', function (err) {
    console.log(err);
  });

  nc.subscribe("greeting", function (msg, reply) {
    // msg is a parsed JSON object object
    if (msg.i % 10000===0) {
      console.info(msg);
    }
  });
});