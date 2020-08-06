var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
const User = require('../models/User')

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy({
  usernameField: 'email', // not necessary, DEFAULT
  // passwordField: 'password' //May not need this at all
},
  function (email, password, done) {
    User.findOne({ email }, (err, user) => {
      if (err) {
        return done(err)
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect email' })
      }
      if (!user.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' })
      }
      return done(null, user)
    })
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, done) {
  console.log(`${user} SERIALIZED IN PASSPORT`)
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    console.log(`${user} DESERIALIZED IN PASSPORT`)
    done(err, user);
  })
});

// Exporting our configured passport
module.exports = passport;