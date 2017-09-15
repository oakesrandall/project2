var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CatSchema = new Schema({
  catImage: {
    type: String
  },
  catVotes: {
    type: Number,
    default: 1
  }
});

module.exports = mongoose.model('Cats', CatSchema);

