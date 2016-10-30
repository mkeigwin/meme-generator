$(document).ready(function () {
  setTimeout(function () { $('.real').fadeIn(2000) }, 1200);

 $('#arrow').click(function () {
      $('.alert').show();
      $('.arrow2').show();
      $('.arrow').hide();
 });
});
