var path = require ('path');
var express = require('express');
var bodyParser = require('body-parser');

var clientPath = path.join(__dirname, '../clientPath');

var app = express();

app.use(express.static(clientPath));
app.use(bodyParser.json());

app.listen(3000);
console.log("I am listening");