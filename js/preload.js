
function preload(arrayOfImages) {
   'use strict';

   $(arrayOfImages).each(function() {
      $('<img/>')[0].src = this;
   });
}

module.exports = preload;
