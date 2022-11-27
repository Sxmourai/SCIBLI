const express = require('express');
const { readFile } = require('fs');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const app = express();

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('../www/index.ejs', { js: '/ressources/js', css: '/ressources/css' });
});

app.get("/ressources/*", (req, res) => {
    readFile("ressources/" + req.params['0'], (err, data) => {
        if (err) throw err;
        res.send(data);
    });
    // res.end();
});


app.listen(8008, () => console.log("Server running at http://localhost:8008..."))