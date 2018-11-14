(function ($) {
  Drupal.behaviors.simplenewsPlaceholder = {
    attach: function (context, settings) {
      $('#edit-mail').attr("placeholder", "E-mail")
    }
  }
})(jQuery);
