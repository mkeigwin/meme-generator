$(document).ready(function () {
// javascript begins once the page has loaded
  $('.guest').click(function () {
    $('h4').hide();
    $('.guest').hide();
    $('.left').hide();
    $('.right').hide();
    $('.signup').fadeIn();
  });
// nav section hides content and shows sign up page on click

  $('#close').click(function () {
    $('h4').fadeIn();
    $('.guest').fadeIn();
    $('.left').fadeIn();
    $('.right').fadeIn();
    $('.signup').hide();
  });
// sign up page hides and main login page appears on click

  $('.dropdown').click(function () {
    $('h4').hide();
    $('.guest').hide();
    $('.left').hide();
    $('.right').hide();
    $('.dropdown').hide();
    $('.signup').hide();
    $('.guestLogin').fadeIn();
  });
// nav section hides content and shows guest page on click

  $('.dropout').click(function () {
    $('h4').fadeIn();
    $('.guest').fadeIn();
    $('.left').fadeIn();
    $('.right').fadeIn();
    $('.dropdown').fadeIn();
    $('.guestLogin').hide();
// guest page hides and main login page appears on click
  });
});
