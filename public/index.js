$(document).ready(function() {
  $(".guest").click(function(){
        $("h4").hide();
        $(".guest").hide();
        $(".left").hide();
        $(".right").hide();
        $(".signup").fadeIn();
    });

  $("#close").click(function(){
        $("h4").fadeIn();
        $(".guest").fadeIn();
        $(".left").fadeIn();
        $(".right").fadeIn();
        $(".signup").hide();
    });

$(".dropdown").click(function(){
        $("h4").hide();
        $(".guest").hide();
        $(".left").hide();
        $(".right").hide();
        $(".dropdown").hide();
        $(".signup").hide();
        $(".guestLogin").fadeIn();
    });

$(".dropout").click(function(){
      $("h4").fadeIn();
        $(".guest").fadeIn();
        $(".left").fadeIn();
        $(".right").fadeIn();
        $(".dropdown").fadeIn();
        $(".guestLogin").hide();
    });

});
