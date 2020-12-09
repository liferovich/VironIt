const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/db.config.js');

const app = express();
app.use(bodyParser.json())
 
//drop the table if it already exists
db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});
 
require('./route/user.router.js')(app);
 

const server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("App listening at http://%s:%s", host, port)
})