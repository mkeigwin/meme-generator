$(document).ready(function() {
  $(".guest").click(function(){
        $("h4").hide();
        $(".guest").hide();
        $(".left").hide();
        $(".right").hide();
        $(".signup").fadeIn();
    });

  $("#close").click(function(){
        location.reload();
    });

});
