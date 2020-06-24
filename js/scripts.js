$(document).ready(function(){
$("#mycarousel").carousel( { interval: 2000 } );
$("#carouselButton").click(function() {
    if ($('#carouselButton').children('span').hasClass('fa fa-pause')) {
    $("#mycarousel").carousel('pause');
    $('#carouselButton').children('span').removeClass('fa fa-pause');
    $('#carouselButton').children('span').addClass('fa fa-play');
    } else if ($('#carouselButton').children('span').hasClass('fa fa-play')) {
    $("#mycarousel").carousel('cycle');
    $('#carouselButton').children('span').removeClass('fa fa-play');
    $('#carouselButton').children('span').addClass('fa fa-pause');
    }
});
});

//Reserve Table Modal
$('#reserveButton').click(function() {
$('#reserveModal').modal('show');
});

//Login Modal
$('#loginButton').click(function() {
$('#loginModal').modal('show');
});