const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from App2');
});

server.listen(port, () => {
  console.log(`App2 running at http://localhost:${port}`);
});
