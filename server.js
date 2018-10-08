
const express = require("express");
const bodyParser = require("body-parser");
var morgan = require('morgan');             // log requests to the console (express4)



require("./config/db");
var path = require('path');

const app = express();

// const PORT = process.env.PORT || 3301;
const PORT =3000;
//app.use(express.static(__dirname + './dist/storAapp'));
app.use(express.static(path.join(__dirname, 'public')));
//app.use('/node_modules',  express.static(__dirname + '/node_modules')); // Use NodeModules
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev')); // log every request to the console

//app.use(express.static('public'));  //<-- public directory that contains all angular files
//console.log(path.join(__dirname, 'public'));
//console.log(express.static('public'));

var router = express.Router();
require('./app/routes.js')(app,router);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});