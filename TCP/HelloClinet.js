const net = require('net');
var clinet = new net.Socket();

clinet.connect(9000, 'localhost', function() {
  console.log('Connected');
  clinet.write('Hello, serve! Love, Client.');
});

clinet.on('data', function(data) {
  console.log('Received: ' + data);
  clinet.destroy();
});

clinet.on('close', function() {
  console.log('Connection closed');
})