/*var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World 2!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
*/


var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer = fs.readFileSync('index.html');
    var out = buffer.toString();
    response.send(out);
});

app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 5000;
app.listen(port, function() {
    console.log("Listening on " + port);
});
