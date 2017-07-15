var express  = require('express');
var app = express();

app.use(express.static('./src'));
app.use(express.static('./public'));

app.get('*', function(req, res) {
  res.sendFile(__dirname + '/src/index.html');
});

var port = process.env.PORT || 3000;
app.listen(port);
console.log("App listening on port " + port);
