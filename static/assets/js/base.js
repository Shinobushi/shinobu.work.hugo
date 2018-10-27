
$(window).on("load", function() {
    $('.detailTitle').delay(600).addClass('inview');
    $('.topname').delay(600).addClass('inview');
});
$(function() {
    $('.fadein').on('inview', function(event, isInView, visiblePartY) {
        if(isInView){
            $(this).stop().addClass('inview');
        }
    });
});