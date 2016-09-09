

function sectionClick(section) {
   'use strict';

   section = 1;

   var $bottom = $('.bottom-section');
   var topHeight = $('.top-section').height();

   $bottom.show(0, function() {
      console.log('woooo');
      console.log(topHeight);
      $('body').animate({
         scrollTop: topHeight
      }, 800);
   });
}

module.exports = sectionClick;