var NATS = require('nats');
var nc = NATS.connect({json: true});
nc.on('connect', function () {

  nc.on('error', function (err) {
    console.log(err);
  });

  for (let i = 0; i < 100_000; i++) {
    nc.publish("greeting", {i, a: "a"});
  }
  nc.publish("greeting", {a: "finish"});
  nc.flush(function () {
    nc.close();
    console.info("closed");
  });
});