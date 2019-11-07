
var bodyParser = require('body-parser')
//allows to create server and define endpoints
var express = require('express');
//Gets the main app so configuration can be done
var app = express();

// parse application/x-www-form-urlencoded
//Encoded because it must be ascii
app.use(bodyParser.urlencoded({ extended: false }));

//If client and server arent on same domain, requests won't be allowed to be handled
//Always remove in production environment
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

// parse application/json
app.use(bodyParser.json());

//Defining routes to controllers(defined rest endpoints)
//Need to define any new controllers here
app.use(require('./controllers/bookController'));

app.use(require('./controllers/authorController'));

app.listen(3000);
console.log('Server running in port: 3000 ...')