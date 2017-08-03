const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

let catSchema = new Schema ({
    catImage: String,
    catVotes: Number,
});

let Cat = mongoose.model('Cat', catSchema);

module.exports = Cat;