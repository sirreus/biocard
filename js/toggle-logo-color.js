$(window).scroll(function () {
  var top_first_grey_page = $("#first-grey-page").offset().top;
  var bottom_last_grey_page =
    $("#last-grey-page").offset().top + $("#last-grey-page").outerHeight();

  var top_of_screen = $(window).scrollTop();
  // var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

  if (
    top_of_screen > top_first_grey_page &&
    top_of_screen < bottom_last_grey_page
  ) {
    // the element is visible - go to black
    $(".logo").attr("src", "./assets/logo-black.svg");
    $("#menu-button").removeClass("__to-open-white");
    $("#menu-button").addClass("__to-open-black");
  } else {
    // the element is not visible - go to white
    $(".logo").attr("src", "./assets/logo-white.svg");
    $("#menu-button").removeClass("__to-open-black");
    $("#menu-button").addClass("__to-open-white");
  }
});
