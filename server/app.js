var express  = require('express');
var app      = express();                               // create our app w/ express
var path = require('path');
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)

// configuration =================

app.use(express.static( path.join(__dirname, "../dist") ));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, "../dist/index.html") ); // load the single view file (angular will handle the page changes on the front-end)
});


module.exports = app;
