(function ($) {
  Drupal.behaviors.contactsPlaceholder = {
    attach: function (context, settings) {
      $('#edit-name').attr("placeholder", "Nome")
      $('#edit-mail--2').attr("placeholder", "E-mail")
      $('#edit-subject').attr("placeholder", "Oggetto")
    }
  }
})(jQuery);
