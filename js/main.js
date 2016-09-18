'use strict';

var sectionChange = require('./section-change');
var preloadImages = require('./preload');

preloadImages([
'../img/background/top/1.jpg',
 '../img/background/top/2.jpg',
   '../img/background/top/3.jpg',
 '../img/background/top/4.jpg',
 '../img/background/top/5.jpg'
]);

$('.top-nav-icon').on('mouseover', function() {
   if (!$('.top-section').hasClass('minimised')) {
      var $topSection = $('.top-section');
      var type = $(this).attr('class').split(' ')[1];

      type = type.substring(0, type.length - 5); // Remove the '-icon'

      if (!$topSection.hasClass(type)) {
         $topSection.addClass(type);
      }
   }
}).on('mouseout', function() {
   if (!$('.top-section').hasClass('minimised')) {
      var $topSection = $('.top-section');
      var type = $(this).attr('class').split(' ')[1];

      type = type.substring(0, type.length - 5); // Remove the '-icon'

      if ($topSection.hasClass(type)) {
         $topSection.removeClass(type);
      }
   }
});

$('.top-nav-section').on('click', function() {
   var type = $(this).attr('class').split(' ')[1];

   console.log('type: ' + type);
   sectionClick(type);
});