$(function(){

    var $background = $('#caroImg');

    $('.caroToggle').click(function doSlide(e){

        $('.caroToggle').removeClass('activeToggle');
        $('#' + e.target.id).addClass('activeToggle');
        $background.attr('src', 'img/backgroundImage' + e.target.id + '.jpg');
    });

    // accordion
    $('.accordion').click(function () {
        if ($(this).className != 'active') {
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        }
    });
});