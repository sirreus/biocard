if ($(window).width() >= 800) {
  var page7PinDuration = "100%";
} else if ($(window).width() < 800) {
  var page7PinDuration = "100%";
}

var content = document.getElementById("page7-content-wrapper");
var scene1 = new ScrollMagic.Scene({
  triggerElement: "#page7-trigger0",
  duration: page7PinDuration,
})
  .setPin(content)
  .addIndicators({ name: "pin page" })
  .addTo(controller);

if ($(window).width() >= 800) {
  var page7ScrollDuration = "23%";
} else {
  var page7ScrollDuration = "42%";
}

var tweenLeft = TweenMax.to(
  ".page7-top-svg",
  8.5,
  { className: "+=fishRightPage7", ease: Power2.easeOut },
  0
);
var scene2 = new ScrollMagic.Scene({
  triggerElement: "#page7-trigger1",
  duration: page7ScrollDuration,
})
  .setTween(tweenLeft)
  .addIndicators({ name: "go to right" })
  .addTo(controller);

var tweenRight = TweenMax.to(
  ".page7-bottom-svg",
  8.5,
  { className: "+=fishLeftPage7", ease: Power2.easeOut },
  0
);
var scene3 = new ScrollMagic.Scene({
  triggerElement: "#page7-trigger1",
  duration: page7ScrollDuration,
})
  .setTween(tweenRight)
  .addIndicators({ name: "go to left" })
  .addTo(controller);

if ($(window).width() >= 800) {
  var animatedBlock = document.getElementById("page7-animated-block");
  var zoomed = TweenMax.to(animatedBlock, 1, { className: "+=zoomed" });
  var scene4 = new ScrollMagic.Scene({
    triggerElement: "#page7-trigger2",
    duration: "70%",
  })
    .setTween(zoomed)
    .addIndicators({ name: "zoom" })
    .addTo(controller);
}

// if($(window).width() < 800) {
//   var animatedBlock = document.getElementById("page7-animated-block")
//   var faded = TweenMax.to(animatedBlock, 1, {className: "+=__fadeOut"});
//   var scene6 = new ScrollMagic.Scene({triggerElement: '#page7-trigger2', duration: '70%'})
//     .setTween(faded)
//     .addIndicators({name: "fade"})
//     .addTo(controller)
// }
