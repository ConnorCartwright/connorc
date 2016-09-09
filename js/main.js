'use strict';

var sectionClick = require('./bubbles');

$('.top-nav-icon').on('mouseover', function() {
   var $topSection = $('.top-section');
   var type = $(this).attr('class').split(' ')[1];

   type = type.substring(0, type.length - 5); // Remove the '-icon'

   if (!$topSection.hasClass(type)) {
      $topSection.addClass(type);
   }
}).on('mouseout', function() {
   var $topSection = $('.top-section');
   var type = $(this).attr('class').split(' ')[1];

   type = type.substring(0, type.length - 5); // Remove the '-icon'

   if ($topSection.hasClass(type)) {
      $topSection.removeClass(type);
   }
});

$('.top-nav-section').on('click', function() {
   var type = $(this).attr('class').split(' ')[1];

   console.log('type: ' + type);
   sectionClick(type);
});