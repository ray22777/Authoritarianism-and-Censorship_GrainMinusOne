window.$ = window.jQuery;

window.addEventListener('load', function () {
  (function ($) {
    "use strict";

    // Spinner
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 100);

    // WOW init
    if (typeof WOW === 'function') {
      new WOW().init();
    }

    // Fixed Navbar
    $(window).on('scroll', function () {
      if ($(window).width() < 992) {
        if ($(this).scrollTop() > 45) {
          $('.fixed-top').addClass('bg-dark shadow');
        } else {
          $('.fixed-top').removeClass('bg-dark shadow');
        }
      } else {
        if ($(this).scrollTop() > 45) {
          $('.fixed-top').addClass('bg-dark shadow').css('top', -45);
        } else {
          $('.fixed-top').removeClass('bg-dark shadow').css('top', 0);
        }
      }
    });

    // Back to top
    $(window).on('scroll', function () {
      if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Waypoints
    $('.causes-progress').waypoint(function () {
      $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, { offset: '80%' });



  })(jQuery);
});
