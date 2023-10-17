require(['jquery', 'slick'], function ($) {
$(document).ready(function () {
$('.wrapper').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});
});
});
