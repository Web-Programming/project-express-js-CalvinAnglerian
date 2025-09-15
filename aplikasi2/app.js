// app.js
const express = require('express');
const app = express();
const port = 3000;

// Route GET -- Membuat route ke halaman home dengan method GET
app.get('/', (req, res) => {
    res.send('Hello, ini halaman HOME dengan method GET!');
});

// Middleware untuk parsing body request -- Membuat middleware untuk menerima request body dari json
app.use(express.json());

// Route POST -- membuat route ke halaman submit dengan method POST
app.post('/submit', (req, res) => {
    const {name, npm, jeniskelamin} = req.body;
    res.send(`Hello, ${name} dengan NPM ${npm}. Apakah kamu ${jeniskelamin}?`);
});

// Serving Static File
app.use(express.static('public'));

app.listen(port, (req, res) => {
    console.log(`Server Running at http://localhost:${port}`);
})

