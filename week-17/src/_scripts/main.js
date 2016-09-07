// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');


// --- Smooth Scrolling ---

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// --- Owl Carousel ---

// fix for: Uncaught TypeError: Cannot read property 'fn' of undefined

var jQuery = require('jquery');

(function () {
  var jq = jQuery.noConflict(true);
  if (window.$ == undefined) {
    window.$ = jq;
  }
  if (window.jQuery == undefined) {
    window.jQuery = jq;
  }
})();

//call owl

$(document).ready(function(){
  require('owl.carousel');
  $(".owl-carousel").owlCarousel({
    items: 1,
    rewindSpeed: 100,
    autoplay: true,
    autoplayTimeout: 2000,
    loop: true,
    navigation: false,
    pagination: false
  });
});
