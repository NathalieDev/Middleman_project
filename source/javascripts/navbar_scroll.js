$(function() {
  // navbar transition jQuery script
  var lastScrollTop = 0;
  $(window).scroll(function(){
    var st = $(this).scrollTop();
    console.log(st)
    if (st > lastScrollTop){
      if ($(this).scrollTop() > 50) {
        $(".navbar-wagon").css({
          "margin-top": "-70px"
        });
      }
      else {
        $(".navbar-wagon").css({
          "margin-top": "0px"
        });
      }
    }
    else {
      $(".navbar-wagon").css({
        "margin-top": "0px"
      });
    }
    lastScrollTop = st;

  });
});
