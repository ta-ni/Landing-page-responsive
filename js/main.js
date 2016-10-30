$(function(){
    $('.header-menu').slicknav({
        prependTo: $('.mobile-menu')
    });

    var slicknavIcon = $('.slicknav_icon');

    $('.slicknav_menu').addClass('clearfix');
    $(slicknavIcon).addClass('clearfix');
    $(slicknavIcon).append('<i class="fa fa-bars" aria-hidden="true"></i>');

});



$(document).ready(function(){
    $('.slider-wrap').slick({
        dots: true,
        arrows:false
});
});