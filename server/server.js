const http = require('http');

const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send a response
  res.end('Hello, World!\n');
});

const port = process.env.PORT || 3000;

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`);
});
