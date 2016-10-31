$(document).ready(function () {
// javascript begins once the page has loaded
  setTimeout(function () { $('.real').fadeIn(2000); }, 1200);
// the real div is positioned absolute and after 1.2 seconds fades in to full screen
// fade is timed so that other animation has to to run before fadeIn

  $('#arrow').click(function () {
    $('.alert').show();
  });
// when click on arrow a pop up bar appears informing user about functionality

  $('.dropdown').click(function () {
    $('.update').show();
    $('.dropout').show();
    $('.dropdown').hide();
  });

  $('.dropout').click(function () {
    $('.update').hide();
    $('.dropout').hide();
    $('.dropdown').show();
  });
});
