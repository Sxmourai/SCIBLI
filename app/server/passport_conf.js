const { authenticate } = require('passport');
const LocalStrat = require('passport-local').Strategy;
const bcrypt = require('bcrypt');


function init(passport) {
    const authenticateUsr = async (email, pwd, done) => {
        const user = getUserByEmail(email);
        if (user == null) {
            return done(null, false, { message: 'No user with that email' })
        }
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user)
            } else {
                return done(null, false, { message: 'Password incorrect' });
            }
        } catch (e) {
            return done(e);
        }

    }
    passport.use(new LocalStrat({ usernameField: 'email' }), authenticateUsr)
    passport.serializeUser((user, done) => {  })
    passport.deserializeUser((id, done) => {  })
}

module.exports = init