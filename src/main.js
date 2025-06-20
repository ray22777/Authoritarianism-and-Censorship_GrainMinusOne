

import $ from "../../src/jquery-setup"; // ✅ Sets up global $
import 'react-waypoint'
import WOW from 'wow.js'

window.$ = $;


// main.js

window.reInitUI = function () {
  (function ($) {
    "use strict";

    // Spinner
    setTimeout(function () {
      if ($('#spinner').length > 0) {
        $('#spinner').removeClass('show');
      }
    }, 100);

    // WOW.js
    if (typeof WOW === 'function') {
      new WOW().init();
    }

    // Bootstrap Dropdowns
    $('[data-bs-toggle="dropdown"]').dropdown();

    // Scroll behavior
    $(window).off("scroll.rebind").on("scroll.rebind", function () {
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
    $('.back-to-top').off().on('click', function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Waypoints
    $('.causes-progress').waypoint(function () {
      $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("aria-valuenow") + '%');
      });
    }, { offset: '80%' });

  })(window.jQuery);
};