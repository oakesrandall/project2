var mongoose = require('mongoose');
mongoose.connect('/mongodb://localhost/tunely');

module.exports.Cat = require('./cat');