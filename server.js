var express  = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/app/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App listening on port " + port);
