
function setSectionClasses(sectionName) {
   'use strict';

   $('.top-section')
     .attr('class', 'top-section minimised ' + sectionName)
     .find('.top-overlay')
     .attr('class', 'top-overlay ' + sectionName);
   $('.bottom-section').attr('class', 'bottom-section open ' + sectionName);
}

function closeBottomSection() {
   'use strict';

   $('.bottom-section').attr('class', 'bottom-section');
   $('.bottom-section .bottom-area.active').removeClass('active');
}

function textChange($section) {
   'use strict';

   var sectionName = $section.attr('class').split(' ')[1];

   if ($section.hasClass('active')) {
      $section.removeClass('active');
      closeBottomSection();
      $('.top-section').attr('class', 'top-section');
   } else {
      setSectionClasses(sectionName);
      $('.section-text-link').removeClass('active');
      $('.section-text-link.' + sectionName).addClass('active');
      $('.bottom-section .bottom-area.active').removeClass('active');
      $('.bottom-section .bottom-area.' + sectionName).addClass('active');
   }
}

function iconChange($section) {
   'use strict';

   var sectionName = $section.attr('class').split(' ')[1];

   setSectionClasses(sectionName);
   $('.section-text-link.' + sectionName).addClass('active');
   $('.bottom-section .bottom-area.' + sectionName).addClass('active');
}

module.exports = {
   textChange: textChange,
   iconChange: iconChange
};