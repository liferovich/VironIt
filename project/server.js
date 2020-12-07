const http = require('http');
const port = 8000;
const hostname = 'localhost';

let arr = [
  {
    name: "Nataly"
  },
  {
    name: "Ruslan"
  }
]

let server = new http.Server((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.writeHead(200);

  if (req.method === 'GET') {
    let arrJSON = JSON.stringify(arr);
    res.end(arrJSON);
  }
  if (req.method === 'POST') {
    req.on('data', (data) => { // Пришла информация - записали.
      let dataJSON = JSON.parse(data);
      arr.push(dataJSON);
      res.end('Массив добавлен!')
    });
  }
  if (req.method === 'PUT') {
    req.on('data', (data) => { // Пришла информация - перезаписали.
      let dataJSON = JSON.parse(data);
      arr = dataJSON;
      res.end('Массив перезаписан!')
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is running on http://${hostname}:${port}`);
});

