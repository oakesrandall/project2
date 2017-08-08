const db = require('./models');


let newCat = [{
    catImage: 'https://media1.giphy.com/media/129NVCr1UfsGTS/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/6uMqzcbWRhoT6/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/a2SR6Ag8ChUlO/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/10rW4Xw9eO0RmU/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/SRO0ZwmImic0/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/6RuhlzSdhIAqk/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/cuPm4p4pClZVC/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/KijmmcKP62qWs/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/1KoN1DMBnCMWk/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/H2GT0TQBAlbuo/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/3oEduVGyuRGuZXaqys/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/w6c5NOfPPhtv2/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/ERy32lxHhXfpu/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/LL90Zx5BbfIkw/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/w2AXRgzc9Z8Nq/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/5xaOcLT4VhjRfudPcS4/giphy.gif',
    catVotes: 0,
},
{
    catImage: 'https://media.giphy.com/media/UNXI76SJ889A4/giphy.gif',
    catVotes: 0,
}];

db.Cat.remove({}, function(err, cats) {
    if (err) {
        console.log("Error: ", err);
    }
    console.log("removed all cats");
    db.Cat.create(newCat, function(err, cat) {
        if (err) {
            return console.log("Error: ", err);
        }
        console.log("rebuilt cats");
        process.exit();
    });
});





