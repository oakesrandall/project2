const bcrypt = require('bcrypt');

bcrypt.genSalt(function(err, salt) {
    console.log('Salt: ' + salt);
    bcrypt.hash(myPassword);
});