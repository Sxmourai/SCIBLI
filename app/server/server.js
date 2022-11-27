const express = require('express');
const { readFile } = require('fs');
const bcrypt = require('bcrypt');
const app = express();

app.get("/", (req, res) => {
    res.render("../www/index.html");
});
app.get("/login", (req, res) => {
    res.render("../www/login.ejs");
});

app.listen(8008, () => console.log("Server running at http://localhost:8008..."))