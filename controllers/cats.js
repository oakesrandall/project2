const mongoose = require('mongoose'),
  Cat = mongoose.model('Cats');

exports.list_all_cats = function(req, res) {
    Cat.find({}, function(err, cat) {
        if (err)
            res.send(err);
        res.json(cat);
    });
};

exports.add_a_cat = function(req, res) {
    Cat.save(function(err, cat) {
        if (err)
            res.send(err);
        res.json(cat);
        console.log("Saving Cat " + res.json);
    });
};