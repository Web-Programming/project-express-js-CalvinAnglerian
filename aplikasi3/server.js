const express = require("express");
const app = express();
const port = 3000;

//Serving Static File di Folder Public
app.use(express.static('public'));


app.listen(port, (req, res) => {
    console.log(`Serving Running at http://localhost:3000/`)
});

// apa yg akan terjadi jika tidak ada node_module di dalam folder project node js saat menjalankan node server.js?

// node.module itu penting karna didalam packagenya ada module express js

// jika udah membuat project dan node module belom ada, ketik saja "npm install" -> maka akan terinstall semua nya

// npm run serve : kalo di package.json dibagian script diubah menjadi "serve" : "node server.js""