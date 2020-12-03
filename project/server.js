const http = require('http');
const routing = require('./routing');
const port = 8000;
const hostname = 'localhost';


let server = new http.Server( (req, res) => {
  //POST-запросы типа JSON
  var jsonString = '';
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);
  req.on('data', (data) => { // Пришла информация - записали.
      jsonString += data;
  });

  req.on('end', () => {// Информации больше нет - передаём её дальше.
      routing.define(req, res, jsonString);
  });
});
server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});