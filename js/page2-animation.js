var controller = new ScrollMagic.Controller();

if ($(window).width() > 760) {
  var photo1 = document.getElementById("page2-photo1");
  var scene = new ScrollMagic.Scene({ triggerElement: "#page2-trigger1" })
    .on("enter", function () {
      photo1.style.opacity = "1";
    })
    .on("leave", function () {
      photo1.style.opacity = "0";
    })
    .addIndicators()
    .addTo(controller);

  var photo2 = document.getElementById("page2-photo2");
  var scene = new ScrollMagic.Scene({ triggerElement: "#page2-trigger2" })
    .on("enter", function () {
      photo2.style.opacity = "1";
    })
    .on("leave", function () {
      photo2.style.opacity = "0";
    })
    .addIndicators()
    .addTo(controller);

  var photo3 = document.getElementById("page2-photo3");
  var scene = new ScrollMagic.Scene({ triggerElement: "#page2-trigger3" })
    .on("enter", function () {
      photo3.style.opacity = "1";
    })
    .on("leave", function () {
      photo3.style.opacity = "0";
    })
    .addIndicators()
    .addTo(controller);

  if ($(window).width() > 1024 && $(window).width() < 1440) {
    var page2TextUpDuration = "65%";
  } else if ($(window).width() >= 800 && $(window).width() <= 1024) {
    var page2TextUpDuration = "60%";
  } else {
    var page2TextUpDuration = "65%";
  }
  var scene = new ScrollMagic.Scene({
    triggerElement: "#page2-trigger0",
    duration: page2TextUpDuration,
  })
    .setPin("#page2-title-wrapper")
    .addIndicators({ name: "text up" })
    .addTo(controller);
}
