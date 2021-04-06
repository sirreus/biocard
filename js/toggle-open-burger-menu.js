$(document).ready(function () {
  $("#menu-button").click(function () {
    if ($(this).hasClass("__to-open-white")) {
      $(this).toggleClass("__to-open-white");

      if ($(this).hasClass("__to-open-white")) {
        $("#menu").slideUp("slow", function () {
          $("#menu").css("display", "none");
        });
        $(".logo").attr("src", "./assets/logo-white.svg");
      } else {
        $("#menu").slideDown("slow", function () {});
        $(".logo").attr("src", "./assets/logo-black.svg");
      }
    } else {
      $(this).toggleClass("__to-open-black");

      if ($(this).hasClass("__to-open-black")) {
        $("#menu").slideUp("slow", function () {
          $("#menu").css("display", "none");
        });
        $(".logo").attr("src", "./assets/logo-black.svg");
      } else {
        $("#menu").slideDown("slow", function () {});
        $(".logo").attr("src", "./assets/logo-black.svg");
      }
    }
  });
});
