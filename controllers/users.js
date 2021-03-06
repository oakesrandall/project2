const passport = require('passport');

// GET /signup
function getSignup(request, response) {
    response.render('signup.ejs', { message: request.flash('signupMessage') });
}

// POST /signup
function postSignup(request, response, next) {
    let signupStrategy = passport.authenticate('local-signup', {
        successRedirect: '/',
        failureRedirect: '/signup',
        failureFlash: true,
    });
    return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) {
    response.render('login.ejs', { message: request.flash('loginMessage') });
}

// POST /login 
function postLogin(request, response, next) {
    var loginProperty = passport.authenticate('local-login', {
        successRedirect: '/vote',
        failureRedirect: '/login',
        failureFlash: true
    });

    return loginProperty(request, response, next);
}

// GET /logout
function getLogout(request, response, next) {
    request.logout();
    response.redirect('/');
}

function vote(request, response) {
    response.render('vote.ejs', {});
}

function top(request, response) {
    response.render('top.ejs', {});
}

module.exports = {
    getLogin: getLogin,
    postLogin: postLogin,
    getSignup: getSignup,
    postSignup: postSignup,
    getLogout: getLogout,
    vote: vote,
    top: top
};