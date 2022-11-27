const express = require('express');
const { readFile, readFileSync } = require('fs');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const path = require('path');
const app = express();


app.set('view engine', 'ejs')
app.use(express.static("ressources"));

app.get("/", (req, res) => {
    res.render('../www/index.ejs', { src: "ressources"});
});

// app.get("/ressources/*", (req, res) => {
//     readFile("ressources/" + req.params['0'], (err, data) => {
//         if (err) throw err;
//         res.send(data);
//     });
//     // res.end();
// });
app.get("/ressources/css/*", (req, res) => {
    readFileSync("ressources/css/" + req.params['0'], (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
    });
    res.end();
});
app.get("/ressources/js/*", (req, res) => {
    readFileSync("ressources/js/" + req.params['0'], (err, data) => {
        if (err) throw err;
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
    });
    res.end();
});


app.listen(8008, () => console.log("Server running at http://localhost:8008..."))