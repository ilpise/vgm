/**
 * @file
 * rv_menuliks.js
 *
 * Provides links text speech.
 */

var Drupal = Drupal || {};

(function($, Drupal){
  "use strict";

  Drupal.behaviors.RVMenuLinks = {
    attach: function(context) {

      $('#rv_toggle').click(function() {
        console.log('enble responsiveVoice');
      });

      $('li.leaf > a').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags
        responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
        responsiveVoice.speak($(this).text(), "Italian Female", { rate: 1 }); // Speak the text contents of all nodes within the current 'a' tag
      });

      $('h2.field-content.eventelem > a').mouseenter(function() { // Attach this function to all mouseenter events for 'a' tags
        responsiveVoice.cancel(); // Cancel anything else that may currently be speaking
        responsiveVoice.speak($(this).text(), "Italian Female", { rate: 1 }); // Speak the text contents of all nodes within the current 'a' tag
      });


    }
  };

})(jQuery, Drupal);
