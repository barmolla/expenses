// Imports
var express = require('express');
var app = express();

// Expose /bower_components folder like /bower_components
app.use('/bower_components',  express.static(__dirname + '/bower_components'));

// Expose public directory (enables to use into /public)
app.use(express.static('public'));

// Routes
app.get('/', function(req, res){
 	res.sendFile(__dirname + '/public/views/index.html');
});
/*app.get('/about', function(req, res){
  	res.sendFile(__dirname + '/public/about.html');
});*/

app.listen(9090);

console.log("dirname: "+__dirname);
console.log("Servidor Express escuchando en modo %s", app.settings.env);