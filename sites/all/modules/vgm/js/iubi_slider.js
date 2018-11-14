(function ($) {
  Drupal.behaviors.iubilantesSLider = {
    attach: function (context, settings) {
      $('#slick').slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : true,
        variableWidth: false,
        centerMode: true,
        centerPadding: '0',
        // responsive: [
        //   {
        //     breakpoint: 1024,
        //     settings: {
        //       slidesToShow: 3,
        //       slidesToScroll: 3,
        //       infinite: true,
        //       dots: true
        //     }
        //   },
        //   {
        //     breakpoint: 600,
        //     settings: {
        //       slidesToShow: 2,
        //       slidesToScroll: 2
        //     }
        //   },
        //   {
        //     breakpoint: 480,
        //     settings: {
        //       slidesToShow: 1,
        //       slidesToScroll: 1
        //     }
        //   }
        //   // You can unslick at a given breakpoint now by adding:
        //   // settings: "unslick"
        //   // instead of a settings object
        // ]
      });
    }
  }
})(jQuery);
