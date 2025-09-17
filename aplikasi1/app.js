// app.js
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, Calvin!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});

// cd : buat nambah nama file
// C:\PAW II SI5C\project-express-js-CalvinAnglerian>

// node : buat menjalankan dalam codingann yang mau di buka
// misal : node app.js