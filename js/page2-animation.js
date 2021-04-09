var controller = new ScrollMagic.Controller();

if ($(window).width() > 760) {
  var photos = ["#page2-photo1", "#page2-photo2", "#page2-photo3"];
  photos.forEach((photo) => {
    var magic = TweenMax.to(photo, 0.1, { className: "+=__visible" });
    var number = photo.split("#page2-photo")[1];
    new ScrollMagic.Scene({
      triggerElement: `#page2-trigger${number}`,
    })
      .setTween(magic)
      .addIndicators({ name: `show photo${number}` })
      .addTo(controller);
  });

  var windowHeight = $(window).height();
  var onePercentHeight = windowHeight / 100;

  if ($(window).width() >= 1440 && $(window).width() <= 1680) {
    var page2TextUpDuration = onePercentHeight * 80;
  } else if ($(window).width() >= 1024 && $(window).width() < 1440) {
    var page2TextUpDuration = onePercentHeight * 75;
  } else if ($(window).width() >= 800 && $(window).width() < 1024) {
    var page2TextUpDuration = onePercentHeight * 60;
  } else {
    var page2TextUpDuration = onePercentHeight * 85;
  }
  var scene = new ScrollMagic.Scene({
    triggerElement: "#page2-trigger0",
    duration: `${page2TextUpDuration}`,
  })
    .setPin("#page2-title-wrapper")
    .addIndicators({ name: "text up" })
    .addTo(controller);
}
