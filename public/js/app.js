$(document).ready(function() {
    console.log('page loaded');
    yesVote();
    noVote();
    getCat();
});

let catUrl;

function yesVote() {
    $('#totes').on('click', function() {
        console.log('clicked totes!');
        location.reload();
//need to hit put route here 

//needs to hit get route here       
    });
}

function noVote() {
    $('#meh').on('click', function() {
        console.log('clicked meh!');
        location.reload();

//need to hit get route here
    });
}

function getCat() {
    $.ajax({
        method: 'get',
        url: 'https://api.giphy.com/v1/gifs/random?api_key=12201789b4fa45e49c4ab545f4693c94&tag=cat&rating=G',
        datatype: 'json',
        success: function(data) {
            console.log(data.data.image_url);
            catUrl = data.data.image_url;
            $('#catVote').attr('src', catUrl);


        }
    });
}