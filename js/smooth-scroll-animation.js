$(document).ready(function () {
  function smoothScroll() {
    var ws = $(window).scroll();
    var ph = $(".main").height();
    $(".main").animate({ scroll: ws + ph }, "slow");
  }
});
