$(document).ready(function() {
    console.log('page loaded');
    yesVote();
    noVote();
});

function yesVote() {
    $('#totes').on('click', function() {
        console.log('clicked totes!');
    });
}

function noVote() {
    $('#meh').on('click', function() {
        console.log('clicked meh!');
    });
}