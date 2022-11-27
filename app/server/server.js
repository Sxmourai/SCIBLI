if (process.env.NODE_ENV !== 'prod') {
    require('dotenv').config()
}

const express = require('express');
const { readFile } = require('fs');
const bcrypt = require('bcrypt');
const app = express();
const passport = require('passport');
const flash = require('express-flash')
const session = require('express-session')

const pass = require('./passport_conf');
pass(
    passport,
    email => users.find(user => user.email === email)
)

const users = [];

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(flash());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize())
app.use(passport.session())


app.get("/", (req, res) => {
    res.render("../www/index.ejs", { name: 'Sx' });
});
app.get("/login", (req, res) => {
    res.render("../www/login.ejs");
});

app.post("/login", passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));


app.get("/register", (req, res) => {
    res.render("../www/register.ejs");
});



app.post('/register', async (req, res) => {
    try {
        const h_pass = await bcrypt.hash(req.body.password, 11)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            pwd: h_pass
        });
        res.redirect("/login");
    } catch {
        res.redirect("/register");
    }
});



app.listen(8008, () => console.log("Server running at http://localhost:8008..."))