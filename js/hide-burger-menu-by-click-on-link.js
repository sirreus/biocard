$(document).ready(function () {
  $(".link").click(function () {
    if ($("#menu-button").hasClass("__to-open-white")) {
      $("#menu-button").toggleClass("__to-open-white");

      if ($("#menu-button").hasClass("__to-open-white")) {
        $("#menu").slideUp("slow", function () {
          $("#menu").css("display", "none");
        });
        $(".logo").attr("src", "./assets/logo-white.svg");
      }
    } else {
      $("#menu-button").toggleClass("__to-open-black");

      if ($("#menu-button").hasClass("__to-open-black")) {
        $("#menu").slideUp("slow", function () {
          $("#menu").css("display", "none");
        });
        document.body.style.overflow = "auto";
        $(".logo").attr("src", "./assets/logo-black.svg");
      }
    }
  });
});
