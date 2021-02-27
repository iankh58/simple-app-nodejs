const express = require('express');
const app = express();

var bodyParser = require('body-parser');
let router = require('./app/routers/router.js');

app.use(bodyParser.json());
app.use('/', router);

  //create a server
const server = app.listen(4001, function () {
 
  let host = server.address().address
  let port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port); 
})