require(['jquery', 'slick'], function ($) {
  'use strict';
  $(document).ready(function () {
    $('.slider').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 5000,
    });
  });
});


require(['jquery', 'slick'], function ($) {
  'use strict';
  jQuery(document).ready(function () {
    $('.product-container').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      infinite: true
    });
  });
});
