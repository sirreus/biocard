var controller = new ScrollMagic.Controller();

if ($(window).width() >= 1600) {
  var page3Duration = "180%";
  var page3Offset = "0%";
  var page3ScrollDuration = "150%";
  var page3ScrollOffset = page3Offset;
} else if ($(window).width() >= 1420 && $(window).width() < 1600) {
  var page3Duration = "150%";
  var page3Offset = "50%";
  var page3ScrollDuration = "120%";
  var page3ScrollOffset = page3Offset;
} else if ($(window).width() > 1024 && $(window).width() < 1420) {
  var page3Duration = "150%";
  var page3Offset = "0%";
  var page3ScrollDuration = "120%";
  var page3ScrollOffset = page3Offset;
} else if ($(window).width() >= 800 && $(window).width() <= 1024) {
  var page3Duration = "130%";
  var page3Offset = "0%";
  var page3ScrollDuration = "100%";
  var page3ScrollOffset = page3Offset;
} else if ($(window).width() < 800) {
  var page3Duration = "110%";
  var page3Offset = "0%";
  var page3ScrollDuration = "70%";
  var page3ScrollOffset = page3Offset;
}

var content = document.getElementById("page3-content-wrapper");
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page3-trigger1",
  duration: page3Duration,
  offset: page3Offset,
})
  .setPin(content)
  .addIndicators({ name: "pin content" })
  .addTo(controller);

var tweenLeft = TweenMax.to(
  "#page3-title-wrapper1",
  8.5,
  { className: "+=fishRightFull", ease: Power2.easeOut },
  0
);
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#page3-trigger2",
  duration: page3ScrollDuration,
  offset: page3ScrollOffset,
})
  .setTween(tweenLeft)
  .addIndicators({ name: "go to right" })
  .addTo(controller);

var tweenRight = TweenMax.to(
  "#page3-title-wrapper2",
  8.5,
  { className: "+=fishLeftFull", ease: Power2.easeOut },
  0
);
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#page3-trigger2",
  duration: page3ScrollDuration,
  offset: page3ScrollOffset,
})
  .setTween(tweenRight)
  .addIndicators({ name: "go to left" })
  .addTo(controller);
