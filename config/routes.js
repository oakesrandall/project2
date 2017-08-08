const express           = require('express');
const router            = express.Router();
// Parses information from POST
const bodyParser        = require('body-parser');
// Used to manipulate POST methods
const methodOverride    = require('method-override');
const passport          = require('passport');
const usersController   = require('../controllers/users');
const staticsController = require('../controllers/statics');
const models           = require('../models');

function authenticatedUser(req, res, next) {
    console.log('authenticating user');
    if (req.isAuthenticated()) {
        return next();
    } else {
    res.redirect('/');
    }
}

router.route('/')
    .get(staticsController.home);

router.route('/signup')
    .get(usersController.getSignup)
    .post(usersController.postSignup);

router.route('/login')
    .get(usersController.getLogin)
    .post(usersController.postLogin);

router.route('/logout')
    .get(usersController.getLogout);

router.route('/vote')
    .get(authenticatedUser, usersController.vote);

router.route('/top')
    .get(authenticatedUser, usersController.top);

router.route('/');

module.exports = router;