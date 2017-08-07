const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const https    = require('https');
const apiKey   = require('../env.js');
const myApiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag=cat&rating=G';


let catSchema = new Schema ({
    catImage: String,
    catVotes: Number,
});

let Cat = mongoose.model('Cat', catSchema);

let catImage;

function getCat() {
    console.log('grabbed cat image url ', catImage);
    https.get(myApiUrl, function(req, res) {
       res = JSON.parse(res);
       catImage = res.data.image_url;
    });  
    
}

module.exports = {
    Cat: Cat,
    catImage: catImage,
};