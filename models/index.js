var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || 
                  'mongodb://localhost/project2');

module.exports.Cat = require('./cat');
module.exports.User = require('./user');