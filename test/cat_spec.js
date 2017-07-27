const expect = require('chai').expect;
const request = require('request');
const apiKey = require('env.js')

let myApiUrl = 'https://api.giphy.com/v1/gifs/random?api_key=' + apiKey + '&tag=cat&rating=G';

describe('cat', function() {
    it('should send a 200/OK response from the server', function(done){
        request(myApiUrl, function(err, response, body){
            expect(response.statusCode).to.equal(200);
            done();
        });
    });

    it('should have an image url in the body', function(done) {
        request(myApiUrl, function(err, response, body){
            
            if (typeof(body) === 'string') {
                body = JSON.parse(body);
                console.log(body.data.image_url); 
            }
            expect(body.data.image_url).to.not.be.empty;
            done();
        });
    });
});