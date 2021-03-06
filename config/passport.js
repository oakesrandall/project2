const LocalStrategy = require('passport-local').Strategy;
const User          = require('../models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, callback) {
        callback(null, user.id);
    });

    passport.deserializeUser(function(id, callback) {
        User.findById(id, function(err, user) {
            callback(err, user);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        usernameField:    'email',
        passwordField:    'password',
        passReqToCallback: true,
    }, function(req, email, password, callback) {
        console.log('function ran');
        User.findOne({'local.email': email}, function(err, user) {
            if (err) {
                console.log('no mongo error');
                return callback(err);
            }
             if (user) {
                console.log('user found');
                return callback(null, false, req.flash('signupMessage', 'This email address is already taken'));
            } else {  
                console.log('user not found');
                let newUser = new User();
                newUser.local.email = email;
                newUser.local.password = newUser.hash(password);

                newUser.save(function(err) {
                    if (err) {
                        throw err;
                    }
                    return callback(null, newUser);
                });
            }
        });
    }));

    passport.use('local-login', new LocalStrategy( {
        usernameField:    'email',
        passwordField:    'password',
        passReqToCallback: true,
      }, function(req, email, password, callback) {
            User.findOne({ 'local.email' :  email }, function(err, user) {
                  if (err) {
                    return callback(err);
                  }
                  if (!user) {
                    return callback(null, false, req.flash('loginMessage', 'No user found.'));
                  }
                  if (!user.validPassword(password)) {
                    return callback(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));
                  }
                  return callback(null, user);
            });
        }));
};







