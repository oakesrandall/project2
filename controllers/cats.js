const mongoose = require('mongoose'),
  Cat = mongoose.model('Cats');

function list_all_cats(req, res) {
    Cat.find({}, function(err, cats) {
        if (err)
            res.send(err);
        res.send({cats: cats});
    });
}

function add_a_cat (req, res) {
    Cat.save(function(err, cat) {
        if (err)
            res.send(err);
        res.json(cat);
        console.log("Saving Cat " + res.json);
    });
}

module.exports = {
    list_all_cats: list_all_cats,
    add_a_cat: add_a_cat,
};