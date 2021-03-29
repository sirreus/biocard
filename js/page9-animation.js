var controller = new ScrollMagic.Controller();

if ($(window).width() < 800) {
  var rotate = TweenMax.to(".page9-ngramma", 1, {
    rotation: 720,
    ease: Linear.easeNone,
  });
  var scene = new ScrollMagic.Scene({
    triggerElement: "#page9-trigger1",
    duration: "200%",
    pushFollowers: false,
  })
    .setTween(rotate)
    .addIndicators({ name: "rotate ngramme" })
    .addTo(controller);
} else {
  var rotate = TweenMax.to(".page9-ngramma", 1, {
    rotation: 720,
    ease: Linear.easeNone,
  });
  var scene = new ScrollMagic.Scene({
    triggerElement: "#page9-trigger1",
    duration: "110%",
    pushFollowers: false,
  })
    .setTween(rotate)
    .addIndicators({ name: "rotate ngramme" })
    .addTo(controller);
}
